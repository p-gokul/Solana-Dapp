"use client";

import useFetchTokenMetadataNftDetails from "@/app/hooks/useFetchTokenMetadataNftDetails";
import { useNotification } from "@/app/hooks/useNotifications";
import {
    burnV1,
    mplTokenMetadata,
    TokenStandard,
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
import Notification from "../Nofitication";

const BurnNftPage = () => {
    const { publicKey } = useWallet();
    const wallet = useWallet();

    const { nfts, loading, error } = useFetchTokenMetadataNftDetails(); // Use the custom hook for fetching NFTs

    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for transfer

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
        if (!publicKey || !selectedNFT) {
            alert(
                "Please ensure all fields are filled out and your wallet is connected.",
            );
            return;
        }

        try {
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));
            umi.use(mplTokenMetadata());

            const umiMintAddress = fromWeb3JsPublicKey(
                new PublicKey(selectedNFT.mint),
            );

            const { signature } = await burnV1(umi, {
                mint: umiMintAddress, // NFT mint address
                authority: umi.identity,
                tokenOwner: umi.identity.publicKey,
                tokenStandard: TokenStandard.NonFungible,
            }).sendAndConfirm(umi);

            // Show success notification
            showNotification(
                "Token Burned !!!",
                base58.deserialize(signature)[0],
            );

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
                            Burn NFT
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal for Transfer */}
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
                                <strong>Symbol:</strong> {selectedNFT.symbol}
                            </p>
                        </>
                    )}
                    <div className="mb-4">
                        <p className="text-sm text-gray-300">
                            Are you sure you want to burn this NFT? This action
                            is Irreversible.
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleBurnNFT}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
                        >
                            Burn
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

export default BurnNftPage;
