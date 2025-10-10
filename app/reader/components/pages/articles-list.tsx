import { Search, Globe, Volume2, Eye } from "lucide-react"
import { Input } from "~/components/ui/input"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Link } from "react-router"

export default function ArticlesPage() {
  const articles = [
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
      image: "https://images.unsplash.com/photo-1707386821500-09f8a666706b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1437",
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
      image: "https://images.unsplash.com/photo-1704270027011-c532d6f1fba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fE51dHJpdGlvbiUyMGZvciUyMGdyb3dpbmclMjBjaGlsZHJlbiUyMGluJTIwQWZyaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      recommended: true,
    },
    {
      id: 3,
      category: "Mental Health",
      title: "Mental Health and Stress Management",
      description: "Addressing mental health challenges and practical approaches for managing stress.",
      author: "Sarah Okonkwo",
      location: "Mental Health Africa",
      readTime: "10 min read",
      views: "700 views",
      language: "EN",
      verified: true,
      hasAudio: false,
      image: "https://images.unsplash.com/photo-1683119510482-be8f631d8353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      recommended: false,
    },
    {
      id: 4,
      category: "Maternal Health",
      title: "Maternal Health: Prenatal Care Best Practices",
      description: "Essential prenatal care guidelines for expectant mothers across different trimesters.",
      author: "Dr. Kwame Nkrumah",
      location: "African Health Alliance",
      readTime: "9 min read",
      views: "5,170 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image: "https://plus.unsplash.com/premium_photo-1726750850117-6eeb0dcedd6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1437",
      recommended: false,
    },
    {
      id: 5,
      category: "First Aid",
      title: "First Aid Essentials: What Every Household Should have",
      description: "Basic first aid techniques and emergency response procedures that can save lives.",
      author: "Juma Kisiaki",
      location: "Red Cross Africa",
      readTime: "8 min read",
      views: "9010 views",
      language: "Kiswahili",
      verified: true,
      hasAudio: true,
      image: "https://images.unsplash.com/photo-1584739555405-37e477519d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      recommended: false,
    },
    {
      id: 6,
      category: "Preventive Care",
      title: "Exercise and Cardiovascular Health",
      description: "How regular physical activity can prevent heart disease and improve overall wellness.",
      author: "Dr. Sekou Diarra",
      location: "African Health Alliance",
      readTime: "7 min read",
      views: "585 views",
      language: "EN",
      verified: true,
      hasAudio: true,
      image: "https://plus.unsplash.com/premium_photo-1664910952496-b8cf8780ee7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
      recommended: false,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome back,</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sarah!</h2>
        <p className="text-gray-600">Discover trusted health information tailored for you.</p>
      </div>

      {/* Articles Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Verified Health Articles</h3>
        <p className="text-gray-600 mb-6">
          Browse our collection of verified health information from trusted organizations
        </p>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
          <div className="flex-1 lg:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-10" 
              />
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] h-10">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="general">General Health</SelectItem>
                <SelectItem value="mental">Mental Health</SelectItem>
                <SelectItem value="nutrition">Nutrition</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-lang">
              <SelectTrigger className="w-[180px] h-10">
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-lang">All Languages</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="sw">Kiswahili</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[150px] h-10">
                <SelectValue placeholder="Latest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">Showing {articles.length} articles</p>
          <Badge variant="secondary" className="gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            AI Recommended
          </Badge>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} to={`/reader/dashboard/articles/${article.id}`}>
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    {article.recommended && (
                      <Badge className="absolute top-3 right-3 bg-green-500 text-white">AI Recommended</Badge>
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      {article.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 line-clamp-2">{article.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{article.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <span>{article.readTime}</span>
                      </span>
                      {article.hasAudio && (
                        <span className="flex items-center gap-1">
                          <Volume2 className="h-3 w-3" />
                          Audio
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {article.language}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.location}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Eye className="h-3 w-3" />
                        {article.views}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}