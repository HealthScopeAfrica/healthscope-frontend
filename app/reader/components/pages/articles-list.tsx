import { useState, useMemo } from "react";
import { ArticleFilters } from "~/reader/components/ui/article-filters";
import { ArticleGrid } from "~/reader/components/ui/article-grid";
import type { Article } from "~/reader/components/ui/article-card";

export default function ArticlesPage() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all-lang");
  const [sortBy, setSortBy] = useState("latest");

  const articles: Article[] = [
    {
      id: 1,
      category: "Infectious Disease",
      title: "Understanding Malaria Prevention in Rural Communities",
      description:
        "A comprehensive guide to preventing malaria in rural African communities, including proven strategies and community-based interventions.",
      author: "Dr. Amina Yakubu",
      location: "WHO Africa",
      readTime: "8 min read",
      views: "12,132 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image:
        "https://images.unsplash.com/photo-1707386821500-09f8a666706b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1437",
      recommended: false,
    },
    {
      id: 2,
      category: "Nutrition",
      title: "Nutrition Guidelines for Growing Children",
      description:
        "Essential nutrition guidelines, meal planning tips and healthy eating habits for child development.",
      author: "Prof. Fatima Hassan",
      location: "Global Africa",
      readTime: "6 min read",
      views: "1,234 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image:
        "https://images.unsplash.com/photo-1704270027011-c532d6f1fba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fE51dHJpdGlvbiUyMGZvciUyMGdyb3dpbmclMjBjaGlsZHJlbiUyMGluJTIwQWZyaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      recommended: true,
    },
    {
      id: 3,
      category: "Mental Health",
      title: "Mental Health and Stress Management",
      description:
        "Addressing mental health challenges and practical approaches for managing stress.",
      author: "Sarah Okonkwo",
      location: "Mental Health Africa",
      readTime: "10 min read",
      views: "700 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image:
        "https://images.unsplash.com/photo-1683119510482-be8f631d8353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      recommended: false,
    },
    {
      id: 4,
      category: "Maternal Health",
      title: "Maternal Health: Prenatal Care Best Practices",
      description:
        "Essential prenatal care guidelines for expectant mothers across different trimesters.",
      author: "Dr. Kwame Nkrumah",
      location: "African Health Alliance",
      readTime: "9 min read",
      views: "5,170 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image:
        "https://plus.unsplash.com/premium_photo-1726750850117-6eeb0dcedd6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1437",
      recommended: false,
    },
    {
      id: 5,
      category: "First Aid",
      title: "First Aid Essentials: What Every Household Should have",
      description:
        "Basic first aid techniques and emergency response procedures that can save lives.",
      author: "Juma Kisiaki",
      location: "Red Cross Africa",
      readTime: "8 min read",
      views: "9010 views",
      language: "Kiswahili",
      verified: true,
      hasAudio: true,
      image:
        "https://images.unsplash.com/photo-1584739555405-37e477519d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      recommended: false,
    },
    {
      id: 6,
      category: "Preventive Care",
      title: "Exercise and Cardiovascular Health",
      description:
        "How regular physical activity can prevent heart disease and improve overall wellness.",
      author: "Dr. Sekou Diarra",
      location: "African Health Alliance",
      readTime: "7 min read",
      views: "585 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image:
        "https://plus.unsplash.com/premium_photo-1664910952496-b8cf8780ee7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
      recommended: false,
    },
  ];

  // Get unique categories from articles
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(articles.map(article => article.category))];
    return uniqueCategories;
  }, [articles]);

  // Get unique languages from articles
  const languages = useMemo(() => {
    const uniqueLanguages = [...new Set(articles.map(article => article.language))];
    return uniqueLanguages;
  }, [articles]);

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = categoryFilter === "all" || 
        article.category === categoryFilter;

      // Language filter
      const matchesLanguage = languageFilter === "all-lang" || 
        article.language === languageFilter;

      return matchesSearch && matchesCategory && matchesLanguage;
    });

    // Sort articles
    if (sortBy === "popular") {
      filtered.sort((a, b) => {
        const aViews = parseInt(a.views.replace(/[^\d]/g, ''));
        const bViews = parseInt(b.views.replace(/[^\d]/g, ''));
        return bViews - aViews;
      });
    } else if (sortBy === "trending") {
      // Sort by views but prioritize verified articles
      filtered.sort((a, b) => {
        if (a.verified && !b.verified) return -1;
        if (!a.verified && b.verified) return 1;
        const aViews = parseInt(a.views.replace(/[^\d]/g, ''));
        const bViews = parseInt(b.views.replace(/[^\d]/g, ''));
        return bViews - aViews;
      });
    }
    // For "latest", keep original order

    return filtered;
  }, [articles, searchTerm, categoryFilter, languageFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome back,</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sarah!</h2>
        <p className="text-gray-600">
          Discover trusted health information tailored for you.
        </p>
      </div>

      {/* Articles Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">
          Verified Health Articles
        </h3>
        <p className="text-gray-600 mb-6">
          Browse our collection of verified health information from trusted
          organizations
        </p>

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

        {/* Articles Grid */}
        <ArticleGrid
          articles={articles}
          filteredArticles={filteredArticles}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
}
