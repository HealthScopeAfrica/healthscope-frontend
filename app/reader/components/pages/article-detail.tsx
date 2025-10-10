import { ArrowLeft, Bookmark, Share2, Play, Globe, Clock, Calendar, Eye } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { Link, useParams } from "react-router"

export default function ArticleDetailPage() {
  const { id } = useParams()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back,</h1>
        <h2 className="text-2xl font-bold text-gray-900">Sarah!</h2>
        <p className="text-gray-600">Discover trusted health information tailored for you.</p>
      </div>

      {/* Back Button */}
      <Link to="/reader/dashboard/articles">
        <Button variant="ghost" className="mb-6 -ml-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Button>
      </Link>

      {/* Article Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Infectious Disease</Badge>
          <span className="flex items-center gap-1">
            <Globe className="h-4 w-4" />
            English
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />8 min read
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            2025-10-18
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            12,132 views
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Malaria Prevention in Rural Communities</h1>

        <p className="text-lg text-gray-600 mb-6">
          A comprehensive guide to preventing malaria in rural African communities, including proven strategies and
          community-based interventions.
        </p>

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-semibold text-gray-900">Dr. Amina Yakubu</p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              WHO Africa
              <Badge variant="secondary" className="ml-2 text-xs">
                Verified
              </Badge>
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
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800" alt="Article featured image" className="w-full h-auto" />
      </div>

      {/* Audio Player */}
      <Card className="mb-8 bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                <Play className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-blue-900">Listen to this article</span>
            </div>
            <span className="text-sm text-blue-700">8:00</span>
          </div>
          <div className="mt-3 h-1 bg-blue-200 rounded-full">
            <div className="h-full w-0 bg-blue-600 rounded-full" />
          </div>
        </CardContent>
      </Card>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
        <p className="text-gray-700 mb-6">
          This comprehensive guide provides essential information on understanding malaria prevention that every person
          should know. Our experts have verified this content to ensure accuracy and reliability.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Points to Remember</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Early detection and prevention are crucial for maintaining good health</li>
          <li>Regular consultation with healthcare professionals is recommended</li>
          <li>Understanding symptoms helps in seeking timely medical attention</li>
          <li>Community awareness plays a vital role in public health</li>
        </ul>

        <p className="text-gray-700 mb-6">Here are evidence-based strategies recommended by health experts:</p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Maintain a balanced and nutritious diet and exercise regularly to boost your immune system</li>
          <li>Practice good hygiene and ensure your surroundings clean at all times</li>
          <li>Avoid risk factors and maintain a healthy lifestyle</li>
          <li>Avoid being bitten by mosquitoes by using mosquito repellent creams or spray</li>
          <li>Use insecticide spray in your living and sleeping areas to kill mosquitoes</li>
          <li>Reduce vegetation near houses, as mosquitoes can hide there</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Seek Medical Help</h3>
        <p className="text-gray-700 mb-6">
          It's important to consult with a health professional when you notice any concerning symptoms. Don't hesitate
          to reach out to medical experts for proper diagnosis and treatment.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Resources</h3>
        <p className="text-gray-700 mb-6">
          Many organizations provide free or low-cost health services. Contact local health centers and NGOs for support
          and information specific to your region.
        </p>

        <p className="text-gray-700 mb-6">
          Health education empowers communities to make informed decisions about their wellbeing. Together, we can
          create a healthier future for Africa and the world! WHO Africa
        </p>
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