import { ArrowRight, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../../../components/ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-slate-950 dark:via-slate-950 dark:to-red-950/20"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-red-300/20 blur-3xl" />

      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-red-400/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row lg:gap-20">
        {/* Left */}

        <div className="flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600 dark:bg-red-900/30">
            <HeartPulse size={18} />
            Smart Blood Management Platform
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-7xl">
            Save Lives
            <span className="block text-red-600">One Donation</span>
            At A Time
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            BloodLink connects donors, hospitals and patients through a secure, modern and
            transparent blood management platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to={ROUTES.REGISTER}>
              <Button>
                Register Now
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to={ROUTES.LOGIN}>
              <Button variant="outline">Login</Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h2 className="text-3xl font-bold text-red-600">8</h2>

              <p className="text-sm text-slate-500">Blood Groups</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-600">24×7</h2>

              <p className="text-sm text-slate-500">Availability</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-red-600">Secure</h2>

              <p className="text-sm text-slate-500">Authentication</p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="mt-20 flex flex-1 justify-center lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-red-500/20 blur-3xl" />

            <div className="relative flex h-96 w-96 transition-transform duration-500 hover:scale-105 items-center justify-center rounded-full border-8 border-red-100 bg-white shadow-2xl dark:border-red-900 dark:bg-slate-900">
              <HeartPulse size={140} className="text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
