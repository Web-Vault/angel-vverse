'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import services from '../../data/services.json';
import {
  MobileIcon,
  PenIcon,
  CameraIcon,
  PaletteIcon,
  SparkleIcon,
  RocketIcon,
  ChevronDownIcon,
  ArrowUpRightIcon
} from '../../components/Icons';
import CTASection from '@/components/CTASection';
import { useRef } from 'react';

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen relative flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <SparkleIcon className="w-5 h-5 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Our Services</span>
                <SparkleIcon className="w-5 h-5 text-accent" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8"
              >
                Transform Your Brand Into Something <span className="text-accent">Extraordinary</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed"
              >
                Comprehensive digital marketing solutions tailored to your unique business needs
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center gap-2 text-accent"
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

      {/* Services Sections */}
      {services.map((service, idx) => {
        const ServiceIcon =
          service.icon === '📱' ? MobileIcon :
          service.icon === '✍️' ? PenIcon :
          service.icon === '📸' ? CameraIcon :
          PaletteIcon;
        const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
        const isLeft = idx % 2 === 0;

        return (
          <ServiceSection
            key={service.id}
            service={service}
            ServiceIcon={ServiceIcon}
            slug={slug}
            isLeft={isLeft}
            idx={idx}
          />
        );
      })}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function ServiceSection({ service, ServiceIcon, slug, isLeft, idx }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Enhanced parallax transformations - both sides
  const visualY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const visualX = useTransform(scrollYProgress, [0, 1], [isLeft ? -80 : 80, isLeft ? 80 : -80]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const visualRotate = useTransform(scrollYProgress, [0, 0.5, 1], [isLeft ? -5 : 5, 0, isLeft ? 5 : -5]);
  
  const contentY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const contentX = useTransform(scrollYProgress, [0, 1], [isLeft ? 60 : -60, isLeft ? -60 : 60]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className={`py-24 lg:py-32 relative overflow-hidden ${idx % 2 === 1 ? 'bg-accent-soft/25' : ''}`}
    >
      {/* Floating Geometric Background Shapes */}
      <motion.div
        animate={{ y: [0, -50, 0], rotate: [0, 25, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20 + idx, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-20 w-16 h-16 bg-accent/10 rounded-[2rem]"
      />
      <motion.div
        animate={{ y: [0, 50, 0], rotate: [0, -30, 30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 25 + idx, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-20 left-24 w-12 h-12 bg-accent-soft rounded-full"
      />
      <motion.div
        animate={{ y: [0, -35, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 18 + idx, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-40 left-16 w-10 h-10 bg-accent/8 rotate-45"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-12 gap-12 items-center ${!isLeft && 'lg:flex-row-reverse'}`}>
          {/* Visual Side */}
          <motion.div
            style={{ 
              y: visualY, 
              x: visualX, 
              scale: visualScale,
              rotate: visualRotate,
              opacity: contentOpacity
            }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
                transition={{ duration: 10 + idx, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute -top-8 -left-8 w-28 h-28 bg-accent/12 rounded-[2.5rem] ${!isLeft && '-left-auto -right-8'}`}
              />
              <motion.div
                whileHover={{ scale: 1.03, rotate: isLeft ? 2 : -2 }}
                className="bg-gradient-to-br from-accent-soft/40 to-accent/10 p-12 lg:p-16 border border-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ borderRadius: '3rem 1.5rem 3rem 1.5rem' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 8 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 h-24 bg-accent-soft rounded-[2.25rem] flex items-center justify-center border border-accent/20 mx-auto"
                >
                  <ServiceIcon className="w-12 h-12 text-accent" />
                </motion.div>
                <div className="text-center mt-6">
                  <span className="text-5xl font-black text-accent/15">0{service.id}</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -6, 6, 0] }}
                transition={{ duration: 12 + idx, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className={`absolute -bottom-8 -right-8 w-24 h-24 bg-accent-soft/40 rounded-[2rem] ${!isLeft && '-right-auto -left-8'}`}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            style={{ 
              y: contentY, 
              x: contentX, 
              scale: contentScale,
              opacity: contentOpacity
            }}
            className="lg:col-span-7"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-4"
              >
                <SparkleIcon className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Service 0{service.id}</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl font-black mb-6"
              >
                {service.title}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: isLeft ? 25 : -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl"
            >
              {service.description}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {service.features.map((feature: string, fIdx: number) => (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, x: isLeft ? 30 : -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + fIdx * 0.1 }}
                  whileHover={{ x: 8, scale: 1.03, rotate: isLeft ? 1 : -1 }}
                  className="flex items-center gap-3 p-4 rounded-[1.5rem] hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2 + fIdx, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-2 h-2 bg-accent rounded-full shrink-0"
                  />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: isLeft ? 25 : -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href={`/services/${slug}`}>
                <motion.button
                  whileHover={{ scale: 1.08, x: 8, rotate: isLeft ? 1 : -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 text-accent font-semibold text-lg"
                >
                  Learn More
                  <motion.div
                    animate={{ x: [0, 8, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowUpRightIcon className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
