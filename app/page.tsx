import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FloatingParticles from '../components/FloatingParticles';
import StatsSection from '../components/StatsSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Animated Background Particles */}
      {/* <FloatingParticles /> */}

      {/* Page Sections */}
      <Hero />
      <StatsSection />
      <About />
      <Services />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
