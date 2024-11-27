import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPL Token",
  description: "SPL Token Page",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
