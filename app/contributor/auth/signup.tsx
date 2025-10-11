"use client"

import { useState } from "react";
import Button from "~/components/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function ContributorSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    invitationCode: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contributor signup:", formData);
    // Ready for API integration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Health-themed background illustration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-10 left-10 w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
        <svg className="absolute bottom-20 right-16 w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
        </svg>
        <svg className="absolute top-1/2 right-1/4 w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Contributor Signup</h1>
          <p className="text-gray-600">Join our community of contributors</p>
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

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <Label htmlFor="invitationCode" className="text-sm sm:text-base font-medium">
              Invitation Code
            </Label>
            <Input
              id="invitationCode"
              type="text"
              placeholder="Enter your invitation code"
              value={formData.invitationCode}
              onChange={(e) => handleInputChange("invitationCode", e.target.value)}
              className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm sm:text-base font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm sm:text-base font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm sm:text-base font-medium">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm sm:text-base font-medium">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
              className="h-10 sm:h-12 bg-white border-gray-300 text-sm sm:text-base"
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="text-gray-900">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/contributor/auth/login" className="text-blue-600 hover:text-blue-800 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}