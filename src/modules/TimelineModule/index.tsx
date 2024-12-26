"use client";

import { useEffect, useState } from "react";
import { events } from "./const";
import { BigEventCard, SmallEventCard } from "./module-elements/Card";
import { BigCircleIcon, SmallCircleIcon } from "./module-elements/CircleIcon";
import { BigBlurredStarIcon, SmallBlurredStarIcon } from "./module-elements/BlurredStarIcon";
import Image from "next/image";


const TimelineModule = () => {
    const [isBigScreen, setIsBigScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBigScreen(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="min-w-screen min-h-[76.97vw] flex flex-col justify-center items-center relative mt-[10%] mb-[10%]"
            style={{
                'backgroundImage': `url('/TimelineBg.png')`,
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat'
            }}
        >
            <div className="flex-1 flex flex-col gap-0 items-center pt-[45%]">
                {/* <img className="m-0 p-0 mb-24" src="/TreasureChest.png" alt="" width={175} height={183}/> */}
                {
                    isBigScreen ?
                        events.map((event, idx) =>
                            <div
                                key={event.name}
                                className={`w-0 
                                        ${idx == events.length - 1 ? 'h-0' : 'h-[140px] border-[6.5px]'} 
                                        ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} 
                                        shadow-timeline relative rounded-[6px]`}
                            >
                                <div
                                    className={`w-[70px] h-0 
                                            ${idx % 2 == 1 && 'right-0'} top-[-6.5px] 
                                            border-[3.2px] border-[#FCFFCCCC] rounded-[2px] 
                                            shadow-timeline absolute`}
                                />
                                {/* <BigCircleIcon className="absolute top-[-35px] left-[-35px]" /> */}
                                <BigBlurredStarIcon className="absolute top-[-100px] left-[-100px]" />
                                <BigEventCard
                                    className={`absolute top-[-45px] 
                                            ${idx % 2 == 0 ? 'left-[70px]' : 'right-[70px]'}`}
                                    event={event}
                                />
                            </div>
                        )
                        :
                        events.map((event, idx) =>
                            <div
                                key={event.name}
                                className={`w-0 
                                        ${idx == events.length - 1 ? 'h-0' : 'h-[60px] border-[2.5px]'} 
                                        ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} 
                                        shadow-timeline relative rounded-[2.5px]`}
                            >
                                {/* Horizontal line */}
                                <div
                                    className={`w-[27px] h-0 
                                            ${idx % 2 == 1 && 'right-0'} top-[-2px] 
                                            border-[0.9px] border-[#FCFFCCCC] rounded-[2.5px] 
                                            shadow-timeline absolute`}
                                />
                                {/* <SmallCircleIcon className="absolute top-[-8.5px] left-[-10px]" /> */}
                                <SmallBlurredStarIcon className="absolute top-[-30px] left-[-37px]" />
                                <SmallEventCard
                                    className={`absolute top-[-20px] 
                                            ${idx % 2 == 0 ? 'left-[30px]' : 'right-[30px]'}`}
                                    event={event}
                                />
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default TimelineModule
