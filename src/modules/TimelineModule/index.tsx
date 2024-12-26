"use client";

import { useEffect, useState } from "react";
import { events } from "./const";
import { BigEventCard, SmallEventCard } from "./module-elements/Card";
import { BigCircleIcon, SmallCircleIcon } from "./module-elements/CircleIcon";
import { BigBlurredStarIcon, SmallBlurredStarIcon } from "./module-elements/BlurredStarIcon";


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
            className="min-w-screen min-h-[209.028vw] mt-[110px] flex flex-col justify-center items-center relative pt-[80%]"
            style={{
                'backgroundImage': `url('/TimelineBg.png')`,
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat'
            }}
        >
            <div className="flex-1 flex flex-col gap-0 items-center">
                {
                    isBigScreen ?
                        events.map((event, idx) =>
                            <div
                                key={event.name}
                                className={`w-0 
                                        ${idx == events.length - 1 ? 'h-0' : 'md:max-lg:h-[275px] lg:max-xl:h-[400px] xl:h-[450px] md:max-lg:border-[7px] lg:border-[10px]'} 
                                        ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} 
                                        shadow-timeline relative`}
                            >
                                <div
                                    className={`md:max-lg:w-[100px] lg:w-[150px] h-0 
                                            ${idx % 2 == 1 && 'right-0'} top-0 
                                            md:max-lg:border-[3px] lg:border-[5px] border-[#FCFFCCCC] 
                                            shadow-timeline absolute`}
                                />
                                <BigCircleIcon className="absolute top-[-35px] left-[-35px]" />
                                <BigBlurredStarIcon className="absolute top-[-152px] left-[-152px]" />
                                <BigEventCard
                                    className={`absolute md:max-lg:top-[-60px] lg:top-[-75px] 
                                            ${idx % 2 == 0 ? 'md:max-lg:left-[95px] lg:left-[145px]' : 'md:max-lg:right-[95px] lg:right-[145px]'}`}
                                    event={event}
                                />
                            </div>
                        )
                        :
                        events.map((event, idx) =>
                            <div
                                key={event.name}
                                className={`w-0 
                                        ${idx == events.length - 1 ? 'h-0' : 'h-[150px] border-[2.5px]'} 
                                        ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} 
                                        shadow-timeline relative`}
                            >
                                {/* Horizontal line */}
                                <div
                                    className={`w-[60px] h-0 
                                            ${idx % 2 == 1 && 'right-0'} top-0 
                                            border-[2.25px] border-[#FCFFCCCC] 
                                            shadow-timeline absolute`}
                                />
                                <SmallCircleIcon className="absolute top-[-8.5px] left-[-10px]" />
                                <SmallBlurredStarIcon className="absolute top-[-59px] left-[-59px]" />
                                <SmallEventCard
                                    className={`absolute top-[-30px] 
                                            ${idx % 2 == 0 ? 'left-[55px]' : 'right-[55px]'}`}
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
