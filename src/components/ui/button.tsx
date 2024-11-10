import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] text-t7 sm:text-t6 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-magenta-500 to-magenta-button text-white hover:bg-gradient-to-b hover:from-magenta-button-hover hover:to-magenta-500 active:bg-gradient-to-b active:from-magenta-700 active:to-magenta-button-active",
        destructive: "bg-red-400 text-white hover:bg-red-500 active:bg-red-600",
        secondary:
          "bg-magenta-50 text-magenta-600 hover:bg-magenta-100 border-2 border-magenta-700 active:bg-magenta-200",
        tertiary:
          "bg-white text-magenta-600 hover:bg-magenta-50 border-2 border-[#DEA3C7] active:bg-magenta-100",
      },
      size: {
        default: "h-[58px] px-9 py-4",
        sm: "h-9 rounded-[20px] px-3",
        lg: "h-11 rounded-[20px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      children,
      size,
      isLoading,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
