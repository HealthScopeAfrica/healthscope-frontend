import { ArrowLeft, Bookmark, Share2, Play, Globe, Clock, Calendar, Eye } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { Link, useParams, useSearchParams, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { getArticleById, type Article } from "~/reader/data/articles"

export default function ArticleDetailPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fromSource = searchParams.get('from')

  // Function to handle back navigation
  const handleBack = () => {
    // If there's a previous page in browser history, go back
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      // Fallback to appropriate page based on source
      switch (fromSource) {
        case 'dashboard':
          navigate('/reader/dashboard')
          break
        case 'featured':
          navigate('/reader/dashboard/featured')
          break
        case 'articles':
        default:
          navigate('/reader/dashboard/articles')
          break
      }
    }
  }

  useEffect(() => {
    async function loadArticle() {
      if (!id) {
        setError("No article ID provided")
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        setError(null)
        const articleData = await getArticleById(parseInt(id))
        
        if (!articleData) {
          setError("Article not found")
        } else {
          setArticle(articleData)
        }
      } catch (err) {
        console.error("Failed to load article:", err)
        setError("Failed to load article")
      } finally {
        setIsLoading(false)
      }
    }

    loadArticle()
  }, [id, fromSource])

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">{error || "The requested article could not be found."}</p>
          <Button onClick={handleBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back,</h1>
        <h2 className="text-2xl font-bold text-gray-900">Sarah!</h2>
        <p className="text-gray-600">Discover trusted health information tailored for you.</p>
      </div>

      {/* Back Button */}
      <Button variant="ghost" className="mb-6 -ml-2" onClick={handleBack}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      {/* Article Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">{article.category}</Badge>
          <span className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            {article.language}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {article.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {article.views}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

        <p className="text-lg text-gray-600 mb-6">
          {article.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-semibold text-gray-900">{article.author}</p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              {article.location}
              {article.verified && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  Verified
                </Badge>
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-auto"
        />
      </div>

      {/* Audio Player */}
      {article.hasAudio && (
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <Play className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium text-blue-900">Listen to this article</span>
              </div>
              <span className="text-sm text-blue-700">{article.readTime}</span>
            </div>
            <div className="mt-3 h-1 bg-blue-200 rounded-full">
              <div className="h-full w-0 bg-blue-600 rounded-full" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* Medical Disclaimer */}
      <Card className="mt-8 bg-gray-50 border-gray-200">
        <CardContent className="p-6">
          <h4 className="font-semibold text-gray-900 mb-2">Medical Disclaimer</h4>
          <p className="text-sm text-gray-600">
            This article is for educational purposes only and should not replace professional medical advice, diagnosis,
            or treatment. Always consult with qualified healthcare providers (doctor) for medical concerns.
          </p>
        </CardContent>
      </Card>

      {/* Social Sharing */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Found this article helpful? Share it with your community</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Share on WhatsApp</Button>
          <Button variant="outline">Share on Facebook</Button>
          <Button variant="outline">Share on Twitter</Button>
        </div>
      </div>
    </div>
  )
}