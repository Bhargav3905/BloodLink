import AuthLayout from '../components/AuthLayout';
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Reset Password
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Enter your new password below.
        </p>

        <ResetPasswordForm />
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;