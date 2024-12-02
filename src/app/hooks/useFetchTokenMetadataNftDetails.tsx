import {
    fetchAllDigitalAssetByOwner,
    mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import { useEffect, useState } from "react";

// Define the type for NFT metadata
interface NFTMetadata {
    name: string;
    symbol: string;
    description: string;
    image: string;
    sellerFeeBasisPoints: number;
    mint: string;
}

// Custom hook for fetching NFT details
const useFetchTokenMetadataNftDetails = () => {
    const { publicKey } = useWallet();
    const wallet = useWallet();

    const [nfts, setNFTs] = useState<NFTMetadata[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNFTs = async () => {
            if (!publicKey) {
                setError("Please connect your Wallet.");
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const umi = createUmi(clusterApiUrl("devnet"));
                umi.use(walletAdapterIdentity(wallet));
                umi.use(mplTokenMetadata());

                const umiPublicKey = fromWeb3JsPublicKey(publicKey);

                // Fetch NFTs owned by the user
                const assets = await fetchAllDigitalAssetByOwner(
                    umi,
                    umiPublicKey,
                );

                // Fetch metadata for each NFT
                const nftData = await Promise.all(
                    assets.map(async (asset) => {
                        const response = await axios.get(asset.metadata.uri);
                        const metadata = response.data;
                        return {
                            name: metadata.name,
                            symbol: metadata.symbol,
                            description: metadata.description,
                            image: metadata.image,
                            sellerFeeBasisPoints:
                                metadata.seller_fee_basis_points / 100, // Convert basis points to percentage
                            mint: asset.metadata.mint,
                        };
                    }),
                );

                setNFTs(nftData);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (_error) {
                setError("Failed to fetch NFTs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchNFTs();
    }, [publicKey, wallet]);

    return { nfts, loading, error };
};

export default useFetchTokenMetadataNftDetails;
