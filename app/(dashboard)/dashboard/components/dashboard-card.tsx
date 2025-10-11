import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "~/lib/utils";

interface DashboardCardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export function DashboardCard({
  className,
  children,
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E5E5E5] bg-white p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
