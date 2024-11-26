"use client";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { useEffect, useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";
import { NavBar } from "./components/Navbar";
import HomePage from "./components/AccountInfo";
import AirDrop from "./components/AirDrop";
import TransferBalance from "./components/TransferBalance";

export default function Home() {
  const endpoint = clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  useEffect(() => {}, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <NavBar />
          <HomePage />
          <AirDrop />
          <TransferBalance />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
