'use client';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import { SparkleIcon } from './Icons';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-accent-soft/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header - Clean & Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <SparkleIcon className="w-6 h-6 text-accent" />
            <span className="text-xs uppercase tracking-[0.45em] text-accent font-semibold">About Us</span>
            <SparkleIcon className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            {siteData.about.title}
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {siteData.about.story}
          </p>
        </motion.div>

        {/* Values - Unique Circular Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.about.values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 + idx * 0.12, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="bg-white p-7 rounded-2xl border border-accent/10 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-accent">{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
