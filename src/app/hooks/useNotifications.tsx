import { useState } from "react";

const useNotification = () => {
    const [notify, setNotify] = useState(false);
    const [message, setMessage] = useState("");
    const [transactionSignature, setTransactionSignature] = useState<
        string | undefined
    >(undefined);

    const showNotification = (msg: string, signature?: string) => {
        setMessage(msg);
        setTransactionSignature(signature);
        setNotify(true);
    };

    const hideNotification = () => {
        setNotify(false);
    };

    return {
        notify,
        message,
        transactionSignature,
        showNotification,
        hideNotification,
    };
};

export default useNotification;
