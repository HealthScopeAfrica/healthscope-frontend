import * as React from "react"

import { cn } from "~/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-gray-900 transition-colors",
        className
      )}
      {...props}
    />
  )
}

export { Input }
