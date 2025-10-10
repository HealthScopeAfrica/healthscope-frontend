import { Globe, Volume2, Eye, CheckCircle } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router";

interface Article {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  location: string;
  readTime: string;
  views: string;
  language: string;
  verified: boolean;
  hasAudio: boolean;
  image: string;
  recommended: boolean;
}

interface ArticleCardProps {
  article: Article;
  variant?: 'public' | 'authenticated';
}

export function ArticleCard({ article, variant = 'authenticated' }: ArticleCardProps) {
  // Determine the article link based on context
  const articleLink = variant === 'authenticated'
    ? `/reader/dashboard/articles/${article.id}`
    : `/open/articles/${article.id}`;

  return (
    <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <CardContent className="p-0">
        <Link to={articleLink}>
          {/* Image */}
          <div className="relative w-full h-48">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Featured/Trending badges */}
            {article.recommended && (
              <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white">
                Recommended
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Category and Verification */}
            <div className="flex items-center gap-2">
              <Badge className="text-xs font-medium bg-[#EDF2FD] text-blue-400 hover:bg-[#dbeafe]">
                {article.category}
              </Badge>
              {article.verified && (
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-[#32A682] font-medium">
                    Verified
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h4 className="font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
              {article.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {article.description}
            </p>

            {/* Meta Info */}
            <div className="flex justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  {article.readTime}
                </span>
                <span className="text-blue-600">
                  {article.hasAudio && (
                    <span className="flex items-center gap-1">
                      <Volume2 className="h-3 w-3" />
                      Audio
                    </span>
                  )}
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {article.language}
              </span>
            </div>

            {/* Author and Views */}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {article.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {article.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Eye className="h-3 w-3" />
                  {article.views}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export type { Article };