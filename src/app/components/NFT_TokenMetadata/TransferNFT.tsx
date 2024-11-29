"use client";

import {
    mplTokenMetadata,
    TokenStandard,
    transferV1,
} from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useState } from "react";
import Modal from "react-modal";
import useFetchNFTDetails from "./FetchNftDetails";
// import Image from "next/image";

const TransferNftPage = () => {
    const { publicKey } = useWallet();
    const wallet = useWallet();

    const { nfts, loading, error } = useFetchNFTDetails(); // Use the custom hook for fetching NFTs

    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for transfer
    const [recipientAddress, setRecipientAddress] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            const umi = createUmi(clusterApiUrl("devnet"));
            umi.use(walletAdapterIdentity(wallet));
            umi.use(mplTokenMetadata());

            const umiRecipientPublicKey = fromWeb3JsPublicKey(
                new PublicKey(recipientAddress),
            );
            const umiMintAddress = fromWeb3JsPublicKey(
                new PublicKey(selectedNFT.mint),
            );

            await transferV1(umi, {
                mint: umiMintAddress, // NFT mint address
                authority: umi.identity,
                tokenOwner: umi.identity.publicKey,
                destinationOwner: umiRecipientPublicKey,
                tokenStandard: TokenStandard.NonFungible,
            }).sendAndConfirm(umi);

            alert("NFT transferred successfully!");
            closeModal();
        } catch (_error) {
            alert("Failed to transfer NFT. Please try again.");
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
                className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <h2 className="mb-4 text-xl font-bold">Transfer NFT</h2>
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
                    <span className="text-gray-700">Recipient Address</span>
                    <input
                        type="text"
                        value={recipientAddress}
                        onChange={(e) => setRecipientAddress(e.target.value)}
                        className="w-full rounded border p-2"
                        placeholder="Enter recipient's public key"
                    />
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
                        onClick={handleTransferNFT}
                        className="rounded bg-blue-500 px-4 py-2 text-white"
                    >
                        Transfer
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default TransferNftPage;
