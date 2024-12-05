"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import AirDrop from "./components/AirDrop";
import TransferBalance from "./components/TransferBalance";

export default function Home() {
    const { publicKey } = useWallet();

    if (!publicKey) {
        return (
            <div className="flex h-screen w-screen">
                <div className="mx-auto my-auto text-2xl font-bold text-white">
                    Please connect your wallet.
                </div>
            </div>
        );
    }
    return (
        <div className="mt-40 flex h-auto w-full">
            <div className="h-full w-1/2">
                <AirDrop />
            </div>
            <div className="h-auto w-1/2">
                <TransferBalance />
            </div>
        </div>
    );
}
