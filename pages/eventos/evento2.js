import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import React, { useState } from "react";
import { IDL } from "../../public/solana_movies";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { useRouter } from "next/router";

export default function AddMovie() {
    const router = useRouter();
    const [inputMovieValue] = useState("https://i.imgur.com/7E3clXB.png");
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

    const addMovie = async () => {
        if (inputMovieValue.length > 0) {
            console.log("Movie link:", inputMovieValue);

            var provider = getProvider();
            var program = new Program(IDL, programID, provider);
            const [pda] = await PublicKey.findProgramAddressSync(
                [
                    stringToBytes("gif_account"),
                    provider.wallet.publicKey.toBytes(),
                    stringToBytes(inputMovieValue),
                ],
                program.programId
            );

            await program.rpc.initialize(inputMovieValue, {
                accounts: {
                    movieGif: pda,
                    user: provider.wallet.publicKey,
                    systemProgram: SystemProgram.programId,
                },
            });

            // setInputMovieValue("https://i.imgur.com/YB0KTv1.jpg");
            router.push("/eventos/success");
        } else {
            console.log("Empty input. Try again.");
        }
    };

    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                className="relative"
                title="Etherfuse Hackathon"
                description="Compra boletos para Hackathon Etherfuse"
            >
                <div className="content my-16 flex w-full items-center justify-center">
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link href="/eventos/evento2" passHref>
                                <div className="thumbitem  mx-4 mb-4 cursor-pointer  shadow-md">
                                    <div className="photocontainer">
                                        <Image
                                            src="/images/evento2.png"
                                            alt=""
                                            width={512}
                                            height={512}
                                            className="object-cover"
                                        />
                                    </div>
                                    <br />

                                    <div className="textcontainer text-justify-center bg-white px-6 py-4 ">
                                        <p className="mt-4 flex h-6 w-28 rounded-md bg-purple-700 px-2 text-sm text-white">
                                            Active Event
                                        </p>
                                        <h2 className="title my-2 text-lg font-bold text-black">
                                            Grizzlython{" "}
                                        </h2>
                                        <p className="text-happy-pink-600 mb-4 text-sm font-bold capitalize text-gray-700">
                                            02/02/2023
                                        </p>

                                        <div className="rounded-md shadow">
                                            <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg">
                                                <button onClick={addMovie}>
                                                    Buy EzTicket
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                <span className="font-bold">
                                                    Starting Price:
                                                </span>{" "}
                                                0.00141 SOL
                                            </p>
                                        </div>
                                        <div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                <span className="font-bold">
                                                    Actual Price:
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
