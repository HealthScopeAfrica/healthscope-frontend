import { Button as HeadlessButton } from '@headlessui/react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input border-primary text-primary hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-14 px-6.5 py-4 text-xl",
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
)

export interface ButtonProps
    extends React.ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
    children: React.ReactNode
}

const Button = ({ children, className, variant, size, ...props }: ButtonProps) => {
    return (
        <HeadlessButton className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {children}
        </HeadlessButton>
    )
}

export default Button

