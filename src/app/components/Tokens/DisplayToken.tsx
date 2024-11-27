"use client";
import { TOKEN_2022_PROGRAM_ID, getTokenMetadata } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

interface TokenWithMetadata {
  accountPubkey: string;
  mintAddress: string;
  tokenAmount: string;
  metadata: {
    name: string;
    symbol: string;
  };
}

const DisplayTokenPage = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [tokensWithMetadata, setTokensWithMetadata] = useState<
    TokenWithMetadata[]
  >([]);

  useEffect(() => {
    if (!publicKey) {
      return;
    }

    const getTokens = async () => {
      try {
        // Fetch token accounts using the parsed version for easier data handling
        const response = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          {
            programId: TOKEN_2022_PROGRAM_ID,
          }
        );

        const tokenAccounts = response.value;

        // Fetch metadata for each token
        const tokensWithMetadata = await Promise.all(
          tokenAccounts.map(async (tokenAccount) => {
            const accountPubkey = tokenAccount.pubkey.toBase58();
            const parsedInfo = tokenAccount.account.data.parsed.info;
            const mintAddress = parsedInfo.mint;
            const tokenAmount = parsedInfo.tokenAmount.uiAmountString;

            // Attempt to fetch metadata
            let metadata = { name: "Undefined", symbol: "Undefined" };
            try {
              const metadataPointer = await getTokenMetadata(
                connection,
                new PublicKey(mintAddress)
              );
              if (metadataPointer) {
                metadata = {
                  name: metadataPointer.name || "Undefined",
                  symbol: metadataPointer.symbol || "Undefined",
                };
              }
            } catch (err) {
              console.warn(`No metadata found for mint: ${mintAddress}`, err);
            }

            return {
              accountPubkey,
              mintAddress,
              tokenAmount,
              metadata,
            };
          })
        );

        setTokensWithMetadata(tokensWithMetadata);
      } catch (err) {
        console.error("Error fetching token accounts:", err);
      }
    };

    getTokens();
  }, [publicKey, connection]);

  if (!publicKey)
    return <div>Please connect your wallet to see your tokens.</div>;

  return (
    <div>
      <h2>Display Token Page</h2>
      {tokensWithMetadata.length === 0 ? (
        <div>No tokens found.</div>
      ) : (
        <ul>
          {tokensWithMetadata.map((token) => (
            <li key={token.accountPubkey}>
              <div>
                <strong>Token Account Address:</strong> {token.accountPubkey}
              </div>
              <div>
                <strong>Mint Address:</strong> {token.mintAddress}
              </div>
              <div>
                <strong>Amount:</strong> {token.tokenAmount}
              </div>
              <div>
                <strong>Name:</strong> {token.metadata.name}
              </div>
              <div>
                <strong>Symbol:</strong> {token.metadata.symbol}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayTokenPage;
