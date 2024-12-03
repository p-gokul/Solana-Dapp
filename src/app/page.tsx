"use client";

import AirDrop from "./components/AirDrop";
import TransferBalance from "./components/TransferBalance";

export default function Home() {
    return (
        <div className="mt-40 flex h-auto w-full">
            <div className="h-full w-1/2">
                <AirDrop />
            </div>
            <div className="h-auto w-1/2">
                <TransferBalance />
            </div>
        </div>
    );
}
