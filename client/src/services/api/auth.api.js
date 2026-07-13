import axiosInstance from './axiosInstance';

const authApi = {
  register: (data) => axiosInstance.post('/auth/register', data),

  login: (data) => axiosInstance.post('/auth/login', data),

  logout: () => axiosInstance.post('/auth/logout'),

  refreshToken: () => axiosInstance.post('/auth/refresh-token'),

  forgotPassword: (data) => axiosInstance.post('/auth/forgot-password', data),

  resetPassword: (data) => axiosInstance.post('/auth/reset-password', data),
};

export default authApi;
