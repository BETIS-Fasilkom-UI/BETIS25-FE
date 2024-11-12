"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "rounded-[2rem] border-[0.031rem] border-white bg-foreground/20 backdrop-blur-lg shadow-[0_0px_18px_#ffffff] py-7 px-6 lg:py-11 lg:px-10",
  {
    variants: {
      size: {
        default: "w-2/3 md:w-1/2 lg:w-1/3",
        sm: "w-1/2 md:w-1/3 lg:w-1/4",
        lg: "w-3/4 md:w-2/3 lg:w-1/2",
        full: "w-full"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

type CardElement = React.ElementRef<"div">
type CardVariants = VariantProps<typeof cardVariants>

interface CardProps extends React.ComponentPropsWithoutRef<"div">, CardVariants {}

const Card = React.forwardRef<CardElement, CardProps>(
  ({ className, size, ...props }, ref) => (
    <div className="flex justify-center items-center">
      <div
        ref={ref}
        className={cn(cardVariants({ size }), className)}
        {...props}
      />
    </div>
  )
)
Card.displayName = "Card"

interface CardHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  icon?: React.ReactNode
  iconClassName?: string
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, icon, iconClassName, ...props }, ref) => {
    const renderIcon = () => {
      if (!icon || !React.isValidElement(icon)) return null
      return React.cloneElement(icon as React.ReactElement, {
        className: cn(
          "mr-3 w-[5rem] h-[5rem] md:w-[6.25rem] md:h-[6.25rem] lg:w-[7.5rem] lg:w-[7.5rem]",
          iconClassName,
          icon.props.className
        )
      })
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4", className)}
        {...props}
      >
        {children}
        {icon && (
          <div className="flex justify-center items-center py-3">
            {renderIcon()}
          </div>
        )}
      </div>
    )
  }
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-cinzel font-black text-white text-xl leading-7 md:text-2xl md:leading-8 lg:text-3xl lg:leading-9",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-openSans text-sm leading-6 lg:text-base text-white",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

interface CardImageProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children"> {
  src: string
  alt?: string
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
)
CardImage.displayName = "CardImage"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-openSans text-sm leading-6 lg:text-base text-white",
      className
    )}
    {...props}
  />
))
CardContent.displayName = "CardContent"

interface CardFooterProps extends React.ComponentPropsWithoutRef<"div"> {
  buttons?: Array<{
    onClick: () => void
    text: string
    variant?: "primary" | "secondary" | "tertiary"
  }>
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, buttons, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `flex flex-wrap gap-2 ${buttons?.length === 1 ? "justify-center" : "justify-start"}`,
        className
      )}
      {...props}
    >
      {buttons?.map((btn, index) => (
        <Button
          key={index}
          variant={btn.variant || "primary"}
          onClick={btn.onClick}
          className={cn(
            "relative flex justify-between items-center py-2 md:py-2",
            buttons.length === 1 ? "w-full" : "flex-[1_1_45%]"
          )}
        >
          <p>{btn.text}</p>
        </Button>
      ))}
    </div>
  )
)
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardImage,
  CardContent,
  CardFooter,
  type CardProps,
  type CardHeaderProps,
  type CardFooterProps
}