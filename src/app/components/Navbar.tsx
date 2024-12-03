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
        { href: "/dex", label: "DEX" },
        { href: "/blogs", label: "Blogs" },
    ];

    return (
        <motion.header
            className="fixed left-0 right-0 top-1 z-50 rounded-full bg-[#385170] text-white backdrop-blur-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
            <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                <div>
                    <Link
                        href="/"
                        className="text-xl font-semibold text-purple-600"
                    >
                        Cool
                        <span className="relative mx-1 inline-block h-4 w-4 bg-purple-600" />
                        App
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Map over the navLinks array */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-2xl bg-[#3c4245] p-3 text-sm font-medium text-white transition-colors hover:text-gray-900"
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
