import userApi from '../../../services/api/user.api';

const userService = {
  getProfile: async () => {
    const response = await userApi.getProfile();
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await userApi.updateProfile(data);
    return response.data;
  },
};

export default userService;
