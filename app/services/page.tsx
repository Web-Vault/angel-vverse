'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import services from '../../data/services.json';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#858585] font-light">What we do</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-semibold leading-[0.9] tracking-tighter mb-12">
              Our services
            </h1>
            <p className="text-2xl font-light text-[#858585] max-w-2xl">
              Comprehensive solutions crafted with care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-0">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="py-12 border-b border-[#262626] group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-10">
                    <div className="text-5xl pt-2">{service.icon}</div>
                    <div>
                      <div className="flex items-center gap-6 mb-4">
                        <span className="text-xs font-medium tracking-[0.3em] text-[#858585]">0{service.id}</span>
                        <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight group-hover:text-[#d4a574] transition-colors duration-500">{service.title}</h3>
                      </div>
                      <p className="text-xl font-light text-[#858585] max-w-2xl leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-3 mt-6">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-sm font-light text-[#858585] px-4 py-2 bg-[#1a1a1a] rounded-full">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-5xl text-[#858585] opacity-0 group-hover:opacity-100 group-hover:text-[#d4a574] transition-all duration-500 transform group-hover:translate-x-4">↗</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-gradient-to-b from-transparent via-[#d4a574]/5 to-transparent">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl lg:text-6xl font-semibold leading-tight tracking-tighter mb-12">
              Ready to start?
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-4 text-2xl font-light text-white hover:text-[#d4a574] transition-colors duration-500">
              Let's work together
              <span className="text-4xl">↗</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
