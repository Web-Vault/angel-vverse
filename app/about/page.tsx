'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import siteData from '../../data/siteData.json';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4a574]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#d4a574]"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#737373] font-medium">About Us</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-semibold leading-[0.9] tracking-tighter mb-12">
              We are the <br />
              <span className="bg-gradient-to-r from-[#d4a574] to-[#c9b8a6] bg-clip-text text-transparent">storytellers</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story - Dramatic */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-4xl font-light text-[#e5e5e5] leading-relaxed">
              {siteData.about.story}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats - Grid */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-12 bg-[#1a1a1a] border border-[#262626] rounded-[3rem] group"
              >
                <div className="text-7xl font-bold text-[#d4a574] group-hover:scale-110 transition-transform">{stat.number}</div>
                <p className="text-xl text-[#737373] mt-4 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Unique List */}
      <section className="py-40 bg-gradient-to-b from-transparent via-[#d4a574]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#d4a574]"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#d4a574] font-medium">Our Values</span>
            </div>
            <h2 className="text-6xl font-semibold">What we stand for</h2>
          </div>
          <div className="space-y-4">
            {siteData.about.values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="p-12 bg-[#1a1a1a] border border-[#262626] rounded-[3rem] group cursor-pointer hover:border-[#d4a574]/30"
              >
                <div className="flex items-center gap-8">
                  <div className="text-8xl">{['🎨', '✨', '🚀', '💫'][idx]}</div>
                  <div>
                    <h3 className="text-3xl font-semibold">{value.title}</h3>
                    <p className="text-xl text-[#737373] mt-3">{value.desc}</p>
                  </div>
                  <div className="ml-auto text-6xl text-[#d4a574] opacity-0 group-hover:opacity-100 transition-opacity">↗</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Unique Cards */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#d4a574]"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#d4a574] font-medium">The Team</span>
            </div>
            <h2 className="text-6xl font-semibold">Meet the people</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.about.team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, rotate: idx % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="p-12 bg-[#1a1a1a] border border-[#262626] rounded-[3rem] group"
              >
                <div className="aspect-square bg-[#262626] rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-[#d4a574]/10 transition-all">
                  <span className="text-9xl">👤</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#d4a574] font-medium mb-3">{member.role}</p>
                <p className="text-[#737373]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
