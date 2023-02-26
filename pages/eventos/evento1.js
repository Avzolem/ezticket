import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { IDL } from "../../public/solana_nfticket";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { useRouter } from "next/router";

export default function AddTicket() {
    const router = useRouter();
    const [inputTicketValue] = useState("https://i.imgur.com/YB0KTv1.jpg");
    const programID = new PublicKey(IDL.metadata.address);

    const { SystemProgram, Keypair } = web3;
    const network = clusterApiUrl("devnet");

    const opts = {
        preflightCommitment: "processed",
    };

    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new Provider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        return provider;
    };

    const stringToBytes = (input) => {
        return new TextEncoder().encode(input);
    };

    const addTicket = async () => {
        if (inputTicketValue.length > 0) {
            console.log("Ticket link:", inputTicketValue);

            var provider = getProvider();
            var program = new Program(IDL, programID, provider);
            const [pda] = await PublicKey.findProgramAddressSync(
                [
                    stringToBytes("gif_account"),
                    provider.wallet.publicKey.toBytes(),
                    stringToBytes(inputTicketValue),
                ],
                program.programId
            );

            await program.rpc.initialize(inputTicketValue, {
                accounts: {
                    ticketGif: pda,
                    user: provider.wallet.publicKey,
                    systemProgram: SystemProgram.programId,
                },
            });

            // setInputTicketValue("https://i.imgur.com/YB0KTv1.jpg");
            router.push("/");
        } else {
            console.log("Empty input. Try again.");
        }
    };

    return (
        <div>
            <MainLayout
                title="Etherfuse Hackathon"
                description="Compra boletos para Hackathon Etherfuse"
            >
                <div className="content my-16 flex w-full items-center justify-center">
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/eventos/evento1" passHref>
                                <div className="thumbitem  mx-4 mb-4 cursor-pointer  shadow-md">
                                    <div className="photocontainer">
                                        <Image
                                            src="/images/evento1.png"
                                            alt=""
                                            width={512}
                                            height={512}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="textcontainer text-justify-center px-6 pb-4 ">
                                        <p className="mt-4 flex h-6 w-36 rounded-md bg-[#af2bd0] px-2 text-sm text-white">
                                            Evento Activo
                                        </p>
                                        <h2 className="title my-2 text-lg font-bold">
                                            etherfuse Hackathon{" "}
                                        </h2>
                                        <p className="text-happy-pink-600 mb-4 text-sm font-bold capitalize">
                                            24/02/2023
                                        </p>

                                        <div className="rounded-md shadow">
                                            <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                                <button onClick={addTicket}>
                                                    Comprar EzTicket
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                <span className="font-bold">
                                                    Precio de salida:
                                                </span>{" "}
                                                0.00141 SOL
                                            </p>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                <span className="font-bold">
                                                    Precio actual:
                                                </span>{" "}
                                                0.59 MXN
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
            {/* //
            ...................................................................... */}
        </div>
    );
}
