'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import services from '../../data/services.json';
import { MobileIcon, PenIcon, CameraIcon, PaletteIcon, SparkleIcon } from '../../components/Icons';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-52 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-accent-soft text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <SparkleIcon className="w-4 h-4" />
              <span>What we do</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Our services
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              Comprehensive solutions crafted with care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, idx) => {
              const ServiceIcon = [MobileIcon, PenIcon, CameraIcon, PaletteIcon][idx];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                  className="p-8 border border-border rounded-3xl hover:border-accent/30 hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="lg:w-24 flex-shrink-0">
                      <ServiceIcon className="w-16 h-16 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-accent bg-accent-soft px-3 py-1 rounded-full">0{service.id}</span>
                        <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-sm text-muted bg-accent-soft/50 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent-soft/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ready to start?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent/90 transition-all"
            >
              Let's work together
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
