"use client";

import { events } from "./const";
import EventCard from "./module-elements/card";


const TimelineModule = () => {
    return (
        <div 
            className="min-w-screen min-h-[209.028vw] mt-[110px] flex flex-col justify-center items-center" 
            style={{
                'backgroundImage': `url('/TimelineBg.png')`, 
                'backgroundSize': 'cover', 
                'backgroundRepeat': 'no-repeat'
            }}
        >
            {
                events.map((event) => <EventCard event={event}/>)
            }
        </div>
    )
}

export default TimelineModule