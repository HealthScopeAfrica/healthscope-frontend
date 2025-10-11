import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("partner/login", "partner/login/partner.tsx"),
	route("dashboard", "routes/(dashboard)/dashboard.tsx"),
	route("dashboard/profile", "routes/(dashboard)/profile.tsx"),
	route("dashboard/profile/account-settings", "routes/(dashboard)/profile.account-settings.tsx"),
] satisfies RouteConfig;
