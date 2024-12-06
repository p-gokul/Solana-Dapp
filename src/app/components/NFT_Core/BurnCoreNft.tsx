"use client";

import useFetchCoreNftDetails from "@/app/hooks/useFetchCoreNftDetails";
import { useNotification } from "@/app/hooks/useNotifications";
import { burn, fetchAsset } from "@metaplex-foundation/mpl-core";
import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import LoaderComponent from "../LoaderComponent/Loader";
import Notification from "../Nofitication";
import GenericButton from "../UI/Button";

const BurnCoreNftPage = () => {
    const wallet = useWallet();
    const { nfts, loading, error } = useFetchCoreNftDetails(); // Use the custom hook for fetching NFTs

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBurning, setIsBurning] = useState(false); // Loader state
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for burn

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const openModal = (nft: any) => {
        setSelectedNFT(nft);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNFT(null);
    };

    const handleBurnNFT = async () => {
        if (!wallet.publicKey || !selectedNFT) {
            alert(
                "Please ensure all fields are filled out and your wallet is connected.",
            );
            return;
        }

        try {
            setIsBurning(true); // Show loader
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));

            const assetId = publicKey(selectedNFT.mint);
            const asset = await fetchAsset(umi, assetId);

            const { signature } = await burn(umi, {
                asset: asset, // NFT mint address
            }).sendAndConfirm(umi);

            // Show success notification
            showNotification(
                "NFT burned successfully !!!",
                base58.deserialize(signature)[0],
            );

            closeModal();
        } catch (_error) {
            alert("Failed to burn NFT. Please try again.");
        } finally {
            setIsBurning(false); // Hide loader
        }
    };

    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold">BURN NFTs</h1>

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
                        <GenericButton
                            onClick={() => openModal(nft)}
                            actionType="Normal"
                            param={nft}
                        >
                            Burn NFT
                        </GenericButton>
                    </div>
                ))}
            </div>

            {/* Modal for Burn */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Burn NFT"
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
            >
                <div className="z-50 flex w-full max-w-md flex-col rounded-xl bg-slate-900 p-6 text-white shadow-lg">
                    <h2 className="mx-auto mb-4 text-xl font-semibold">
                        Burn NFT
                    </h2>
                    {selectedNFT && (
                        <>
                            <p className="mb-2">
                                <strong>Name:</strong> {selectedNFT.name}
                            </p>
                            <p className="mb-4">
                                <strong>Symbol:</strong>{" "}
                                {selectedNFT.symbol || "NFT Symbol"}
                            </p>
                        </>
                    )}
                    <div className="mb-4">
                        <p className="text-sm text-gray-300">
                            This action cannot be undone. Are you sure you want
                            to burn this NFT?
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <GenericButton
                            onClick={handleBurnNFT}
                            actionType="Burn"
                        >
                            Burn
                        </GenericButton>
                        <GenericButton onClick={closeModal} actionType="Cancel">
                            Cancel
                        </GenericButton>
                    </div>
                </div>
            </Modal>

            {/* Loader */}
            {isBurning && (
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

export default BurnCoreNftPage;
