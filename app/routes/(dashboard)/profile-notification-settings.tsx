import type { Route } from "./+types/profile.notification-settings";
import NotificationSettings from "~/(dashboard)/profile/notification-settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HealthScope · Notification Settings" },
    {
      name: "description",
      content:
        "Update email, push, and SMS notification preferences for your HealthScope account.",
    },
  ];
}

export default function NotificationSettingsRoute() {
  return <NotificationSettings />;
}
