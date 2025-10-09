export default function PartnerDashboard() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Partner Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Content Analytics</h2>
          <p className="text-gray-600">Track performance of your content</p>
          <div className="mt-4">
            <div className="text-2xl font-bold text-blue-600">1,234</div>
            <div className="text-sm text-gray-500">Total Views</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Published Articles</h2>
          <p className="text-gray-600">Manage your published content</p>
          <div className="mt-4">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-500">Articles Published</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Reader Engagement</h2>
          <p className="text-gray-600">See how readers interact with your content</p>
          <div className="mt-4">
            <div className="text-2xl font-bold text-purple-600">89%</div>
            <div className="text-sm text-gray-500">Engagement Rate</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">New article published</p>
              <p className="text-sm text-gray-600">2 hours ago</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">Content approved by admin</p>
              <p className="text-sm text-gray-600">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}