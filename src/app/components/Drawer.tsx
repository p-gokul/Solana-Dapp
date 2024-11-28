import { useState } from "react";
import LaunchToken from "@/app/components/Tokens/CreateToken";
import MintTokenPage from "@/app/components/Tokens/MintToken";
import DisplayTokenPage from "@/app/components/Tokens/DisplayToken";
import TransferTokenPage from "@/app/components/Tokens/TransferToken";
import DelegateTokenPage from "./Tokens/DelegateToken";
import BurnTokenPage from "./Tokens/BurnToken";
import RevokeDelegatedToken from "./Tokens/RevokeDelegatedToken";
import DelegationDetails from "./Tokens/DelegationDetails";

const Drawer = () => {
  const menuItems = [
    { name: "Display Tokens", component: <DisplayTokenPage /> },
    { name: "Create Token", component: <LaunchToken /> },
    { name: "Mint Token", component: <MintTokenPage /> },
    { name: "Transfer Token", component: <TransferTokenPage /> },
    {
      name: "Delegate Token",
      component: (
        <div className="flex w-full h-full">
          <div className="w-1/2 p-4">
            <DelegateTokenPage />
          </div>
          <div className="w-1/2 p-4">
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
    menuItems[0].component
  );

  return (
    <div className="flex h-screen mt-20">
      {/* Sidebar */}
      <div className="fixed mt-20 top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveComponent(item.component)}
                  className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-4 w-full bg-gray-100">
        <div className="content">{activeComponent}</div>
      </div>
    </div>
  );
};

export default Drawer;
