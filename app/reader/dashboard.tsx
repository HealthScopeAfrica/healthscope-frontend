/**
 * Main Reader Dashboard Entry Point
 * This is the main dashboard page that orchestrates all dashboard components
 */

import { useState, useEffect } from "react";
import { getFeaturedArticles, type Article } from "~/reader/data/articles";

// Import dashboard components
import { WelcomeSection } from "./components/ui/welcome-section";
import { QuickActionsSection } from "./components/ui/quick-actions-section";
import { FeaturedArticlesSection } from "./components/ui/featured-articles-section";
import { DashboardSidebar } from "./components/ui/dashboard-sidebar";
import { KuloChatPanel } from "./components/kulo-ai/simple-chat";

export default function ReaderDashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [isLoadingFeatured, setIsLoadingFeatured] = useState(true);

  // Load featured articles
  useEffect(() => {
    async function loadFeaturedArticles() {
      try {
        setIsLoadingFeatured(true);
        const articles = await getFeaturedArticles();
        setFeaturedArticles(articles.slice(0, 3)); // Show only first 3 on dashboard
      } catch (error) {
        console.error("Failed to load featured articles:", error);
      } finally {
        setIsLoadingFeatured(false);
      }
    }

    loadFeaturedArticles();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <WelcomeSection />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <QuickActionsSection onChatClick={() => setIsChatOpen(true)} />

          {/* Featured Articles */}
          <FeaturedArticlesSection 
            articles={featuredArticles}
            isLoading={isLoadingFeatured}
          />
        </div>

        {/* Sidebar */}
        <DashboardSidebar 
          onChatToggle={() => setIsChatOpen(true)}
        />
      </div>

      {/* Kulo Chat Panel */}
      <KuloChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
