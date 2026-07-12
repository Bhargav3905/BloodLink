import { cn } from '../../../utils/cn';

const Label = ({ children, className, required = false }) => {
  return (
    <label
      className={cn(
        'mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300',
        className
      )}
    >
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
};

export default Label;