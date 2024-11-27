"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useTokens, TokenInfo } from "./FetchTokens";
import {
  TOKEN_2022_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
} from "@solana/spl-token";
import Modal from "react-modal";
import { useState } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";

const TransferTokenPage = () => {
  const tokens = useTokens(true); // Fetch tokens with metadata if needed
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenInfo | null>(null);
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [recipientAddress, setRecipientAddress] = useState<string>("");

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
      console.error("Wallet not connected or token not selected!");
      return;
    }

    if (!recipientAddress) {
      console.error("Recipient address is empty!");
      return;
    }

    try {
      const mint = new PublicKey(selectedToken.mintAddress);
      const senderTokenAccount = new PublicKey(
        selectedToken.tokenAccountAddress
      );
      const recipientPublicKey = new PublicKey(recipientAddress);

      // Get recipient's associated token account address
      const recipientTokenAccountAddress = await getAssociatedTokenAddress(
        mint,
        recipientPublicKey,
        false,
        TOKEN_2022_PROGRAM_ID,
        ASSOCIATED_TOKEN_PROGRAM_ID
      );

      const transaction = new Transaction();

      // Check if recipient's token account exists
      const accountInfo = await connection.getAccountInfo(
        recipientTokenAccountAddress
      );
      if (!accountInfo) {
        // Add instruction to create associated token account
        const createATAInstruction = createAssociatedTokenAccountInstruction(
          publicKey, // Payer
          recipientTokenAccountAddress, // Associated token account
          recipientPublicKey, // Owner
          mint,
          TOKEN_2022_PROGRAM_ID,
          ASSOCIATED_TOKEN_PROGRAM_ID
        );
        transaction.add(createATAInstruction);
      }

      const amount =
        parseFloat(transferAmount) * Math.pow(10, selectedToken.decimals);

      // Create transfer instruction
      const transferInstruction = createTransferInstruction(
        senderTokenAccount, // Source account
        recipientTokenAccountAddress, // Destination account
        publicKey, // Owner (signer)
        amount,
        [],
        TOKEN_2022_PROGRAM_ID
      );

      transaction.add(transferInstruction);

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      console.log(`Transaction successful! Signature: ${signature}`);

      closeModal();
    } catch (error) {
      console.error("Error transferring tokens:", error);
    }
  };

  return (
    <div>
      <h2>Token Transfer Page</h2>
      {tokens.length === 0 ? (
        <div>No Tokens found</div>
      ) : (
        <div>
          {tokens.map((token) => (
            <li key={token.mintAddress}>
              <div>
                <strong>Mint Address:</strong> {token.mintAddress}
              </div>
              <div>
                <strong>Token Account Address:</strong>{" "}
                {token.tokenAccountAddress}
              </div>
              <div>
                <strong>Amount:</strong> {token.tokenAmount}
              </div>
              <button onClick={() => openModal(token)}>Transfer Token</button>
              <hr />
            </li>
          ))}
        </div>
      )}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="ml-60 mt-20">
          <h2>Transfer Tokens</h2>
          {selectedToken && (
            <>
              <p>
                <strong>Mint Address:</strong> {selectedToken.mintAddress}
              </p>
              <p>
                <strong>Token Name:</strong>{" "}
                {selectedToken.metadata?.name || "Undefined"}
              </p>
              <p>
                <strong>Symbol:</strong>{" "}
                {selectedToken.metadata?.symbol || "Undefined"}
              </p>
              <p>
                <strong>Available Amount:</strong>{" "}
                {selectedToken.tokenAmount || "Undefined"}
              </p>
              <label>
                Recipient Address:
                <input
                  type="text"
                  placeholder="Recipient Address"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                />
              </label>
              <br />
              <label>
                Token Amount:
                <input
                  type="number"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                />
              </label>
              <br />
              <button onClick={handleTransfer}>Transfer Token</button>
              <button onClick={closeModal}>Cancel</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default TransferTokenPage;
