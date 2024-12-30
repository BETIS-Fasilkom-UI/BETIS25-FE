"use client";

import { events } from "../const";
import { EventCard } from "../module-elements/card";
import {
  BigBlurredStarIcon,
  SmallBlurredStarIcon,
} from "../module-elements/BlurredStarIcon";
import Image from "next/image";

const Timeline = () => {
  return (
    <div className="relative w-full flex flex-col items-center pt-[10vh] md:py-[20vh] mb-52">
      <div className="absolute w-[150vw] h-full xl:h-[2000px] overflow-x-clip -translate-y-[100px] md:-translate-y-[300px] lg:-translate-y-[350px] xl:-translate-y-[400px] 2xl:-translate-y-[300px]">
        <Image
          src={"/TimelineBg.png"}
          alt=" "
          fill
          className="object-contain"
        />
      </div>

      {/* Treasure Chest, update the pt-[...] to adjust for the updated bg */}
      <div className="flex-1 flex flex-col gap-0 items-center pt-[45%]">
        <div
          key={`imagebruh`}
          className={`w-0 
                                    max-md:h-[60px] max-md:border-[2.5px]
                                    md:h-[100px] md:border-[4.5px] 
                                    lg:h-[140px] lg:border-[6.5px]
                                    border-[#FCFFCCCC]
                                    shadow-timeline relative`}
        >
          <div
            className={`z-10 absolute 
                                max-md:left-[-33.5px] max-md:top-[-65px] max-md:w-[67px] max-md:h-[70px]
                                md:left-[-55px] md:top-[-102px] md:w-[105px] md:h-[110px] 
                                lg:left-[-91.5px] lg:top-[-120px] lg:w-[175px] lg:h-[183px]`}
          >
            <Image
              className=""
              src="/TreasureChest.png"
              alt=""
              layout="fill"
              loading="eager"
            />
          </div>
          <div className="absolute max-md:hidden w-[125px] h-[125px] top-[-100px] left-[-100px]">
            <BigBlurredStarIcon />
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex-1 flex flex-col gap-0 items-center bg-[#FCFFCC4D] rounded-[6px]">
        {events.map((event, idx) => (
          <div
            key={event.name}
            className={`w-0 
                                ${
                                  idx == events.length - 1
                                    ? "h-0"
                                    : "max-md:h-[60px] max-md:border-[2.5px] md:h-[100px] md:border-[4.5px] lg:h-[200px] lg:border-[6.5px]"
                                } 
                                ${
                                  event.status === "Done"
                                    ? "border-[#FCFFCCCC]"
                                    : "border-[#FCFFCC4D]"
                                } 
                                shadow-timeline relative 
                                ${
                                  idx == events.length - 1 ||
                                  events[idx + 1].status !== "Done"
                                    ? "max-md:rounded-b-[2.5px] md:rounded-b-[6px]"
                                    : ""
                                }`}
          >
            {/* Horizontal line */}
            <div
              className={`h-0
                                    ${idx % 2 == 1 && "right-0"} 
                                    max-md:w-[27px] md:w-[49px] lg:w-[70px]
                                    ${
                                      idx == events.length - 1
                                        ? "max-md:top-[-2px] md:top-[-4.5px] lg:top-[-6.5px]"
                                        : "max-md:top-[-4px] md:top-[-8.5px] lg:top-[-12.5px]"
                                    }
                                    max-md:border-[1px] max-md:rounded-[2.5px] 
                                    md:border-[2.25px] md:rounded-[1.4px] 
                                    lg:border-[3.2px] lg:rounded-[2px] 
                                    border-[#FCFFCCCC] 
                                    shadow-timeline absolute`}
            />
            <div
              className={`absolute 
                                    max-md:w-[45px] max-md:h-[37px] max-md:top-[-32px] max-md:left-[-37px]
                                    md:w-[125px] md:h-[125px] md:top-[-100px] md:left-[-100px]`}
            >
              <BigBlurredStarIcon className="max-md:hidden" />
              <SmallBlurredStarIcon className="md:hidden" />
            </div>
            <EventCard
              className={`absolute 
                                    max-md:top-[-25px] md:top-[-37px] lg:top-[-70px] 
                                    ${
                                      idx % 2 == 0
                                        ? "max-md:left-[25px] md:left-[48px] lg:left-[68px]"
                                        : "max-md:right-[25px] md:right-[48px] lg:right-[68px]"
                                    }`}
              event={event}
            />
          </div>
        ))}
      </div>

      {/* Rabbit */}
      <div className="flex-1 flex flex-col gap-0 items-center">
        <div className="relative">
          <div
            className={`z-20 absolute 
                        max-md:right-[-45vw] max-md:top-[-10vw] max-md:w-[96px] max-md:h-[116px]
                        md:right-[-45vw] md:top-[-10vw] md:w-[168px] md:h-[202px] 
                        lg:right-[-45vw] lg:top-[-10vw] lg:w-[280px] lg:h-[357px]
                        2xl:right-[-40vw] 2xl:top-[-7vw] 2xl:w-[330px] 2xl:h-[407px]`}
          >
            <Image src="/KelinciTimeline.png" alt="" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
