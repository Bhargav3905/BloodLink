import Skeleton from './Skeleton';

const SkeletonProfile = () => {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <Skeleton className="h-20 w-20 rounded-full" />

      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-40" />

        <Skeleton className="h-4 w-60" />

        <Skeleton className="h-4 w-48" />
      </div>
    </div>
  );
};

export default SkeletonProfile;