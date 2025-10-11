import type { Route } from "./+types/profile-privacy-settings";
import PrivacySettings from "~/(dashboard)/profile/profile-privacy-settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HealthScope · Privacy Settings" },
    {
      name: "description",
      content:
        "Control profile visibility, data sharing, and communication preferences for your HealthScope account.",
    },
  ];
}

export default function PrivacySettingsRoute() {
  return <PrivacySettings />;
}
