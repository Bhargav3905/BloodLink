import { cn } from '../../../utils/cn';

const CardDescription = ({ className, children, ...props }) => {
  return (
    <p
      className={cn(
        'text-sm text-slate-500 dark:text-slate-400',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default CardDescription;