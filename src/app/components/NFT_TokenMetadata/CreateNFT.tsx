import { useState } from "react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { percentAmount, generateSigner } from "@metaplex-foundation/umi";
import { clusterApiUrl } from "@solana/web3.js";
import {
  createNft,
  fetchDigitalAsset,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { useWallet } from "@solana/wallet-adapter-react";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";

const CreateNFTPage = () => {
  const { publicKey } = useWallet(); // Access wallet adapter
  const wallet = useWallet();

  // States for inputs
  const [name, setName] = useState<string>("");
  const [uri, setUri] = useState<string>("");
  const [percent, setPercent] = useState<number>(0);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreateNFT = async () => {
    try {
      if (!publicKey) {
        throw new Error("Wallet not connected.");
      }

      setLoading(true);
      setStatus("Connecting to the Solana network...");

      const umi = createUmi(clusterApiUrl("devnet"));
      // Register Wallet Adapter to Umi
      umi.use(walletAdapterIdentity(wallet));

      // Set wallet as the signer
      umi.use(mplTokenMetadata());

      const umiPublicKey = fromWeb3JsPublicKey(publicKey);

      setStatus("Generating new mint address...");
      const mint = generateSigner(umi);
      const myUri: string =
        "https://ffaaqinzhkt4ukhbohixfliu77ylnl2jwba2gzosaqumhbbj64uq.arweave.net/KUAIIbk6p8oo4XHRcq0U__C2r0mwQaNl0gQow4Qp9yk";

      setStatus("Creating NFT...");
      const { signature } = await createNft(umi, {
        mint,
        name: "My NFT",
        uri: myUri,
        sellerFeeBasisPoints: percentAmount(percent), // Fee percentage
        creators: [
          {
            address: umiPublicKey,
            share: 100,
            verified: true,
          },
        ],
      }).sendAndConfirm(umi);

      setStatus("Fetching digital asset...");
      const asset = await fetchDigitalAsset(umi, mint.publicKey);

      console.log("NFT created successfully!");
      console.log("Mint address:", mint.publicKey);
      console.log("Transaction signature:", signature);
      console.log("Digital Asset:", asset);

      setStatus(
        `NFT created successfully! Mint address: ${mint.publicKey}, Transaction: ${signature}`
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create NFT</h1>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block font-medium mb-1">NFT Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter NFT Name"
        />
      </div>

      {/* URI Input */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Metadata URI</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={uri}
          onChange={(e) => setUri(e.target.value)}
          placeholder="Enter Metadata URI"
        />
      </div>

      {/* Percent Input */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Seller Fee Percentage</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={percent}
          onChange={(e) => setPercent(Number(e.target.value))}
          placeholder="Enter Seller Fee (e.g., 5 for 5%)"
        />
      </div>

      {/* Button to Trigger NFT Creation */}
      <button
        onClick={handleCreateNFT}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={!publicKey || loading}
      >
        {loading ? "Creating NFT..." : "Create NFT"}
      </button>

      {/* Status Message */}
      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </div>
  );
};

export default CreateNFTPage;
