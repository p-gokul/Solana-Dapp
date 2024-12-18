"use client";

import useNotification from "@/app/hooks/useNotifications";
import isValidAddress from "@/app/utils";
import {
    createAssociatedTokenAccountInstruction,
    createInitializeMetadataPointerInstruction,
    createInitializeMintInstruction,
    createMintToInstruction,
    ExtensionType,
    getAssociatedTokenAddressSync,
    getMintLen,
    LENGTH_SIZE,
    TOKEN_2022_PROGRAM_ID,
    TYPE_SIZE,
} from "@solana/spl-token";
import { createInitializeInstruction, pack } from "@solana/spl-token-metadata";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useRef } from "react";
import Notification from "../Nofitication";
import GenericButton from "../UI/Button";
import InputField from "../UI/Input";

const LaunchToken = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const nameRef = useRef<HTMLInputElement>(null);
    const symbolRef = useRef<HTMLInputElement>(null);
    const uriRef = useRef<HTMLInputElement>(null);
    const supplyRef = useRef<HTMLInputElement>(null);

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    if (!publicKey) return null;

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
            mintLen + metadataLen,
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
                TOKEN_2022_PROGRAM_ID,
            ),
            createInitializeMintInstruction(
                mintKeypair.publicKey,
                9,
                publicKey,
                null,
                TOKEN_2022_PROGRAM_ID,
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
            }),
        );

        transaction.feePayer = publicKey;
        transaction.recentBlockhash = (
            await connection.getLatestBlockhash()
        ).blockhash;
        transaction.partialSign(mintKeypair);

        await sendTransaction(transaction, connection);

        const associatedToken = getAssociatedTokenAddressSync(
            mintKeypair.publicKey,
            publicKey,
            false,
            TOKEN_2022_PROGRAM_ID,
        );

        const transaction2 = new Transaction().add(
            createAssociatedTokenAccountInstruction(
                publicKey,
                associatedToken,
                publicKey,
                mintKeypair.publicKey,
                TOKEN_2022_PROGRAM_ID,
            ),
        );

        await sendTransaction(transaction2, connection);

        const transaction3 = new Transaction().add(
            createMintToInstruction(
                mintKeypair.publicKey,
                associatedToken,
                publicKey,
                BigInt(Number(initialSupply) * 10 ** 9), // Supply in smallest units
                [],
                TOKEN_2022_PROGRAM_ID,
            ),
        );

        const signature = await sendTransaction(transaction3, connection);

        // Show success notification
        showNotification("Token Creation successful!", signature);
    };

    return (
        <div className="flex">
            <div className="mx-auto flex h-auto w-1/2 flex-col space-y-4 rounded-xl border bg-slate-900 p-4">
                <div className="mx-auto text-xl">Create Token</div>
                <hr className="text-slate-400" />
                <div className="space-y-4">
                    <div className="w-full space-y-2">
                        <InputField
                            ref={nameRef}
                            type="text"
                            placeholder="Token Name"
                            label="Token Name"
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <InputField
                            ref={symbolRef}
                            type="text"
                            placeholder="Token Symbol"
                            label="Token Symbol"
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <InputField
                            ref={uriRef}
                            type="text"
                            placeholder="Metadata URL"
                            label="Metadata Uri"
                        />
                    </div>
                    <div className="w-full space-y-2">
                        <InputField
                            ref={supplyRef}
                            type="number"
                            placeholder="Initial supply"
                            label="Initial Supply"
                        />
                    </div>
                    <GenericButton
                        onClick={handleCreateToken}
                        fullWidth
                        actionType="Create"
                    >
                        Create a Token
                    </GenericButton>
                </div>
            </div>

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

export default LaunchToken;
