"use client";

import useFetchCoreNftDetails from "@/app/hooks/useFetchCoreNftDetails";
import { burn, fetchAsset } from "@metaplex-foundation/mpl-core";
import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { useState } from "react";
import Modal from "react-modal";
// import Image from "next/image";

const BurnCoreNftPage = () => {
    const wallet = useWallet();

    const { nfts, loading, error } = useFetchCoreNftDetails(); // Use the custom hook for fetching NFTs

    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for burn

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
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));

            const assetId = publicKey(selectedNFT.mint);
            const asset = await fetchAsset(umi, assetId);

            await burn(umi, {
                asset: asset, // NFT mint address
            }).sendAndConfirm(umi);

            alert("NFT burned successfully!");
            closeModal();
        } catch (_error) {
            alert("Failed to burn NFT. Please try again.");
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
                        {/* <Image
              src={nft.image}
              alt={nft.name}
              height={100}
              width={100}
              className="w-32 h-32 object-cover rounded mb-4"
            /> */}
                        <h2 className="text-lg font-bold">{nft.name}</h2>
                        <p className="text-gray-600">{nft.symbol}</p>
                        <p className="mt-2 text-gray-700">{nft.description}</p>
                        <button
                            type="button"
                            onClick={() => openModal(nft)}
                            className="bottom-4 right-4 rounded bg-blue-500 px-4 py-2 text-white"
                        >
                            Burn NFT
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for Burn */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Burn NFT"
                className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="mb-4 text-xl font-bold">Burn NFT</h2>
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
                    <span className="text-gray-700">
                        Are you sure to Burn your NFT ??
                    </span>
                </label>
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="rounded bg-gray-500 px-4 py-2 text-white"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleBurnNFT}
                        className="rounded bg-blue-500 px-4 py-2 text-white"
                    >
                        Burn
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default BurnCoreNftPage;
