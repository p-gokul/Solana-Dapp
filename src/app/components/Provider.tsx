"use client";

import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

import "@solana/wallet-adapter-react-ui/styles.css";

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const endpoint = clusterApiUrl("devnet");
    const wallets = useMemo(() => [], []); // Keep the wallets empty as per your request

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Provider;
