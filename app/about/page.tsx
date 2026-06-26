'use client';
import { motion } from 'framer-motion';
import siteData from '../../data/siteData.json';
import { UsersIcon, PaletteIcon, SparkleIcon, RocketIcon } from '../../components/Icons';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Creative Hero Section */}
      <section className="pt-40 pb-24 lg:pt-52 lg:pb-32 relative overflow-hidden">
        {/* Soft Background Blurs */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-accent-soft/40 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <SparkleIcon className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">About Us</span>
              <SparkleIcon className="w-5 h-5 text-accent" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 max-w-5xl">
              We're the <span className="text-accent">storytellers</span> behind your brand
            </h1>
          </motion.div>

          {/* Clean Hero Split - swapped content/visual for desktop */}
          <div className="mt-16 grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-black leading-tight">{siteData.companyName}</h2>
                <p className="text-lg md:text-xl text-muted leading-relaxed">{siteData.description}</p>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  {[`Creative Studio`, `Digital Marketing`, `Brand Strategy`, `Visual Design`].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-[1.5rem] text-sm font-medium border border-accent/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-[2rem]"
                />
                <div className="bg-gradient-to-br from-accent-soft/40 to-accent/10 p-10 lg:p-16 border border-accent/10" style={{ borderRadius: '3rem 1.5rem 3rem 1.5rem' }}>
                  <div className="text-8xl lg:text-[10rem] text-center">🎨</div>
                </div>
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0], y: [0, 8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent-soft/40 rounded-[1.5rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section - Centered, refined quote */}
      <section className="py-24 bg-accent-soft/30 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-64 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
        />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <SparkleIcon className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Our Story</span>
              <SparkleIcon className="w-5 h-5 text-accent" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 lg:p-20 border border-accent/10 relative overflow-hidden"
            style={{ borderRadius: '1.5rem 3rem 1.5rem 3rem' }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -left-8 w-24 h-24 bg-accent/5 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent-soft/30 rounded-full"
            />
            
            <div className="relative z-10 text-center">
              <div className="text-9xl font-serif text-accent/20 mb-4 leading-none">“</div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-4">
                {siteData.about.story}
              </p>
              <div className="text-9xl font-serif text-accent/20 leading-none">”</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Timeline Section - added vertical line */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <SparkleIcon className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Our Values</span>
              <SparkleIcon className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black">What drives us every day</h2>
          </motion.div>
          
          <div className="space-y-16 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent/15 hidden lg:block"></div>
            
            {siteData.about.values.map((value, idx) => {
              const ValueIcon = [PaletteIcon, SparkleIcon, RocketIcon, SparkleIcon][idx];
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-8 relative ${!isLeft && 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm z-10 hidden lg:block"></div>
                  
                  <div className="w-1/3 lg:w-1/4">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5 + idx, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div 
                        className="p-8 border border-accent/10 bg-white"
                        style={{ 
                          borderRadius: isLeft ? '3rem 1.5rem 3rem 1.5rem' : '1.5rem 3rem 1.5rem 3rem'
                        }}
                      >
                        <ValueIcon className="w-16 h-16 text-accent mx-auto" />
                        <div className="mt-4 text-center">
                          <span className="text-4xl font-black text-accent">{String(idx + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div 
                      className="p-8 border border-accent/10 bg-accent-soft/20"
                      style={{ 
                        borderRadius: !isLeft ? '3rem 1.5rem 3rem 1.5rem' : '1.5rem 3rem 1.5rem 3rem'
                      }}
                    >
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">{value.title}</h3>
                      <p className="text-lg text-muted leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        {/* Background Blobs like Footer with subtle animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl bg-accent/20"
          />
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-accent/15"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <SparkleIcon className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">By the Numbers</span>
              <SparkleIcon className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black">Our Impact So Far</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {siteData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="text-center p-10 lg:p-12 bg-white/5 border border-white/10"
                style={{ 
                  borderRadius: idx % 2 === 0 ? '3rem 1.5rem 3rem 1.5rem' : '1.5rem 3rem 1.5rem 3rem'
                }}
              >
                <div className="text-5xl lg:text-6xl font-black text-accent mb-3">{stat.number}</div>
                <p className="text-white/60 text-sm uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - added subtle shadow */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-64 right-0 w-[500px] h-[500px] bg-accent-soft/30 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <SparkleIcon className="w-5 h-5 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Meet the Team</span>
              <SparkleIcon className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black">The people behind the magic</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.about.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="p-8 bg-white border border-accent/10 shadow-sm"
                style={{ 
                  borderRadius: idx % 2 === 0 ? '3rem 1.5rem 3rem 1.5rem' : '1.5rem 3rem 1.5rem 3rem'
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-28 h-28 mx-auto mb-6 rounded-full bg-accent-soft flex items-center justify-center text-5xl border border-accent/20"
                >
                  👤
                </motion.div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-accent font-medium text-center mb-4">{member.role}</p>
                <p className="text-muted text-sm text-center leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
