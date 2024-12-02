"use client";

import useFetchCoreNftDetails from "@/app/hooks/useFetchCoreNftDetails";
// import Image from "next/image";

const DisplayCoreNftPage = () => {
    const { nfts, loading, error } = useFetchCoreNftDetails();

    return (
        <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold">Display NFTs</h1>

            {loading && <p className="text-blue-500">Fetching NFTs...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {nfts.map((nft, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center rounded-lg border p-4 shadow"
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
                        <p className="mt-4 text-gray-500">
                            <strong>Seller Fee:</strong>{" "}
                            {nft.sellerFeeBasisPoints}%
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayCoreNftPage;