import type { IconType } from "react-icons";
import { TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";

interface ProfileTab {
  id: string;
  label: string;
  icon: IconType;
}

interface ProfileTabsProps {
  tabs: ProfileTab[];
}

export function ProfileTabs({ tabs }: ProfileTabsProps) {
  return (
    <>
      {tabs.map(({ id, label, icon: Icon }) => (
        <TabsTrigger
          key={id}
          value={id}
          className={cn(
            "w-fit h-auto rounded-lg border border-transparent bg-[#F3F3F5] px-4 py-2 md:py-3 md:px-5 text-sm md:text-lg font-medium text-[#6E6E6E] transition",
            "data-[state=active]:border-[#4C7DEA] data-[state=active]:bg-[#4C7DEA] data-[state=active]:text-white data-[state=active]:shadow-[0_6px_16px_rgba(76,125,234,0.25)]",
            "hover:bg-[#E5E5EA] hover:text-[#333333]"
          )}
        >
          <Icon className="size-4 md:size-5" />
          {label}
        </TabsTrigger>
      ))}
    </>
  );
}
