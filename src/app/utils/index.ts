import { PublicKey } from "@solana/web3.js";

const isValidAddress = (address: string) => {
  try {
    new PublicKey(address);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { isValidAddress };
