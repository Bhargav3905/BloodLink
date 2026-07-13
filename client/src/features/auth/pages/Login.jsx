import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md">

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Welcome Back
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Sign in to continue to BloodLink.
        </p>

        <LoginForm />

      </div>
    </AuthLayout>
  );
};

export default Login;