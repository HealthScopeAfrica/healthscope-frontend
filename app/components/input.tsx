import { useState, forwardRef, type InputHTMLAttributes } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { cn } from "~/lib/utils";
import { cva } from "class-variance-authority";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email";
}

// base + variants with cva
const inputVariants = cva(
  "w-full rounded-md border p-4 border-[#949494] focus:ring-0 focus:outline-none text-[#333333] leading-[120%] -tracking-[2%] bg-white md:text-lg shadow-sm focus:ring-2", // base
  {
    variants: {
      variant: {
        text: "",
        email: "",
        password: "",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    if (type === "password") {
      return (
        <div className="relative w-full">
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(inputVariants({ variant: "password" }), className)}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <LuEyeOff size={30} /> : <LuEye size={30} />}
          </button>
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant: type }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
