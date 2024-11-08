"use client";
import { cn } from "@/lib/utils";
import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
  createElement,
} from "react";
import { Loader2, LucideProps } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  isLoading?: boolean;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      icon,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

    const buttonClasses = `
    inline-flex items-center justify-center rounded-[1.25rem] 
    disabled:pointer-events-none disabled:opacity-70 
    font-openSans text-base leading-6 px-7 py-3
    md:text-lg md:px-8 md:py-4
    lg:text-xl lg:leading-7 lg:px-9 lg:py-5 transition-all duration-200 ease-in-out
    `;

    const variantStyles = {
      primary:
        "bg-gradient-to-b from-magenta-500 to-magenta-button text-white hover:bg-gradient-to-b hover:from-magenta-button-hover hover:to-magenta-500",
      secondary:
        "bg-magenta-50 text-magenta-600 hover:bg-magenta-100 border-2 border-magenta-700",
      tertiary:
        "bg-white text-magenta-600 hover:bg-magenta-50 border-2 border-magenta-200",
      destructive: "bg-red-400 text-white hover:bg-red-500",
    };

    const disabledVariantStyles = {
      primary: "bg-magenta-50 text-magenta-600",
      secondary: "bg-white text-magenta-600 border-2 border-magenta-50",
      tertiary: "bg-white text-magenta-600 border-2 border-magenta-",
      destructive: "bg-red-100 text-white",
    };

    const clickedVariantStyles = {
      primary: "bg-gradient-to-b from-magenta-700 to-magenta-button-active",
      secondary: "bg-magenta-200",
      tertiary: "bg-magenta-100",
      destructive: "bg-red-400",
    };

    return (
      <button
        ref={ref}
        className={cn(
          buttonClasses,
          disabled ? disabledVariantStyles[variant] : variantStyles[variant],
          clicked ? clickedVariantStyles[variant] : "",
          className
        )}
        disabled={disabled || isLoading}
        onClick={handleClick}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            {icon && <span className="mr-2">{createElement(icon)}</span>}
            <span className="flex justify-center w-full">{children}</span>
            {icon && <span className="ml-2">{createElement(icon)}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
