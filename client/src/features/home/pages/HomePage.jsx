import PublicNavbar from '../../../components/public/PublicNavbar';

import HeroSection from '../components/HeroSection';
import WorkflowSection from '../components/WorkflowSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PublicNavbar />

      <HeroSection />

      <WorkflowSection />

      <FeaturesSection />

      <AboutSection />

      <ContactSection />

      <CTASection />

      <Footer />
    </main>
  );
};

export default HomePage;
