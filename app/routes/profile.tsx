import type { Route } from "./+types/profile";
import { Profile } from "../profile/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HealthScope · Profile" },
    {
      name: "description",
      content: "View and manage your HealthScope profile details.",
    },
  ];
}

export default function ProfileRoute() {
  return <Profile />;
}
