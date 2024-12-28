import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "../ui/sonner";
import { getUserService } from "@/hooks/user";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserService();
  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden font-openSans">
      <Toaster position="top-center" />
      <Navbar user={user} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </main>
  );
};

