import { ArticleCard, type Article } from "~/reader/components/ui/article-card";

interface ArticleGridProps {
  articles: Article[];
  filteredArticles: Article[];
  searchTerm: string;
}

export function ArticleGrid({ articles, filteredArticles, searchTerm }: ArticleGridProps) {
  return (
    <>
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-600">
          Showing {filteredArticles.length} of {articles.length} articles
          {searchTerm && (
            <span className="ml-1">
              for "<span className="font-medium">{searchTerm}</span>"
            </span>
          )}
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No articles found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </>
  );
}