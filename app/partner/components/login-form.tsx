import { useState } from "react";
import Button from "~/components/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormProps {
  formData: {
    loginEmail: string;
    password: string;
  };
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({ formData, onInputChange, onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Partner Login</h2>

      <div className="space-y-2">
        <Label htmlFor="loginEmail" className="text-sm sm:text-base font-medium">
          Email/Partner ID
        </Label>
        <Input
          id="loginEmail"
          type="text"
          placeholder="Enter your email/partner id"
          value={formData.loginEmail}
          onChange={(e) => onInputChange("loginEmail", e.target.value)}
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
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => onInputChange("password", e.target.value)}
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

      <div className="flex justify-end ">
        <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm font-medium">
          Forgot Password?
        </a>
      </div>

      <Button
        type="submit"
        className="w-full"
      >
        Log in
      </Button>
    </form>
  );
}