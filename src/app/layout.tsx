import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/Navbar";
import Provider from "./components/Provider";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Solana Dapp",
    description: "Solana Token and NFT Ecosystem",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
            >
                <Provider>
                    <NavBar />

                    <div
                        style={{
                            position: "relative",
                            top: "8%",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            overflow: "auto", // To handle scrolling if content is large
                        }}
                    >
                        {children}
                    </div>
                </Provider>
            </body>
        </html>
    );
}
