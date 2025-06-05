"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import { getAsset } from "@/lib/s3";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import useLeaderboard from "@/hooks/leaderboard";
import { LeaderboardHeroModule } from "../LeaderboardHeroModule";

const avatarOptions = [
  "/Pp-girl1.png",
  "/Pp-girl2.png",
  "/Pp-boy1.png",
  "/Pp-boy2.png",
];

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "py-2 px-[14px] lg:px-7 rounded-[17px] border-0 space-y-5 backdrop-blur-lg",
      className
    )}
    {...props}
  />
));

const students = [
  {
    email: "rikodwisaputra48@gmail.com",
    name: "Riko Dwi Saputra",
    institute: "SMAN 67 JAKARTA",
  },
  {
    email: "valentinoakram12@gmail.com",
    name: "Valentino Akram",
    institute: "SMA Negeri 13 Jakarta",
  },
  {
    email: "sbta1915@gmail.com",
    name: "Salsa Bila Titiana",
    institute: "SMA Negeri 1 Kradenan",
  },
  {
    email: "vinkabellyani@gmail.com",
    name: "Vinka Bellyani",
    institute: "SMA Muhammadiyah 3 Bandung",
  },
  {
    email: "rdvnarabel@gmail.com",
    name: "Radiva Narabel",
    institute: "SMAN 5 Tambun Selatan",
  },
  {
    email: "rasyaaurellasefa@gmail.com",
    name: "Rasya Aurella Sefa",
    institute: "SMAN 1 Kudus",
  },
  {
    email: "aisiah1227@gmail.com",
    name: "Aisiah Nur Handini",
    institute: "SMAIT Asy Syukriyyah",
  },
  {
    email: "zaidanizdiharkhairan@gmail.com",
    name: "Zaidan izdihar khairan",
    institute: "SMA 17 Agustus 1945",
  },
  {
    email: "salsabilaoktyfs@gmail.com",
    name: "Salsabila Okty Fajar Saida",
    institute: "SMAN 1 Kademangan",
  },
  {
    email: "satyaatmadja07@gmail.com",
    name: "Satya Virya Atmadja",
    institute: "SMAK PENABUR Serang",
  },
];

export default function Leaderboard() {
  const [selectedTryout, setSelectedTryout] = useState(""); // Default: All Tryout
  //const { leaderboard, leaderboards, currentUser, loading, error, refetch } = useLeaderboard(selectedTryout); // Fetch leaderboard data

  //if (error) {
  //  return <div className="p-4 text-center text-red-500">{error}</div>;
  //}

  const leaderboard = students.map((student, index) => ({
    rank: index + 1,
    full_name: student.name,
    school_name: student.institute,
  }));

  return (
    <div className="flex flex-col justify-center items-center w-full my-[150px]">
      <h1 className="font-cinzel text-6xl max-md:text-4xl max-sm:text-2xl font-[900] text-white text-center">
        Leaderboard
      </h1>
      {/* Hero Module with Skeleton */}
      <LeaderboardHeroModule
        first={{
          name: leaderboard[0].full_name || "",
          institute: leaderboard[0].school_name || "",
          avatarSrc: getAsset("/Pp-boy1.png"),
        }}
        second={{
          name: leaderboard[1].full_name,
          institute: leaderboard[1].school_name || "",
          avatarSrc: getAsset("/Pp-boy1.png"),
        }}
        third={{
          name: leaderboard[2].full_name,
          institute: leaderboard[2].school_name || "",
          avatarSrc: getAsset("/Pp-boy1.png"),
        }}
      />
      <div className="px-4 lg:px-20 w-full">
        <div className="space-y-4 w-full">
          {/* Leaderboard Table */}
          <div className="mt-[24px]">
            <Card className="border-0 text-white w-full h-[54px] lg:h-[96px] bg-[#D9D9D9] transform translate-y-7 lg:translate-y-14 py-0">
              <div className="flex items-center gap-[75px] lg:gap-[150px] h-full -translate-y-3 lg:-translate-y-7">
                <div className="text-[13px] lg:text-[26px] font-semibold font-playfairDisplay text-[#82275F]">
                  Rank
                </div>
                <div className="text-[13px] lg:text-[26px] font-semibold font-playfairDisplay text-[#82275F]">
                  Name & School
                </div>
              </div>
            </Card>

            {/* Leaderboard Entries */}
            {leaderboard.slice(3, 10).map((currentUser, index) => (
              <Card
                key={index}
                className="border-0 text-white w-full h-[72px] lg:h-[128px] bg-[#F8EBF3] mb-[6px] lg:mb-[16.82px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl lg:text-6xl font-black font-cinzel text-[#82275F] w-5 lg:w-8">
                      {currentUser.rank}
                    </div>
                    <div className="ml-1 lg:ml-7 w-[52px] h-[52px] lg:h-28 lg:w-28 bg-[#6D4B79] rounded-full flex items-center justify-center">
                      <Image
                        src={getAsset("/Pp-boy1.png")}
                        width={112}
                        height={112}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="space-y-0 ml-1 lg:ml-4">
                      <div className="font-black text-[#82275F] truncate max-w-40 lg:max-w-lg text-base lg:text-4xl font-playfairDisplay">
                        {currentUser.full_name}
                      </div>
                      <div className="font-normal text-[#82275F] truncate max-w-40 lg:max-w-lg overflow-hidden text-base lg:text-2xl font-playfairDisplay">
                        {currentUser.school_name}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
