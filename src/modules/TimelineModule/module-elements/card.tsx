import { EventEntry } from "../interface";


export default function EventCard({event, ...props}: JSX.IntrinsicAttributes & {event: EventEntry}) {
    return (
        <div className="z-10 h-[156px] w-[392px] px-[36px] py-[30px] flex flex-col gap-[10px] justify-center items-center bg-[#6F4589] border shadow-event-entry-card rounded-[32px]">
            <h1 className="font-[900] font-cinzel text-[36px]">
                {event.date}
            </h1>
            <h1 className="font-raleway font-[600] text-[30px]">
                {event.name}
            </h1>
        </div>
    )
}
