import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

import { ROUTES } from '../../../constants/routes';

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await authService.forgotPassword(data);

toast.success(response.message);
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <FormField
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your registered email"
        register={register}
        required
        error={errors.email}
        rules={{
          required: 'Email is required',
        }}
      />

      <Button type="submit" fullWidth loading={isSubmitting}>
        Send Reset Link
      </Button>

      <p className="text-center text-sm text-slate-500">
        Remember your password?{' '}
        <Link to={ROUTES.LOGIN} className="font-semibold text-red-600 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
