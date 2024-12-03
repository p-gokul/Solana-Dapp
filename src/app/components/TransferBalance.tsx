"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
    TransactionInstruction,
} from "@solana/web3.js";
import { useRef, useState } from "react";
import { useNotification } from "../hooks/useNotifications";
import isValidAddress from "../utils";
import Notification from "./Nofitication";

const TransferBalance = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const memoRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(false);

    const {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    } = useNotification();

    if (!publicKey) return null;

    const handleTransfer = async () => {
        const recipientAddress = addressRef.current?.value || "";
        const transferAmount = parseFloat(amountRef.current?.value || "0");
        const memo = memoRef.current?.value || "";

        if (!publicKey) return;

        if (!isValidAddress(recipientAddress)) {
            alert("Please enter a valid recipient address.");
            return;
        }

        try {
            if (Number.isNaN(transferAmount) || transferAmount <= 0) {
                alert("Please enter a valid transfer amount greater than 0.");
                return;
            }

            setLoading(true);

            const transaction = new Transaction();
            transaction.add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: new PublicKey(recipientAddress),
                    lamports: transferAmount * LAMPORTS_PER_SOL,
                }),
            );

            if (memo) {
                const memoInstruction = new TransactionInstruction({
                    keys: [],
                    programId: new PublicKey(
                        "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
                    ),
                    data: Buffer.from(memo),
                });

                transaction.add(memoInstruction);
            }

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, "finalized");

            // Show success notification
            showNotification("Transaction successful!", signature);

            // Clear the input fields
            if (addressRef.current) addressRef.current.value = "";
            if (amountRef.current) amountRef.current.value = "";
            if (memoRef.current) memoRef.current.value = "";
        } catch (error) {
            console.error("Transaction failed:", error);
            // Show failure notification
            showNotification("Transaction failed. Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-lg space-y-2 rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-6">
                <div>
                    <h1 className="mb-8 text-center text-2xl font-semibold text-white">
                        Transfer SOL
                    </h1>

                    <hr className="text-green-400" />
                </div>

                <div className="flex flex-col space-y-4 pt-4">
                    <div className="space-y-2">
                        <label className="pl-2">
                            Enter Recipient Address:{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipient Address"
                            ref={addressRef}
                            className="w-full rounded-lg border border-zinc-800 bg-black/30 px-2 py-3"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="pl-2">
                            Enter Transfer Amount:{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="number"
                            placeholder="Enter Transfer Amount"
                            ref={amountRef}
                            className="mb-4 w-full rounded-lg border border-zinc-800 bg-black/30 px-2 py-3"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="pl-2">Enter Memo:</label>

                        <input
                            type="text"
                            placeholder="Enter Memo"
                            ref={memoRef}
                            className="mb-4 w-full rounded-lg border border-zinc-800 bg-black/30 px-2 py-3"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleTransfer}
                        className="mx-auto w-full items-center justify-center gap-2 rounded-lg bg-zinc-800/50 px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-700/50"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Send Transaction"}
                    </button>
                </div>
            </div>

            {/* Render Notification */}
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

export default TransferBalance;
