"use client";

import useFetchTokenMetadataNftDetails from "@/app/hooks/useFetchTokenMetadataNftDetails";
import { useNotification } from "@/app/hooks/useNotifications";
import {
    mplTokenMetadata,
    TokenStandard,
    transferV1,
} from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import LoaderComponent from "../LoaderComponent/Loader";
import Notification from "../Nofitication";

const TransferNftPage = () => {
    const { publicKey } = useWallet();
    const wallet = useWallet();

    const { nfts, loading, error } = useFetchTokenMetadataNftDetails(); // Use the custom hook for fetching NFTs

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTransferring, setIsTransferring] = useState(false); // State for loader
    const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for transfer
    const [recipientAddress, setRecipientAddress] = useState<string>("");

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    const openModal = (nft: any) => {
        setSelectedNFT(nft);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNFT(null);
        setRecipientAddress("");
    };

    const handleTransferNFT = async () => {
        if (!publicKey || !recipientAddress || !selectedNFT) {
            alert(
                "Please ensure all fields are filled out and your wallet is connected.",
            );
            return;
        }

        try {
            setIsTransferring(true); // Show loader
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));
            umi.use(mplTokenMetadata());

            const umiRecipientPublicKey = fromWeb3JsPublicKey(
                new PublicKey(recipientAddress),
            );
            const umiMintAddress = fromWeb3JsPublicKey(
                new PublicKey(selectedNFT.mint),
            );

            const { signature } = await transferV1(umi, {
                mint: umiMintAddress, // NFT mint address
                authority: umi.identity,
                tokenOwner: umi.identity.publicKey,
                destinationOwner: umiRecipientPublicKey,
                tokenStandard: TokenStandard.NonFungible,
            }).sendAndConfirm(umi);

            // Show success notification
            showNotification(
                "NFT transferred successfully !!!",
                base58.deserialize(signature)[0],
            );
            closeModal();
        } catch (_error) {
            alert("Failed to transfer NFT. Please try again.");
        } finally {
            setIsTransferring(false); // Hide loader
        }
    };

    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold">Transfer NFTs</h1>

            {loading && <p className="text-blue-500">Loading NFTs...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {nfts.map((nft, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center rounded-lg border p-4 shadow"
                    >
                        <Image
                            src={nft.image}
                            alt={nft.name}
                            height={100}
                            width={100}
                            className="mb-4 h-32 w-32 rounded object-cover"
                        />
                        <h2 className="text-lg font-bold">{nft.name}</h2>
                        <p className="text-gray-600">{nft.symbol}</p>
                        <p className="mt-2 text-gray-700">{nft.description}</p>
                        <button
                            type="button"
                            onClick={() => openModal(nft)}
                            className="bottom-4 right-4 rounded bg-blue-500 px-4 py-2 text-white"
                        >
                            Transfer
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for Transfer */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Transfer NFT"
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
            >
                <div className="z-50 flex w-full max-w-md flex-col rounded-xl bg-slate-900 p-6 text-white shadow-lg">
                    <h2 className="mx-auto mb-4 text-xl font-semibold">
                        Transfer NFT
                    </h2>
                    {selectedNFT && (
                        <>
                            <p className="mb-2">
                                <strong>Name:</strong> {selectedNFT.name}
                            </p>
                            <p className="mb-4">
                                <strong>Symbol:</strong> {selectedNFT.symbol}
                            </p>
                        </>
                    )}
                    <label className="mb-4 block">
                        <span className="text-sm text-gray-300">
                            Recipient Address:
                        </span>
                        <input
                            type="text"
                            value={recipientAddress}
                            onChange={(e) =>
                                setRecipientAddress(e.target.value)
                            }
                            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder="Enter recipient's public key"
                        />
                    </label>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleTransferNFT}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
                        >
                            Transfer
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-500"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Loader */}
            {isTransferring && (
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

export default TransferNftPage;
