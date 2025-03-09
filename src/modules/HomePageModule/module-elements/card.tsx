import { cn } from '@/lib/utils';
import { EventEntry } from '../interface';

export function EventCard({
  className = '',
  event,
}: {
  className?: string;
  event: EventEntry;
}) {
  return (
    <div
      className={cn(
        `z-10 
                max-md:h-[50px] max-md:w-[140px] max-md:px-[8.8px] max-md:py-[7.3px] max-md:gap-[6px] max-md:rounded-[7.8px]
                md:h-[70px] md:w-[175px] md:px-[16px] md:py-[15px] md:gap-[4px] md:rounded-[15px] 
                lg:h-[150px] lg:w-[350px] lg:px-[23px] lg:gap-[12.88px] lg:py-[19px] lg:rounded-[20px] 
                flex flex-col justify-center items-center 
                bg-[#6F4589] border max-md:shadow-event-entry-card-small md:shadow-event-entry-card`,
        className
      )}
    >
      <h1 className="font-[900] font-cinzel max-md:text-[14px] md:max-lg:text-[16px] lg:text-[23px]">
        {event.date}
      </h1>
      <h1 className="font-raleway font-[600] max-md:text-[12px] md:max-lg:text-[13px] lg:text-[19px]">
        {event.name}
      </h1>
    </div>
  );
}
