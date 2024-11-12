"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface ComboboxProps {
  choices: { value: string, label: string }[];
  placeholder?: string;
}

export function Combobox(props: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[200px] px-4 py-2 flex items-center justify-between rounded-[0.5rem] bg-white",
            value === "" ? "text-gray-500" : "text-black"
          )}
        >
          {value
            ? props.choices.find((choice) => choice.value === value)?.label
            : (props.placeholder || "Select...")}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="rounded-[0.5rem] w-[200px] p-0">
        <Command className="rounded-[0.5rem]">
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {props.choices.map((choice) => (
                <CommandItem
                  key={choice.value}
                  value={choice.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="last:rounded-b-[0.5rem]"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === choice.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {choice.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
