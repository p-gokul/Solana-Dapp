import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  TransactionInstruction,
} from "@solana/web3.js";
import { useRef } from "react";
import { isValidAddress } from "../utils";

const TransferBalance = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const memoRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  if (!publicKey) return;

  // Send Transaction Function
  const handleTransfer = async () => {
    const recipientAddress = addressRef.current?.value || "";
    const transferAmount = parseFloat(amountRef.current?.value || "0");
    const memo = memoRef.current?.value || "";

    // Validate recipient address
    if (!isValidAddress(recipientAddress)) {
      console.error("Invalid recipient address.");
      alert("Please enter a valid recipient address.");
      return;
    }

    try {
      // Validate transfer amount
      if (isNaN(transferAmount) || transferAmount <= 0) {
        console.error("Invalid transfer amount.");
        alert("Please enter a valid transfer amount greater than 0.");
        return;
      }

      const transaction = new Transaction();
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(recipientAddress),
          lamports: transferAmount * LAMPORTS_PER_SOL,
        })
      );

      if (memo) {
        const memoInstruction = new TransactionInstruction({
          keys: [],
          programId: new PublicKey(
            "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
          ),
          data: Buffer.from(memo),
        });

        transaction.add(memoInstruction);
      }

      const signature = await sendTransaction(transaction, connection);
      const confirmation = await connection.confirmTransaction(
        signature,
        "finalized"
      );
      console.log("Transaction successful, signature:", confirmation);
      alert(`Transaction successful! Signature: ${confirmation}`);
    } catch (error) {
      console.error("Error during transaction:", error);
      alert("Transaction failed. Please check the console for details.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Recipient Address"
        ref={addressRef}
      />
      <input
        type="number"
        placeholder="Enter Transfer Amount"
        ref={amountRef}
      />
      <input type="text" placeholder="Enter Memo" ref={memoRef} />
      <button onClick={handleTransfer}>Send Transaction</button>
    </div>
  );
};

export default TransferBalance;
