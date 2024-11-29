import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT - MPL Token Metadata",
  description: "NFT Page ( MPL Token Metadata )",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
