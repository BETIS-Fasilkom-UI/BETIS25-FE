import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  description?: string;
  icon?: React.ReactNode;
  color?: 'light' | 'dark';
  iconPosition?: 'left' | 'right';
  asterisk?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      errorMessage,
      description,
      icon,
      label,
      iconPosition = 'left',
      asterisk,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <Label>
            {label} {asterisk && <span className="text-red-500"> *</span>}
          </Label>
        )}
        <div className="flex items-center border-2 border-gray-500 rounded-xl w-full text-black outline-none overflow-hidden relative">
          <div
            className={cn(
              'absolute',
              iconPosition === 'left' ? 'left-5' : 'right-5'
            )}
          >
            {icon}
          </div>
          <input
            {...props}
            type={type}
            ref={ref}
            className={cn(
              'w-full h-full bg-white outline-none px-5 py-3 duration-300 text-t9 sm:text-t7',
              icon ? (iconPosition === 'left' ? 'pl-14' : 'pr-14') : '',
              className
            )}
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 font-normal items-center text-sm">
            {errorMessage}
          </p>
        )}
        {description && (
          <p className="font-normal items-center text-sm">{description}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
