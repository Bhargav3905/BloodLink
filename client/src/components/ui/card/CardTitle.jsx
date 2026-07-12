import { cn } from '../../../utils/cn';

const CardTitle = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        'text-xl font-semibold text-slate-900 dark:text-white',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default CardTitle;