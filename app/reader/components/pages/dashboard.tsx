/**
 * Reader Dashboard - Main dashboard page
 * Displays featured articles, recent activity, and navigation to different sections
 */

import { useState, useEffect } from "react"
import { Link } from "react-router"
import { BookOpen, TrendingUp, Clock, Plus } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { ArticleList } from "~/reader/components/shared/article-card"
import { getFeaturedArticles, getArticles, type Article } from "~/reader/data/articles"

/**
 * Main Reader Dashboard Component
 */
export default function ReaderDashboard() {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [recentArticles, setRecentArticles] = useState<Article[]>([])
  const [isLoadingFeatured, setIsLoadingFeatured] = useState(true)
  const [isLoadingRecent, setIsLoadingRecent] = useState(true)

  // Load featured articles
  useEffect(() => {
    async function loadFeaturedArticles() {
      try {
        setIsLoadingFeatured(true)
        const articles = await getFeaturedArticles()
        setFeaturedArticles(articles)
      } catch (error) {
        console.error("Failed to load featured articles:", error)
      } finally {
        setIsLoadingFeatured(false)
      }
    }

    loadFeaturedArticles()
  }, [])

  // Load recent articles (limit to 3 for dashboard)
  useEffect(() => {
    async function loadRecentArticles() {
      try {
        setIsLoadingRecent(true)
        const articles = await getArticles()
        // Show only the 3 most recent articles on dashboard
        setRecentArticles(articles.slice(0, 3))
      } catch (error) {
        console.error("Failed to load recent articles:", error)
      } finally {
        setIsLoadingRecent(false)
      }
    }

    loadRecentArticles()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome back!</h1>
        <p className="text-gray-600">Discover trusted health information tailored for you.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Articles Read</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reading Time</p>
                <p className="text-2xl font-bold text-gray-900">2.5h</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Streak</p>
                <p className="text-2xl font-bold text-gray-900">7 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Articles Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
          <Button variant="outline" size="sm" asChild>
            <Link to="/reader/dashboard/featured">
              View All
            </Link>
          </Button>
        </div>

        <ArticleList
          articles={featuredArticles}
          source="featured"
          isLoading={isLoadingFeatured}
          showTrending={true}
          emptyStateMessage="No featured articles available at the moment."
        />
      </section>

      {/* Recent Articles Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Articles</h2>
          <Button variant="outline" size="sm" asChild>
            <Link to="/reader/dashboard/articles">
              View All Articles
            </Link>
          </Button>
        </div>

        <ArticleList
          articles={recentArticles}
          source="dashboard"
          isLoading={isLoadingRecent}
          emptyStateMessage="No recent articles available."
        />
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Browse Articles</h3>
              <p className="text-gray-600 text-sm mb-4">Explore our comprehensive library of health articles</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/reader/dashboard/articles">Browse</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Trending Topics</h3>
              <p className="text-gray-600 text-sm mb-4">See what's trending in health and wellness</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/reader/trending">View Trending</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Plus className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Saved Articles</h3>
              <p className="text-gray-600 text-sm mb-4">Access your bookmarked articles</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/reader/saved">View Saved</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}