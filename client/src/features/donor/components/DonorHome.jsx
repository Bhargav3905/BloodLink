import { useAuth } from '../../../contexts/AuthContext';

const DonorHome = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome, {user?.fullName}</h1>

      <p className="mt-2 text-slate-500">
        Donation history and blood donation features will appear here.
      </p>
    </>
  );
};

export default DonorHome;
