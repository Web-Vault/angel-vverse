'use client';
import { motion } from 'framer-motion';
import siteData from '../../data/siteData.json';
import { MailIcon, SparkleIcon } from '../../components/Icons';

export default function ContactPage() {
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
              <MailIcon className="w-4 h-4" />
              <span>Get in touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Let's talk
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-4">Email</h3>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-2xl md:text-3xl font-semibold hover:text-accent transition-colors"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-4">Phone</h3>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="text-2xl md:text-3xl font-semibold hover:text-accent transition-colors"
                  >
                    {siteData.contact.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted mb-4">Location</h3>
                  <p className="text-2xl md:text-3xl font-semibold">
                    {siteData.contact.location}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted">Follow</h3>
                <div className="flex gap-4">
                  <a
                    href={siteData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent-soft/50 transition-all"
                  >
                    <span className="text-2xl">📸</span>
                  </a>
                  <a
                    href={siteData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent-soft/50 transition-all"
                  >
                    <span className="text-2xl">📘</span>
                  </a>
                  <a
                    href={siteData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent-soft/50 transition-all"
                  >
                    <span className="text-2xl">💼</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">First name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted mb-2">Last name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent/90 transition-all"
                  >
                    Send message
                    <span>→</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
