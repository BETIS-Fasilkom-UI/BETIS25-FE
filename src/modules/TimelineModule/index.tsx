"use client";

import { events } from "./const";
import EventCard from "./module-elements/card";


const TimelineModule = () => {
    return (
        <div
            className="min-w-screen min-h-[209.028vw] mt-[110px] flex flex-col justify-center items-center relative gap-[300px] pt-[450px]"
            style={{
                'backgroundImage': `url('/TimelineBg.png')`,
                'backgroundSize': 'cover',
                'backgroundRepeat': 'no-repeat'
            }}
        >
            <div className="absolute top-0 left-0 mt-[85%] w-full">
                <div className="flex flex-col gap-0 items-center ml-[50px]">
                    {events.map((event, idx) => {
                        return (
                            <div className={`w-0 h-[450px] ${idx != events.length - 1 && 'border-[10px]'}  border-[${event.status === 'Done' ? '#FCFFCCCC' : '#FCFFCC4D'}] shadow-timeline relative`}>
                                <div className={`w-[150px] h-0 ${idx % 2 == 1 && 'right-0'} top-0 border-[5px] border-[#FCFFCCCC] shadow-timeline absolute`}></div>
                                <svg className="absolute top-[-32.5px] left-[-35px]" xmlns="http://www.w3.org/2000/svg" width="70" height="75" viewBox="0 0 70 75" fill="none">
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
                                <div className={`absolute top-[-75px] ${idx % 2 == 0 ? 'left-[145px]' : 'right-[145px]'}`}>
                                    <EventCard event={event} />
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default TimelineModule
