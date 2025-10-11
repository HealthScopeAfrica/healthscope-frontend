import { Globe, Volume2, Eye, CheckCircle } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router";
import { useState } from "react";

// Article Card Skeleton with horizontal bars
function ArticleCardSkeleton() {
  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="p-0">
        {/* Image skeleton */}
        <div className="w-full h-48 bg-slate-100 relative">
          <div className="p-4 space-y-3 h-full flex flex-col justify-center">
            <div className="h-4 bg-slate-200 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-slate-200 rounded animate-pulse" />
            <div className="h-4 w-3/5 bg-slate-200 rounded animate-pulse" />
            <div className="mt-4 h-3 w-1/2 bg-slate-200 rounded animate-pulse" />
            <div className="h-3 w-3/4 bg-slate-200 rounded animate-pulse" />
          </div>
        </div>
        
        {/* Content skeleton */}
        <div className="p-4 space-y-4">
          {/* Category badge skeleton */}
          <div className="h-5 w-20 bg-slate-200 rounded-full animate-pulse" />
          
          {/* Title skeleton - horizontal bars */}
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-slate-200 rounded animate-pulse" />
          </div>
          
          {/* Description skeleton - horizontal bars */}
          <div className="space-y-2">
            <div className="h-3 bg-slate-150 rounded animate-pulse" />
            <div className="h-3 w-5/6 bg-slate-150 rounded animate-pulse" />
          </div>
          
          {/* Meta info skeleton */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="h-3 w-16 bg-slate-150 rounded animate-pulse" />
              <div className="h-3 w-12 bg-slate-150 rounded animate-pulse" />
            </div>
            <div className="h-3 w-10 bg-slate-150 rounded animate-pulse" />
          </div>
          
          {/* Author info skeleton */}
          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
            <div className="space-y-1">
              <div className="h-3 w-24 bg-slate-150 rounded animate-pulse" />
              <div className="h-2 w-16 bg-slate-100 rounded animate-pulse" />
            </div>
            <div className="h-3 w-12 bg-slate-150 rounded animate-pulse" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Determine the article link based on context
  const articleLink = variant === 'authenticated'
    ? `/reader/dashboard/articles/${article.id}`
    : `/open/articles/${article.id}`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Stop showing skeleton even on error
  };

  return (
    <Card className="h-full cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <CardContent className="p-0">
        <Link to={articleLink}>
          {/* Image */}
          <div className="relative w-full h-48 bg-gray-100">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 w-full h-full bg-slate-100">
                <div className="p-3 space-y-2 h-full flex flex-col justify-center">
                  <div className="h-3 bg-slate-200 rounded animate-pulse" />
                  <div className="h-3 w-4/5 bg-slate-200 rounded animate-pulse" />
                  <div className="h-3 w-3/5 bg-slate-200 rounded animate-pulse" />
                  <div className="mt-4 h-2 w-1/2 bg-slate-200 rounded animate-pulse" />
                  <div className="h-2 w-3/4 bg-slate-200 rounded animate-pulse" />
                </div>
              </div>
            )}
            {!imageError ? (
              <img
                src={article.image}
                alt={article.title}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs">Image unavailable</p>
                </div>
              </div>
            )}
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

export { ArticleCardSkeleton };
export type { Article };