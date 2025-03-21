
import React from 'react';
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'subtle' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, variant = 'default', size = 'md', isLoading, icon, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-secondary text-white hover:bg-secondary/90 active:scale-[0.98] shadow-sm",
      outline: "border border-secondary/30 hover:bg-secondary/10 text-secondary",
      subtle: "bg-primary/10 text-primary hover:bg-primary/20",
      ghost: "text-secondary hover:bg-secondary/10",
      link: "text-primary underline-offset-4 hover:underline"
    };
    
    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2.5",
      lg: "text-base px-5 py-3"
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          isLoading && "opacity-70 pointer-events-none",
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {icon && !isLoading && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
