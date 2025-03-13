
import React from 'react';
import { cn } from "@/lib/utils";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'glass' | 'elevated';
  isHoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, children, variant = 'default', isHoverable = false, padding = 'md', ...props }, ref) => {
    const baseStyles = "rounded-xl overflow-hidden";
    
    const variants = {
      default: "bg-white",
      outlined: "bg-white border border-gray-100",
      glass: "glass",
      elevated: "bg-white shadow-soft"
    };
    
    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    
    const hoverEffect = isHoverable ? "transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1" : "";
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles, 
          variants[variant], 
          paddings[padding], 
          hoverEffect,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = "CustomCard";

export { CustomCard };
