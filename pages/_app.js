import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
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
                toast.error("Please install Phantom Wallet...");
                setTimeout(() => {
                    window.open("https://phantom.app/", "_blank");
                }, 2000);
            }
        } catch (error) {
            console.error(error);
        }
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
        const onLoad = async () => {
            await checkIfWalletIsConnected();
        };
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
    }, []);

    return (
        <div>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    );
}

export default MyApp;
