import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, CircleAlert, Info, LoaderCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-[0.5rem] border-l-8 text-gray-950 p-4 pl-[70px] [&>.icon+div]:translate-y-[-12px] [&>.icon]:absolute [&>.icon]:left-4 [&>.icon]:top-2',
  {
    variants: {
      variant: {
        success:
          'border-tosca-normal bg-tosca-light-hover [&>.icon]:bg-tosca-normal [&_svg]:stroke-tosca-light-hover',
        error:
          'border-red-500 bg-red-50 [&>.icon]:bg-red-500 [&_svg]:stroke-tosca-light-hover',
        warning:
          'border-[#EAC02A] bg-yellow-50 [&>.icon]:bg-[#EAC02A] [&_svg]:stroke-tosca-light-hover',
        info: 'border-[#5458F7] bg-[#EAEDF0] [&>.icon]:bg-[#5458F7] [&_svg]:stroke-tosca-light-hover',
        loading:
          'border-[#2F4A6A] bg-tosca-light [&>.icon]:bg-[#2F4A6A] [&_svg]:stroke-tosca-light-hover',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    <span className="icon p-2 rounded-full">
      {variant === 'success' && <Check />}
      {variant === 'error' && <X />}
      {variant === 'warning' && <CircleAlert />}
      {variant === 'info' && <Info />}
      {variant === 'loading' && <LoaderCircle />}
    </span>
    {children}
  </div>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'mb-1 font-bold font-raleway font-lg leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
