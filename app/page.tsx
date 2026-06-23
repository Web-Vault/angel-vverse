'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import siteData from '../data/siteData.json';
import services from '../data/services.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent-soft text-accent px-4 py-2 rounded-full text-sm font-medium">
              <span>✨</span>
              <span>Digital Marketing Agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight max-w-5xl">
              We help brands <span className="text-accent">shine</span> in the digital world
            </h1>
            <p className="text-xl text-muted max-w-2xl leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-all">
                Start a Project
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground hover:text-background transition-all">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {siteData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="text-center lg:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
            <p className="text-muted text-lg max-w-2xl">Comprehensive solutions crafted to elevate your brand</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="group p-8 border border-border rounded-2xl hover:border-accent/30 hover:bg-accent-soft/20 transition-all"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-sm text-muted bg-accent-soft/50 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 bg-accent-soft/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
              <p className="text-xl leading-relaxed text-muted mb-8">
                {siteData.about.story}
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                Learn more about us
                <span>→</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {siteData.about.values.map((value, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-border">
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted">{value.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Ready to grow your brand?
            </h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Let's work together to create something amazing. Get in touch and let's start your project today.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-accent text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-accent/90 transition-all">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
