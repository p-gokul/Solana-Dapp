"use client";

import { useTokens } from "@/app/hooks/useTokens";
import { useWallet } from "@solana/wallet-adapter-react";
import { CircleCheckBig, ClipboardIcon } from "lucide-react";
import { useState } from "react";

const DisplayTokenPage = () => {
    const tokensWithMetadata = useTokens(true); // Set includeMetadata to true
    const { publicKey } = useWallet();
    const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

    if (!publicKey)
        return <div>Please connect your wallet to see your tokens.</div>;

    const copyAddress = (address: string) => {
        navigator.clipboard.writeText(address);
        setCopiedAddress(address); // Set copied state to true
        setTimeout(() => setCopiedAddress(null), 1500); // Reset copied state after 2 seconds
    };

    return (
        <div className="flex w-full flex-col">
            <h2 className="mx-auto text-2xl">Display Token Page</h2>
            <div className="grid w-full grid-cols-2">
                {tokensWithMetadata.map((token) => (
                    <div
                        className="flex justify-center rounded-xl p-6"
                        key={token.accountPubkey}
                    >
                        <div className="max-w-lg space-y-2 rounded-xl bg-slate-900 p-4">
                            <div>Name: {token.metadata?.name} </div>
                            <div>
                                Symbol: {token.metadata?.symbol || "Undefined"}
                            </div>
                            <div>Amount: {token.tokenAmount}</div>
                            <div className="flex flex-row">
                                <div className="truncate">
                                    Token Account Address: {token.accountPubkey}
                                </div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        copyAddress(token.accountPubkey)
                                    }
                                >
                                    {copiedAddress === token.accountPubkey ? (
                                        <CircleCheckBig className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <ClipboardIcon className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <div className="truncate">
                                    Mint Address: {token.mintAddress}
                                </div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        copyAddress(token.mintAddress)
                                    }
                                >
                                    {copiedAddress === token.mintAddress ? (
                                        <CircleCheckBig className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <ClipboardIcon className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayTokenPage;
