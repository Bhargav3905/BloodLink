import Skeleton from './Skeleton';

const SkeletonTable = () => {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <Skeleton className="h-10 w-full" />

      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          className="h-8 w-full"
        />
      ))}
    </div>
  );
};

export default SkeletonTable;