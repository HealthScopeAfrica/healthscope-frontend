export default function AboutUs() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About HealthScope
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals with reliable, evidence-based health information 
            through collaboration with trusted healthcare professionals and organizations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At HealthScope, we believe that access to accurate, understandable health 
              information is a fundamental right. Our platform bridges the gap between 
              complex medical research and everyday health decisions.
            </p>
            <p className="text-gray-600 mb-6">
              We work exclusively with verified healthcare professionals, medical institutions, 
              and trusted partners to ensure that every piece of content meets the highest 
              standards of medical accuracy and relevance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                Evidence-Based
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                Peer-Reviewed
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                Accessible
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Medical Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Published Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Healthcare Partners</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
              <p className="text-gray-600">
                Every article is fact-checked and reviewed by qualified medical professionals 
                before publication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Complex medical information presented in clear, understandable language 
                for all readers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-gray-600">
                Transparent sourcing, verified contributors, and commitment to 
                editorial independence.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 text-sm mb-2">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">
                Board-certified internist with 15+ years of experience in preventive medicine.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Emily Chen</h3>
              <p className="text-green-600 text-sm mb-2">Editorial Director</p>
              <p className="text-gray-600 text-sm">
                Former medical journalist with expertise in translating complex research 
                into accessible content.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Michael Torres</h3>
              <p className="text-purple-600 text-sm mb-2">Head of Technology</p>
              <p className="text-gray-600 text-sm">
                Healthcare technology specialist focused on creating user-friendly 
                digital health platforms.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to improve your health knowledge or share your 
            medical expertise, there's a place for you in the HealthScope community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold">
              Start Reading
            </button>
            <button className="bg-gray-100 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-200 font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}