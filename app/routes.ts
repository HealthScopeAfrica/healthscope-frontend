import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // Public pages with public layout
  layout("layouts/public-layout.tsx", [
    index("marketing/home.tsx"),
    route("features", "marketing/features.tsx"),
    route("about-us", "marketing/about-us.tsx"),
  ]),
] satisfies RouteConfig;
