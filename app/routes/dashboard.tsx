import type { Route } from "./+types/dashboard";
import { Dashboard } from "../dashboard/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HealthScope · Dashboard" },
    {
      name: "description",
      content: "Review personalized health content and quick actions.",
    },
  ];
}

export default function DashboardRoute() {
  return <Dashboard />;
}
