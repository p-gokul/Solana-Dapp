"use client";

import {
  MINT_SIZE,
  TOKEN_2022_PROGRAM_ID,
  createMintToInstruction,
  createAssociatedTokenAccountInstruction,
  getMintLen,
  createInitializeMetadataPointerInstruction,
  createInitializeMintInstruction,
  TYPE_SIZE,
  LENGTH_SIZE,
  ExtensionType,
  mintTo,
  getOrCreateAssociatedTokenAccount,
  getAssociatedTokenAddressSync,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import { isValidAddress } from "@/app/utils";
import { createInitializeInstruction, pack } from "@solana/spl-token-metadata";
import { useRef } from "react";

const LaunchToken = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const nameRef = useRef<HTMLInputElement>(null);
  const symbolRef = useRef<HTMLInputElement>(null);
  const uriRef = useRef<HTMLInputElement>(null);
  const supplyRef = useRef<HTMLInputElement>(null);

  if (!publicKey) return <div>Please Connect Wallet...</div>;

  const handleCreateToken = async () => {
    const name = nameRef.current?.value;
    const symbol = symbolRef.current?.value;
    const uri = uriRef.current?.value;
    const initialSupply = supplyRef.current?.value;

    // Validate input fields
    if (!name || !symbol || !uri || !initialSupply) {
      alert("All fields are required.");
      return;
    }

    // Validate address
    if (!isValidAddress(publicKey.toBase58())) {
      alert("Invalid wallet address.");
      return;
    }

    const mintKeypair = Keypair.generate();
    const metadata = {
      mint: publicKey,
      name,
      symbol,
      uri,
      additionalMetadata: [],
    };

    const mintLen = getMintLen([ExtensionType.MetadataPointer]);
    const metadataLen = TYPE_SIZE + LENGTH_SIZE + pack(metadata).length;

    const lamports = await connection.getMinimumBalanceForRentExemption(
      mintLen + metadataLen
    );

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: mintLen,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID,
      }),
      createInitializeMetadataPointerInstruction(
        mintKeypair.publicKey,
        publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID
      ),
      createInitializeMintInstruction(
        mintKeypair.publicKey,
        9,
        publicKey,
        null,
        TOKEN_2022_PROGRAM_ID
      ),
      createInitializeInstruction({
        programId: TOKEN_2022_PROGRAM_ID,
        mint: mintKeypair.publicKey,
        metadata: mintKeypair.publicKey,
        name: metadata.name,
        symbol: metadata.symbol,
        uri: metadata.uri,
        mintAuthority: publicKey,
        updateAuthority: publicKey,
      })
    );

    transaction.feePayer = publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(mintKeypair);

    await sendTransaction(transaction, connection);

    console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
    const associatedToken = getAssociatedTokenAddressSync(
      mintKeypair.publicKey,
      publicKey,
      false,
      TOKEN_2022_PROGRAM_ID
    );

    console.log(associatedToken.toBase58());

    const transaction2 = new Transaction().add(
      createAssociatedTokenAccountInstruction(
        publicKey,
        associatedToken,
        publicKey,
        mintKeypair.publicKey,
        TOKEN_2022_PROGRAM_ID
      )
    );

    await sendTransaction(transaction2, connection);

    const transaction3 = new Transaction().add(
      createMintToInstruction(
        mintKeypair.publicKey,
        associatedToken,
        publicKey,
        parseInt(initialSupply) * Math.pow(10, 9), // Convert supply to smallest units
        [],
        TOKEN_2022_PROGRAM_ID
      )
    );

    await sendTransaction(transaction3, connection);

    console.log("Minted!");
  };

  return (
    <div className="mt-20">
      <input ref={nameRef} type="text" placeholder="Token Name" />
      <input ref={symbolRef} type="text" placeholder="Token Symbol" />
      <input ref={uriRef} type="text" placeholder="Image URL (Metadata URI)" />
      <input ref={supplyRef} type="number" placeholder="Initial Supply" />
      <button onClick={handleCreateToken}>Create a Token</button>
    </div>
  );
};

export default LaunchToken;
