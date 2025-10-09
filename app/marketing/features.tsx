
import type { Route } from "./+types/home";
import { generateMeta } from "~/lib/meta";
export function meta({}: Route.MetaArgs) {
  return generateMeta('features');
}
export default function Features() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Features That Empower Health
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive tools and resources designed to support your health journey, 
            whether you're a reader, healthcare partner, or medical contributor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              📚
            </div>
            <h3 className="text-xl font-semibold mb-4">Comprehensive Library</h3>
            <p className="text-gray-600">
              Access thousands of peer-reviewed articles on various health topics, 
              from preventive care to specialized medical conditions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              🎯
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Content</h3>
            <p className="text-gray-600">
              Get tailored health information based on your interests, 
              health goals, and reading preferences.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-4">Real-time Updates</h3>
            <p className="text-gray-600">
              Stay informed with the latest health news, research findings, 
              and medical breakthroughs as they happen.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
              👥
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Contributors</h3>
            <p className="text-gray-600">
              Learn from verified healthcare professionals, researchers, 
              and medical institutions you can trust.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              🔒
            </div>
            <h3 className="text-xl font-semibold mb-4">Privacy & Security</h3>
            <p className="text-gray-600">
              Your health information and reading preferences are protected 
              with enterprise-grade security measures.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-4">Analytics & Insights</h3>
            <p className="text-gray-600">
              Track your learning progress and discover health trends 
              relevant to your interests and goals.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                For Healthcare Partners
              </h2>
              <p className="text-blue-100 mb-6">
                Join our network of trusted healthcare organizations and reach 
                thousands of engaged readers with your valuable content and expertise.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Content management dashboard
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Advanced analytics and insights
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Direct reader engagement tools
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Brand visibility and recognition
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                For Medical Contributors
              </h2>
              <p className="text-gray-600 mb-6">
                Share your expertise with a global audience of health-conscious readers. 
                Join our community of verified medical professionals making a difference.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  Peer review process for quality assurance
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  Professional recognition and credibility
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  Impact tracking and reader feedback
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  Invitation-only exclusive community
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold">
                Request Invitation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}