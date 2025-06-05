import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {}

const Toggle = ({ className, ...props }: ToggleProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        {...props}
        type="checkbox"
        className={cn('sr-only peer', className)}
      />
      <div className="relative w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#B73786]"></div>
    </label>
  );
};

export { Toggle };
