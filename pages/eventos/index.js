import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "@/components/common/ParticlesBackground";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout
                className="relative"
                title="Eventos"
                description="Ultimos Eventos"
            >
                <div className="mx-auto max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        {/* Evento 1 */}

                        <div className="mx-4 rounded-md bg-purple-500 shadow">
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
                                            Comprar Boleto
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 2 */}

                        <div className="mx-4 rounded-md  bg-purple-500 shadow">
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
                                            Comprar Boleto
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 3 */}
                        <div className="mx-4 rounded-md  bg-purple-500 shadow">
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
                                            Comprar Boleto
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Evento 4 */}

                        <div className="mx-4 rounded-md  bg-purple-500 shadow">
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
                                            Agotados
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
