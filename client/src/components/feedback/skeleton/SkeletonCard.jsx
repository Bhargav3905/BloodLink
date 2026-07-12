import Skeleton from './Skeleton';

const SkeletonCard = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <Skeleton className="mb-5 h-6 w-40" />

      <Skeleton className="mb-3 h-4 w-full" />

      <Skeleton className="mb-3 h-4 w-5/6" />

      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};

export default SkeletonCard;