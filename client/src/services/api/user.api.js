import axiosInstance from './axiosInstance';

const userApi = {
  getProfile: () => axiosInstance.get('/users/me'),

  updateProfile: (data) => axiosInstance.patch('/users/profile', data),
};

export default userApi;
