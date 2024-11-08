import React from "react";
import Image from "next/image";
import { navData } from "./const";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const isAutehnticated = true;
  return (
    <nav
      className={cn(
        "bg-[#481e58a6] z-[1000] px-14 py-7 shadow-lg backdrop-blur-lg fixed top-0 flex items-center justify-between w-full",
        isAutehnticated ? "px-14" : "px-8"
      )}
    >
      <div className="flex items-center justify-center gap-7">
        <div className="w-[61px] h-[54px] relative">
          <Image src="/footer.png" fill className="object-contain" alt="Logo" />
        </div>
        <h1 className="text-white text-t4 font-cinzel">BETIS 2025</h1>
      </div>
      <div className="flex items-center justify-end gap-14">
        <div className="flex gap-7 items-center">
          {navData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white text-t6 text-center font-semibold font-raleway"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {isAutehnticated ? (
          <div className="flex items-center gap-6">
            <Link href="/dashboard">
              <Button>Logout</Button>
            </Link>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        ) : (
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
