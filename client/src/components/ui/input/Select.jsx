import { forwardRef } from 'react';
import { cn } from '../../../utils/cn';

const Select = forwardRef(
  (
    {
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 transition-all',
          'focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20',
          'dark:border-slate-700 dark:bg-slate-900 dark:text-white',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

export default Select;