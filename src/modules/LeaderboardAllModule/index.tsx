"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import useLeaderboard from "./use-leaderboard"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "py-2 px-7 rounded-[17px] border-0 space-y-5 backdrop-blur-lg",
      className
    )}
    {...props}
  />
));

export default function Leaderboard(LeaderboardId: { id: string }) {
  const [selectedTryout, setSelectedTryout] = useState("0"); // Default: All Tryout
  const { leaderboard, leaderboards, currentUser, loading, error, refetch } = useLeaderboard(selectedTryout); // Fetch leaderboard data
  const [scale, setScale] = useState(1);

  // Trigger refetch when selectedTryout changes
  useEffect(() => {
    refetch();
  }, [selectedTryout, refetch]);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 1076 ? (window.innerWidth / 1076) * 0.8 : 0.8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div
      className="min-h-screen bg-[#2A1B3D] flex flex-row justify-center px-4 md:px-0"
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      <div className="space-y-4">
        {/* Dropdown to Select Tryout */}
        <div className="mb-[50.79px]">
          <Select value={selectedTryout} onValueChange={setSelectedTryout}>
            <SelectTrigger className="w-[276px] h-[65px] bg-[#D9D9D9] border-0 rounded-[35px] text-[#82275F] font-playfairDisplay font-semibold text-[35px]">
              <SelectValue placeholder="Select Tryout" />
            </SelectTrigger>
            <SelectContent className="w-[276px] bg-[#D9D9D9] border-0 rounded-[20px] text-[#82275F] font-playfairDisplay font-semibold text-[35px]">
              <SelectItem value="0">All Tryout</SelectItem>
              {leaderboards.map((tryout) => (
                <SelectItem key={tryout.id} value={tryout.id}>
                  {tryout.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Leaderboard Content */}
        {loading ? (
          <LoadingSkeleton scale={scale} />
        ) : (
          <>
            {/* Current User Card */}
            {currentUser && (
              <Card className="border-0 text-white w-[1076px] h-[128px] bg-[#6D4B79]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-6xl font-black font-cinzel text-[#F8EBF3] w-8">
                      {currentUser.rank}
                    </div>
                    <div className="ml-7 h-28 w-28 bg-[#651E4A] rounded-full flex items-center justify-center">
                      {currentUser.avatar}
                    </div>
                    <div className="space-y-0 mb-1 ml-4">
                      <div className="font-black text-[#F8EBF3] text-4xl font-playfairDisplay">
                        {currentUser.fullname}
                      </div>
                      <div className="font-normal text-[#F8EBF3] text-2xl font-playfairDisplay">
                        {currentUser.school_name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold">
                      <div className="w-[156px] h-[73px] p-1 rounded-[21px] border-0 bg-[#33153E] flex flex-row justify-center align-center">
                        <div className="text-[#F8EBF3] text-[42px] font-semibold font-playfairDisplay my-auto">
                          {currentUser.average_score}
                        </div>
                      </div>
                    </div>
                    <Link href={`/leaderboard-detail/${currentUser.id}`} className="text-[25px] font-semibold font-playfairDisplay text-[#F8EBF3] ml-2">
                      Detail
                    </Link>
                  </div>
                </div>
              </Card>
            )}

            {/* Leaderboard Table */}
            <div className="mt-[50.79px]">
              <Card className="border-0 text-white w-[1076px] h-[64px] bg-[#D9D9D9] transform translate-y-6 py-0">
                <div className="flex items-center justify-between h-full -translate-y-3">
                  <div className="text-[26px] font-semibold font-playfairDisplay text-[#82275F]">Rank</div>
                  <div className="text-[26px] font-semibold font-playfairDisplay text-[#82275F] ml-0 -translate-x-[135px]">Name & School</div>
                  <div className="text-[26px] font-semibold font-playfairDisplay text-[#82275F] mr-36">Score</div>
                </div>
              </Card>

              {/* Leaderboard Entries */}
              {leaderboard.map((entry) => (
                <Card key={entry.id} className="border-0 text-white w-[1076px] h-[128px] bg-[#F8EBF3] mb-[16.82px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-6xl font-black font-cinzel text-[#82275F] w-8">
                        {entry.rank}
                      </div>
                      <div className="ml-7 h-28 w-28 bg-[#6D4B79] rounded-full flex items-center justify-center">
                        {entry.avatar}
                      </div>
                      <div className="space-y-0 mb-1 ml-4">
                        <div className="font-black text-[#82275F] text-4xl font-playfairDisplay">
                          {entry.fullname}
                        </div>
                        <div className="font-normal text-[#82275F] text-2xl font-playfairDisplay">
                          {entry.school_name}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold">
                        <div className="w-[156px] h-[73px] p-1 rounded-[21px] border-0 bg-[#33153E] flex flex-row justify-center align-center">
                          <div className="text-[#F8EBF3] text-[42px] font-semibold font-playfairDisplay my-auto">
                            {entry.average_score}
                          </div>
                        </div>
                      </div>
                      <div className="text-[25px] font-semibold font-playfairDisplay text-[#82275F] ml-2">
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
  );
}


function LoadingSkeleton({ scale }: { scale: number }) {
  return (
    <div className="space-y-4" style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
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

