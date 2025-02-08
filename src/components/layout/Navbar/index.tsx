"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { User } from "@/hooks/interface";
import { getAsset } from "@/lib/s3";
import { cn } from "@/lib/utils";
import { getCookie, setCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navData } from "./const";

export const Navbar = ({ user }: { user: User | null }) => {
  const [open, setOpen] = useState(false);
  const isAuthenticated = user !== null;

  const avatarOptions = [
    "/Pp-girl1.png",
    "/Pp-girl2.png",
    "/Pp-boy1.png",
    "/Pp-boy2.png",
  ];

  const Logout = async () => {
    if (isAuthenticated) {
      const token = getCookie("token");
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      if (token) {
        await fetch(`${API_URL}auth/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(() => {
          setCookie("token", "", {
            expires: new Date(0),
          });
          toast.success("Logout success");
          window.location.reload();
        });
      }
    }
  };
  return (
    <>
      <nav
        className={cn(
          "z-[1000] shadow-lg backdrop-blur-lg fixed top-0 w-full max-w-[1920px]"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between max-md:px-4 px-7 py-4 md:py-5 bg-[#481e58a6]",
            isAuthenticated ? "xl:px-14" : "xl:px-8"
          )}
        >
          <Link href={"/"} className="flex items-center justify-center gap-7">
            <div className="w-[40px] md:w-[52px] h-[36px] md:h-[48px] relative">
              <Image
                src={getAsset("/Footer.png")}
                fill
                sizes="none"
                className="object-contain"
                alt="Logo"
              />
            </div>
            <h1 className="text-white max-sm:hidden xl:text-t5 text-t6 font-cinzel">
              BETIS 2025
            </h1>
          </Link>
          <div className="flex items-center justify-end gap-8 xl:gap-14 max-lg:hidden">
            <div className="flex gap-4 xl:gap-7 items-center">
              {navData.map((item, index) => (
                <Link
                  key={index}
                  href={item.isAvailable ? item.href : "#"}
                  className={`text-white lg:text-t8 xl:text-t7 text-center font-semibold font-raleway ${
                    item.isAvailable
                      ? "cursor-pointer"
                      : "cursor-not-allowed text-white/30"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {isAuthenticated ? (
              <div className="flex items-center gap-6">
                <Button onClick={Logout} variant="destructive" className="max-h-[50px]">
                  Logout
                </Button>
                <Link href={"/profile"}>
                  <Avatar>
                    <AvatarImage
                      src={getAsset(avatarOptions[user.avatar])}
                      alt="profile"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
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
              {[
                ...navData,
                { title: "Profile", href: "/profile", isAvailable: false },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 + index * 0.1, type: "tween" }}
                  className="px-5 py-[15px]"
                >
                  <Link
                    href={
                      item.isAvailable || (index === 4 && isAuthenticated)
                        ? item.href
                        : "#"
                    }
                    className={`w-fit ${
                      item.isAvailable || (index === 4 && isAuthenticated)
                        ? "cursor-pointer"
                        : "cursor-not-allowed text-white/30"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={isAuthenticated ? "#" : "/login"}
                onClick={isAuthenticated ? Logout : () => {}}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  className={cn(
                    "font-bold px-5 py-[15px] rounded-b-[20px]",
                    isAuthenticated
                      ? "bg-magenta-800"
                      : "bg-gradient-to-b from-magenta-500 to-magenta-button"
                  )}
                >
                  {isAuthenticated ? "Logout" : "Login"}
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
