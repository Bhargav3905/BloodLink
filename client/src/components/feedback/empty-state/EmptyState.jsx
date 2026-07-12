import { Inbox } from 'lucide-react';

const EmptyState = ({
  title = 'No Data Found',
  description = 'There is nothing to display right now.',
  icon: Icon = Inbox,
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
      <Icon
        size={56}
        className="mb-4 text-slate-400"
      />

      <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;