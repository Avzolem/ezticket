import React, { useEffect, useState } from "react";
import idl from "../../public/idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import MainLayout from "@/components/layouts/MainLayout";
import {
    Program,
    AnchorProvider,
    web3,
    utils,
    BN,
} from "@project-serum/anchor";
import { AuthContext } from "@/components/AuthProvider";
import { useContext } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [tickets, setTickets] = useState([]);

    const programID = new PublicKey(idl.metadata.address);

    const network = clusterApiUrl("devnet");
    const opts = {
        preflightCommitment: "processed",
    };
    const { publicKey } = useContext(AuthContext);

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

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                className="relative"
                title="Eventos"
                description="Ultimos Eventos"
            >
                <div className="mx-auto max-w-7xl px-6 pt-6">
                    <span className="text-center text-6xl font-bold text-white">
                        My Tickets
                    </span>
                </div>
                <div className="mx-auto max-w-7xl  pb-40 text-center ">
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        {/* Evento 1 */}
                        <div className="flex justify-center">
                            <div
                                className="px-4"
                                style={{ maxWidth: "1600px" }}
                            >
                                {publicKey ? (
                                    tickets ? (
                                        <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
                                            {tickets.map((ticket, i) => (
                                                <div
                                                    key={i}
                                                    className="overflow-hidden rounded-xl border shadow"
                                                >
                                                    <img
                                                        style={{
                                                            height: "20rem",
                                                        }}
                                                        src={ticket.img}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="rounded-xl bg-gray-600/75 p-32">
                                            <span className="text-center text-6xl  text-white">
                                                There are no tickets to display
                                                🎫
                                            </span>
                                        </div>
                                    )
                                ) : (
                                    <div className="rounded-xl bg-gray-600/75 p-32">
                                        <span className="text-center text-6xl  text-white">
                                            Please connect your wallet 👻
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}
