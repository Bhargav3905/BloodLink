import {
  HeartHandshake,
  PackagePlus,
  FileText,
  ShieldCheck,
  CreditCard,
  CircleCheckBig,
} from 'lucide-react';

const workflow = [
  {
    title: 'Donate Blood',
    description: 'Approved donors and hospitals donate blood to strengthen the inventory.',
    icon: HeartHandshake,
  },
  {
    title: 'Inventory Updated',
    description: 'Blood inventory is automatically updated after every successful donation.',
    icon: PackagePlus,
  },
  {
    title: 'Blood Request',
    description: 'Patients and hospitals can raise blood requests based on availability.',
    icon: FileText,
  },
  {
    title: 'Admin Approval',
    description: 'Every request is reviewed before proceeding to payment.',
    icon: ShieldCheck,
  },
  {
    title: 'Secure Payment',
    description: 'Approved requests are completed through Razorpay integration.',
    icon: CreditCard,
  },
  {
    title: 'Blood Issued',
    description: 'Inventory is updated and the request is completed successfully.',
    icon: CircleCheckBig,
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
            How BloodLink Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            A Simple & Secure Blood Management Workflow
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            From blood donation to successful request completion, BloodLink ensures every step is
            secure, transparent and efficient.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="absolute right-5 top-5 text-5xl font-bold text-slate-100 dark:text-slate-800">
                  {index + 1}
                </div>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 transition-transform duration-300 group-hover:scale-110 dark:bg-red-900/30">
                  <Icon size={30} className="text-red-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
