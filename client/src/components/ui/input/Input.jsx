import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';

const Input = forwardRef(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200',
          'focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;