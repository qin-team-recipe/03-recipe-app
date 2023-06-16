import * as React from 'react';
import { tv } from 'tailwind-variants';

const input = tv({
  slots: {
    base: 'border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  },
});

const { base } = input();

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <input type={type} className={base()} ref={ref} {...props} />;
  }
);
Input.displayName = 'Input';

export { Input };
