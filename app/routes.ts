import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("partner/login", "partner/login/partner.tsx"),
	route("dashboard", "routes/(dashboard)/dashboard.tsx"),
	route("dashboard/profile", "routes/(dashboard)/profile.tsx"),
	route("dashboard/profile/account-settings", "routes/(dashboard)/profile-account-settings.tsx"),
	route("dashboard/profile/notification-settings", "routes/(dashboard)/profile-notification-settings.tsx"),
	route("dashboard/profile/privacy-settings", "routes/(dashboard)/profile-privacy-settings.tsx"),
] satisfies RouteConfig;
