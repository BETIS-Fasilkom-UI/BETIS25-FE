import React from "react";
import { Check, Clock, X } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface TimelineItem {
  time: string;
  activity: string;
  status?: "completed" | "current" | "upcoming";
}

export const Rundown = () => {
  const eventDate = new Date(2025, 3, 1);

  let timelineItems: TimelineItem[] = [
    { time: "13.00 - 13.30", activity: "PERSIAPAN" },
    { time: "13.30 - 13.35", activity: "PEMBUKAAN" },
    {
      time: "13.35 - 13.50",
      activity: "SAMBUTAN PO/VPO\nDAN PENGENALAN\nBETIS 2025",
      status: "current",
    },
    { time: "13.50 - 14.05", activity: "ICE BREAKING" },
    { time: "14.05 - 14.50", activity: "SHARING SESSION" },
    { time: "14.50 - 15.20", activity: "Q&A SESSION" },
    {
      time: "15.20 - 15.30",
      activity: "DOKUMENTASI\nDAN PENUTUP",
    },
  ];

  const updateTimelineStatus = () => {
    const now = new Date();
    const gmtPlus7Offset = 7 * 60 * 60 * 1000;
    const nowGmtPlus7 = new Date(now.getTime() + gmtPlus7Offset);

    return timelineItems.map((item) => {
      const [startTime, endTime] = item.time.split(" - ").map((time) => {
        const [hours, minutes] = time.split(".").map(Number);
        return new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate(), hours, minutes);
      });

      if (nowGmtPlus7 >= startTime && nowGmtPlus7 <= endTime) {
        return { ...item, status: "current" as "current" };
      } else if (nowGmtPlus7 > endTime) {
        return { ...item, status: "completed" as "completed" };
      } else {
        return { ...item, status: "upcoming" as "upcoming" };
      }
    });
  };

  timelineItems = updateTimelineStatus();

  const getStatusIcon = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return <Check className="w-4 h-4 text-white" />;
      case "current":
        return <Clock className="w-4 h-4 text-white" />;
      case "upcoming":
        return <X className="w-4 h-4 text-white" />;
    }
  };

  const getItemColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-b from-[#7D4893] to-[#8E2B8F]";
      case "current":
        return "bg-gradient-to-b from-[#B73786] to-[#8E2B8F]";
      case "upcoming":
        return "bg-[#C6B9CB]";
    }
  };

  const getLineColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "bg-[#481E58]";
      case "current":
        return "bg-gradient-to-b from-[#B73786] to-[#8E2B8F]";
      case "upcoming":
        return "bg-[#C6B9CB]";
    }
  };

  return (
    <Card className="relative w-full mx-auto py-12 md:py-24 px-8 rounded-3xl overflow-hidden bg-white shadow-[5px_5px_20px_rgba(254,245,255,1),-5px_-5px_20px_rgba(254,245,255,1)] bg-opacity-20">
      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="font-cinzel text-4xl font-bold text-white mb-12 text-center z-10">
          RUNDOWN
        </h1>
        {timelineItems.map((item, index) => (
          <div key={index} className="flex items-start mb-8 relative">
            {/* Vertical connecting line container */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] flex flex-col justify-center">
              {/* Line above icon */}
              {index > 0 && (
                <div
                  className={`absolute -top-4 left-1/2 w-[2px] h-[calc(50%-0.75rem)] -translate-x-1/2 ${getLineColor(
                    item.status
                  )}`}
                />
              )}
              {/* Line below icon */}
              {index < timelineItems.length - 1 && (
                <div
                  className={`absolute -bottom-4 left-1/2 w-[2px] h-[calc(50%-0.75rem)] -translate-x-1/2 ${getLineColor(
                    item.status
                  )}`}
                />
              )}
            </div>

            {/* Timeline item container */}
            <div className="flex items-center w-full font-cinzel sm:text-lg">
              {/* Status indicator */}
              <div
                className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full ${getItemColor(
                  item.status
                )} flex items-center justify-center mr-4`}
              >
                {getStatusIcon(item.status)}
              </div>

              {/* Content */}
              <div
                className={`flex flex-col sm:flex-row justify-between items-center flex-grow py-3 px-4 sm:px-8 rounded-xl ${getItemColor(
                  item.status
                )} text-white`}
              >
                <div className="text-xs md:text-sm">{item.time}</div>
                <div className="font-semibold whitespace-pre-line text-sm md:text-base text-center sm:text-right">
                  {item.activity}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-5 left-0 max-md:hidden">
        <Image src="/jam1.png" alt="jam" width={200} height={312} />
      </div>
      <div className="absolute -top-5 right-0 max-md:hidden">
        <Image src="/jamur1.png" alt="jam" width={208} height={159} />
      </div>
      <div className="max-sm:hidden absolute bottom-0 right-0 max-md:hidden">
        <Image src="/jam.png" alt="jam" width={225} height={450} />
      </div>
      <div className="max-sm:hidden absolute bottom-0 left-0 max-md:hidden">
        <Image src="/jamur.png" alt="jam" width={382} height={329} />
      </div>
      <div className="sm:hidden absolute bottom-0 left-0 max-md:hidden">
        <Image src="/jamur2.png" alt="jam" width={517} height={404} />
      </div>
    </Card>
  );
};
