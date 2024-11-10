"use client";
import { cn } from "@/lib/utils";
import {
  ButtonHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", isLoading, children, disabled, ...props },
    ref
  ) => {

    const buttonClasses = `
    inline-flex items-center justify-center rounded-[1.25rem] 
    disabled:pointer-events-none disabled:opacity-70 
    font-openSans text-base leading-6 px-8 py-3
    md:text-lg md:px-9 md:py-4
    lg:text-xl lg:leading-7 transition-all duration-300 ease-in-out
    `;

    const variantStyles = {
      primary:
        "bg-gradient-to-b from-magenta-500 to-magenta-button text-white hover:bg-gradient-to-b hover:from-magenta-button-hover hover:to-magenta-500 active:bg-gradient-to-b active:from-magenta-700 active:to-magenta-button-active",
      secondary:
        "bg-magenta-50 text-magenta-600 hover:bg-magenta-100 border-2 border-magenta-700 active:bg-magenta-200",
      tertiary:
        "bg-white text-magenta-600 hover:bg-magenta-50 border-2 border-[#DEA3C7] active:bg-magenta-100",
      destructive: "bg-red-400 text-white hover:bg-red-500 active:bg-red-600",
    };

    const disabledVariantStyles = {
      primary: "bg-magenta-50 text-magenta-600",
      secondary: "bg-white text-magenta-600 border-2 border-magenta-50",
      tertiary: "bg-white text-magenta-600 border-2 border-magenta-",
      destructive: "bg-red-100 text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(
          buttonClasses,
          disabled ? disabledVariantStyles[variant] : variantStyles[variant],
          className
        )}
        disabled={disabled || isLoading}
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
            <span className="flex justify-center w-full">{children}</span>
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
