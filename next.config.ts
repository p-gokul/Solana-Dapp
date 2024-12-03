import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: "dist",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allow all hostnames
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during build
    },
};

export default nextConfig;
