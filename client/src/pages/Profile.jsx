import { useEffect, useState } from 'react';

import DashboardLayout from '../layouts/DashboardLayout';

import ProfileCard from '../features/profile/components/ProfileCard';
import userService from '../features/users/services/user.service';

import getApiError from '../utils/apiError';

const Profile = () => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await userService.getProfile();
        setUser(response.data);
      } catch (error) {
        console.log(getApiError(error));
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <DashboardLayout>Loading...</DashboardLayout>;
  }

  return (
    <DashboardLayout>
      <ProfileCard user={user} />
    </DashboardLayout>
  );
};

export default Profile;
