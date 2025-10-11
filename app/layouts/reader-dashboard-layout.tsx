import type React from "react";
import { Bell, Settings, LogOut, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Link, Outlet } from "react-router";

export default function ReaderDashboardLayout() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/reader/dashboard">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 xl:h-[40px] w-auto shrink-0"
            />
          </Link>

            {/* Navigation Link s */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/reader/dashboard"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/reader/dashboard/articles"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Articles
              </Link>
              <Link
                to="/reader/dashboard/profile"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Profile
              </Link>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-8">
              <Button variant="ghost" size="icon" className="relative">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#EDF2FD"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M22.2676 33C22.4431 33.304 22.6956 33.5565 22.9996 33.732C23.3037 33.9075 23.6485 33.9999 23.9996 33.9999C24.3506 33.9999 24.6955 33.9075 24.9995 33.732C25.3036 33.5565 25.556 33.304 25.7316 33"
                    stroke="#0A0A0A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.2622 27.326C15.1316 27.4692 15.0454 27.6472 15.0141 27.8385C14.9828 28.0298 15.0078 28.226 15.086 28.4034C15.1641 28.5807 15.2922 28.7316 15.4545 28.8375C15.6168 28.9434 15.8064 28.9999 16.0002 29H32.0002C32.194 29.0001 32.3837 28.9438 32.5461 28.8381C32.7085 28.7324 32.8367 28.5817 32.9151 28.4045C32.9935 28.2273 33.0187 28.0311 32.9877 27.8398C32.9566 27.6485 32.8707 27.4703 32.7402 27.327C31.4102 25.956 30.0002 24.499 30.0002 20C30.0002 18.4087 29.3681 16.8826 28.2429 15.7574C27.1177 14.6321 25.5915 14 24.0002 14C22.4089 14 20.8828 14.6321 19.7576 15.7574C18.6324 16.8826 18.0002 18.4087 18.0002 20C18.0002 24.499 16.5892 25.956 15.2622 27.326Z"
                    stroke="#0A0A0A"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="relative h-8 w-8 rounded-full cursor-pointer">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src=""
                        alt="Profile"
                      />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-sm">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">
                        sarah@healthscope.com
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                     <Link to="/reader/dashboard/profile">
                    <User className="mr-2 h-4 w-4" />
                    </Link>
                    <Link to="/reader/dashboard/profile">
                    <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                      <Link to="/reader/dashboard/profile/account-settings">
                    <Settings className="mr-2 h-4 w-4" />
                    </Link>
                    <Link to="/reader/dashboard/profile/account-settings">
                    <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                 <Link to="/">
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4 text-red-500" />
                    <span className=" text-red-500">Log out</span>
                  </DropdownMenuItem>
                 </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
