import * as React from "react";

import { cn } from "~/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-[120px] w-full rounded-lg border border-transparent bg-[#F3F3F5] px-4 py-3 text-base text-[#333333] placeholder:text-[#949494] transition focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#4C7DEA]/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        "selection:bg-primary selection:text-primary-foreground",
        "resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea }
