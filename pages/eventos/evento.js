import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";
import Countdown from "@/components/common/Countdown";
import BidHistory from "../../components/common/BidHistory";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
import {
    Connection,
    SystemProgram,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    Transaction,
} from "@solana/web3.js";
import axios from "axios";

let publicKey = null;
let phantom = null;

export default function Home() {
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [bids, setBids] = useState(undefined);

    useEffect(() => {
        async function getBids() {
            setIsInitialLoading(true);
            try {
                const { data } = await axios.get(`/api/auctions`);
                setBids(data.bids);
                setFetchError(false);
                console.log(data.bids);
            } catch (err) {
                console.log("err =>", err);
                setFetchError(true);
                console.log("ya valió mami");
            }
            setIsInitialLoading(false);
        }

        getBids();
    }, []);

    const [bid, setBid] = useState(0);

    useEffect(() => {
        publicKey = localStorage.getItem("publicKey");
        console.log("publicKey", publicKey);
        getProvider();
        axios.post("/api/auctions", { bidder: publicKey, amount: bid });
    }, []);

    const getProvider = async () => {
        if ("phantom" in window) {
            const provider = window.phantom?.solana;

            if (provider?.isPhantom) {
                const response = await provider.connect();
                return provider;
            }
        }
    };

    //Send bid
    const sendBid = async (e) => {
        e.preventDefault();
        const provider = await getProvider();

        console.log(publicKey);
        const connection = new Connection(clusterApiUrl("devnet"));
        let blockhashObj = await connection.getLatestBlockhash();

        const TransactionInstruction = SystemProgram.transfer({
            fromPubkey: new PublicKey(publicKey),
            toPubkey: new PublicKey(
                "GoeCHuxBNm8Z9Mk18ri3oUXddjXvYvQWeay3KJTDNtSi"
            ),
            lamports: bid * LAMPORTS_PER_SOL,
        });

        const transaction = new Transaction({
            recentBlockhash: blockhashObj.blockhash,
            blockhashObj: blockhashObj,
            feePayer: new PublicKey(publicKey),
        }).add(TransactionInstruction);

        provider.signTransaction(transaction).then((signed) => {
            connection.sendRawTransaction(signed.serialize());
        });
    };

    return (
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
                                        Active Event
                                    </p>
                                    <h2 className="title my-2 text-lg font-bold">
                                        etherfuse Hackathon{" "}
                                    </h2>
                                    <p className="text-happy-pink-600 mb-4 text-sm font-bold capitalize">
                                        24/02/2023
                                    </p>
                                    <Countdown date="2023-25-02" />
                                    <input
                                        type="text"
                                        className="my-2 w-full rounded-md border-2 border-gray-300 p-2"
                                        placeholder="Oferta"
                                        value={bid}
                                        onChange={(e) => setBid(e.target.value)}
                                    />
                                    <div className="rounded-md shadow">
                                        <div
                                            onClick={(e) => {
                                                sendBid(e);
                                            }}
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white  md:py-4 md:px-10 md:text-lg"
                                        >
                                            Buy EzTicket
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            <span className="font-bold">
                                                Starting Price:
                                            </span>{" "}
                                            0.01 SOL
                                        </p>
                                    </div>
                                    <div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            <span className="font-bold">
                                                Actual Price:
                                            </span>{" "}
                                            0.01 SOL
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* <BidHistory /> */}
                        <div className="flex flex-col px-4">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    {isInitialLoading ? (
                                        <div className="py-24">
                                            <LoadingCircle color="#000000" />
                                        </div>
                                    ) : fetchError ? (
                                        <div className="py-24 text-center">
                                            <p className="text-lg text-red-500">
                                                There was an error loading the
                                                events 😢
                                            </p>
                                        </div>
                                    ) : bids && bids.length > 0 ? (
                                        <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                                        >
                                                            Buyer
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                                        >
                                                            Amount
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                                                        >
                                                            Date
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {bids.map((bid) => (
                                                        <tr key={bid.bidder}>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                <div className="text-sm text-gray-900">
                                                                    {bid.bidder}
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                <div className="text-sm text-gray-900">
                                                                    {bid.amount}
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap px-6 py-4">
                                                                <div className="text-sm text-gray-900">
                                                                    {
                                                                        bid.timestamp
                                                                    }
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="py-24 text-center">
                                            <p className="text-lg text-gray-500">
                                                No events found
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
