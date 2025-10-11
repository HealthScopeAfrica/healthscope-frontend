"use client";

import { useState } from "react";
import Button from "~/components/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function ContributorLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contributor login:", formData);
    // Ready for API integration
  };

  return (
    <div className=" min-h-screen lg:min-h-[90vh] flex flex-col-reverse lg:flex-row">
      {/* Left Side - Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-green-50 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col justify-center relative overflow-hidden">
        {/* Health-themed background illustration */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute top-10 left-10 w-20 h-20 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="absolute bottom-20 right-16 w-16 h-16 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-1/4 w-12 h-12 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="max-w-xl mx-auto lg:mx-0 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
            Share Knowledge. Inspire Change
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-balance text-gray-600">
            Amplify your voice across Africa and beyond. Counter misinformation
            with trusted insights and help shape healthier communities.
          </p>

          <div className="space-y-3 mb-8 sm:mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">
                Reach wider audiences with your expertise
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">
                Collaborate with healthcare peers
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              <span className="text-gray-700">
                Publish directly to millions
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">
                Combat health misinformation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 bg-green-50 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Contributor Login
            </h2>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm sm:text-base font-medium"
              >
                Email/Contributor ID
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email/contributor id"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm sm:text-base font-medium"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm font-medium"
              >
                Forgot Password?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
