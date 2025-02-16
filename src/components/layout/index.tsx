import React from "react";
// import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "../ui/sonner";
// import { getUserData } from "@/hooks/user";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  // const user = await getUserData();
  return (
    <main className="min-h-screen overflow-x-hidden font-openSans max-w-[1920px] flex flex-col mx-auto">
      <Toaster position="top-center" />
      {/* <Navbar user={user} /> */}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </main>
  );
};

