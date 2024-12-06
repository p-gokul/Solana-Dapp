"use client";

import { useNotification } from "@/app/hooks/useNotifications";
import { TokenInfo, useTokens } from "@/app/hooks/useTokens";
import {
    ASSOCIATED_TOKEN_PROGRAM_ID,
    createAssociatedTokenAccountInstruction,
    createTransferInstruction,
    getAssociatedTokenAddress,
    TOKEN_2022_PROGRAM_ID,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useState } from "react";
import Modal from "react-modal";
import Notification from "../Nofitication";
import GenericButton from "../UI/Button";

const TransferTokenPage = () => {
    const tokens = useTokens(true); // Fetch tokens with metadata if needed
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState<TokenInfo | null>(null);
    const [transferAmount, setTransferAmount] = useState<string>("");
    const [recipientAddress, setRecipientAddress] = useState<string>("");

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    if (!publicKey) return <div>Please connect your wallet.</div>;

    const openModal = (token: TokenInfo) => {
        setSelectedToken(token);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedToken(null);
        setTransferAmount("");
        setRecipientAddress("");
        setModalIsOpen(false);
    };

    const handleTransfer = async () => {
        if (!publicKey || !selectedToken) {
            alert("Wallet not connected or token not selected!");
            return;
        }

        if (!recipientAddress) {
            alert("Recipient address is empty!");
            return;
        }

        try {
            const mint = new PublicKey(selectedToken.mintAddress);
            const senderTokenAccount = new PublicKey(
                selectedToken.tokenAccountAddress,
            );
            const recipientPublicKey = new PublicKey(recipientAddress);

            // Get recipient's associated token account address
            const recipientTokenAccountAddress =
                await getAssociatedTokenAddress(
                    mint,
                    recipientPublicKey,
                    false,
                    TOKEN_2022_PROGRAM_ID,
                    ASSOCIATED_TOKEN_PROGRAM_ID,
                );

            const transaction = new Transaction();

            // Check if recipient's token account exists
            const accountInfo = await connection.getAccountInfo(
                recipientTokenAccountAddress,
            );
            if (!accountInfo) {
                // Add instruction to create associated token account
                const createATAInstruction =
                    createAssociatedTokenAccountInstruction(
                        publicKey, // Payer
                        recipientTokenAccountAddress, // Associated token account
                        recipientPublicKey, // Owner
                        mint,
                        TOKEN_2022_PROGRAM_ID,
                        ASSOCIATED_TOKEN_PROGRAM_ID,
                    );
                transaction.add(createATAInstruction);
            }

            const amount =
                parseFloat(transferAmount) * 10 ** selectedToken.decimals;

            // Create transfer instruction
            const transferInstruction = createTransferInstruction(
                senderTokenAccount, // Source account
                recipientTokenAccountAddress, // Destination account
                publicKey, // Owner (signer)
                amount,
                [],
                TOKEN_2022_PROGRAM_ID,
            );

            transaction.add(transferInstruction);

            // Send transaction
            const signature = await sendTransaction(transaction, connection);
            // Show success notification
            showNotification(
                `${transferAmount} Tokens transferred !!`,
                signature,
            );

            closeModal();
        } catch (_error) {
            alert("Error transferring tokens:");
        }
    };

    return (
        <div className="flex flex-col">
            <h2 className="mx-auto text-2xl">Token Transfer Page</h2>
            {tokens.length === 0 ? (
                <div>No Tokens found</div>
            ) : (
                <div className="grid w-full grid-cols-2">
                    {tokens.map((token) => (
                        <div
                            className="flex justify-center rounded-xl p-6"
                            key={token.accountPubkey}
                        >
                            <div className="max-w-lg space-y-2 rounded-xl bg-slate-900 p-4">
                                <div>Name: {token.metadata?.name} </div>
                                <div>
                                    Symbol:
                                    {token.metadata?.symbol || "Undefined"}
                                </div>
                                <div>Amount: {token.tokenAmount}</div>
                                <div className="flex flex-row">
                                    <div className="truncate">
                                        {`Token Account Address: ${token.accountPubkey}`}
                                    </div>
                                </div>
                                <GenericButton
                                    onClick={() => openModal(token)}
                                    actionType="Transfer"
                                    param={token}
                                >
                                    Transfer Token
                                </GenericButton>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black/50 z-40"
            >
                <div className="z-50 flex w-full max-w-md flex-col space-y-4 rounded-xl bg-slate-900 p-6 text-white shadow-lg">
                    <h2 className="mx-auto mb-4 text-xl font-semibold">
                        Transfer Tokens
                    </h2>
                    <hr className="text-green-300" />
                    {selectedToken && (
                        <>
                            <p className="mb-2">
                                <strong>Token Name:</strong>{" "}
                                {selectedToken.metadata?.name || "Undefined"}
                            </p>
                            <p className="mb-2">
                                <strong>Symbol:</strong>{" "}
                                {selectedToken.metadata?.symbol || "Undefined"}
                            </p>
                            <p className="mb-4">
                                <strong>Current Supply:</strong>{" "}
                                {selectedToken.tokenAmount || "Undefined"}
                            </p>
                            <label className="mb-4 block">
                                <span className="text-sm">
                                    Recipient Address:
                                </span>
                                <input
                                    type="text"
                                    placeholder="Recipient Address"
                                    value={recipientAddress}
                                    onChange={(e) =>
                                        setRecipientAddress(e.target.value)
                                    }
                                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </label>
                            <label className="mb-4 block">
                                <span className="text-sm">Token Amount:</span>
                                <input
                                    type="number"
                                    value={transferAmount}
                                    onChange={(e) =>
                                        setTransferAmount(e.target.value)
                                    }
                                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </label>
                            <div className="flex justify-between">
                                <GenericButton
                                    onClick={handleTransfer}
                                    actionType="Transfer"
                                >
                                    Transfer
                                </GenericButton>
                                <GenericButton
                                    onClick={closeModal}
                                    actionType="Cancel"
                                >
                                    Cancel
                                </GenericButton>
                            </div>
                        </>
                    )}
                </div>
            </Modal>

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

export default TransferTokenPage;
