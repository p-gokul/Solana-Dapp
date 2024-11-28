"use client";

import useFetchNFTDetails from "./FetchNFT_Details";
// import Image from "next/image";

const DisplayNFTPage = () => {
  const { nfts, loading, error } = useFetchNFTDetails();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Display NFTs</h1>

      {loading && <p className="text-blue-500">Fetching NFTs...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {nfts.map((nft, index) => (
          <div
            key={index}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
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
            <p className="text-gray-500 mt-4">
              <strong>Seller Fee:</strong> {nft.sellerFeeBasisPoints}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayNFTPage;
