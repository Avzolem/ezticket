import MainLayout from "@/components/layouts/MainLayout";

const ContactPage = () => {
    return (
        <MainLayout title="Exito" childrenClassName="h-screen">
            <div className="h-min-screen bg-hybrida-bgblue  h-full ">
                <div className="relative mx-auto max-w-xl">
                    <div className="flex h-screen items-center justify-center">
                        <div className="rounded-xl bg-white px-12 text-center">
                            <h2 className="text-hybrida-fuchsia pt-20 text-3xl font-bold tracking-tight sm:text-4xl">
                                ¡Event Created!
                            </h2>
                            <p className="mt-4 pb-6  text-lg leading-6 text-black">
                                <h2>
                                    Your event has been created successfully,
                                    you can start to sell tickets now.
                                </h2>
                                <br />
                                <h2>Aditional Information and Questions:</h2>
                                <br />

                                <div className="text-center text-sm">
                                    <div className="flex justify-center">
                                        <p>Write an email to</p> &nbsp;
                                        <a
                                            href="mailto:ezticket@proton.me"
                                            target="_blank"
                                        >
                                            <p class="font-bold text-sky-400/100">
                                                ezticket@proton.me
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex justify-center">
                                        <p>Send Message on Instagram to</p>{" "}
                                        &nbsp;
                                        <a
                                            href="https://www.instagram.com/avsolem/"
                                            target="_blank"
                                        >
                                            <p class="font-bold text-pink-400/100">
                                                @avsolem
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex justify-center">
                                        <p>Send Message on Discord </p> &nbsp;
                                        <a
                                            href="https://discord.gg/AhSERBy467"
                                            target="_blank"
                                        >
                                            <p class="font-bold text-purple-600">
                                                @HackDogs
                                            </p>
                                        </a>
                                        &nbsp;
                                        <p>in the channel #EzTicket</p> &nbsp;
                                    </div>
                                </div>
                            </p>

                            <div className="img">
                                <img
                                    src="/images/sobre.png"
                                    className="mx-auto h-48 w-48"
                                />
                            </div>

                            <div className="pt-6 pb-20">
                                <a href="/">
                                    <button className="bg-hybrida-fuchsia inline-flex items-center rounded-full border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                                        Return to Home Page
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
