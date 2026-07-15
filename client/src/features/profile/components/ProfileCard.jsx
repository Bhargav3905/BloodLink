import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../../components/ui/button/Button';
import FormField from '../../../components/ui/input/FormField';

import { cityOptions } from '../../../constants/cities';

const ProfileCard = ({ user, loading, editing, onEdit, onCancel, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName,
        phone: user.phone,
        city: user.city,
      });
    }
  }, [user, reset]);

  if (!user) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Profile</h2>

          <p className="mt-1 text-slate-500">Manage your account information.</p>
        </div>

        {!editing && <Button onClick={onEdit}>Edit Profile</Button>}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Full Name"
          name="fullName"
          register={register}
          disabled={!editing}
          error={errors.fullName}
          rules={{
            required: 'Full name is required',
          }}
        />

        <FormField
          label="Phone Number"
          name="phone"
          register={register}
          disabled={!editing}
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
          disabled={!editing}
          options={cityOptions}
          error={errors.city}
        />

        <FormField label="Email" value={user.email} disabled />

        <FormField label="Blood Group" value={user.bloodGroup} disabled />

        <FormField label="Role" value={user.role} disabled />

        {editing && (
          <div className="col-span-full flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset({
                  fullName: user.fullName,
                  phone: user.phone,
                  city: user.city,
                });

                clearErrors();
                onCancel();
              }}
            >
              Cancel
            </Button>

            <Button type="submit" loading={loading || isSubmitting}>
              Save Changes
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileCard;
