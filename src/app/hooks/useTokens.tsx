"use client";

import { TOKEN_2022_PROGRAM_ID, getTokenMetadata } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";

export interface TokenInfo {
    accountPubkey: string;
    mintAddress: string;
    tokenAmount: string;
    decimals: number;
    tokenAccountAddress: string;
    metadata?: {
        name: string;
        symbol: string;
    };
}

export const useTokens = (includeMetadata: boolean = false) => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [tokens, setTokens] = useState<TokenInfo[]>([]);

    useEffect(() => {
        if (!publicKey) {
            return;
        }

        const fetchTokens = async () => {
            try {
                const response = await connection.getParsedTokenAccountsByOwner(
                    publicKey,
                    {
                        programId: TOKEN_2022_PROGRAM_ID,
                    },
                );

                const tokenAccounts = response.value;

                const tokensInfo = await Promise.all(
                    tokenAccounts.map(async (tokenAccount) => {
                        const accountPubkey = tokenAccount.pubkey.toBase58();
                        const parsedInfo =
                            tokenAccount.account.data.parsed.info;
                        const mintAddress = parsedInfo.mint;
                        const tokenAmount =
                            parsedInfo.tokenAmount.uiAmountString;
                        const decimals = parsedInfo.tokenAmount.decimals;
                        const tokenAccountAddress = accountPubkey;

                        let metadata;
                        if (includeMetadata) {
                            metadata = {
                                name: "Undefined",
                                symbol: "Undefined",
                            };
                            try {
                                const metadataPointer = await getTokenMetadata(
                                    connection,
                                    new PublicKey(mintAddress),
                                );
                                if (metadataPointer) {
                                    metadata = {
                                        name:
                                            metadataPointer.name || "Undefined",
                                        symbol:
                                            metadataPointer.symbol ||
                                            "Undefined",
                                    };
                                }
                            } catch (_err) {
                                alert(
                                    `No metadata found for mint: ${mintAddress}`,
                                );
                            }
                        }

                        const tokenInfo: TokenInfo = {
                            accountPubkey,
                            mintAddress,
                            tokenAmount,
                            decimals,
                            tokenAccountAddress,
                        };
                        if (metadata) {
                            tokenInfo.metadata = metadata;
                        }
                        return tokenInfo;
                    }),
                );

                setTokens(tokensInfo);
            } catch (_error) {
                alert("Error fetching tokens:");
            }
        };

        fetchTokens();
    }, [publicKey, connection, includeMetadata]);

    return tokens;
};
