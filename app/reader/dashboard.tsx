export default function ReaderDashboard() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Reader Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
          <p className="text-gray-600">Your latest reading activity</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Saved Articles</h2>
          <p className="text-gray-600">Bookmarked for later</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Reading Progress</h2>
          <p className="text-gray-600">Track your learning journey</p>
        </div>
      </div>
    </div>
  );
}