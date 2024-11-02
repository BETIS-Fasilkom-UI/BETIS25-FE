import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    const baseStyles = "inline-flex font-raleway items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-magenta-500 text-white border-2 border-black",
      secondary: "bg-magenta-150 text-white border-2 border-black",
      tertiary: "bg-white border-black"
    };

    const sizes = {
      sm: "text-xs leading-4 px-4 py-2 border-2",
      md: "text-base leading-6 px-5 py-2 border-2",
      lg: "text-2xl leading-8 px-6 py-3 border-4"
    };

    const gradientStyle = {
      background: 'linear-gradient(180deg, #692597 0%, #220C31 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };

    const renderIcon = () => {
      if (!icon) return null;
      
      if (variant === 'tertiary') {
        return React.cloneElement(icon as React.ReactElement, {
          className: cn(
            'mr-3',
            size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'
          ),
          style: {
            ...gradientStyle,
            stroke: 'url(#gradient)',
            fill: 'none'
          }
        });
      }

      return React.cloneElement(icon as React.ReactElement, {
        className: cn(
          'mr-3',
          size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'
        )
      });
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {variant === 'tertiary' && (
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
        <span style={variant === 'tertiary' ? gradientStyle : undefined}>
          {children}
        </span>
      </div>
    );
  }
);

Chip.displayName = "Chip";

export default Chip;
