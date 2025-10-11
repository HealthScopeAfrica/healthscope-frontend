import * as React from "react";

import { cn } from "~/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-lg border border-transparent bg-[#F3F3F5] px-4 py-3 text-base text-[#333333] placeholder:text-[#949494] transition focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#4C7DEA]/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        "file:inline-flex file:h-9 file:rounded-md file:border-0 file:bg-transparent file:px-3 file:text-sm file:font-medium",
        "selection:bg-primary selection:text-primary-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Input }
