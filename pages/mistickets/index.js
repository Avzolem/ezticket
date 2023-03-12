import React, { useEffect, useState } from "react";
import { IDL } from "../../public/solana_movies";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import MainLayout from "@/components/layouts/MainLayout";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [movies, setMovies] = useState([]);

    const programID = new PublicKey(IDL.metadata.address);

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

    const getMovieList = async () => {
        try {
            const provider = getProvider();
            const program = new Program(IDL, programID, provider);
            const getAllMovies = await program.account.movieGif.all([
                {
                    memcmp: {
                        bytes: provider.wallet.publicKey.toBase58(),
                        offset: 8,
                    },
                },
            ]);
            setMovies(getAllMovies);
        } catch (error) {
            console.log("Error in getGifList: ", error);
            setMovies(null);
        }
    };

    useEffect(() => {
        getMovieList();
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
                                {movies && (
                                    <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
                                        {movies.map((movie, i) => (
                                            <div
                                                key={i}
                                                className="overflow-hidden rounded-xl border shadow"
                                            >
                                                <img
                                                    style={{ height: "20rem" }}
                                                    src={movie.account.gifUrl}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {!movies && (
                                    <div className="bg-indigo-500 p-32">
                                        <span className="text-center text-6xl  text-white">
                                            There are no tickets to display
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
