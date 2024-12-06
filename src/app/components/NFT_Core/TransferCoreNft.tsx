"use client";

import useFetchCoreNftDetails from "@/app/hooks/useFetchCoreNftDetails";
import useNotification from "@/app/hooks/useNotifications";
import { transferV1 } from "@metaplex-foundation/mpl-core";
import { publicKey } from "@metaplex-foundation/umi";
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
import GenericButton from "../UI/Button";

const TransferCoreNftPage = () => {
    const wallet = useWallet();

    const { nfts, loading, error } = useFetchCoreNftDetails(); // Use the custom hook for fetching NFTs

    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line
    const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for transfer
    const [recipientAddress, setRecipientAddress] = useState<string>("");
    const [isTransferring, setIsTransferring] = useState(false); // State for transfer loader

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    // eslint-disable-next-line
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
        if (!wallet.publicKey || !recipientAddress || !selectedNFT) {
            alert(
                "Please ensure all fields are filled out and your wallet is connected.",
            );
            return;
        }

        setIsTransferring(true); // Start loader

        try {
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));

            const umiRecipientPublicKey = fromWeb3JsPublicKey(
                new PublicKey(recipientAddress),
            );

            const umiMintAddress = publicKey(selectedNFT.mint);

            closeModal();

            const { signature } = await transferV1(umi, {
                asset: umiMintAddress,
                newOwner: umiRecipientPublicKey,
            }).sendAndConfirm(umi);

            // Show success notification
            showNotification(
                "NFT transferred successfully !!!",
                base58.deserialize(signature)[0],
            );
        } catch (_error) {
            alert("Failed to transfer NFT. Please try again.");
        } finally {
            setIsTransferring(false); // Stop loader
        }
    };

    return (
        <div className="relative p-4">
            {/* Loader */}
            {isTransferring && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70">
                    <LoaderComponent />
                </div>
            )}

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
                        <p className="text-gray-600">
                            {nft.symbol ? nft.symbol : "NFT Symbol"}
                        </p>
                        <p className="mt-2 text-gray-700">
                            {nft.description
                                ? nft.description
                                : "NFT Description"}
                        </p>
                        <GenericButton
                            onClick={() => openModal(nft)}
                            actionType="Transfer"
                            param={nft}
                        >
                            Transfer
                        </GenericButton>
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
                        <GenericButton
                            onClick={handleTransferNFT}
                            actionType="Transfer"
                            disabled={isTransferring}
                        >
                            Transfer
                        </GenericButton>
                        <GenericButton
                            onClick={closeModal}
                            actionType="Cancel"
                            disabled={isTransferring}
                        >
                            Cancel
                        </GenericButton>
                    </div>
                </div>
            </Modal>

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

export default TransferCoreNftPage;
