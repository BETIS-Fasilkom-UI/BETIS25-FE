"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  defaultDate?: Date;
}

export function DatePicker({ defaultDate }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            "max-h-[52px] h-[110vh] lg:max-w-[382px] w-full lg:w-auto text-[20px] leading-[28px] w-full flex-grow border-none outline-none mb-0 justify-start text-left font-normal p-2 rounded-[0.5rem] border-none bg-white",
            date ? "text-zinc-950" : "text-gray-500"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            <span className=" font-raleway font-bold">
              {format(date, "PPP")}
            </span>
          ) : (
            <span className=" font-raleway font-bold">Pick a date</span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-transparent border-none w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
