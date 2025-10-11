import { useState, useMemo } from "react";
import { ArticleFilters } from "~/reader/dashboard/components/ui/article-filters";
import { ArticleCard, type Article } from "~/reader/dashboard/components/ui/article-card";
import { usePublicAuth } from "~/marketing/components/auth/public-auth-provider";
import { publicArticlesData, type PublicArticle } from "~/marketing/data/public-articles";

// Convert public articles to match the Article interface for ArticleCard
const convertToArticleFormat = (publicArticle: PublicArticle): Article => ({
  id: publicArticle.id,
  category: publicArticle.category,
  title: publicArticle.title,
  description: publicArticle.description,
  author: publicArticle.author,
  location: publicArticle.location,
  readTime: publicArticle.readTime,
  views: publicArticle.views,
  language: publicArticle.language.startsWith("EN") ? "EN" : publicArticle.language === "English" ? "EN" : publicArticle.language,
  verified: publicArticle.verified,
  hasAudio: publicArticle.hasAudio,
  image: publicArticle.image,
  recommended: publicArticle.recommended || false
});

const articles: Article[] = publicArticlesData.map(convertToArticleFormat);

export default function PublicArticlesPage() {
  // State for search and filters - reusing the same logic
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all-lang");
  const [sortBy, setSortBy] = useState("latest");
  
  // Use the existing auth system
  const { openSignIn, openSignUp } = usePublicAuth();

  // Reuse the same filtering logic
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(article => article.category))];
    return uniqueCategories;
  }, []);

  const languages = useMemo(() => {
    const uniqueLanguages = [...new Set(articles.map(article => article.language))];
    return uniqueLanguages;
  }, []);

  const filteredArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      const matchesSearch = searchTerm === "" || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = categoryFilter === "all" || 
        article.category === categoryFilter;

      const matchesLanguage = languageFilter === "all-lang" || 
        article.language === languageFilter;

      return matchesSearch && matchesCategory && matchesLanguage;
    });

    if (sortBy === "popular") {
      filtered.sort((a, b) => {
        const aViews = parseInt(a.views.replace(/[^\d]/g, ''));
        const bViews = parseInt(b.views.replace(/[^\d]/g, ''));
        return bViews - aViews;
      });
    } else if (sortBy === "trending") {
      filtered.sort((a, b) => {
        if (a.verified && !b.verified) return -1;
        if (!a.verified && b.verified) return 1;
        const aViews = parseInt(a.views.replace(/[^\d]/g, ''));
        const bViews = parseInt(b.views.replace(/[^\d]/g, ''));
        return bViews - aViews;
      });
    }

    return filtered;
  }, [searchTerm, categoryFilter, languageFilter, sortBy]);

  const handleAuthRequired = () => {
    openSignIn();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Health Articles & Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover trusted health information from verified medical professionals. 
          Browse our comprehensive collection of articles covering everything from preventive care to specialized treatments.
        </p>
      </div>

      {/* Search and Filters */}
      <ArticleFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        languageFilter={languageFilter}
        setLanguageFilter={setLanguageFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
        languages={languages}
      />

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="public"
            />
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

      {/* Call to Action */}
      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Want to access more features?
        </h2>
        <p className="text-gray-600 mb-6">
          Sign up for a free account to save articles, get personalized recommendations, and access exclusive content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openSignUp}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Free Account
          </button>
          <button
            onClick={openSignIn}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}