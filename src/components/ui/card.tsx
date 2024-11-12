"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  image?: {
    url: string;
    alt?: string;
  };
  description?: string;
  button?: Array<{
    onClick: () => void;
    text: string;
    variant?: "primary" | "secondary" | "tertiary";
  }>;
  titleClassName?: string;
  iconClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  image,
  description,
  button,
  titleClassName = "",
  iconClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
}) => {
  const renderIcon = () => {
    if (!icon || !React.isValidElement(icon)) return null;

    return React.cloneElement(icon as React.ReactElement, {
      className: cn(
        "mr-3 w-[5rem] h-[5rem] md:w-[6.25rem] md:h-[6.25rem] lg:w-[7.5rem] lg:w-[7.5rem]",
        iconClassName,
        icon.props.className
      ),
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-2/3 md:w-1/2 lg:w-1/3 rounded-[2rem] border-[0.031rem] border-white bg-foreground/20 backdrop-blur-lg shadow-[0_0px_18px_#ffffff] py-7 px-6 lg:py-11 lg:px-10 flex flex-col gap-4">
        {title && (
          <h1
            className={cn(
              "font-cinzel font-black text-white text-xl leading-7 md:text-2xl md:leading-8 lg:text-3xl lg:leading-9",
              titleClassName
            )}
          >
            {title}
          </h1>
        )}
        {icon && (
          <div className="flex justify-center items-center py-3">
            {renderIcon()}
          </div>
        )}
        {image && (
          <div className="relative w-full aspect-square">
            <Image
              src={image.url}
              alt={image.alt || ""}
              fill={true}
              sizes="none"
              className="object-cover rounded-lg"
            />
          </div>
        )}
        {description && (
          <p
            className={cn(
              "font-openSans text-sm leading-6 lg:text-base text-white",
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}
        {button && button.length > 0 && (
          <div
            className={cn(
              `flex ${button.length === 1 ? "justify-center" : "gap-2"}`,
              buttonClassName
            )}
          >
            {button.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant || "primary"}
                onClick={btn.onClick}
                className={`
                ${button.length === 1 ? "w-full" : "w-1/2"} 
                relative flex justify-between items-center py-2 md:py-2
              `}
              >
                <p>{btn.text}</p>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
