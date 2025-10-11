/**
 * Reusable Article Card Component
 * Used for displaying articles in both regular and featured article lists
 * Handles click navigation and displays all necessary article metadata
 */

import { Eye, Volume2, Globe, Clock } from "lucide-react"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Link } from "react-router"
import type { Article } from "~/reader/dashboard/data/articles"

interface ArticleCardProps {
  article: Article
  /** 
   * Source indicates where the user is viewing this article from
   * Used for proper back navigation tracking
   */
  source: "dashboard" | "articles" | "featured"
  /** Show trending badge for featured articles */
  showTrending?: boolean
  /** Additional styling classes */
  className?: string
}

/**
 * ArticleCard component for displaying article previews
 * Clickable component that navigates to full article view
 */
export function ArticleCard({ 
  article, 
  source, 
  showTrending = false, 
  className = "" 
}: ArticleCardProps) {
  const isRecommended = 'recommended' in article && article.recommended
  const isTrending = 'trending' in article && article.trending

  return (
    <Link 
      to={`/reader/dashboard/articles/${article.id}?from=${source}`}
      className={`block transition-transform hover:scale-[1.02] ${className}`}
    >
      <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {article.category}
            </Badge>
            {showTrending && isTrending && (
              <Badge className="bg-red-500 text-white">
                Trending
              </Badge>
            )}
            {isRecommended && (
              <Badge className="bg-green-500 text-white">
                Recommended
              </Badge>
            )}
          </div>

          {/* Audio indicator */}
          {article.hasAudio && (
            <div className="absolute top-3 right-3">
              <div className="bg-black/50 rounded-full p-2">
                <Volume2 className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
            {article.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {article.description}
          </p>

          {/* Article metadata */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {article.views}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {article.verified && (
                <span className="text-blue-600 font-medium">✓ Verified</span>
              )}
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {article.language}
              </span>
            </div>
          </div>

          {/* Author and location */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm text-gray-900">{article.author}</p>
              <p className="text-xs text-gray-500">{article.location}</p>
            </div>
            <time className="text-xs text-gray-500">
              {new Date(article.publishedAt).toLocaleDateString()}
            </time>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

/**
 * Grid container for article cards with responsive layout
 */
interface ArticleGridProps {
  children: React.ReactNode
  className?: string
}

export function ArticleGrid({ children, className = "" }: ArticleGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Loading skeleton for article cards
 */
export function ArticleCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-gray-200 animate-pulse" />
      <CardContent className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3" />
          <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4" />
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Article list with loading state
 */
interface ArticleListProps {
  articles: Article[]
  source: "dashboard" | "articles" | "featured"
  isLoading?: boolean
  showTrending?: boolean
  emptyStateMessage?: string
}

export function ArticleList({ 
  articles, 
  source, 
  isLoading = false, 
  showTrending = false,
  emptyStateMessage = "No articles found."
}: ArticleListProps) {
  if (isLoading) {
    return (
      <ArticleGrid>
        {Array.from({ length: 6 }).map((_, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </ArticleGrid>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">{emptyStateMessage}</div>
      </div>
    )
  }

  return (
    <ArticleGrid>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          source={source}
          showTrending={showTrending}
        />
      ))}
    </ArticleGrid>
  )
}