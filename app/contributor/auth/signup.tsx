export default function ContributorSignup() {
  return (
    <div className="max-w-md w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Contributor Signup</h1>
        <p className="text-gray-600 mt-2">Join our community of contributors</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Invitation Required</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>Contributor accounts require an invitation. Please enter your invitation code below.</p>
            </div>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Invitation Code</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="Enter your invitation code" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="Your full name" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="your.email@example.com" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="••••••••" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input 
            type="password" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="••••••••" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Professional Background</label>
          <textarea 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            rows={3}
            placeholder="Brief description of your medical/healthcare background"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/contributor/auth/login" className="text-blue-600 hover:text-blue-800">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}