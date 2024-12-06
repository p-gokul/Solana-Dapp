"use client";

import { useNotification } from "@/app/hooks/useNotifications";
import { nftTokenMetadataSchema } from "@/app/schemas/nftMetadataSchema";
import {
    createNft,
    mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import LoaderComponent from "../LoaderComponent/Loader"; // Import the Loader component
import Notification from "../Nofitication";
import InputField from "../UI/Input";

const CreateNftPage = () => {
    const { publicKey } = useWallet(); // Access wallet adapter
    const wallet = useWallet();

    // States for inputs
    const [name, setName] = useState<string>("");
    const [uri, setUri] = useState<string>("");
    const [percent, setPercent] = useState<number>(0);
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    const handleCreateNFT = async () => {
        try {
            if (!publicKey) {
                alert("Wallet not connected");
                return;
            }
            if (uri.trim() === "" || name.trim() === "") {
                alert("Name or URL cannot be empty.");
                return;
            }

            setLoading(true);
            setStatus("Validating metadata...");

            // Fetch metadata from the URI
            const response = await axios(uri);
            if (!response.data) {
                throw new Error("Failed to fetch metadata from the URI");
            }

            const metadata = await response.data;

            // Validate metadata using Zod schema
            nftTokenMetadataSchema.parse(metadata);

            setStatus("Connecting to the Solana network...");
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));
            umi.use(mplTokenMetadata());

            const umiPublicKey = fromWeb3JsPublicKey(publicKey);

            setStatus("Generating new mint address...");
            const mint = generateSigner(umi);

            setStatus("Creating NFT...");
            const { signature } = await createNft(umi, {
                mint,
                name: metadata.name,
                uri: uri,
                sellerFeeBasisPoints: percentAmount(percent),
                creators: [
                    {
                        address: umiPublicKey,
                        share: 100,
                        verified: true,
                    },
                ],
            }).sendAndConfirm(umi);

            setStatus(`NFT created successfully! `);

            // Show success notification
            showNotification(
                "NFT created successfully !!!",
                base58.deserialize(signature)[0],
            );
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                alert(
                    `Invalid metadata: ${error.errors
                        .map((e) => e.message)
                        .join(", ")}`,
                );
            } else {
                setStatus(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <div className="mx-auto flex h-auto w-1/2 flex-col space-y-4 rounded-xl border bg-slate-900 p-4">
                <div className="mx-auto text-xl">Create NFT</div>
                <hr className="text-slate-400" />
                <div className="space-y-4">
                    {/* NFT Name */}
                    <div className="w-full space-y-2">
                        <InputField
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter NFT name"
                            label="NFT Name"
                        />
                    </div>

                    {/* Metadata URL */}
                    <div className="w-full space-y-2">
                        <InputField
                            type="text"
                            value={uri}
                            onChange={(e) => setUri(e.target.value)}
                            placeholder="Enter Metadata Uri"
                            label="Metadata Uri"
                        />
                    </div>

                    {/* Seller Fee */}
                    <div className="w-full space-y-2">
                        <InputField
                            type="number"
                            value={percent}
                            onChange={(e) => setPercent(Number(e.target.value))}
                            placeholder="Enter Seller Fee (e.g., 5 for 5%)"
                            label="Seller Fee"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleCreateNFT}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-700/50 px-4 py-3 font-medium text-white transition-colors hover:bg-slate-600"
                        disabled={!publicKey || loading}
                    >
                        {loading ? "Creating NFT..." : "Create NFT"}
                    </button>
                </div>
                {status && (
                    <p className="mt-4 text-center text-gray-400">{status}</p>
                )}
            </div>

            {/* Loader */}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <LoaderComponent />
                </div>
            )}

            {notify && (
                <Notification
                    message={message}
                    transactionSignature={transactionSignature}
                    notify={notify}
                    onClose={hideNotification}
                />
            )}
        </div>
    );
};

export default CreateNftPage;
