// Card.tsx

import React from "react";

// 1. Define the props (properties) this component will accept.
// We use 'children' to allow any content inside the Card.
interface CardProps {
  children: React.ReactNode;
  className?: string; // Optional custom class for styling
}

// 2. Define and export the Card component.
// We use 'export function' so it can be imported by name in other files.
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      // Basic styling for a card: white background, padding, rounded corners, and a subtle shadow.
      className={`bg-white p-6 rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

// You can also use 'export default Card;' if you prefer that import style,
// but 'export function Card' matches the named import { Card } you are using.
