import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NFT- MPL Core",
    description: "NFT Page ( MPL Core )",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

export default Layout;
