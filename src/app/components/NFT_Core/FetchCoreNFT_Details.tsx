import { publicKey } from "@metaplex-foundation/umi";
import { fetchAssetsByOwner } from "@metaplex-foundation/mpl-core";
import { useEffect, useState } from "react";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { clusterApiUrl } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import axios from "axios";

interface NFTMetadata {
  name: string;
  symbol?: string;
  description?: string;
  image: string;
  sellerFeeBasisPoints?: number;
  mint: string;
}

const useFetchCoreNFTDetails = () => {
  const wallet = useWallet();

  const [nfts, setNFTs] = useState<NFTMetadata[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoreNFTs = async () => {
      if (!wallet.publicKey) {
        setError("Please connect your Wallet.");
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const umi = createUmi(clusterApiUrl("devnet"));
        umi.use(walletAdapterIdentity(wallet));
        umi.use(mplTokenMetadata());

        const owner = publicKey(umi.identity);

        const assetsByOwner = await fetchAssetsByOwner(umi, owner, {
          skipDerivePlugins: false,
        });
        console.log("Fetching assets operation started");
        console.log("Fetched assets by Owner are ", assetsByOwner);

        const nftData = await Promise.all(
          assetsByOwner.map(async (asset) => {
            console.log("The received asset is ", asset);
            const response = await axios.get(asset.uri);
            const metadata = response.data;
            return {
              name: metadata.name,
              symbol: metadata.symbol,
              description: metadata.description,
              image: metadata.image,
              sellerFeeBasisPoints: metadata.seller_fee_basis_points / 100, // Convert basis points to percentage
              mint: asset.publicKey,
            };
          })
        );
        setNFTs(nftData);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setError("Failed to fetch NFTs. Please try again.");
      }
    };

    fetchCoreNFTs();
  }, [wallet]);

  return { nfts, loading, error };
};

export default useFetchCoreNFTDetails;
