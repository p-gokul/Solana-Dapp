"use client";

import {
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
    return (
        <motion.header
            className="fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="text-xl font-semibold text-purple-600"
                >
                    Cool
                    <span className="relative mx-1 inline-block h-4 w-4 bg-purple-600" />
                    App
                </Link>

                <div className="flex items-center space-x-6">
                    <Link
                        href="/token"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        Token
                    </Link>
                    <Link
                        href="/nft-token-metadata"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        NFT ( Metaplex - Token Metadata )
                    </Link>
                    <Link
                        href="/nft-core"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        NFT ( Metaplex - Core )
                    </Link>
                    <Link
                        href="/dex"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        DEX
                    </Link>
                    <Link
                        href="/blogs"
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        Blogs
                    </Link>
                    <div className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                        <WalletMultiButton />
                    </div>
                    <div className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                        <WalletDisconnectButton>
                            Disconnect
                        </WalletDisconnectButton>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
}
