import { forwardRef } from 'react';
import { buttonVariants } from './buttonVariants';
import { cn } from '../../../utils/cn';

const Button = forwardRef(
  (
    {
      children,
      className,
      variant,
      size,
      fullWidth,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;