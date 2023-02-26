import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/common/Hero";
import Head from "next/head";
import ParticlesBackground from "../components/common/ParticlesBackground";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout>
                <Head>
                    <title>EzTicket</title>
                    <meta
                        name="description"
                        content="EzTicket is a NFTicketing platform for events and conferences."
                    />
                </Head>
                <script
                    src="https://kit.fontawesome.com/16679573af.js"
                    crossorigin="anonymous"
                ></script>

                <main className="relative mb-auto flex flex-col  to-black ">
                    <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
                        <div className="px-4 sm:px-8 lg:w-full ">
                            <h1 className="text-white-900 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                <span className=" text-white xl:inline">
                                    Comprar{" "}
                                </span>{" "}
                                <span className="  bg-gradient-to-r  from-emerald-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                    EzTicket{" "}
                                </span>
                                <span className=" text-white xl:inline">
                                    es tan facil como decir{" "}
                                </span>{" "}
                                <br />
                                <span className=" bg-gradient-to-r  from-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                    "ez pz lemon squeeze"{" "}
                                </span>
                            </h1>

                            <div className="mt-10 sm:flex sm:justify-center ">
                                <div className="rounded-md bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 shadow ">
                                    <a
                                        href="/eventos"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg"
                                    >
                                        {" "}
                                        <span>Mira los eventos!  </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-6 w-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a
                                        href="#init"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-purple-500 hover:bg-gray-200 md:py-4 md:px-10 md:text-lg"
                                    >
                                        ¿Que es EZTicket?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="convocatoria absolute relative mt-6 flex h-full w-full justify-center md:mt-0">
                        <a name="init"></a>

                        <Hero />
                    </div>
                    <div></div>

                    <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32 ">
                        <div className="px-4 sm:px-8 lg:w-full ">
                            <h1 className="text-white-900 text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                <span className="block text-white xl:inline">
                                    Obten{" "}
                                </span>{" "}
                                <span className="block bg-gradient-to-r  from-emerald-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                    EzTickets{" "}
                                </span>
                                <span className="block text-white xl:inline">
                                    para los eventos que{" "}
                                </span>{" "}
                                <span className="block text-purple-500 xl:inline">
                                    adoras.{" "}
                                </span>{" "}
                            </h1>

                            <div className="mt-10 sm:flex sm:justify-center ">
                                <div className="rounded-md shadow">
                                    <a
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 md:py-4 md:px-10 md:text-lg"
                                    >
                                        {" "}
                                        <span>¡Registrate Aqui!  </span>
                                    </a>
                                    <a name="scroll"></a>
                                </div>
                            </div>

                            {/* <br />
                            <br />
                            <br />
                            <br />

                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="mx-auto max-w-2xl sm:text-center">
                                    <h2 className="text-base font-semibold leading-7 text-indigo-400">
                                        Powered by
                                    </h2>
                                    <div className="relative mx-auto flex justify-center overflow-hidden ">
                                        {" "}
                                        <img
                                            src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark-horizontal.e4df684f.svg&w=256&q=75"
                                            className=" w-[15rem]  "
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </main>
            </MainLayout>
        </div>
    );
}
