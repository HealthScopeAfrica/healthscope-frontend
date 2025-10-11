import type { Route } from "./+types/profile.account-settings";
import AccountSettings from "../../(dashboard)/profile/account-settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HealthScope · Account Settings" },
    {
      name: "description",
      content: "Manage your HealthScope account security and privacy preferences.",
    },
  ];
}

export default function AccountSettingsRoute() {
  return <AccountSettings />;
}
