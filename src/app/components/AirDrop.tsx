import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef } from "react";

const AirDrop: React.FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    //   const [airdropAmount,setAirdropAmount]=useState<number>(1);
    const airdropAmountRef = useRef<HTMLInputElement>(null);

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
            // console.error("Error during airdrop", error);
            alert("Something went wrong");
        }
    };

    return (
        <div>
            <input
                type="number"
                ref={airdropAmountRef}
                placeholder="Enter SOL amount"
                min="0"
                step="0.1"
                max="5"
            />
            <button type="button" onClick={requestAirDrop}>
                AirDrop
            </button>
        </div>
    );
};

export default AirDrop;
