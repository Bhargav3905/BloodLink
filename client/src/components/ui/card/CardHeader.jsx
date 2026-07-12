import { cn } from '../../../utils/cn';

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div
      className={cn('space-y-2 p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardHeader;