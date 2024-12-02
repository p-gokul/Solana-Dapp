import { fetchAssetsByOwner } from "@metaplex-foundation/mpl-core";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import axios from "axios";
import { useEffect, useState } from "react";

interface NFTMetadata {
    name: string;
    symbol?: string;
    description?: string;
    image: string;
    sellerFeeBasisPoints?: number;
    mint: string;
}

const useFetchCoreNftDetails = () => {
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

                const nftData = await Promise.all(
                    assetsByOwner.map(async (asset) => {
                        const response = await axios.get(asset.uri);
                        const metadata = response.data;
                        return {
                            name: metadata.name,
                            symbol: metadata.symbol,
                            description: metadata.description,
                            image: metadata.image,
                            sellerFeeBasisPoints:
                                metadata.seller_fee_basis_points / 100, // Convert basis points to percentage
                            mint: asset.publicKey,
                        };
                    }),
                );
                setNFTs(nftData);
            } catch (_error) {
                setError("Failed to fetch NFTs. Please try again.");
            }
        };

        fetchCoreNFTs();
    }, [wallet]);

    return { nfts, loading, error };
};

export default useFetchCoreNftDetails;
