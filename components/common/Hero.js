import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { TicketIcon } from "@heroicons/react/solid";

const features = [
    {
        name: "Push to deploy.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: TicketIcon,
    },
    {
        name: "SSL certificates.",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: TicketIcon,
    },
    {
        name: "Database backups.",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
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
                {/* Seccion de Features */}
                <section>
                    {" "}
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                        Deploy faster
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Features
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-white">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
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
            </main>
        </div>
    );
}
