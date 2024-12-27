import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "../ui/sonner";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden font-openSans">
      <Toaster position="top-center" />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </main>
  );
};

