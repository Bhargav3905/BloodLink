const AuthWrapper = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 dark:bg-slate-950">
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;