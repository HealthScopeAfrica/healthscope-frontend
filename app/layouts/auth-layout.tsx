import { Outlet, Link } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen">
      {/* Header with back to home */}
      <header className="bg-white border-b border-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link to="/">
            <img src="/images/logo.png" alt="HealthScope" className="h-10" />
          </Link>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main auth content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
