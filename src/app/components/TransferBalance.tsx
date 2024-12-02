import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
    TransactionInstruction,
} from "@solana/web3.js";
import { useRef, useState } from "react";
import isValidAddress from "../utils";
// import Notification from "../components/Notification";
import Notification from "./Nofitication";

const TransferBalance = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const memoRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);

    // Notification props
    const [notify, setNotify] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [transactionSignature, setTransactionSignature] = useState<
        string | undefined
    >(undefined);

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

            // Set notification props for success
            setNotificationMessage("Transaction successful!");
            setTransactionSignature(signature);
            setNotify(true);
        } catch (_error) {
            // Set notification props for failure
            setNotificationMessage("Transaction failed. Something went wrong.");
            setTransactionSignature(undefined);
            setNotify(true);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <input
                type="text"
                placeholder="Enter Recipient Address"
                ref={addressRef}
                className="mb-4 w-full rounded-md border px-2 py-1"
            />
            <input
                type="number"
                placeholder="Enter Transfer Amount"
                ref={amountRef}
                className="mb-4 w-full rounded-md border px-2 py-1"
            />
            <input
                type="text"
                placeholder="Enter Memo"
                ref={memoRef}
                className="mb-4 w-full rounded-md border px-2 py-1"
            />
            <button
                type="button"
                onClick={handleTransfer}
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Send Transaction
            </button>

            {/* Render Notification */}
            {notify && (
                <Notification
                    message={notificationMessage}
                    transactionSignature={transactionSignature}
                    notify={notify}
                    onClose={() => setNotify(false)}
                />
            )}
        </div>
    );
};

export default TransferBalance;
