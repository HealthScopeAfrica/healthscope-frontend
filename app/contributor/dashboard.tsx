export default function ContributorDashboard() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contributor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Articles Written</h2>
          <div className="text-3xl font-bold text-blue-600">8</div>
          <p className="text-sm text-gray-600">Total published</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Pending Review</h2>
          <div className="text-3xl font-bold text-yellow-600">3</div>
          <p className="text-sm text-gray-600">Awaiting approval</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Total Views</h2>
          <div className="text-3xl font-bold text-green-600">2.4k</div>
          <p className="text-sm text-gray-600">Across all articles</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Avg. Rating</h2>
          <div className="text-3xl font-bold text-purple-600">4.8</div>
          <p className="text-sm text-gray-600">Reader feedback</p>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">Article "Mental Health Awareness" approved</p>
              <p className="text-sm text-gray-600">2 hours ago</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">New submission "Diabetes Management"</p>
              <p className="text-sm text-gray-600">1 day ago</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="font-medium">Article revision requested</p>
              <p className="text-sm text-gray-600">2 days ago</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Write New Article
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200">
              View Draft Articles
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-200">
              Check Submission Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}