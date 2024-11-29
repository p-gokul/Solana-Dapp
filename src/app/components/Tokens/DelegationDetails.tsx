import { TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import { useState } from "react";

const DelegationDetails = () => {
    // State to store delegation details
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [delegationDetails, setDelegationDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [delegateAddress, setDelegateAddress] = useState<string>("");
    const [hasSearched, setHasSearched] = useState<boolean>(false); // Tracks if the search has been performed

    const findDelegate = async () => {
        setLoading(true);
        setError(null);
        setHasSearched(true); // Mark that the search has been initiated

        try {
            const response = await fetch("https://api.devnet.solana.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    jsonrpc: "2.0",
                    id: 1,
                    method: "getTokenAccountsByDelegate",
                    params: [
                        delegateAddress, // Delegate address input by the user
                        {
                            programId: TOKEN_2022_PROGRAM_ID,
                        },
                        {
                            encoding: "jsonParsed",
                        },
                    ],
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();

            if (json.error) {
                throw new Error(json.error.message);
            }

            // Set the delegation details
            setDelegationDetails(json.result.value);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Delegation Details Finder</h2>

            <div>
                <label htmlFor="delegateAddress">
                    <strong>Delegate Address:</strong>
                </label>
                <input
                    type="text"
                    id="delegateAddress"
                    value={delegateAddress}
                    onChange={(e) => setDelegateAddress(e.target.value)}
                    placeholder="Enter Delegate Address"
                />
                <button
                    type="button"
                    onClick={findDelegate}
                    disabled={loading || !delegateAddress}
                >
                    {loading ? "Searching..." : "Find Delegated Amount"}
                </button>
            </div>

            {hasSearched && error && (
                <p style={{ color: "red" }}>Error: {error}</p>
            )}
            {hasSearched &&
                !loading &&
                !error &&
                delegationDetails.length === 0 && (
                    <p>No delegation details found for the provided address.</p>
                )}

            {hasSearched &&
                !loading &&
                !error &&
                delegationDetails.length > 0 && (
                    <ul>
                        {delegationDetails.map((account, index) => {
                            const parsedInfo = account.account.data.parsed.info;
                            const mintAddress = parsedInfo.mint;
                            const ownerAddress = parsedInfo.owner;
                            const tokenAmount =
                                parsedInfo.tokenAmount.uiAmountString;
                            const tokenDecimals =
                                parsedInfo.tokenAmount.decimals;
                            const delegatedAmount =
                                parsedInfo.delegatedAmount.amount /
                                10 ** parsedInfo.delegatedAmount.decimals;

                            return (
                                <li key={index}>
                                    <p>
                                        <strong>Mint Address:</strong>{" "}
                                        {mintAddress}
                                    </p>
                                    <p>
                                        <strong>Owner Address:</strong>{" "}
                                        {ownerAddress}
                                    </p>
                                    <p>
                                        <strong>Token Amount:</strong>{" "}
                                        {tokenAmount}
                                    </p>
                                    <p>
                                        <strong>Token Decimals:</strong>{" "}
                                        {tokenDecimals}
                                    </p>
                                    <p>
                                        <strong>Delegated Amount:</strong>{" "}
                                        {delegatedAmount}
                                    </p>
                                    <hr />
                                </li>
                            );
                        })}
                    </ul>
                )}
        </div>
    );
};

export default DelegationDetails;
