import type { IconType } from "react-icons";
import { quickActions } from "../data";
import { DashboardCard } from "./dashboard-card";

interface QuickActionProps {
  icon: IconType;
  title: string;
  description: string;
}

function QuickActionCard({ icon: Icon, title, description }: QuickActionProps) {
  return (
    <DashboardCard className="flex items-center gap-4">
      <div
        className={`flex size-12 items-center justify-center rounded-xl ${title === "Talk to Kulo" ? "bg-gray-400" : "bg-[#00c950]"} text-white`}
      >
        <Icon className="size-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-[#203562]">{title}</span>
        <span className="text-sm text-[#6E6E6E]">{description}</span>
      </div>
    </DashboardCard>
  );
}

export function QuickActionsSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg md:text-2xl font-semibold text-text-strong">
        Quick Actions
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {quickActions.map(({ id, icon, title, description }) => (
          <QuickActionCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}
