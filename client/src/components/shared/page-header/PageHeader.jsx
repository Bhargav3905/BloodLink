const PageHeader = ({
  title,
  description,
  action,
}) => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {action && action}
    </div>
  );
};

export default PageHeader;