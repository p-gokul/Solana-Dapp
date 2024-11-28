import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFT Metadata",
  description: "NFT Page",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
