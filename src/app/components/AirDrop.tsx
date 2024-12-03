import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
    CircleCheckBig,
    ClipboardIcon,
    EyeIcon,
    EyeOffIcon,
    Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AirDrop: React.FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const airdropAmountRef = useRef<HTMLInputElement>(null);
    const [balance, setBalance] = useState<number | null>(null);
    const [copied, setCopied] = useState(false); // State for copied status

    const [showBalance, setShowBalance] = useState(false);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                if (!publicKey) return <div>Please Connect Wallet...</div>;
                const bal = await connection.getBalance(publicKey);
                setBalance(bal / LAMPORTS_PER_SOL);
            } catch (_error) {
                alert("Something went wrong.");
            }
        };
        fetchBalance();
    }, [publicKey, connection]);

    if (!publicKey) return;

    // Request Airdrop Function
    const requestAirDrop = async () => {
        try {
            const airdropAmount = parseFloat(
                airdropAmountRef.current?.value || "0",
            ); // Access the ref value and parse it to a float
            if (Number.isNaN(airdropAmount) || airdropAmount <= 0) {
                alert("Invalid airdrop amount");
                return;
            }

            const airDropSignature = await connection.requestAirdrop(
                publicKey,
                airdropAmount * LAMPORTS_PER_SOL,
            );
            await connection.confirmTransaction(airDropSignature);
            alert("Airdrop successful!");
        } catch (_error) {
            alert("Something went wrong");
        }
    };
    const copyAddress = () => {
        navigator.clipboard.writeText(publicKey.toBase58());
        setCopied(true); // Set copied state to true
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 2 seconds
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-md rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm">
                <div className="space-y-6">
                    <h1 className="mb-8 text-center text-2xl font-semibold text-white">
                        Wallet
                    </h1>
                    <hr className="text-green-400" />

                    <div className="space-y-4">
                        {/* Wallet Address */}
                        <div className="relative space-y-2">
                            <label className="pl-2 text-xl">Address: </label>

                            <div className="flex items-center rounded-lg border border-zinc-800 bg-black/30 px-4 py-3 text-zinc-400">
                                <span className="flex-1 truncate">
                                    {publicKey.toBase58()}
                                </span>
                                <button
                                    onClick={copyAddress}
                                    className="ml-2 text-zinc-500 transition-colors hover:text-white"
                                >
                                    {copied ? (
                                        <CircleCheckBig className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <ClipboardIcon className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Balance */}
                        <div className="relative space-y-2">
                            <label className="pl-2 text-xl">Balance: </label>
                            <div className="flex items-center rounded-lg border border-zinc-800 bg-black/30 px-4 py-3 text-zinc-400">
                                <span className="flex-1">
                                    {showBalance ? balance : "••••••••••••••"}
                                </span>
                                <button
                                    onClick={() => setShowBalance(!showBalance)}
                                    className="ml-2 text-zinc-500 transition-colors hover:text-white"
                                >
                                    {showBalance ? (
                                        <EyeOffIcon className="h-4 w-4" />
                                    ) : (
                                        <EyeIcon className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Sign Message */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    placeholder="Enter SOL amount"
                                    ref={airdropAmountRef}
                                    min="0.1"
                                    step="0.1"
                                    max="5"
                                    className="flex-1 rounded-lg border border-zinc-800 bg-black/30 px-4 py-2.5 text-white placeholder:text-zinc-600 focus:border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                                />
                            </div>
                        </div>

                        {/* Airdrop Button */}
                        <button
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800/50 px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-700/50"
                            onClick={requestAirDrop}
                        >
                            <Plus className="h-4 w-4" />
                            Airdrop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirDrop;
