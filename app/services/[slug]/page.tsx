'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import services from '../../../data/services.json';
import { 
  SparkleIcon, 
  MobileIcon, 
  PenIcon, 
  CameraIcon, 
  PaletteIcon,
  ArrowUpRightIcon,
  ChevronDownIcon
} from '../../../components/Icons';
import CTASection from '@/components/CTASection';
import { useRef } from 'react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'social-media-marketing': MobileIcon,
  'strategic-content-creation-and-writing': PenIcon,
  'product-photography': CameraIcon,
  'graphic-designing': PaletteIcon
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => {
    const serviceSlug = s.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    return serviceSlug === slug;
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const ServiceIcon = iconMap[slug as string] || SparkleIcon;

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <Link href="/services" className="text-accent hover:underline">
            Back to services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Hero */}
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <SparkleIcon className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Service</span>
              <SparkleIcon className="w-5 h-5 text-accent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-16 h-16 bg-accent-soft rounded-[2.25rem] flex items-center justify-center border border-accent/20">
                <ServiceIcon className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent bg-accent-soft px-4 py-2 rounded-full">
                0{service.id}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center gap-2 text-accent mt-16"
            >
              <span className="text-xs uppercase tracking-[0.3em]">Scroll to Explore</span>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDownIcon className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <SparkleIcon className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Service Overview</span>
                <SparkleIcon className="w-4 h-4 text-accent" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">What You'll Get</h2>
            </div>

            <div className="bg-accent-soft/25 border border-accent/10 p-12 lg:p-16 rounded-[3rem 1.5rem 3rem 1.5rem]">
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {service.serviceOverview}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Solved & What We Provide */}
      <section className="py-24 lg:py-32 bg-accent-soft/25 relative overflow-hidden">
        {/* Floating Geometric Background Shapes */}
        <motion.div
          animate={{ y: [0, -50, 0], rotate: [0, 25, -25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 right-20 w-16 h-16 bg-accent/10 rounded-[2rem]"
        />
        <motion.div
          animate={{ y: [0, 50, 0], rotate: [0, -30, 30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-20 left-24 w-12 h-12 bg-accent-soft rounded-full"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Problems Solved */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <SparkleIcon className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Problems We Solve</span>
                <SparkleIcon className="w-4 h-4 text-accent" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">Common Challenges We Address</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                We help businesses overcome these common pain points
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.problemsSolved.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white border border-accent/10 p-8 rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-[1.5rem] flex items-center justify-center mb-5">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We Provide */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <SparkleIcon className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">What We Provide</span>
                <SparkleIcon className="w-4 h-4 text-accent" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">Everything You'll Get</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Comprehensive solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whatWeProvide.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-br from-accent-soft/30 to-accent/10 border border-accent/20 p-8 rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent rounded-[1.5rem] flex items-center justify-center mb-5">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <SparkleIcon className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Key Features</span>
                <SparkleIcon className="w-4 h-4 text-accent" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Comprehensive Features</h2>
            </div>

            <div className="bg-accent-soft/25 border border-accent/10 p-12 lg:p-16 rounded-[1.5rem 3rem 1.5rem 3rem]">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {service.featuresContent}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.08, x: 8 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-accent font-semibold text-lg"
                >
                  View All Services
                  <ArrowUpRightIcon className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
