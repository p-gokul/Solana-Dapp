// MintTokenPage.tsx

"use client";

import { useNotification } from "@/app/hooks/useNotifications";
import { TokenInfo, useTokens } from "@/app/hooks/useTokens";
import {
    TOKEN_2022_PROGRAM_ID,
    createBurnInstruction,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useState } from "react";
import Modal from "react-modal";
import Notification from "../Nofitication";
import GenericButton from "../UI/Button";

const BurnTokenPage = () => {
    const tokens = useTokens(true); // Fetch tokens without metadata
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState<TokenInfo | null>(null);
    const [burnAmount, setBurnAmount] = useState<string>("");

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    const openModal = (token: TokenInfo) => {
        setSelectedToken(token);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedToken(null);
        setBurnAmount("");
        setModalIsOpen(false);
    };

    const handleBurn = async () => {
        if (!publicKey || !selectedToken) {
            alert("Wallet not connected or token not selected!");
            return;
        }

        try {
            const mintPubkey = new PublicKey(selectedToken.mintAddress);
            const ATA = new PublicKey(selectedToken.tokenAccountAddress);

            const amountToBurn =
                parseFloat(burnAmount) * 10 ** selectedToken.decimals;

            const transaction = new Transaction().add(
                createBurnInstruction(
                    ATA,
                    mintPubkey,
                    publicKey,
                    amountToBurn,
                    [],
                    TOKEN_2022_PROGRAM_ID,
                ),
            );

            const signature = await sendTransaction(transaction, connection);

            // Show success notification
            showNotification(`${burnAmount} Token Burned !!`, signature);

            closeModal();
        } catch (_error) {
            alert("Error burning tokens:");
        }
    };

    return (
        <div className="flex flex-col">
            <h2 className="mx-auto text-2xl">Token Burning Page</h2>
            {tokens.length === 0 ? (
                <div>No tokens found.</div>
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
                                    actionType="Normal"
                                    onClick={() => openModal(token)}
                                    param={token}
                                >
                                    Burn Token
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
                        Burn Tokens
                    </h2>
                    <hr className="text-green-300" />

                    {selectedToken && (
                        <>
                            <p className="mb-2">
                                <strong>Token Name:</strong>{" "}
                                {selectedToken.metadata?.name}
                            </p>
                            <p className="mb-4">
                                <strong>Current Supply:</strong>{" "}
                                {selectedToken.tokenAmount}
                            </p>
                            <label className="mb-4 block">
                                <span className="text-sm">Amount to Burn:</span>
                                <input
                                    type="number"
                                    value={burnAmount}
                                    onChange={(e) =>
                                        setBurnAmount(e.target.value)
                                    }
                                    className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                />
                            </label>
                            <div className="flex justify-between">
                                <GenericButton
                                    onClick={handleBurn}
                                    actionType="Burn"
                                >
                                    Burn
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

export default BurnTokenPage;
