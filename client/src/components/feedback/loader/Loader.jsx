import { cn } from '../../../utils/cn';

const sizes = {
  sm: 'h-5 w-5 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
};

const Loader = ({
  size = 'md',
  className,
}) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-red-600 border-t-transparent',
        sizes[size],
        className
      )}
    />
  );
};

export default Loader;