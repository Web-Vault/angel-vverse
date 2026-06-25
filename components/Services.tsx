'use client';
import { motion } from 'framer-motion';
import services from '../data/services.json';
import { SparkleIcon } from './Icons';

export default function Services() {
  // Define varying heights for masonry effect
  const getCardHeight = (idx: number) => {
    if (idx === 0) return 'lg:row-span-2'; // Tallest
    if (idx === 3) return 'lg:row-span-2'; // Tallest
    return ''; // Normal
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Floating Geometric Background Shapes */}
      <motion.div
        animate={{ y: [0, -50, 0], rotate: [0, 25, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 right-16 w-20 h-20 bg-accent/12 rounded-[2.5rem]"
      />
      <motion.div
        animate={{ y: [0, 50, 0], rotate: [0, -30, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute bottom-24 left-20 w-14 h-14 bg-accent-soft rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 right-12 w-10 h-10 bg-accent/10 rotate-45"
      />

      {/* Soft Background Blurs */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent-soft/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <SparkleIcon className="w-6 h-6 text-accent" />
            <span className="text-xs uppercase tracking-[0.45em] text-accent font-semibold">Our Services</span>
            <SparkleIcon className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            What We Do Best
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your needs
          </p>
        </motion.div>

        {/* Creative Masonry Grid with Spanning Heights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 + idx * 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: 'spring' }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`${getCardHeight(idx)}`}
            >
              {/* Card with Creative Asymmetric Border */}
              <div
                className="bg-white p-7 lg:p-8 border border-accent/10 shadow-xl h-full relative overflow-hidden"
                style={{
                  borderRadius: idx % 3 === 0
                    ? '2.75rem 1rem 2.75rem 1rem'
                    : idx % 3 === 1
                    ? '1rem 2.75rem 1rem 2.75rem'
                    : '2rem 2rem 1rem 1rem'
                }}
              >
                {/* Floating Background Accent */}
                <motion.div
                  animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
                  transition={{ duration: 6 + idx * 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-accent-soft/35 rounded-[2.5rem]"
                />

                {/* Large Icon Area (for tall cards) */}
                {getCardHeight(idx) && (
                  <div className="w-20 h-20 bg-accent-soft rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <span className="text-5xl">{service.icon}</span>
                  </div>
                )}
                
                {/* Normal Icon */}
                {!getCardHeight(idx) && (
                  <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-muted mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features List (more prominent for tall cards) */}
                <div className="space-y-2 relative z-10">
                  {service.features.slice(0, getCardHeight(idx) ? 5 : 3).map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 + fIdx * 0.08 }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      <span className="text-sm text-muted">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
