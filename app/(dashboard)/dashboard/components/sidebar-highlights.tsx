import type { IconType } from "react-icons";
import { FiMessageCircle } from "react-icons/fi";
import { DashboardCard } from "./dashboard-card";
import { healthTipCard, meetKuloCard } from "../data";

function HealthTipCard({
  icon: Icon,
  title,
  tip,
}: {
  icon: IconType;
  title: string;
  tip: string;
}) {
  return (
    <DashboardCard className="flex flex-col gap-3 md:gap-6 border-green-100 bg-[#f0fdf4]">
      <div className="flex items-center gap-2 text-[#32A682]">
        <Icon className="size-5" />
        <span className="font-semibold uppercase text-green-900 tracking-wider">
          {title}
        </span>
      </div>
      <p className="text-[#24765C]">{tip}</p>
    </DashboardCard>
  );
}

export function SidebarHighlights() {
  return (
    <aside className="flex flex-col gap-4">
      <DashboardCard className="flex flex-col items-center gap-3 bg-gradient-to-b from-[#99a1af] to-[#6a7282] text-white">
        <FiMessageCircle className="text-5xl" />
        <h3 className="text-lg font-semibold">{meetKuloCard.title}</h3>
        <p className=" text-white">{meetKuloCard.subtitle}</p>
        <button
          type="button"
          className="flex gap-2 items-center justify-center rounded-lg bg-white/50 px-4 py-3 text-gray-600 w-full"
        >
          {meetKuloCard.cta}
        </button>
      </DashboardCard>

      <HealthTipCard
        icon={healthTipCard.icon}
        title={healthTipCard.title}
        tip={healthTipCard.tip}
      />
    </aside>
  );
}
