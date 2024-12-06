"use client";

import useNotification from "@/app/hooks/useNotifications";
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
import GenericButton from "../UI/Button";
import InputField from "../UI/Input";

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
        } catch (error) {
            if (error instanceof z.ZodError) {
                alert(
                    `Invalid metadata: ${error.errors
                        .map((e) => e.message)
                        .join(", ")}`,
                );
            } else {
                setStatus(`Error: ${error}`);
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
            {loading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
                    <LoaderComponent />
                </div>
            )}
            <div className="mx-auto flex h-auto w-1/2 flex-col space-y-4 rounded-xl border bg-slate-900 p-4">
                <div className="mx-auto text-xl font-semibold">Create NFT</div>
                <hr className="text-slate-400" />
                <div className="space-y-4">
                    <InputField
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter NFT Name"
                        label="NFT Name"
                    />
                    <InputField
                        type="text"
                        value={uri}
                        onChange={(e) => setUri(e.target.value)}
                        placeholder="Enter Metadata URI"
                        label="NFT Name"
                    />
                    <GenericButton
                        onClick={handleCreateNFT}
                        fullWidth
                        disabled={!publicKey || loading}
                        actionType="Create"
                    >
                        {loading ? "Creating NFT..." : "Create NFT"}
                    </GenericButton>
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
