import React, { useEffect, useState } from "react";

interface NotificationProps {
    message: string;
    transactionSignature?: string;
    notify: boolean;
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
    message,
    transactionSignature,
    notify,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (notify) {
            setIsVisible(true);

            // Automatically close after 5 seconds
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [notify, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 w-64 rounded-md bg-[#40a798] p-4 text-white shadow-lg">
            <div className="mb-2 flex items-center justify-between">
                <span>{message}</span>
                <button
                    className="font-bold text-white"
                    onClick={() => {
                        setIsVisible(false);
                        onClose();
                    }}
                >
                    ✕
                </button>
            </div>
            {transactionSignature && (
                <div className="mt-2 truncate text-sm">
                    <span>Transaction: </span>
                    <a
                        href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 underline"
                    >
                        {transactionSignature}
                    </a>
                </div>
            )}
            <div className="relative mt-2 h-1 w-full overflow-hidden bg-green-700">
                <div
                    className="absolute left-0 top-0 h-full bg-green-300"
                    style={{
                        animation: "deplete 5s linear forwards",
                    }}
                ></div>
            </div>
            <style jsx>{`
                @keyframes deplete {
                    from {
                        width: 100%;
                    }
                    to {
                        width: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Notification;
