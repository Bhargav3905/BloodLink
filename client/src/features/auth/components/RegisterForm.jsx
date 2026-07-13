import { Link } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';

import { Button } from '../../../components/ui/button';
import { FormField } from '../../../components/ui/input';

import { bloodGroupOptions } from '../../../constants/bloodGroups';
import { cityOptions } from '../../../constants/cities';
import { roleOptions } from '../../../constants/roles';
import { ROUTES } from '../../../constants/routes';

import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import authService from '../services/auth.service';
import getApiError from '../../../utils/apiError';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = useWatch({ control, name: 'password' });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { ...payload } = data;

      const response = await authService.register(payload);

      toast.success(response.message);

      navigate(ROUTES.LOGIN);
    } catch (error) {
      toast.error(getApiError(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
      <FormField
        label="Full Name"
        name="fullName"
        register={register}
        required
        placeholder="Enter your full name"
        error={errors.fullName}
        rules={{
          required: 'Full name is required',
        }}
      />

      <FormField
        label="Email Address"
        type="email"
        name="email"
        register={register}
        required
        placeholder="Enter your email"
        error={errors.email}
        rules={{
          required: 'Email is required',
        }}
      />

      <FormField
        label="Phone Number"
        name="phone"
        register={register}
        required
        placeholder="Enter phone number"
        error={errors.phone}
        rules={{
          required: 'Phone number is required',
        }}
      />

      <FormField
        label="City"
        type="select"
        name="city"
        register={register}
        required
        error={errors.city}
        options={cityOptions}
        rules={{
          required: 'City is required',
        }}
      />

      <FormField
        label="Blood Group"
        type="select"
        name="bloodGroup"
        register={register}
        required
        error={errors.bloodGroup}
        options={bloodGroupOptions}
        rules={{
          required: 'Blood group is required',
        }}
      />

      <FormField
        label="Role"
        type="select"
        name="role"
        register={register}
        required
        error={errors.role}
        options={roleOptions}
        rules={{
          required: 'Role is required',
        }}
      />

      <FormField
        label="Password"
        type="password"
        name="password"
        register={register}
        required
        placeholder="Enter password"
        error={errors.password}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        }}
      />

      <FormField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        register={register}
        required
        placeholder="Confirm password"
        error={errors.confirmPassword}
        rules={{
          required: 'Please confirm your password',
          validate: (value) => value === password || 'Passwords do not match',
        }}
      />

      <Button type="submit" fullWidth loading={isSubmitting}>
        Create Account
      </Button>

      <p className="text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-red-600 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
