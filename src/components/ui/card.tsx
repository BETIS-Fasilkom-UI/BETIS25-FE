"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-white bg-foreground/20 backdrop-blur-lg shadow-[0_0px_18px_#ffffff] py-7 px-6 lg:py-11 lg:px-10 rounded-[2rem] border-[0.031rem] space-y-5",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-cinzel text-xl md:text-2xl lg:text-3xl",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-openSans text-sm leading-6 lg:text-base ", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

interface CardImageProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  src: string;
  alt?: string;
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt = "", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative w-full aspect-square", className)}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes="none"
        className="object-cover rounded-lg"
      />
    </div>
  )
);
CardImage.displayName = "CardImage";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-openSans text-sm leading-6 lg:text-base ", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
  CardFooter,
};
