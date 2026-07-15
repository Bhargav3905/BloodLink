import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import DashboardLayout from '../layouts/DashboardLayout';

import ProfileCard from '../features/profile/components/ProfileCard';

import userService from '../features/users/services/user.service';

import SkeletonProfile from '../components/feedback/skeleton/SkeletonProfile';

import getApiError from '../utils/apiError';

const Profile = () => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(false);

  const fetchProfile = async () => {
    try {
      const response = await userService.getProfile();
      setUser(response.data);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchProfile();
  }, []);

  const handleUpdate = async (data) => {
    try {
      setLoading(true);

      const response = await userService.updateProfile(data);

      setUser(response.data);

      toast.success(response.message);

      setEditing(false);
    } catch (error) {
      toast.error(getApiError(error));
    } finally {
      setLoading(false);
    }
  };

  if (loading && !user) {
    return (
      <DashboardLayout>
        <SkeletonProfile />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ProfileCard
        user={user}
        loading={loading}
        editing={editing}
        onEdit={() => setEditing(true)}
        onCancel={() => setEditing(false)}
        onSubmit={handleUpdate}
      />
    </DashboardLayout>
  );
};

export default Profile;
