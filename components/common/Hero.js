import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { TicketIcon } from "@heroicons/react/solid";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/solid";

const feats = [
    {
        name: "Autenticidad:",
        description:
            "los EzTickets son únicos y están vinculados a un evento específico, lo que significa que son prácticamente imposibles de falsificar. Esto garantiza que los asistentes al evento puedan estar seguros de que su boleto es auténtico y válido.",
        icon: TicketIcon,
    },
    {
        name: "Facilidad de transferencia:",
        description:
            "los EzTickets se pueden transferir fácilmente entre personas, lo que significa que si un asistente no puede asistir al evento, pueden vender o transferir su boleto de manera segura y fácil.",
        icon: TicketIcon,
    },
    {
        name: "Control de acceso:",
        description:
            "los organizadores del evento pueden usar los EzTickets para controlar el acceso al evento y asegurarse de que solo las personas con boletos válidos puedan ingresar. Esto puede ayudar a prevenir la sobrecapacidad y garantizar la seguridad de los asistentes.",
        icon: TicketIcon,
    },
    {
        name: "Mejora la experiencia del asistente: ",
        description:
            " los EzTickets pueden ofrecer una experiencia más interactiva y personalizada para los asistentes al evento. Por ejemplo, se pueden usar para ofrecer contenido exclusivo o para desbloquear ofertas especiales dentro del evento.",
        icon: TicketIcon,
    },
    {
        name: "Registro y seguimiento:",
        description:
            "los EzTickets permiten el registro y seguimiento de la propiedad de los boletos, lo que significa que los organizadores del evento pueden realizar un seguimiento de quién ha comprado un boleto y cuántos boletos se han vendido en total. Esto puede ser útil para la planificación y promoción futuras del evento.",
        icon: TicketIcon,
    },
    {
        name: "EzTickets:",
        description:
            "En resumen, los EzTickets ofrecen una forma segura, fácil y eficiente de administrar los boletos para eventos y pueden mejorar significativamente la experiencia tanto de los organizadores como de los asistentes al evento.",
        icon: TicketIcon,
    },
];

const features = [
    {
        name: "Un boleto mas seguro: ",
        description:
            "Tus boletos estan seguros en la blockchain de Solana, nadie puede modificarlos o robarlos",
        icon: TicketIcon,
    },
    {
        name: "Un boleto unico: ",
        description:
            "EzTicket es un boleto unico, no hay copias, no hay falsificaciones. Trabajamos con la tecnologia NFT.",
        icon: TicketIcon,
    },
    {
        name: "Un boleto para el futuro:",
        description:
            "Podras coleccionar tus EzTickets y revenderlos en el futuro. Tu decides el precio.",
        icon: TicketIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Hero() {
    return (
        <div className="relative">
            <main className="lg:relative">
                {/*  simple title to the right and image to the left*/}
                <section className="relative">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                {" "}
                                {/* Aqui va la imagen */}
                                <img
                                    src="https://ticketmeta.io/static/media/image-event-cards.3201de16890cf04252b3.png"
                                    className="w-[40rem]  "
                                />
                            </div>

                            {/* Aqui va el texto */}
                            <div className="m-auto">
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    <span className=" text-white xl:inline">
                                        Descubre Eventos{" "}
                                    </span>{" "}
                                </h1>
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    <span className=" bg-gradient-to-r  from-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        Compra y Vende{" "}
                                    </span>
                                    <span className=" bg-gradient-to-r  from-emerald-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        EzTickets{" "}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />

                {/* Seccion de Features */}
                <section>
                    {" "}
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-purple-500">
                                        Da un salto a la Web3
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Un boleto con toda la seguridad del
                                        blockchain
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-white">
                                        Crea eventos y gestionalos de forma
                                        segura y sencilla, o descubre los
                                        eventos que hay en tu ciudad.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                                        {features.map((feature) => (
                                            <div
                                                key={feature.name}
                                                className="relative pl-9"
                                            >
                                                <dt className="inline font-semibold text-white">
                                                    <feature.icon
                                                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                    {feature.name}
                                                </dt>{" "}
                                                <dd className="inline">
                                                    {feature.description}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="sm:px-6 lg:px-0">
                                <div className="relative isolate overflow-hidden bg-purple-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                                    <div
                                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                                        aria-hidden="true"
                                    />
                                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                        <img
                                            src="https://ticketmeta.io/static/media/image-macbook.9e4a176a7c912489bcd7.png"
                                            alt="Product screenshot"
                                            width={2432}
                                            height={1442}
                                            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-purple-700 ring-1 ring-white/10"
                                        />
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                {/*  simple title to the right and image to the left*/}
                <section className="relative">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                {" "}
                                {/* Aqui va la imagen */}
                                <img
                                    src="https://interexy.com/wp-content/themes/AMS-Apps/images/case/ticketing/process-img-2.png"
                                    className="w-[40rem]  "
                                />
                            </div>

                            {/* Aqui va el texto */}
                            <div className="m-auto">
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    <span className=" text-white xl:inline">
                                        Gestiona tu cuenta{" "}
                                    </span>{" "}
                                </h1>
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    <span className=" bg-gradient-to-r  from-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        Colecciona tus{" "}
                                    </span>
                                    <span className=" bg-gradient-to-r  from-emerald-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        EzTickets{" "}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />

                {/*  simple title to the left and image to the right*/}
                <section className="relative">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            {/* Aqui va el texto */}
                            <div className="m-auto">
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    <span className=" text-white xl:inline">
                                        Descarga la App{" "}
                                    </span>{" "}
                                </h1>
                                <h1 className="text-white-900 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                    <span className=" bg-gradient-to-r  from-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        Consulta los horarios, comparte tus{" "}
                                    </span>
                                    <span className=" bg-gradient-to-r  from-emerald-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        EzTickets{" "}
                                    </span>
                                    <span className=" bg-gradient-to-r  from-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        en las redes sociales.{" "}
                                    </span>
                                </h1>
                            </div>
                            {/* Aqui va la imagen */}
                            <div className="relative isolate mx-auto overflow-hidden sm:mx-0 sm:max-w-none">
                                {" "}
                                <img
                                    src="https://assets-global.website-files.com/62b4acc476ac97464d28883c/62ebe5f517fa633ddc7711e4_hero-phone%20(2).png"
                                    className=" w-[40rem]  "
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />

                {/*  simple title center text center*/}

                <section className="relative">
                    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            {feats.map((feat) => (
                                <div key={feat.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-white">
                                        <feat.icon
                                            className="absolute top-1 left-1 h-5 w-5 text-indigo-500"
                                            aria-hidden="true"
                                        />
                                        {feat.name}
                                    </dt>{" "}
                                    <dd className="inline">
                                        {feat.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="relative overflow-hidden pt-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <img
                                src="https://interexy.com/wp-content/themes/AMS-Apps/images/case/ticketing/tech-img.png"
                                alt="App screenshot"
                            />
                        </div>
                    </div>

                    <br />
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

                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Con todo el poder de la blockchain de Solana
                                para crear una experiencia de usuario
                                inigualable.
                            </p>
                            <br />
                            <br />
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">
                                Developed by HackDogs
                            </h2>
                            <br />
                            <div className="relative mx-auto flex justify-center overflow-hidden ">
                                {" "}
                                <img
                                    src="/images/dogo.png"
                                    className=" w-[10rem]  "
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
