import { badgeVariants } from './badgeVariants';
import { cn } from '../../../utils/cn';

const Badge = ({ className, variant, children }) => {
  return (
    <span
      className={cn(
        badgeVariants({ variant }),
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;