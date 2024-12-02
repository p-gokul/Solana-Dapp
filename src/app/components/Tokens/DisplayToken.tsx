"use client";

import { useTokens } from "@/app/hooks/useTokens";
import { useWallet } from "@solana/wallet-adapter-react";

const DisplayTokenPage = () => {
    const tokensWithMetadata = useTokens(true); // Set includeMetadata to true
    const { publicKey } = useWallet();

    if (!publicKey)
        return <div>Please connect your wallet to see your tokens.</div>;

    return (
        <div>
            <h2>Display Token Page</h2>
            {tokensWithMetadata.length === 0 ? (
                <div>No tokens found.</div>
            ) : (
                <ul>
                    {tokensWithMetadata.map((token) => (
                        <li key={token.accountPubkey}>
                            <div>
                                <strong>Token Account Address:</strong>{" "}
                                {token.accountPubkey}
                            </div>
                            <div>
                                <strong>Mint Address:</strong>{" "}
                                {token.mintAddress}
                            </div>
                            <div>
                                <strong>Amount:</strong> {token.tokenAmount}
                            </div>
                            <div>
                                <strong>Name:</strong>{" "}
                                {token.metadata?.name || "Undefined"}
                            </div>
                            <div>
                                <strong>Symbol:</strong>{" "}
                                {token.metadata?.symbol || "Undefined"}
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DisplayTokenPage;
