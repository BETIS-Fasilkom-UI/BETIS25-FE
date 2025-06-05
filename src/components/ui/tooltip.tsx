'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
  tooltipClassName?: string;
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  className,
  tooltipClassName,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipClasses = cn(
    'top-full left-0 mt-2',
    'absolute z-50 whitespace-nowrap rounded-[0.5rem] px-8 py-1 text-base',
    'opacity-0 invisible transition-all duration-200',
    'bg-white text-black shadow-[4px_4px_10px_rgba(220,220,220,0.7)]',
    'font-semibold font-raleway leading-7',

    isVisible && 'opacity-100 visible',
    tooltipClassName
  );

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  // Triangle pointer
  const pointerClasses = cn(
    'absolute w-0 h-0 border-solid border-b-8 border-x-8 border-transparent border-b-white bottom-full left-7 -translate-x-1/2'
  );

  return (
    <div
      className={cn('relative inline-block', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {!disabled && (
        <div className={tooltipClasses}>
          <span className="bg-gradient-to-b from-violet-tooltip to-violet-tooltip-darker bg-clip-text text-transparent">
            {text}
          </span>
          <div className={pointerClasses} />
        </div>
      )}

      {disabled && (
        <div className={tooltipClasses}>
          <span className="bg-gradient-to-b from-violet-tooltip to-violet-tooltip-darker bg-clip-text text-transparent">
            disabled
          </span>
          <div className={pointerClasses} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
