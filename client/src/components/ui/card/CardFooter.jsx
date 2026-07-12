import { cn } from '../../../utils/cn';

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3 border-t border-slate-200 px-6 py-4 dark:border-slate-800',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardFooter;