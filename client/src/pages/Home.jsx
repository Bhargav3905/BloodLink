import toast from 'react-hot-toast';
import useTheme from '../hooks/useTheme';
import axiosInstance from '../services/axiosInstance';

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const testApi = async () => {
    try {
      console.log(axiosInstance.defaults.baseURL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-black dark:text-white">BloodLink</h1>

      <p className="text-gray-600 dark:text-gray-300">Current Theme: {theme}</p>

      <button
        onClick={toggleTheme}
        className="rounded-xl bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
      >
        Toggle Theme
      </button>

      <button
        onClick={() => toast.success('BloodLink is ready!')}
        className="rounded-xl bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700"
      >
        Test Toast
      </button>

      <button
        onClick={testApi}
        className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Test Axios
      </button>
    </div>
  );
};

export default Home;
