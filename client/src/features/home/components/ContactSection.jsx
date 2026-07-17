import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'bhargavadmin1@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 81283 59990',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Nadiad, Gujarat, India',
  },
  {
    icon: Clock,
    title: 'Availability',
    value: '24 × 7 Emergency Support',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30">
            Contact
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            Need help or have questions about BloodLink? We're always here to assist you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <Icon size={30} className="text-red-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>

                <p className="text-slate-500">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
