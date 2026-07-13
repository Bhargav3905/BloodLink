import { forwardRef } from 'react';
import { buttonVariants } from './buttonVariants';
import { cn } from '../../../utils/cn';
import { ButtonLoader } from '../../feedback/loader';

const Button = forwardRef(
  (
    {
      children,
      loading = false,
      className,
      variant,
      size,
      fullWidth,
      type = 'button',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={loading || disabled}
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
        {loading && <ButtonLoader />}

        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;