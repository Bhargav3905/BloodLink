import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../../../components/ui/button/Button';

import { ROUTES } from '../../../constants/routes';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
          <Heart size={42} className="text-white" />
        </div>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Every Donation Can Save a Life
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-100">
          Join BloodLink today to donate blood, manage hospital inventory, or request blood through
          a secure and transparent platform built for real-world healthcare needs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to={ROUTES.REGISTER}>
            <Button className="bg-white text-red-600 hover:bg-red-50">
              Register Now
              <ArrowRight size={18} />
            </Button>
          </Link>

          <Link to={ROUTES.LOGIN}>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
