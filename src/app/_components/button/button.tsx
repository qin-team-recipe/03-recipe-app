import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/app/_utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded px-3 text-sm leading-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        tomato:
          'border-transparent bg-tomato-9 text-whitea-12 hover:enabled:bg-tomato-10',
        tomatoOutline:
          'border border-tomato-7 text-tomato-11 hover:enabled:border-tomato-8 hover:enabled:bg-tomato-1',
        blackOutline:
          'border border-mauve-12 text-mauve-12 hover:enabled:bg-mauve-1',
      },
      size: {
        icon: 'p-1',
        sm: 'h-[25px] py-1',
        md: 'h-[35px] py-2 text-base leading-none',
      },
    },
    defaultVariants: {
      variant: 'tomato',
      size: 'sm',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
