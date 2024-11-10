"use client";
import React, { useState } from "react";
import Image from "next/image";
import { navData } from "./const";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isAutehnticated = true;
  return (
    <>
      <nav
        className={cn("z-[1000] shadow-lg backdrop-blur-lg fixed top-0 w-full")}
      >
        <div
          className={cn(
            "flex items-center justify-between max-md:px-5 px-7 py-7 bg-[#481e58a6]",
            isAutehnticated ? "xl:px-14" : "xl:px-8"
          )}
        >
          <div className="flex items-center justify-center gap-7">
            <div className="w-[50px] md:w-[61px] h-[54px] relative">
              <Image
                src="/Footer.png"
                fill
                className="object-contain"
                alt="Logo"
              />
            </div>
            <h1 className="text-white max-sm:hidden xl:text-t5 text-t4 font-cinzel">
              BETIS 2025
            </h1>
          </div>
          <div className="flex items-center justify-end gap-8 xl:gap-14 max-lg:hidden">
            <div className="flex gap-4 xl:gap-7 items-center">
              {navData.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white lg:text-t8 xl:text-t7 text-center font-semibold font-raleway"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {isAutehnticated ? (
              <div className="flex items-center gap-6">
                <Link href="/dashboard">
                  <Button variant="destructive">Logout</Button>
                </Link>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
          <AlignJustify
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden cursor-pointer"
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="flex flex-col bg-[#481e58a6] justify-start text-[#FEF5FF] text-t7 lg:hidden"
            >
              {navData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 + index * 0.1, type: "tween"}}
                  className="px-5 py-[15px]"
                >
                  <Link href={item.href} className="w-fit cursor-pointer">
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9}}
                className={cn(
                  "font-bold px-5 py-[15px] rounded-b-[20px]",
                  isAutehnticated
                    ? "bg-magenta-800"
                    : "bg-gradient-to-b from-magenta-500 to-magenta-button"
                )}
              >
                {isAutehnticated ? "Logout" : "Login"}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
