import { HeartHandshake, ShieldCheck, Building2, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
            About BloodLink
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Connecting People Through Smart Blood Management
          </h2>

          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
            BloodLink is a modern blood bank management platform that connects donors, hospitals,
            patients and administrators through a secure and transparent workflow.
          </p>

          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
            From donations and inventory management to request approvals, secure payments and
            analytics, every process is streamlined to reduce delays and improve availability when
            blood is needed the most.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
            <HeartHandshake className="mb-5 text-red-600" size={34} />

            <h3 className="mb-3 text-xl font-semibold">Donors</h3>

            <p className="text-slate-500">
              Donate blood securely while maintaining donation history and eligibility rules.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
            <Building2 className="mb-5 text-red-600" size={34} />

            <h3 className="mb-3 text-xl font-semibold">Hospitals</h3>

            <p className="text-slate-500">
              Manage blood donations and raise requests whenever inventory is required.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
            <Users className="mb-5 text-red-600" size={34} />

            <h3 className="mb-3 text-xl font-semibold">Patients</h3>

            <p className="text-slate-500">
              Request compatible blood through a verified and secure approval workflow.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800">
            <ShieldCheck className="mb-5 text-red-600" size={34} />

            <h3 className="mb-3 text-xl font-semibold">Administration</h3>

            <p className="text-slate-500">
              Monitor users, inventory, requests and analytics from one centralized dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
