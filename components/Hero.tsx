'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import siteData from '../data/siteData.json';
import { RocketIcon, SparkleIcon } from './Icons';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 40, -30, 0],
            rotate: [0, 15, -10, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 -left-20 w-96 h-96 bg-accent-soft/50 rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"
        />
        <motion.div
          animate={{ 
            x: [0, -30, 40, 0],
            rotate: [0, -12, 15, 0],
            scale: [1, 0.95, 1.05, 1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] bg-accent/20 rounded-[60%_40%_30%_70%/40%_70%_60%_30%]"
        />
        <motion.div
          animate={{ 
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-yellow-100/60 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
        />
      </div>

      {/* Left Column - Vertical Decorative Elements */}
      <div className="absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-4"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              className="w-3 h-3 bg-accent rounded-full"
            />
          ))}
          <div className="w-px h-32 bg-accent/30" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xs uppercase tracking-[0.4em] text-muted -rotate-90 origin-left"
          >
            EST. 2024
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content - Asymmetrical Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 Columns */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
                <SparkleIcon className="w-5 h-5 text-accent" />
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  {siteData.tagline}
                </span>
              </div>
            </motion.div>

            <div className="mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85]"
              >
                <span className="block">Angel</span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block text-accent"
                >
                  Vverse
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-muted max-w-lg mb-12 leading-relaxed"
            >
              {siteData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-600 text-white px-8 py-5 rounded-[3rem] text-lg font-bold overflow-hidden shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Start Your Journey</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-accent"
                  initial={{ y: '100%' }}
                  whileHover={{ y: '0%' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 bg-white/70 backdrop-blur-md text-foreground px-8 py-5 rounded-[3rem] text-lg font-bold border-2 border-accent/20 hover:border-accent hover:bg-accent-soft transition-all duration-300"
              >
                <span>View Our Work</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">↗</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - 5 Columns - Deconstructed Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 60, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.5, type: 'spring' }}
                whileHover={{ rotate: 2, scale: 1.02, y: -5 }}
                className="bg-white p-8 lg:p-10 rounded-[3rem] border border-accent/10 shadow-2xl mb-6 relative z-30"
              >
                <div className="w-16 h-16 bg-accent-soft rounded-2xl flex items-center justify-center mb-6">
                  <RocketIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-black mb-2">Let's Create Magic</h3>
                <p className="text-muted">Transforming ideas into digital reality</p>
              </motion.div>

              {/* Floating Card 2 - Asymmetrical */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 30, rotate: 10 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.7, type: 'spring' }}
                whileHover={{ rotate: -3, scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-foreground to-gray-800 text-white p-7 lg:p-9 rounded-[2rem_4rem_2rem_4rem] shadow-2xl ml-8 relative z-20"
              >
                <div className="flex gap-6">
                  {siteData.stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-3xl lg:text-4xl font-black text-accent mb-1">{stat.number}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Decorative Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9, type: 'spring' }}
                className="absolute -top-10 -right-10 w-28 h-28 bg-accent/20 rounded-full flex items-center justify-center z-10"
              >
                <div className="text-5xl animate-bounce">✨</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
