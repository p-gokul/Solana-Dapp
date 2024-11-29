"use client";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useState } from "react";
import useFetchCoreNFTDetails from "./FetchCoreNFT_Details";
// import Image from "next/image";
import Modal from "react-modal";
import { burn, fetchAsset } from "@metaplex-foundation/mpl-core";
import { publicKey } from "@metaplex-foundation/umi";

const BurnCoreNFTPage = () => {
  const wallet = useWallet();

  const { nfts, loading, error } = useFetchCoreNFTDetails(); // Use the custom hook for fetching NFTs

  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedNFT, setSelectedNFT] = useState<any>(null); // Selected NFT for transfer

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
        "Please ensure all fields are filled out and your wallet is connected."
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
    } catch (error) {
      console.error("Error occurred while burning NFT:", error);
      alert("Failed to burn NFT. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">BURN NFTs</h1>

      {loading && <p className="text-blue-500">Loading NFTs...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {nfts.map((nft, index) => (
          <div
            key={index}
            className="border rounded-lg shadow p-4 flex flex-col items-center relative"
          >
            {/* <Image
              src={nft.image}
              alt={nft.name}
              height={100}
              width={100}
              className="w-32 h-32 object-cover rounded mb-4"
            /> */}
            <h2 className="font-bold text-lg">{nft.name}</h2>
            <p className="text-gray-600">{nft.symbol}</p>
            <p className="text-gray-700 mt-2">{nft.description}</p>
            <button
              onClick={() => openModal(nft)}
              className=" bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
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
        className="bg-white rounded-lg p-6 shadow-lg max-w-lg mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">Burn NFT</h2>
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
        <label className="block mb-4">
          <span className="text-gray-700">
            Are you sure to Burn your NFT ??
          </span>
        </label>
        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleBurnNFT}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Burn
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BurnCoreNFTPage;
