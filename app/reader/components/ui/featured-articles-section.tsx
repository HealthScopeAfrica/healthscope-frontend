/**
 * Featured Articles Section Component
 * Extracted from dashboard for modularity
 */

import { Link } from "react-router";
import { TrendingUp, Clock } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { type Article } from "~/reader/data/articles";

interface FeaturedArticlesSectionProps {
  articles: Article[];
  isLoading: boolean;
}

export function FeaturedArticlesSection({ articles, isLoading }: FeaturedArticlesSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Featured Articles</h3>
      <div className="space-y-4">
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-12 border border-gray-100 rounded-lg animate-pulse">
              <div className="flex gap-4">
                <div className="w-48 h-32 bg-gray-200 rounded-lg"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          articles.map((article) => (
            <Link
              key={article.id}
              to={`/reader/dashboard/articles/${article.id}?from=dashboard`}
              className="flex flex-1 flex-col"
            >
              <div className="bg-white p-12 border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="flex gap-4">
                  <div className="relative w-48 h-32 flex-shrink-0 rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {article.trending && (
                      <Badge className="absolute top-[-9px] right-0 bg-red-500 text-white">
                        <TrendingUp className="h-4 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {article.category}
                    </Badge>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>By {article.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}