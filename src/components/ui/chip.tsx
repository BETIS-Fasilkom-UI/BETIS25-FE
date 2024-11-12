import React from "react"
import { cn } from "@/lib/utils"

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "tertiary"
  icon?: React.ReactNode
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    className, 
    variant = "primary",
    icon, children, ...props 
  }, ref) => {
    const chipClasses = `
    inline-flex font-raleway items-center justify-center rounded-full font-semibold 
    text-xs leading-4 px-4 py-2 border-2
    md:text-base md:leading-6 md:px-5 md:py-2 md:border-[3.5px]
    lg:text-2xl lg:leading-8 lg:px-6 lg:py-3
    `;
    
    const variants = {
      primary: "bg-magenta-500 text-white border-2 border-black",
      secondary: "bg-magenta-150 text-white border-2 border-black",
      tertiary: "bg-white border-black"
    };

    const gradientStyle = {
      background: "linear-gradient(180deg, #692597 0%, #220C31 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    };

    const renderIcon = () => {
      if (!icon) return null;
      
      if (variant === "tertiary") {
        return React.cloneElement(icon as React.ReactElement, {
          className: cn(
            "mr-3 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:w-6",
          ),
          style: {
            ...gradientStyle,
            stroke: "url(#gradient)",
            fill: "none"
          }
        });
      }

      return React.cloneElement(icon as React.ReactElement, {
        className: cn(
          "mr-3 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:w-6"
        )
      });
    };

    return (
      <div
        ref={ref}
        className={cn(
          chipClasses,
          variants[variant],
          className
        )}
        {...props}
      >
        {variant === "tertiary" && (
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#692597" />
                <stop offset="100%" stopColor="#220C31" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {renderIcon()}
        <span style={variant === "tertiary" ? gradientStyle : undefined}>
          {children}
        </span>
      </div>
    );
  }
);

Chip.displayName = "Chip";

export default Chip;
