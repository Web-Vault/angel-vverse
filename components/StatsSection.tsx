'use client';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import AnimatedCounter from './AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-accent-soft/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {siteData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-3">
                <AnimatedCounter target={stat.number} />
              </p>
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
