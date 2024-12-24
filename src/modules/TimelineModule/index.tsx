"use client";

import { useEffect, useState } from "react";
import { events } from "./const";
import { BigEventCard, SmallEventCard } from "./module-elements/card";


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
            {
                isBigScreen ?
                    <div className="flex-1 flex flex-col gap-0 items-center">
                        {events.map((event, idx) => {
                            return (
                                <div key={event.name} className={`w-0 ${idx == events.length - 1 ? 'h-0' : 'md:max-lg:h-[275px] lg:max-xl:h-[400px] xl:h-[450px] md:max-lg:border-[7px] lg:border-[10px]'} ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} shadow-timeline relative`}>
                                    <div className={`md:max-lg:w-[100px] lg:w-[150px] h-0 ${idx % 2 == 1 && 'right-0'} top-0 md:max-lg:border-[3px] lg:border-[5px] border-[#FCFFCCCC] shadow-timeline absolute`}></div>
                                    <svg className="absolute top-[-35px] left-[-35px]" xmlns="http://www.w3.org/2000/svg" width="70" height="75" viewBox="0 0 70 75" fill="none">
                                        <ellipse cx="35" cy="37.5" rx="35" ry="37.5" fill="#D9D9D9" />
                                    </svg>
                                    <svg className="absolute top-[-152px] left-[-152px]" xmlns="http://www.w3.org/2000/svg" width="303" height="304" viewBox="0 0 303 304" fill="none">
                                        <g filter="url(#filter0_f_2030_2637)">
                                            <path d="M189.273 60.7671L179.195 130.304L242.215 161.376L172.967 173.28L162.89 242.816L130.17 180.637L60.9228 192.541L109.948 142.208L77.2282 80.0281L140.247 111.1L189.273 60.7671Z" fill="#FCFFCC" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_2030_2637" x="0.479813" y="0.32402" width="302.178" height="302.936" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="30.2215" result="effect1_foregroundBlur_2030_2637" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className={`absolute md:max-lg:top-[-60px] lg:top-[-75px] ${idx % 2 == 0 ? 'md:max-lg:left-[95px] lg:left-[145px]' : 'md:max-lg:right-[95px] lg:right-[145px]'}`}>
                                        <BigEventCard event={event} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className="flex-1 flex flex-col gap-0 items-center">
                        {events.map((event, idx) => {
                            return (
                                <div key={event.name} className={`w-0 ${idx == events.length - 1 ? 'h-0' : 'h-[150px] border-[2.5px]'} ${event.status === 'Done' ? 'border-[#FCFFCCCC]' : 'border-[#FCFFCC4D]'} shadow-timeline relative`}>
                                    {/* Horizontal line */}
                                    <div className={`w-[60px] h-0 ${idx % 2 == 1 && 'right-0'} top-0 border-[2.25px] border-[#FCFFCCCC] shadow-timeline absolute`}></div>
                                    <svg className="absolute top-[-8.5px] left-[-10px]" xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                        <ellipse cx="10" cy="10.7143" rx="10" ry="10.7143" fill="#D9D9D9" />
                                    </svg>
                                    <svg className="absolute top-[-59px] left-[-59px]" xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
                                        <g filter="url(#filter0_f_2037_594)">
                                            <path d="M73.5118 23.5117L69.6211 50.3586L93.9518 62.3551L67.2165 66.951L63.3259 93.7979L50.6932 69.7914L23.958 74.3873L42.8858 54.9546L30.2532 30.948L54.5839 42.9444L73.5118 23.5117Z" fill="#FCFFCC" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_2037_594" x="0.621944" y="0.175655" width="116.666" height="116.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="11.668" result="effect1_foregroundBlur_2037_594" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className={`absolute top-[-30px] ${idx % 2 == 0 ? 'left-[55px]' : 'right-[55px]'}`}>
                                        <SmallEventCard event={event} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }
        </div>
    )
}

export default TimelineModule
