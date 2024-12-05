import { useState } from "react";
import BurnCoreNFTPage from "./BurnCoreNft";
import CreateNftPageCore from "./CreateCoreNFT";
import DisplayCoreNFTPage from "./DisplayCoreNft";
import TransferCoreNFTPage from "./TransferCoreNft";

const CoreNftDrawer = () => {
    const menuItems = [
        {
            name: "Display NFT",
            component: (
                <div>
                    <DisplayCoreNFTPage />
                </div>
            ),
        },
        {
            name: "Create NFT",
            component: (
                <div>
                    <CreateNftPageCore />
                </div>
            ),
        },
        {
            name: "Transfer NFT",
            component: (
                <div>
                    <TransferCoreNFTPage />
                </div>
            ),
        },
        {
            name: "Burn NFT",
            component: (
                <div>
                    <BurnCoreNFTPage />
                </div>
            ),
        },
    ];

    const [activeComponent, setActiveComponent] = useState(
        menuItems[0].component,
    );
    const [activeItem, setActiveItem] = useState(menuItems[0].name);

    return (
        <div className="mt-20 flex h-screen">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 z-40 mt-20 h-screen w-64 bg-gray-50 dark:bg-gray-800">
                <div className="h-full overflow-y-auto px-3 py-4">
                    <div className="group flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <span className="ms-3">
                            NFT Operations ( Metaplex Core )
                        </span>
                    </div>
                    <hr className="my-2" />
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveComponent(item.component);
                                        setActiveItem(item.name);
                                    }}
                                    className={`group flex w-full items-center rounded-lg p-2 text-white transition-colors ${
                                        activeItem === item.name
                                            ? "bg-[#131717]"
                                            : "hover:bg-gray-500"
                                    }`}
                                >
                                    <span className="ms-3">{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 w-full p-4">
                <div className="content">{activeComponent}</div>
            </div>
        </div>
    );
};

export default CoreNftDrawer;
