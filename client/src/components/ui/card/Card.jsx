import { cn } from '../../../utils/cn';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;