import { nftTokenMetadataSchema } from "@/app/schemas/nftMetadataSchema";
import {
    createNft,
    // fetchDigitalAsset,
    mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";

const CreateNftPage = () => {
    const { publicKey } = useWallet(); // Access wallet adapter
    const wallet = useWallet();

    // States for inputs
    const [name, setName] = useState<string>("");
    const [uri, setUri] = useState<string>("");
    const [percent, setPercent] = useState<number>(0);
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

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
            if (!response.data.ok) {
                throw new Error("Failed to fetch metadata from the URI");
            }

            const metadata = await response.data.json();

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

            // setStatus("Fetching digital asset...");
            // const asset = await fetchDigitalAsset(umi, mint.publicKey);

            // console.log("NFT created successfully!");
            // console.log("Mint address:", mint.publicKey);
            // console.log("Transaction signature:", signature);
            // console.log("Digital Asset:", asset);

            setStatus(
                `NFT created successfully! Mint address: ${mint.publicKey}, Transaction: ${signature}`,
            );
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                alert(
                    `Invalid metadata: ${error.errors.map((e) => e.message).join(", ")}`,
                );
            } else {
                setStatus(`Error: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Create NFT</h1>

            {/* Name Input */}
            <div className="mb-4">
                <label className="mb-1 block font-medium">NFT Name</label>
                <input
                    type="text"
                    className="w-full rounded border p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter NFT Name"
                />
            </div>

            {/* URI Input */}
            <div className="mb-4">
                <label className="mb-1 block font-medium">Metadata URI</label>
                <input
                    type="text"
                    className="w-full rounded border p-2"
                    value={uri}
                    onChange={(e) => setUri(e.target.value)}
                    placeholder="Enter Metadata URI"
                />
            </div>

            {/* Percent Input */}
            <div className="mb-4">
                <label className="mb-1 block font-medium">
                    Seller Fee Percentage
                </label>
                <input
                    type="number"
                    className="w-full rounded border p-2"
                    value={percent}
                    onChange={(e) => setPercent(Number(e.target.value))}
                    placeholder="Enter Seller Fee (e.g., 5 for 5%)"
                />
            </div>

            {/* Button to Trigger NFT Creation */}
            <button
                type="button"
                onClick={handleCreateNFT}
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
                disabled={!publicKey || loading}
            >
                {loading ? "Creating NFT..." : "Create NFT"}
            </button>

            {/* Status Message */}
            {status && <p className="mt-4 text-gray-700">{status}</p>}
        </div>
    );
};

export default CreateNftPage;
