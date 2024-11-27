"use client";

import { useTokens, TokenInfo } from "./FetchTokens";
import { createTransferInstruction } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useState } from "react";
import Modal from "react-modal";

const DelegateTokenPage = () => {
  const tokens = useTokens();
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
    setRecipientAddress("");
    setModalIsOpen(false);
  };

  const handleDelegate = async () => {
    if (!publicKey || !selectedToken) {
      console.error("Wallet not connected or token not selected!");
      return;
    }
    if (!recipientAddress) {
      alert("Recipient address is empty!");
      return;
    }
    try {
      const recipientPublicKey = new PublicKey(recipientAddress);
      const transaction = new Transaction();
      const amount =
        parseFloat(delegateAmount) * Math.pow(10, selectedToken.decimals);
      const transactionSignature = await createTransferInstruction(
        publicKey,
        recipientPublicKey,
        publicKey,
        amount
      );

      transaction.add(transactionSignature);

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      console.log(`Transaction successful! Signature: ${signature}`);

      closeModal();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <div>
      <div> Token Delegate Page </div>
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
              <button onClick={() => openModal(token)}>Delegate Token</button>
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
                <strong>Token Name:</strong>
                {selectedToken.metadata?.name || "Undefined"}
              </p>
              <p>
                <strong>Symbol:</strong>
                {selectedToken.metadata?.symbol || "Undefined"}
              </p>
              <p>
                <strong>Available Amount:</strong>
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
                  value={delegateAmount}
                  onChange={(e) => setDelegateAmount(e.target.value)}
                />
              </label>
              <br />
              <button onClick={handleDelegate}>Transfer Token</button>
              <button onClick={closeModal}>Cancel</button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default DelegateTokenPage;
