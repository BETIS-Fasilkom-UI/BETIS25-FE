import { cn } from "@/lib/utils";
import { EventEntry } from "../interface";


export function BigEventCard({ className = "", event }: { className?: string, event: EventEntry }) {
    return (
        <div 
            className={cn(
                `z-10 
                md:h-[70px] md:w-[175px] md:px-[16px] md:py-[15px] md:rounded-[15px] 
                lg:h-[100px] lg:w-[250px] lg:px-[23px] lg:py-[19px] lg:rounded-[20px] 
                flex flex-col md:gap-[4px] lg:gap-[12.88px] justify-center items-center 
                bg-[#6F4589] border shadow-event-entry-card`, 
                className)}
        >
            <h1 className="font-[900] font-cinzel md:max-lg:text-[16px] lg:text-[23px]">
                {event.date}
            </h1>
            <h1 className="font-raleway font-[600] md:max-lg:text-[13px] lg:text-[19px]">
                {event.name}
            </h1>
        </div>
    )
}


export function SmallEventCard({ className = "", event }: { className?: string, event: EventEntry }) {
    return (
        <div 
            className={cn(
                `z-10 h-[50px] w-[140px] px-[8.8px] py-[7.3px] 
                flex flex-col gap-[6px] justify-center items-center 
                bg-[#6F4589] border shadow-event-entry-card-small rounded-[7.8px]`, 
                className)}
        >
            <h1 className="font-[900] font-cinzel text-[14px]">
                {event.date}
            </h1>
            <h1 className="font-raleway font-[600] text-[12px]">
                {event.name}
            </h1>
        </div>
    )
}