import * as React from "react"
import { cn } from "~/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom className for additional styling
   */
  className?: string
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-gray-200 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        className
      )}
      {...props}
    />
  )
}

// Pre-built skeleton variants for common use cases
function SkeletonText({ className, ...props }: SkeletonProps) {
  return <Skeleton className={cn("h-4 w-full", className)} {...props} />
}

function SkeletonAvatar({ className, ...props }: SkeletonProps) {
  return <Skeleton className={cn("h-12 w-12 rounded-full", className)} {...props} />
}

function SkeletonButton({ className, ...props }: SkeletonProps) {
  return <Skeleton className={cn("h-10 w-24 rounded-lg", className)} {...props} />
}

function SkeletonCard({ className, ...props }: SkeletonProps) {
  return (
    <div className={cn("p-6 space-y-4", className)} {...props}>
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-20 w-full" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  )
}

// Onboarding-specific skeleton
function OnboardingSkeleton() {
  return (
    <div className="w-full max-w-md mx-auto text-center space-y-6">
      {/* Logo skeleton */}
      <Skeleton className="h-8 w-32 mx-auto" />
      
      {/* Icon skeleton */}
      <Skeleton className="h-32 w-32 mx-auto rounded-full" />
      
      {/* Title skeleton */}
      <Skeleton className="h-8 w-64 mx-auto" />
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4 mx-auto" />
      </div>
      
      {/* Input skeleton */}
      <div className="space-y-2 text-left">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-12 w-full" />
      </div>
      
      {/* Button skeleton */}
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-6 w-20 mx-auto" />
    </div>
  )
}

export { 
  Skeleton, 
  SkeletonText, 
  SkeletonAvatar, 
  SkeletonButton, 
  SkeletonCard,
  OnboardingSkeleton 
}