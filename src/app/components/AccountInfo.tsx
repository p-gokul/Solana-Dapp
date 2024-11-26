"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { LAMPORTS_PER_SOL, AccountInfo } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const AccountInfo = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!publicKey) return <div>Please Connect Wallet...</div>;
        const bal = await connection.getBalance(publicKey);
        setBalance(bal / LAMPORTS_PER_SOL);
      } catch (error) {
        console.log("Error fetching balance", error);
      }
    };
    fetchBalance();
  }, [publicKey, connection]);

  if (!publicKey) return <div>Please Connect Wallet...</div>;
  return (
    <div className="mt-20">
      <div>Account Details ::</div>
      <div>Public Key :: {publicKey.toBase58()}</div>
      <div>Balance:: {balance}</div>
    </div>
  );
};

export default AccountInfo;
