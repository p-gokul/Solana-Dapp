import { PublicKey } from "@solana/web3.js";

const isValidAddress = (address: string) => {
    try {
        new PublicKey(address);
        return true;
    } catch (_e) {
        return false;
    }
};

export default isValidAddress;
