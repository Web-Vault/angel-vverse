'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import projects from '../data/projects.json';
import { SparkleIcon } from './Icons';

export default function PortfolioSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Soft Background Blurs */}
      <div className="absolute -top-40 left-0 w-[26rem] h-[26rem] bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-[22rem] h-[22rem] bg-accent-soft/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <SparkleIcon className="w-5 h-5 text-accent" />
            <span className="text-xs uppercase tracking-[0.45em] text-accent font-semibold">Selected Work</span>
            <SparkleIcon className="w-5 h-5 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">Our Portfolio</h2>
        </motion.div>

        {/* Clean Split-Screen Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Project List */}
          <div className="lg:col-span-4 space-y-3">
            {projects.map((project, idx) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedIndex(idx)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-5 lg:p-6 rounded-[1.5rem] border transition-all duration-300 ${
                  selectedIndex === idx
                    ? 'bg-accent text-white border-accent shadow-sm'
                    : 'bg-white text-foreground border-accent/20 hover:border-accent/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    selectedIndex === idx ? 'text-white/80' : 'text-accent'
                  }`}>
                    {project.category}
                  </span>
                  <span className={`text-xs ${
                    selectedIndex === idx ? 'text-white/70' : 'text-muted'
                  }`}>
                    {project.year}
                  </span>
                </div>
                <h3 className={`text-lg lg:text-xl font-bold mb-1 ${
                  selectedIndex === idx ? 'text-white' : 'text-foreground'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${
                  selectedIndex === idx ? 'text-white/80' : 'text-muted'
                }`}>
                  Client: {project.client}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right: Selected Project Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div
                  className="bg-white p-7 lg:p-10 border border-accent/10 shadow-sm h-full relative overflow-hidden"
                  style={{
                    borderRadius: '3rem 1.5rem 3rem 1.5rem'
                  }}
                >
                  {/* Subtle Decorative Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                  <div className="relative z-10 space-y-8">
                    {/* Project Image */}
                    <motion.div
                      key={`img-${selectedIndex}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                      className="flex justify-center"
                    >
                      <div className="bg-gradient-to-br from-accent-soft/40 to-accent/10 p-8 lg:p-14 rounded-[2.5rem] shadow-sm">
                        <span className="text-7xl lg:text-[10rem]">{selectedProject.image}</span>
                      </div>
                    </motion.div>

                    {/* Title & Client with Accent Divider */}
                    <div className="text-center space-y-3">
                      <div className="w-12 h-0.5 bg-accent/30 mx-auto rounded-full" />
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {selectedProject.title}
                      </h3>
                      <p className="text-base text-accent font-medium">
                        Client: {selectedProject.client}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-muted leading-relaxed text-center max-w-xl mx-auto">
                      {selectedProject.description}
                    </p>

                    {/* Features with Clean Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto">
                      {selectedProject.features.map((feature, fIdx) => (
                        <motion.span
                          key={fIdx}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + fIdx * 0.05 }}
                          className="text-xs px-3 py-2 bg-accent/8 text-accent rounded-[0.75rem] font-medium text-center"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="text-center pt-4">
                      <Link
                        href={`/portfolio/${selectedProject.slug}`}
                        className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-[1.5rem] font-medium hover:bg-foreground transition-all duration-300 group"
                      >
                        <span>View Project Details</span>
                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
