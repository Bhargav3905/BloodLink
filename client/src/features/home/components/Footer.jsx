import { HeartPulse, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const technologies = ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <HeartPulse size={32} className="text-red-500" />

            <h2 className="text-2xl font-bold text-white">BloodLink</h2>
          </div>

          <p className="leading-7 text-slate-400">
            A modern blood management platform connecting donors, hospitals, patients and
            administrators through one secure ecosystem.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-red-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Built With</h3>

          <ul className="space-y-3">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Connect</h3>

          <div className="space-y-4">
            <a
              href="mailto:bhargavadmin1@gmail.com"
              className="flex items-center gap-3 transition hover:text-red-400"
            >
              <Mail size={18} />
              bhargavadmin1@gmail.com
            </a>

            <a
              href="https://github.com/Bhargav3905/BloodLink"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-red-400"
            >
              GitHub Repository
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} BloodLink. All rights reserved.</p>

          <p>Built with ❤️ using the MERN Stack.</p>

          <p>
            Made by <span className="font-semibold text-white">Bhargav Prajapati</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
