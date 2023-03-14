import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "@/components/common/ParticlesBackground";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [walletAddress, setWalletAddress] = useState(null);

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected();
        };
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
    }, []);

    const checkIfWalletIsConnected = async () => {
        try {
            const { solana } = window;
            if (solana) {
                if (solana.isPhantom) {
                    console.log("Phantom wallet found!");
                    const response = await solana.connect({
                        onlyIfTrusted: true,
                    });
                    console.log(
                        "Connected with public key:",
                        response.publicKey.toString()
                    );
                    setWalletAddress(response.publicKey.toString());
                }
            } else {
                alert("Solana objet not found!");
            }
        } catch (error) {
            console.error(error);
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
                <div className="flex-grid flex items-center justify-between">
                    <span className="px-6 text-center text-6xl font-bold text-white">
                        Events
                    </span>
                    {!walletAddress ? (
                        <div className="px-6">
                            <button
                                className="  rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                                onClick={() => {
                                    //Aqui va el create del Ramon
                                }}
                            >
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
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-white">Hola</h1>
                        </div>
                    )}
                </div>

                <div className="mx-auto max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        {/* Evento 1 */}

                        <div className="mx-4 rounded-md bg-[#7e22c3] shadow">
                            <Link href="/eventos/evento1" passHref>
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
                                    <div className="textcontainer px-2 pb-4 text-white">
                                        <h2 className="title my-2 text-lg font-bold">
                                            etherfuse Hackathon{" "}
                                        </h2>
                                        <p className="text-happy-[#af2bd0] mb-4 text-sm font-bold capitalize">
                                            24/02/2023
                                        </p>
                                        <button className="mx-2 cursor-pointer rounded-md bg-[#af2bd0] px-6 py-2 ">
                                            Buy Ticket
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 2 */}

                        <div className="mx-4 rounded-md  bg-[#7e22c3] shadow">
                            <Link href="/eventos/evento2" passHref>
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
                                    <div className="textcontainer px-2 pb-4 text-white">
                                        <h2 className="title my-2 text-lg font-bold">
                                            Grizzlython{" "}
                                        </h2>
                                        <p className="text-happy-[#af2bd0] mb-4 text-sm font-bold capitalize">
                                            02/02/2023
                                        </p>
                                        <button className="cursor-pointer rounded-md bg-[#af2bd0] px-2 py-2 ">
                                            Buy Ticket
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 3 */}
                        <div className="mx-4 rounded-md  bg-[#7e22c3] shadow">
                            <Link href="/eventos/evento3" passHref>
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
                                    <div className="textcontainer px-2 pb-4 text-white">
                                        <h2 className="title my-2 text-lg font-bold">
                                            Superteams Bounty S1{" "}
                                        </h2>
                                        <p className="text-happy-[#af2bd0] mb-4 text-sm font-bold capitalize">
                                            24/02/2023
                                        </p>
                                        <button className="cursor-pointer rounded-md bg-[#af2bd0] px-2 py-2 ">
                                            Buy Ticket
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 4 */}

                        <div className="mx-4 rounded-md  bg-[#7e22c3] shadow">
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
                                    <div className="textcontainer px-2 pb-4 text-white">
                                        <h2 className="title my-2 text-lg font-bold">
                                            etherfuse Hackathon Chihuahua{" "}
                                        </h2>
                                        <p className="text-happy-[#af2bd0] mb-4 text-sm font-bold capitalize">
                                            24/02/2023
                                        </p>
                                        <button className="cursor-pointer rounded-md bg-indigo-400 px-2 py-2 ">
                                            Sold Out
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}
