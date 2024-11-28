"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";

export function NavBar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-semibold text-purple-600">
          Cool
          <span className="relative inline-block w-4 h-4 mx-1 bg-purple-600" />
          App
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/token"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Token
          </Link>
          <Link
            href="/nft-metadata"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            NFT ( spl-token )
          </Link>
          <Link
            href="/goodies"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            NFT ( Metaplex )
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            DEX
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Token Incineration
          </Link>
          <div className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <WalletMultiButton />
          </div>
          <div className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <WalletDisconnectButton>Disconnect</WalletDisconnectButton>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
