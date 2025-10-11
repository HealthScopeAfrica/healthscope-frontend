import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "~/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent transition-all outline-none shadow-xs",
        "data-[state=checked]:bg-[#4C7DEA] data-[state=unchecked]:bg-[#D5D5D5]",
        "focus-visible:ring-2 focus-visible:ring-[#4C7DEA]/30 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform",
          "data-[state=checked]:translate-x-[calc(100%-4px)] data-[state=unchecked]:translate-x-[2px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
