import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "@/components/common/ParticlesBackground";

import { useState } from "react";
import { useEffect } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
    Program,
    AnchorProvider,
    web3,
    utils,
    BN,
} from "@project-serum/anchor";
import idl from "../../public/idl.json";
import { AuthContext } from "@/components/AuthProvider";
import { useContext } from "react";
import { publicKey } from "@project-serum/anchor/dist/cjs/utils";

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
    preflightCommitment: "finalized",
};
const { SystemProgram } = web3;

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [walletAddress, setWalletAddress] = useState(null);
    const [events, setEvents] = useState(null);
    const [tickets, setTickets] = useState([]);
    const { publicKey } = useContext(AuthContext);

    useEffect(() => {
        getTickets();
    }, []);

    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new AnchorProvider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        return provider;
    };

    const getTickets = async () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = getProvider();
        const program = new Program(idl, programID, provider);
        Promise.all(
            (await connection.getProgramAccounts(programID)).map(
                async (ticket) => ({
                    ...(await program.account.ticket.fetch(ticket.pubkey)),
                    pubkey: ticket.pubkey,
                })
            )
        ).then((tickets) => setTickets(tickets));
    };
    const setpay = async (publicKey, price) => {
        try {
            const provider = getProvider();
            const program = new Program(idl, programID, provider);

            await program.rpc.buy(new BN(price * web3.LAMPORTS_PER_SOL), {
                accounts: {
                    ticket: publicKey,
                    user: provider.wallet.publicKey,
                    systemProgram: SystemProgram.programId,
                },
            });
            console.log("Pay to:", publicKey.toString());
            getTickets();
        } catch (error) {
            console.error("Error pay", error);
        }
    };

    const withdraw = async (publicKey) => {
        try {
            const provider = getProvider();
            const program = new Program(idl, programID, provider);
            const connection = new Connection(
                network,
                opts.preflightCommitment
            );
            const balance =
                (await connection.getBalance(publicKey)) /
                web3.LAMPORTS_PER_SOL;

            console.log("Mi balance", parseInt(balance * 10, 10) / 10);

            await program.rpc.withdraw(
                new BN(
                    (parseInt(balance * 10, 10) / 10) * web3.LAMPORTS_PER_SOL
                ),
                {
                    accounts: {
                        ticket: publicKey,
                        user: provider.wallet.publicKey,
                    },
                }
            );
            console.log("Success whithdrawing from:", publicKey.toString());
        } catch (error) {
            console.error("Error whithdrawing", error);
        }
    };

    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                className="relative"
                title="Eventos"
                description="Ultimos Eventos"
            >
                <div className="flex items-center justify-center py-6">
                    <span className="bg-gradient-to-r  from-emerald-500 via-indigo-500  to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-6xl xl:inline">
                        Our Ez-Events
                    </span>
                </div>
                <div className="flex items-center justify-center">
                    {publicKey ? (
                        <>
                            {/* Aqui va el getTickets del Ramon, que tiene que ejecutarse en usestate                                 */}
                            <Link href="/createvent">
                                <button className="  rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>
                                        <span>Crear Evento</span>
                                    </div>
                                </button>
                            </Link>
                        </>
                    ) : (
                        <div>
                            <h1 className="font-bold text-white">
                                Please connect your wallet to create Ez-Events
                            </h1>
                        </div>
                    )}
                </div>

                <div className="mx-auto max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        {/* Evento 1 */}

                        <div className="mx-4 rounded-md bg-white shadow">
                            <Link href="#" passHref>
                                <div className="thumbitem my-4 mx-4 mb-4 cursor-pointer  shadow-md">
                                    <div className="photocontainer">
                                        <Image
                                            src="/images/evento1.png"
                                            alt=""
                                            width={240}
                                            height={240}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="textcontainer px-2 pb-4 text-black">
                                        <h2 className="title my-2 text-lg font-bold">
                                            etherfuse Hackathon{" "}
                                        </h2>
                                        <p className="mb-4 text-sm font-bold ">
                                            24/02/2023
                                        </p>
                                        <button className="flex w-full items-center justify-center rounded-md  bg-gray-500 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                            SOLD OUT
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 2 */}

                        <div className="mx-4 rounded-md  bg-white shadow">
                            <Link href="#" passHref>
                                <div className="thumbitem my-4 mx-4 mb-4 cursor-pointer  shadow-md">
                                    <div className="photocontainer">
                                        <Image
                                            src="/images/evento2.png"
                                            alt=""
                                            width={240}
                                            height={240}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="textcontainer px-2 pb-4 text-black">
                                        <h2 className="title my-2 text-lg font-bold">
                                            Grizzlython{" "}
                                        </h2>
                                        <p className="t mb-4 text-sm font-bold">
                                            02/02/2023
                                        </p>
                                        <button className="flex w-full items-center justify-center rounded-md  bg-gray-500 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                            SOLD OUT
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 3 */}
                        <div className="mx-4 rounded-md  bg-white shadow">
                            <Link href="#" passHref>
                                <div className="thumbitem my-4 mx-4 mb-4 cursor-pointer  shadow-md">
                                    <div className="photocontainer">
                                        <Image
                                            src="/images/evento3.png"
                                            alt=""
                                            width={240}
                                            height={240}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="textcontainer px-2 pb-4 text-black">
                                        <h2 className="title my-2 text-lg font-bold">
                                            Superteams Bounty S1{" "}
                                        </h2>
                                        <p className=" mb-4 text-sm font-bold">
                                            24/02/2023
                                        </p>
                                        <button className="flex w-full items-center justify-center rounded-md  bg-gray-500 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                            SOLD OUT
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 4 */}

                        <div className="mx-4 rounded-md bg-white shadow">
                            <Link href="/eventos/" passHref>
                                <div className="thumbitem my-4 mx-4 mb-4 cursor-pointer  shadow-md">
                                    <div className="photocontainer">
                                        <Image
                                            src="/images/evento4.png"
                                            alt=""
                                            width={240}
                                            height={240}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="textcontainer px-2 pb-4 text-black">
                                        <h2 className="title my-2 text-lg font-bold">
                                            etherfuse Hackathon Chihuahua{" "}
                                        </h2>
                                        <p className=" mb-4 text-sm font-bold">
                                            24/02/2023
                                        </p>
                                        <button className="flex w-full items-center justify-center rounded-md  bg-gray-500 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                            SOLD OUT
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Aqui van los Cards de los eventos creados por los usuarios*/}
                <div className="content flex  items-center justify-center ">
                    <span className="text-6xl font-bold text-white">
                        Events Created by EzUsers
                    </span>
                </div>
                {/* Event Cards */}
                <div className="grid grid-cols-1 gap-4 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {" "}
                    {tickets.map((ticket) => (
                        <div className="content  my-16 flex items-center justify-center">
                            <div className="card h-full w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src={ticket.img}
                                        alt="Event"
                                        width={512}
                                        height={512}
                                    />
                                </figure>
                                <div className="card-body h-full">
                                    <span className="card-title text-2xl font-bold">
                                        {ticket.name}
                                    </span>
                                    <p className="flex max-h-6 w-28 rounded-md bg-purple-700 px-2 text-sm text-white">
                                        Active Event
                                    </p>
                                    <p className="text-xs text-sky-500">
                                        Event ID: {ticket.pubkey.toString()}
                                    </p>{" "}
                                    <p className="text-sm font-bold">
                                        {ticket.description}
                                    </p>
                                    <div>
                                        <p className="mt-2 text-xl text-black">
                                            <span className="font-bold">
                                                Starting Price:{" "}
                                                <span className="text-emerald-500">
                                                    {ticket.price /
                                                        web3.LAMPORTS_PER_SOL}{" "}
                                                    SOL
                                                </span>
                                            </span>{" "}
                                        </p>
                                        <br />
                                        <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                            <button
                                                onClick={() =>
                                                    setpay(
                                                        ticket.pubkey,
                                                        ticket.price /
                                                            web3.LAMPORTS_PER_SOL
                                                    )
                                                }
                                            >
                                                Buy EzTicket
                                            </button>
                                        </div>
                                        <br />
                                        <div className="rounded-md shadow">
                                            <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                                <button
                                                    onClick={() =>
                                                        withdraw(ticket.pubkey)
                                                    }
                                                >
                                                    Withdraw Money {<br />}{" "}
                                                    (Owner Only)
                                                </button>
                                                <br />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-sm text-black">
                                                <span className="font-bold">
                                                    <p>
                                                        Raised money:{" "}
                                                        {(
                                                            ticket.amountD /
                                                            web3.LAMPORTS_PER_SOL
                                                        ).toString()}{" "}
                                                        SOL
                                                    </p>
                                                </span>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fin de los Cards de los eventos creados por los usuarios*/}
            </MainLayout>
        </div>
    );
}
