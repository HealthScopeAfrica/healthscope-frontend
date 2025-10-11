import { DashboardTopBar } from "./components/top-bar";
import { FeaturedArticlesSection } from "./components/featured-articles";
import { QuickActionsSection } from "./components/quick-actions";
import { SidebarHighlights } from "./components/sidebar-highlights";
import { WelcomeSection } from "./components/welcome-section";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <DashboardTopBar />
      <main className="container flex flex-col gap-8 py-8">
        <WelcomeSection />
        <QuickActionsSection />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <FeaturedArticlesSection />
          <SidebarHighlights />
        </div>
      </main>
    </div>
  );
}
