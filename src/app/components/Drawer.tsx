import LaunchToken from "@/app/components/Tokens/CreateToken";
import DisplayTokenPage from "@/app/components/Tokens/DisplayToken";
import MintTokenPage from "@/app/components/Tokens/MintToken";
import TransferTokenPage from "@/app/components/Tokens/TransferToken";
import { useState } from "react";
import BurnTokenPage from "./Tokens/BurnToken";
import DelegateTokenPage from "./Tokens/DelegateToken";
import DelegationDetails from "./Tokens/DelegationDetails";
import RevokeDelegatedToken from "./Tokens/RevokeDelegatedToken";

const Drawer = () => {
    const menuItems = [
        { name: "Display Tokens", component: <DisplayTokenPage /> },
        { name: "Create Token", component: <LaunchToken /> },
        { name: "Mint Token", component: <MintTokenPage /> },
        { name: "Transfer Token", component: <TransferTokenPage /> },
        {
            name: "Delegate Token",
            component: (
                <div className="flex h-full w-full">
                    <div className="w-2/3 p-4">
                        <DelegateTokenPage />
                    </div>
                    <div className="w-1/3 p-4">
                        <DelegationDetails />
                    </div>
                </div>
            ),
        },
        {
            name: "Revoke Delegated Token",
            component: <RevokeDelegatedToken />,
        },
        {
            name: "Burn Tokens",
            component: <BurnTokenPage />,
        },
    ];

    const [activeComponent, setActiveComponent] = useState(
        menuItems[0].component,
    );
    const [activeItem, setActiveItem] = useState(menuItems[0].name);

    return (
        <div className="mt-20 flex h-screen">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 z-40 mt-20 h-screen w-64 bg-[#303841]">
                <div className="h-full overflow-y-auto px-3 py-4">
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setActiveComponent(item.component);
                                        setActiveItem(item.name);
                                    }}
                                    className={`group flex w-full items-center rounded-lg p-2 text-white transition-colors ${
                                        activeItem === item.name
                                            ? "bg-[#1f2727]"
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

export default Drawer;
