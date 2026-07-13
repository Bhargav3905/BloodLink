import AuthBranding from './AuthBranding';
import AuthWrapper from './AuthWrapper';

const AuthLayout = ({ children }) => {
  return (
    <AuthWrapper>
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
        <div className="grid min-h-[700px] lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden lg:flex">
            <AuthBranding />
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>

        </div>
      </div>
    </AuthWrapper>
  );
};

export default AuthLayout;