"use client"

import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import React from "react"
import { getAsset } from "@/lib/s3"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import useLeaderboard from "@/hooks/leaderboard"
import { LeaderboardHeroModule } from "../LeaderboardHeroModule"

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
      "py-2 px-[14px] md:px-7 rounded-[17px] border-0 space-y-5 backdrop-blur-lg",
      className
    )}
    {...props}
  />
));

export default function Leaderboard(LeaderboardId: { id: string }) {
  const [selectedTryout, setSelectedTryout] = useState(""); // Default: All Tryout
  const { leaderboard, leaderboards, currentUser, loading, error, refetch } = useLeaderboard(selectedTryout); // Fetch leaderboard data
  console.log(leaderboard);
  // Trigger refetch when selectedTryout changes
  useEffect(() => {
    refetch();
  }, [selectedTryout, refetch]);

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center">
      <LeaderboardHeroModule 
        first={{
          name: leaderboard[0].full_name || "",
          institute: leaderboard[0].school_name || "",
          score: leaderboard[0].average_score,
          avatarSrc: getAsset(avatarOptions[leaderboard[0].avatar])
        }} 
        second={{
          name: leaderboard[1].full_name,
          institute: leaderboard[1].school_name || "",
          score: leaderboard[1].average_score,
          avatarSrc: getAsset(avatarOptions[leaderboard[1].avatar])
        }} 
        third={{
          name: leaderboard[2].full_name,
          institute: leaderboard[2].school_name || "",
          score: leaderboard[2].average_score,
          avatarSrc: getAsset(avatarOptions[leaderboard[2].avatar])
        }} 
      />
    <div
      className="min-h-screen flex flex-row justify-center px-4 md:px-0 mt-10"     >
      <div className="space-y-4">
        {/* Dropdown to Select Tryout */}
        <div className="md:mb-[50.79px]">
          <Select value={selectedTryout} defaultValue={"0"} onValueChange={setSelectedTryout}>
            <SelectTrigger className="w-24 h-6 md:w-[276px] md:h-[65px] bg-[#D9D9D9] border-0 rounded-[12px] md:rounded-[35px] text-[#82275F] font-playfairDisplay font-semibold text-[10px] md:text-[35px] text-left">
              <SelectValue placeholder="Select Tryout" />
            </SelectTrigger>
            <SelectContent className="w-24 md:w-[276px] bg-[#D9D9D9] border-0 md:rounded-[35px] rounded-[12px] relative text-[#82275F] font-playfairDisplay font-semibold text-[10px] md:text-[35px]">
            <SelectItem value="0" className="text-[10px] md:text-[35px] text-left">All Tryout</SelectItem>
              {leaderboards.map((tryout) => (
                <SelectItem key={tryout.id} value={tryout.id} className="text-[10px] md:text-[35px] text-left">
                  {tryout.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Leaderboard Content */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            {/* Current User Card */}
            {currentUser && (
              <Card className="border-0 text-white w-[390px] h-[72px] md:w-[1076px] md:h-[128px] bg-[#6D4B79]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl md:text-6xl font-black font-cinzel text-[#F8EBF3] w-5 md:w-8">
                      {currentUser.rank}
                    </div>
                    <div className="ml-1 md:ml-7 w-[52px] h-[52px] md:h-28 md:w-28 bg-[#651E4A] rounded-full flex items-center justify-center">
                      <Image src={getAsset(avatarOptions[currentUser.avatar])} width={ 112 } height={ 112 } alt="" className="" />
                    </div>
                    <div className="space-y-0 ml-1 md:ml-4">
                      <div className="font-black text-[#F8EBF3] text-base md:text-4xl font-playfairDisplay">
                        {currentUser.full_name}
                      </div>
                      <div className="font-normal text-[#F8EBF3] text-base md:text-2xl font-playfairDisplay">
                        {currentUser.school_name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="text-base font-bold flex flex-col justify-center align-center md:ml-5">
                        <div className="w-[71px] h-[33px] md:w-[156px] md:h-[73px] p-1 rounded-[10px] md:rounded-[21px] border-0 bg-[#33153E] mb-1 flex flex-row justify-center align-center">
                          <div className="text-[#F8EBF3] text-base md:text-4xl font-semibold font-playfairDisplay my-auto">
                            {currentUser.average_score}
                          </div>
                        </div>
                        <div className="text-xs font-semibold font-playfairDisplay text-[#F8EBF3] md:hidden text-center">
                            Detail
                        </div>
                      </div>
                      <div className="text-[25px] font-semibold font-playfairDisplay text-[#F8EBF3] ml-2 hidden md:block">
                        Detail
                      </div>
                    </div>
                </div>
              </Card>
            )}

            {/* Leaderboard Table */}
            <div className="mt-[24px] md:mt-[77.26px]">
              <Card className="border-0 text-white w-[390px] h-[54px] md:w-[1076px] md:h-[96px] bg-[#D9D9D9] transform translate-y-7 md:translate-y-14 py-0">
                <div className="flex items-center justify-between h-full -translate-y-3 md:-translate-y-7">
                  <div className="text-[13px] md:text-[26px] font-semibold font-playfairDisplay text-[#82275F]">Rank</div>
                  <div className="text-[13px] md:text-[26px] font-semibold font-playfairDisplay text-[#82275F] ml-0 -translate-x-[22px] md:-translate-x-[135px]">Name & School</div>
                  <div className="text-[13px] md:text-[26px] font-semibold font-playfairDisplay text-[#82275F] mr-[18px] md:mr-36">Score</div>
                </div>
              </Card>

              {/* Leaderboard Entries */}
              {leaderboard.slice(3, 10).map((currentUser) => (
                 <Card className="border-0 text-white w-[390px] h-[72px] md:w-[1076px] md:h-[128px] bg-[#F8EBF3] mb-[6px] md:mb-[16.82px]">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="text-3xl md:text-6xl font-black font-cinzel text-[#82275F] w-5 md:w-8">
                       {currentUser.rank}
                     </div>
                     <div className="ml-1 md:ml-7 w-[52px] h-[52px] md:h-28 md:w-28 bg-[#6D4B79] rounded-full flex items-center justify-center">
                       <Image src={getAsset(avatarOptions[currentUser.avatar])} width={ 112 } height={ 112 } alt="" className="" />
                     </div>
                     <div className="space-y-0 ml-1 md:ml-4">
                       <div className="font-black text-[#82275F] text-base md:text-4xl font-playfairDisplay">
                         {currentUser.full_name}
                       </div>
                       <div className="font-normal text-[#82275F] text-base md:text-2xl font-playfairDisplay">
                         {currentUser.school_name}
                       </div>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                       <div className="text-base font-bold flex flex-col justify-center align-center md:ml-5">
                         <div className="w-[71px] h-[33px] md:w-[156px] md:h-[73px] p-1 rounded-[10px] md:rounded-[21px] border-0 bg-[#82275F] mb-1 flex flex-row justify-center align-center">
                           <div className="text-[#F8EBF3] text-base md:text-4xl  font-semibold font-playfairDisplay my-auto">
                             {currentUser.average_score}
                           </div>
                         </div>
                         <div className="text-xs font-semibold font-playfairDisplay text-[#82275F] md:hidden text-center">
                             Detail
                         </div>
                       </div>
                       <div className="text-[25px] font-semibold font-playfairDisplay text-[#82275F] ml-2 hidden md:block">
                         Detail
                       </div>
                     </div>
                 </div>
               </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}


function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <Card className="p-4 w-[1076px] bg-[#382C4B] border-0">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[160px]" />
          </div>
        </div>
      </Card>
      {[...Array(5)].map((_, i) => (
        <Card key={i} className="p-4 bg-white/10 border-0">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[160px]" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

