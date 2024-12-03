"use client";

import {
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
    // Array of links
    const navLinks = [
        { href: "/token", label: "Token" },
        { href: "/nft-token-metadata", label: "NFT ( MPL - Token Metadata )" },
        { href: "/nft-core", label: "NFT ( MPL - Core )" },
    ];

    return (
        <motion.header
            className="fixed left-0 right-0 top-1 z-50 rounded-full bg-[#3a4750] text-white backdrop-blur-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                <div>
                    <Link
                        href="/"
                        className="bg-gradient-to-r from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF] bg-clip-text text-xl font-semibold text-transparent"
                    >
                        Solana Dapp
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Map over the navLinks array */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-2xl bg-[#32373a] p-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-900 hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="text-sm font-medium text-white transition-colors hover:text-gray-900">
                        <WalletMultiButton />
                    </div>
                    <div className="text-sm font-medium text-white transition-colors hover:text-gray-900">
                        <WalletDisconnectButton>
                            Disconnect
                        </WalletDisconnectButton>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
}
