import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // Public pages with public layout
  layout("layouts/public-layout.tsx", [
    index("marketing/home.tsx"),
    route("features", "marketing/features.tsx"),
    route("about-us", "marketing/about-us.tsx"),
  ]),

  // Auth pages with auth layout
  layout("layouts/auth-layout.tsx", [
    route("partner/auth/login", "partner/auth/login.tsx"),
  ]),

  // Reader dashboard routes
  layout("layouts/reader-dashboard-layout.tsx", [
    route("reader/dashboard", "reader/dashboard.tsx"),
    route("reader/dashboard/articles", "reader/components/pages/articles-list.tsx"),
    route("reader/dashboard/articles/:id", "reader/components/pages/article-detail.tsx"),
    route("reader/dashboard/featured", "reader/components/pages/featured-articles.tsx"),
  ]),

  // Complete account onboarding
  route("onboarding", "reader/onboarding.tsx"),
] satisfies RouteConfig;
