import authApi from '../../../services/api/auth.api';

const authService = {
  register: async (data) => {
    const response = await authApi.register(data);
    return response.data;
  },

  login: async (data) => {
    const response = await authApi.login(data);
    return response.data;
  },

  logout: async () => {
    const response = await authApi.logout();
    return response.data;
  },

  forgotPassword: async (data) => {
    const response = await authApi.forgotPassword(data);
    return response.data;
  },

  resetPassword: async (data) => {
    const response = await authApi.resetPassword(data);
    return response.data;
  },

  refreshSession: async () => {
    const response = await authApi.refreshToken();
    return response.data;
  },
};

export default authService;