import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "../components/common/ParticlesBackground";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { TicketIcon } from "@heroicons/react/solid";

const feats = [
    {
        name: "Authenticity:",
        description:
            "EzTickets are unique and tied to a specific event, which means they are virtually impossible to falsify. This ensures that event attendees can be sure that their ticket is authentic and valid.",
        icon: TicketIcon,
    },
    {
        name: "Ease of transfer:",
        description:
            "EzTickets are easily transferable between people, meaning that if an attendee is unable to make it to the event, they can safely and easily sell or transfer their ticket.",
        icon: TicketIcon,
    },
    {
        name: "Access Control:",
        description:
            "Event organizers can use EzTickets to control access to the event and ensure that only people with valid tickets can enter. This can help prevent overcapacity and ensure attendee safety.",
        icon: TicketIcon,
    },
    {
        name: "Improve the attendee experience: ",
        description:
            " EzTickets can offer a more interactive and personalized experience for event attendees. For example, they can be used to offer exclusive content or to unlock special offers within the event.",
        icon: TicketIcon,
    },
    {
        name: "Registration and monitoring:",
        description:
            "EzTickets enable ticket ownership registration and tracking, which means event organizers can keep track of who has purchased a ticket and how many tickets have been sold in total. This can be helpful for future event planning and promotion.",
        icon: TicketIcon,
    },
    {
        name: "EzTickets:",
        description:
            "In short, EzTickets offer a secure, easy, and efficient way to manage event tickets and can significantly enhance the experience for both event organizers and attendees.",
        icon: TicketIcon,
    },
];

export default function Slideck() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout className="relative">
                <div className="">
                    <div className="mx-auto max-w-2xl justify-center py-16 px-4 text-center sm:py-20 ">
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            <span> This is how it works</span>
                            <span className="  bg-gradient-to-r  from-emerald-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                {" "}
                                EzTicket
                            </span>
                        </h2>
                        <span className="text-2xl font-bold tracking-tight text-white  ">
                            We try to make it as easy as possible for you to get
                            your EzTicket
                        </span>
                        <div className="mt-8 flex justify-center">
                            <div class="w-full">
                                <img
                                    src="/images/boletos.png"
                                    class="w-[40rem] "
                                    alt="boletos"
                                />
                            </div>
                        </div>

                        <p className="mt-4 text-lg leading-6 text-white">
                            <br />
                            <section className="relative">
                                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                                        {feats.map((feat) => (
                                            <div
                                                key={feat.name}
                                                className="relative pl-9"
                                            >
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
                                            src="/images/herolap.png"
                                            alt="App screenshot"
                                        />
                                    </div>
                                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                            </section>
                            <br />
                        </p>

                        <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id="pPi1e-1nsNI"
                            title="EzTicket"
                        />
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}
