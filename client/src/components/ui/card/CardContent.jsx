import { cn } from '../../../utils/cn';

const CardContent = ({ className, children, ...props }) => {
  return (
    <div
      className={cn('px-6 pb-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;