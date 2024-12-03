"use client";

import { useNotification } from "@/app/hooks/useNotifications";
import { nftCoreMetadataSchema } from "@/app/schemas/nftMetadataSchema";
import { create } from "@metaplex-foundation/mpl-core";
import { generateSigner } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import LoaderComponent from "../LoaderComponent/Loader";
import Notification from "../Nofitication";

const CreateNftPageCore = () => {
    const { publicKey } = useWallet();
    const wallet = useWallet();

    // States for inputs
    const [name, setName] = useState<string>("");
    const [uri, setUri] = useState<string>("");
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
                alert("Name or Url cannot be empty.");
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
            nftCoreMetadataSchema.parse(metadata);

            setStatus("Connecting to the Solana network...");

            const umi = createUmi(clusterApiUrl("devnet"));
            // Register Wallet Adapter to Umi
            umi.use(walletAdapterIdentity(wallet));

            setStatus("Generating new mint address...");

            const assetSigner = generateSigner(umi);

            setStatus("Creating NFT...");
            const { signature } = await create(umi, {
                asset: assetSigner,
                name: name,
                uri: uri,
            }).sendAndConfirm(umi);

            setStatus("Fetching digital asset...");

            setStatus(`NFT created successfully!`);

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
            setTimeout(() => setLoading(false), 1000); // Fade out loader after 1s
            setStatus("");
            setName("");
            setUri("");
        }
    };

    return (
        <div className="relative flex">
            {/* Show Loader while loading */}
            {loading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
                    <LoaderComponent />
                </div>
            )}
            <div className="mx-auto flex h-auto w-1/2 flex-col space-y-4 rounded-xl border bg-slate-900 p-4">
                <div className="mx-auto text-xl font-semibold">Create NFT</div>
                <hr className="text-slate-400" />
                <div className="space-y-4">
                    {/* NFT Name */}
                    <div className="w-full space-y-2">
                        <div className="pl-2">NFT Name:</div>
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter NFT Name"
                                className="w-full flex-1 rounded-lg border border-zinc-800 bg-black/30 px-4 py-2.5 text-white placeholder:text-zinc-600 focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>
                    </div>

                    {/* Metadata URI */}
                    <div className="w-full space-y-2">
                        <div className="pl-2">Metadata URI:</div>
                        <div>
                            <input
                                type="text"
                                value={uri}
                                onChange={(e) => setUri(e.target.value)}
                                placeholder="Enter Metadata URI"
                                className="w-full flex-1 rounded-lg border border-zinc-800 bg-black/30 px-4 py-2.5 text-white placeholder:text-zinc-600 focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                            />
                        </div>
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

export default CreateNftPageCore;
