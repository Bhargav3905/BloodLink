import { HeartPulse } from 'lucide-react';

const AuthBranding = () => {
  return (
   <div className="flex h-full flex-col justify-center bg-gradient-to-br from-red-600 via-red-700 to-rose-700 p-12 text-white">
      <HeartPulse size={60} />

      <h1 className="mt-8 text-4xl font-bold">
        BloodLink
      </h1>

      <p className="mt-4 text-lg text-red-100">
        Connecting donors, hospitals and patients through a secure blood management platform.
      </p>
    </div>
  );
};

export default AuthBranding;