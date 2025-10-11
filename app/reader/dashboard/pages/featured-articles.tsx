/**
 * Featured Articles Page
 * Displays all featured articles with trending indicators
 */

import { useState, useEffect } from "react"
import { TrendingUp, Star } from "lucide-react"
import { ArticleList } from "~/reader/dashboard/components/shared/article-card"
import { getFeaturedArticles, type Article } from "~/reader/dashboard/data/articles"

/**
 * Featured Articles Page Component
 */
export default function FeaturedArticlesPage() {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load featured articles
  useEffect(() => {
    async function loadFeaturedArticles() {
      try {
        setIsLoading(true)
        const articles = await getFeaturedArticles()
        setFeaturedArticles(articles)
      } catch (error) {
        console.error("Failed to load featured articles:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadFeaturedArticles()
  }, [])

  const trendingCount = featuredArticles.filter(article => article.trending).length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-900">Featured Articles</h1>
        </div>
        <p className="text-gray-600">
          Curated selection of high-quality health articles from trusted experts
        </p>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {featuredArticles.length}
            </div>
            <div className="text-sm text-gray-600">Featured Articles</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500 mb-1">
              {trendingCount}
            </div>
            <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
              <TrendingUp className="h-4 w-4" />
              Trending Now
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              100%
            </div>
            <div className="text-sm text-gray-600">Expert Verified</div>
          </div>
        </div>
      </div>

      {/* Featured Articles List */}
      <ArticleList
        articles={featuredArticles}
        source="featured"
        isLoading={isLoading}
        showTrending={true}
        emptyStateMessage="No featured articles available at the moment. Check back soon for new content!"
      />

      {/* Additional Info */}
      {!isLoading && featuredArticles.length > 0 && (
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Quality Assurance</h3>
              <p>
                All featured articles are reviewed by our medical experts to ensure accuracy, 
                relevance, and adherence to the latest healthcare guidelines.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Trending Topics</h3>
              <p>
                Articles marked as "trending" represent the most viewed and shared content, 
                highlighting important health topics of current interest.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}