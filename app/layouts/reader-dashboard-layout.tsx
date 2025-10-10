import type React from "react"
import { Bell, Settings } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Link, Outlet } from "react-router"

export default function ReaderDashboardLayout() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/reader/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-semibold text-lg">
                <span className="text-blue-600">Health</span>
                <span className="text-green-600">Scope</span>
              </span>
            </Link>

            {/* Navigation Link s */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/reader/dashboard" className="text-gray-700 hover:text-gray-900 transition-colors">
                Dashboard
              </Link>
              <Link to="/reader/dashboard/articles" className="text-gray-700 hover:text-gray-900 transition-colors">
                Articles
              </Link>
              <Link to="/reader/dashboard/profile" className="text-gray-700 hover:text-gray-900 transition-colors">
                Profile
              </Link>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <span className="w-6 h-6 bg-gray-200 rounded-full" />
                Profile
              </Button>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium ml-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}