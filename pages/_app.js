import "../styles/globals.css";

import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import idl from "../public/idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import {
    Program,
    AnchorProvider,
    web3,
    utils,
    BN,
} from "@project-serum/anchor";
import CreateEvent from "./createvent";
import toast from "react-hot-toast";

const programID = new PublicKey(idl.metadata.address);
const network = clusterApiUrl("devnet");
const opts = {
    preflightCommitment: "finalized",
};
const { SystemProgram } = web3;

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const [walletAddress, setWalletAddress] = useState(null);

    const getProvider = () => {
        const connection = new Connection(network, opts.preflightCommitment);
        const provider = new AnchorProvider(
            connection,
            window.solana,
            opts.preflightCommitment
        );
        return provider;
    };

    const setpay = async (publicKey, price) => {
        try {
            const provider = getProvider();
            const program = new Program(idl, programID, provider);

            await program.rpc.buy(new BN(price * web3.LAMPORTS_PER_SOL), {
                accounts: {
                    ticket: publicKey,
                    user: provider.wallet.publicKey,
                    systemProgram: SystemProgram.programId,
                },
            });
            console.log("Pay to:", publicKey.toString());
            getTickets();
        } catch (error) {
            console.error("Error pay", error);
        }
    };

    useEffect(() => {
        const onLoad = async () => {};
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
    }, []);

    return (
        <>
            <div>
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </div>
        </>
    );
}

export default MyApp;
