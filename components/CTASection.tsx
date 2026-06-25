'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { SparkleIcon } from './Icons';
import { useRef } from 'react';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section 
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-24"
    >
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <SparkleIcon className="w-6 h-6 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Ready to Shine?</span>
              <SparkleIcon className="w-6 h-6 text-accent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight mb-8 text-foreground"
            >
              Let's Build <br />
              <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-muted mb-12 max-w-xl"
            >
              Transform your brand with our creative expertise. We're here to make your vision a reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-500 text-foreground px-12 py-6 rounded-[2.5rem] text-xl font-bold hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300"
              >
                <span>Get Started Today</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 bg-white text-foreground px-12 py-6 rounded-[2.5rem] text-xl font-bold border border-accent/20 hover:border-accent/50 hover:bg-accent-soft/20 transition-all duration-300"
              >
                <span>Learn About Us</span>
              </Link>
            </motion.div>
          </div>

          {/* Right: Creative Visual Stack */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              style={{ y: y1 }}
              className="absolute -top-10 -left-10 w-40 h-40 bg-accent-soft/40 rounded-[2.5rem]"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-10 -right-10 w-36 h-36 bg-accent/15 rounded-[2rem]"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
              className="relative"
            >
              <div 
                className="bg-gradient-to-br from-foreground to-gray-900 p-10 lg:p-14 text-white relative overflow-hidden"
                style={{ borderRadius: '1.5rem 3rem 1.5rem 3rem' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-transparent" />
                <div className="relative z-10 text-center">
                  <div className="text-8xl lg:text-10xl mb-6">✨</div>
                  <div className="text-2xl lg:text-3xl font-black mb-3">500+</div>
                  <div className="text-white/70 text-sm uppercase tracking-widest">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
