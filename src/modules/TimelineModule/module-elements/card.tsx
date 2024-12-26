import { cn } from "@/lib/utils";
import { EventEntry } from "../interface";


export function BigEventCard({ className = "", event }: { className?: string, event: EventEntry }) {
    return (
        <div 
            className={cn(
                `z-10 h-[100px] w-[250px] px-[23px] py-[19px] 
                flex flex-col gap-[12.88px] justify-center items-center 
                bg-[#6F4589] border shadow-event-entry-card rounded-[20px]`, 
                className)}
        >
            <h1 className="font-[900] font-cinzel md:max-lg:text-[19px] lg:text-[23px]">
                {event.date}
            </h1>
            <h1 className="font-raleway font-[600] md:max-lg:text-[15px] lg:text-[19px]">
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