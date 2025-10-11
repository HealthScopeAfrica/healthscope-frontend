import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // Public pages with public layout
  layout("layouts/public-layout.tsx", [
    index("marketing/pages/home.tsx"),
    route("features", "marketing/pages/features.tsx"),
    route("about-us", "marketing/pages/about-us.tsx"),
    route("open/articles", "marketing/pages/articles.tsx"),
    route("open/articles/:id", "marketing/pages/article-detail.tsx"),
  ]),

  // Auth pages with auth layout
  layout("layouts/auth-layout.tsx", [
    route("partner/auth/login", "partner/auth/login.tsx"),
    route("contributor/auth/login", "contributor/auth/login.tsx"),
    route("contributor/auth/signup", "contributor/auth/signup.tsx"),
  ]),

  // Reader dashboard routes
  layout("layouts/reader-dashboard-layout.tsx", [
    route("reader/dashboard", "reader/dashboard/dashboard.tsx"),
    route("reader/dashboard/articles", "reader/dashboard/pages/articles-list.tsx"),
    route("reader/dashboard/articles/:id", "reader/dashboard/pages/article-detail.tsx"),
    route("reader/dashboard/profile", "routes/(dashboard)/profile.tsx"),
    route("reader/dashboard/featured", "reader/dashboard/pages/featured-articles.tsx"),
    route("reader/dashboard/profile/account-settings", "routes/(dashboard)/profile-account-settings.tsx"),
	  route("reader/dashboard/profile/notification-settings", "routes/(dashboard)/profile-notification-settings.tsx"),
	  route("reader/dashboard/profile/privacy-settings", "routes/(dashboard)/profile-privacy-settings.tsx"),
    
  ]),

  // Complete account onboarding
  route("onboarding", "reader/onboarding/onboarding.tsx"),
	route("dashboard", "routes/(dashboard)/dashboard.tsx"),
	//route("reader/dashboard/profile", "routes/(dashboard)/profile.tsx"),
	// route("dashboard/profile/account-settings", "routes/(dashboard)/profile-account-settings.tsx"),
	// route("dashboard/profile/notification-settings", "routes/(dashboard)/profile-notification-settings.tsx"),
	// route("dashboard/profile/privacy-settings", "routes/(dashboard)/profile-privacy-settings.tsx"),
] satisfies RouteConfig;
