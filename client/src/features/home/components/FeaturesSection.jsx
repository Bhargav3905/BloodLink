import {
  HeartHandshake,
  Building2,
  Droplets,
  ShieldCheck,
  CreditCard,
  BarChart3,
} from 'lucide-react';

const features = [
  {
    title: 'Blood Donation',
    description: 'Registered donors and hospitals can securely contribute blood inventory.',
    icon: HeartHandshake,
  },
  {
    title: 'Blood Requests',
    description: 'Patients and hospitals can request blood with an approval workflow.',
    icon: Building2,
  },
  {
    title: 'Real-Time Inventory',
    description: 'Track blood availability across all eight blood groups instantly.',
    icon: Droplets,
  },
  {
    title: 'Role-Based Security',
    description: 'Separate dashboards and permissions for every user role.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure Payments',
    description: 'Integrated Razorpay payment flow for approved blood requests.',
    icon: CreditCard,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Visual insights into inventory, requests and donations.',
    icon: BarChart3,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Everything Needed For Modern Blood Management
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            BloodLink simplifies blood donation, request management, inventory tracking and
            administration through one secure platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 transition-transform duration-300 group-hover:scale-110 dark:bg-red-900/30">
                  <Icon size={28} className="text-red-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
