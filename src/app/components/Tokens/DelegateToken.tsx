// MintTokenPage.tsx

"use client";

import { useTokens, TokenInfo } from "./FetchTokens";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import {
  TOKEN_2022_PROGRAM_ID,
  createApproveInstruction,
} from "@solana/spl-token";
import { useState } from "react";
import Modal from "react-modal";

const DelegateTokenPage = () => {
  const tokens = useTokens(); // Fetch tokens without metadata
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenInfo | null>(null);
  const [delegateAmount, setDelegateAmount] = useState<string>("");
  const [recipientAddress, setRecipientAddress] = useState<string>("");

  const openModal = (token: TokenInfo) => {
    setSelectedToken(token);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedToken(null);
    setDelegateAmount("");
    setModalIsOpen(false);
  };

  const handleDelegate = async () => {
    if (!publicKey || !selectedToken) {
      console.error("Wallet not connected or token not selected!");
      return;
    }

    try {
      // const mintPubkey = new PublicKey(selectedToken.mintAddress);
      const ATA = new PublicKey(selectedToken.tokenAccountAddress);
      const recipientPublicKey = new PublicKey(recipientAddress);

      const amountToDelegate =
        parseFloat(delegateAmount) * Math.pow(10, selectedToken.decimals);

      const transaction = new Transaction().add(
        createApproveInstruction(
          ATA,
          recipientPublicKey,
          publicKey,
          amountToDelegate,
          [],
          TOKEN_2022_PROGRAM_ID
        )
      );

      const signature = await sendTransaction(transaction, connection);
      console.log(`Transaction successful! Signature: ${signature}`);

      closeModal();
    } catch (error) {
      console.error("Error delegating tokens:", error);
    }
  };

  return (
    <div>
      <h2>Token Delegation Page</h2>
      {tokens.length === 0 ? (
        <div>No tokens found.</div>
      ) : (
        <ul>
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
              <button onClick={() => openModal(token)}>Delegate Token</button>
              <hr />
            </li>
          ))}
        </ul>
      )}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="ml-60 mt-20">
          <h2>Delegate Tokens</h2>
          {selectedToken && (
            <>
              <p>
                <strong>Mint Address:</strong> {selectedToken.mintAddress}
              </p>
              <p>
                <strong>Associated Token Account Address:</strong>{" "}
                {selectedToken.tokenAccountAddress}
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
              <label>
                Amount to Delegate:
                <input
                  type="number"
                  value={delegateAmount}
                  onChange={(e) => setDelegateAmount(e.target.value)}
                />
              </label>
              <button onClick={handleDelegate}>Delegate Token</button>
              <button onClick={closeModal}>Cancel</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default DelegateTokenPage;
