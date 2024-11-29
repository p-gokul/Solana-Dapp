import { useState } from "react";

import BurnNFTPage from "./BurnNft";
import CreateNFTPage from "./CreateNft";
import DisplayNFTPage from "./DisplayNft";
import TransferNFTPage from "./TransferNft";

const NftDrawer = () => {
    const menuItems = [
        {
            name: "Display NFT",
            component: (
                <div>
                    <DisplayNFTPage />
                </div>
            ),
        },
        {
            name: "Create NFT",
            component: (
                <div>
                    Create NFT Page <CreateNFTPage />
                </div>
            ),
        },
        {
            name: "Transfer NFT",
            component: (
                <div>
                    <TransferNFTPage />
                </div>
            ),
        },
        {
            name: "Burn NFT",
            component: (
                <div>
                    <BurnNFTPage />
                </div>
            ),
        },
    ];

    const [activeComponent, setActiveComponent] = useState(
        menuItems[0].component,
    );

    return (
        <div className="mt-20 flex h-screen">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 z-40 mt-20 h-screen w-64 bg-gray-50 dark:bg-gray-800">
                <div className="h-full overflow-y-auto px-3 py-4">
                    <div className="group flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <span className="ms-3">
                            NFT Operations ( Metaplex - Token Metadata )
                        </span>
                    </div>
                    <hr className="my-2" />
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveComponent(item.component)
                                    }
                                    className="group flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    <span className="ms-3">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 w-full bg-gray-100 p-4">
                <div className="content">{activeComponent}</div>
            </div>
        </div>
    );
};

export default NftDrawer;
