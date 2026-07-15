import { useAuth } from '../../../contexts/AuthContext';

const HospitalHome = () => {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-3xl font-bold">Welcome, {user?.fullName}</h1>

      <p className="mt-2 text-slate-500">
        Hospital request and inventory features will appear here.
      </p>
    </>
  );
};

export default HospitalHome;
