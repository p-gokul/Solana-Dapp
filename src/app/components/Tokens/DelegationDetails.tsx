import { TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";
import { useState } from "react";

const DelegationDetails = () => {
    const [delegationDetails, setDelegationDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [delegateAddress, setDelegateAddress] = useState<string>("");
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const findDelegate = async () => {
        setLoading(true);
        setError(null);
        setHasSearched(true);

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
                        delegateAddress,
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

            setDelegationDetails(json.result.value);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6 text-white">
            <h2 className="mb-6 text-center text-2xl font-bold">
                Delegation Details Finder
            </h2>
            <div className="mx-auto max-w-xl rounded-lg bg-gray-800 p-6 shadow-lg">
                <label
                    htmlFor="delegateAddress"
                    className="block text-sm font-medium text-gray-300"
                >
                    Delegate Address:
                </label>
                <input
                    type="text"
                    id="delegateAddress"
                    value={delegateAddress}
                    onChange={(e) => setDelegateAddress(e.target.value)}
                    placeholder="Enter Delegate Address"
                    className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-700 p-2 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <button
                    type="button"
                    onClick={findDelegate}
                    disabled={loading || !delegateAddress}
                    className={`mt-4 w-full rounded-lg bg-purple-600 p-2 text-white transition ${
                        loading || !delegateAddress
                            ? "cursor-not-allowed opacity-50"
                            : "hover:bg-purple-500"
                    }`}
                >
                    {loading ? "Searching..." : "Find Delegated Amount"}
                </button>

                {hasSearched && error && (
                    <p className="mt-4 text-red-500">Error: {error}</p>
                )}
                {hasSearched &&
                    !loading &&
                    !error &&
                    delegationDetails.length === 0 && (
                        <p className="mt-4 text-gray-400">
                            No delegation details found for the provided
                            address.
                        </p>
                    )}

                {hasSearched &&
                    !loading &&
                    !error &&
                    delegationDetails.length > 0 && (
                        <ul className="mt-6 space-y-4">
                            {delegationDetails.map((account, index) => {
                                const parsedInfo =
                                    account.account.data.parsed.info;
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
                                    <li
                                        key={index}
                                        className="rounded-lg bg-gray-700 p-4 shadow-md"
                                    >
                                        <p className="truncate">
                                            <strong>Mint Address:</strong>
                                            {mintAddress}
                                        </p>
                                        <p className="truncate">
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
                                    </li>
                                );
                            })}
                        </ul>
                    )}
            </div>
        </div>
    );
};

export default DelegationDetails;
