"use client";

import HomePage from "./components/AccountInfo";
import AirDrop from "./components/AirDrop";
import TransferBalance from "./components/TransferBalance";

export default function Home() {
    return (
        <div>
            <HomePage />
            <AirDrop />
            <TransferBalance />
        </div>
    );
}
