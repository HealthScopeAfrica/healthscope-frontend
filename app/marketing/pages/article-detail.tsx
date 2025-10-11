import { ArrowLeft, Bookmark, Share2, Play, Globe, Clock, Calendar, Eye, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { usePublicAuth } from "~/marketing/components/auth/public-auth-provider";
import { publicArticlesData } from "~/marketing/data/public-articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const { openSignUp } = usePublicAuth();
  
  const article = publicArticlesData.find(a => a.id === parseInt(id || '0'));
  
  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/open/articles">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInteractionClick = (action: string) => {
    // For public users, trigger auth modal
    openSignUp();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link to="/open/articles" className="inline-block mb-6">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>
      </Link>

      {/* Article Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
          <Badge className="bg-[#EDF2FD] text-blue-400 hover:bg-blue-100">{article.category}</Badge>
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
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-[#32A682] font-medium">
                    Verified
                  </span>
                </div>
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => handleInteractionClick('bookmark')}>
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleInteractionClick('share')}>
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

      {/* Audio Player - Only show if article has audio */}
      {article.hasAudio && (
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700" onClick={() => handleInteractionClick('audio')}>
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
      <div className="max-w-4xl mx-auto">
        <div 
          className="article-content text-justify leading-7 space-y-4"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
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

      {/* Social Sharing - with auth gating */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Found this article helpful? Sign up to interact and share with your community</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => handleInteractionClick('whatsapp')}>Share on WhatsApp</Button>
          <Button variant="outline" onClick={() => handleInteractionClick('facebook')}>Share on Facebook</Button>
          <Button variant="outline" onClick={() => handleInteractionClick('twitter')}>Share on Twitter</Button>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Want to interact with this content?</h3>
            <p className="text-gray-600 mb-4">Sign up to bookmark articles, share with your network, and get personalized health recommendations.</p>
            <Button
              onClick={() => openSignUp()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Sign Up - It's Free
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}