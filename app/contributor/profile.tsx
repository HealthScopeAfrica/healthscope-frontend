export default function ContributorProfile() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contributor Profile</h1>
      
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Dr. John Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="john.smith@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Professional Title</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Cardiologist" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Institution</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="University Medical Center" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows={3} placeholder="Brief professional biography"></textarea>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Medical License Number</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="MD123456" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                  <option>1-5 years</option>
                  <option>6-10 years</option>
                  <option>11-15 years</option>
                  <option>16-20 years</option>
                  <option>20+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Specializations</label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2">Cardiology</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2">Internal Medicine</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2">Preventive Medicine</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2">Public Health</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Research Interests</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows={2} placeholder="Areas of research focus"></textarea>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Contributor Statistics</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Articles</span>
                <span className="text-2xl font-bold text-blue-600">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Views</span>
                <span className="text-2xl font-bold text-green-600">12.4k</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Rating</span>
                <span className="text-2xl font-bold text-purple-600">4.7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Member Since</span>
                <span className="text-lg font-semibold">Jan 2024</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  🏆
                </div>
                <div>
                  <p className="font-medium">Top Contributor</p>
                  <p className="text-sm text-gray-600">Most articles published this month</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  ⭐
                </div>
                <div>
                  <p className="font-medium">High Quality Content</p>
                  <p className="text-sm text-gray-600">Average rating above 4.5</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  📝
                </div>
                <div>
                  <p className="font-medium">Prolific Writer</p>
                  <p className="text-sm text-gray-600">Published 5+ articles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end space-x-4">
          <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-200">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}