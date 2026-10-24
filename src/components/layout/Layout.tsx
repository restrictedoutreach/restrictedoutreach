import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CommercialMotion from "@/components/animations/CommercialMotion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="animated-site flex min-h-screen flex-col">
      <CommercialMotion />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
