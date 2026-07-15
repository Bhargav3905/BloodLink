import AuthLayout from '../components/AuthLayout';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Forgot Password</h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Enter your registered email to receive a password reset link.
        </p>

        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
