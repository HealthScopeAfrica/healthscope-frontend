import { Button as HeadlessButton } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { LuMail } from "react-icons/lu";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-blue-800 active:bg-bg-blue-900 disabled:bg-gray-100",
        google:
          "border border-black text-black gap-4 md:gap-4 max-w-[400px] w-full justify-start",
        email:
          "border border-black text-black gap-4 md:gap-4 max-w-[400px] w-full justify-start",
        outline:
          "border border-input border-primary text-primary hover:border-bg-blue-800 hover:text-bg-blue-800 active:border-bg-blue-900 active:text-bg-blue-900 disabled:border-bg-gray-100 disabled:text-bg-gray-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 md:px-6.5 md:py-3 md:text-lg",
        sm: "h-9 rounded-md px-3",
        lg: "h-16 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <HeadlessButton
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {variant === "google" && (
        <img className="absolute left-4 h-7.5" src="/google.png" alt="" />
      )}
      {variant === "email" && <LuMail size={30} className="absolute left-4" />}
      <span className="flex-1 text-center">{children}</span>
    </HeadlessButton>
  );
};

export default Button;
