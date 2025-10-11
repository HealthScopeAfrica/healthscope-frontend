import * as React from "react";
import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface DatePickerProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  displayFormat?: string;
}

function toDate(value?: string) {
  if (!value) return undefined;

  try {
    const parsed = parseISO(value);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  } catch {
    return undefined;
  }
}

export function DatePicker({
  id,
  name,
  value,
  onChange,
  placeholder = "Pick a date",
  className,
  disabled,
  displayFormat = "dd/MM/yyyy",
}: DatePickerProps) {
  const selectedDate = React.useMemo(() => toDate(value), [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id={id}
          name={name}
          type="button"
          variant="ghost"
          data-empty={!selectedDate}
          disabled={disabled}
          className={cn(
            "h-12 justify-start gap-2 rounded-lg border border-transparent bg-[#F3F3F5] px-4 py-3 text-base font-normal text-[#333333] shadow-none transition data-[empty=true]:text-[#949494] hover:bg-[#EBEBEE] focus-visible:bg-white",
            className
          )}
        >
          <CalendarIcon className="size-5 text-[#6E6E6E]" />
          {selectedDate ? format(selectedDate, displayFormat) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border-none bg-white p-0 shadow-lg">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            if (!date) {
              onChange?.("");
              return;
            }
            onChange?.(format(date, "yyyy-MM-dd"));
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
