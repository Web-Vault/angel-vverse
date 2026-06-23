'use client';
import { motion } from 'framer-motion';
import siteData from '../../data/siteData.json';

export default function ContactPage() {
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
              <span className="text-xs tracking-[0.3em] uppercase text-[#858585] font-light">Get in touch</span>
            </div>
            <h1 className="text-7xl lg:text-8xl font-semibold leading-[0.9] tracking-tighter mb-12">
              Let's talk
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-16"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-[#858585] font-light mb-4">Email</h3>
                  <a href={`mailto:${siteData.contact.email}`} className="text-3xl font-light text-white hover:text-[#d4a574] transition-colors duration-500">
                    {siteData.contact.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-[#858585] font-light mb-4">Phone</h3>
                  <a href={`tel:${siteData.contact.phone}`} className="text-3xl font-light text-white hover:text-[#d4a574] transition-colors duration-500">
                    {siteData.contact.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-[#858585] font-light mb-4">Location</h3>
                  <p className="text-3xl font-light text-white">
                    {siteData.contact.location}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xs tracking-[0.3em] uppercase text-[#858585] font-light">Follow</h3>
                <div className="flex gap-6">
                  <a
                    href={siteData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-[#262626] hover:border-[#d4a574] rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-[#d4a574]/5"
                  >
                    📸
                  </a>
                  <a
                    href={siteData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-[#262626] hover:border-[#d4a574] rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-[#d4a574]/5"
                  >
                    📘
                  </a>
                  <a
                    href={siteData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-[#262626] hover:border-[#d4a574] rounded-full flex items-center justify-center text-2xl transition-all duration-500 hover:bg-[#d4a574]/5"
                  >
                    💼
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-light tracking-[0.3em] text-[#858585] mb-4">First name</label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#262626] focus:border-[#d4a574] outline-none text-xl font-light transition-colors duration-500"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-light tracking-[0.3em] text-[#858585] mb-4">Last name</label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#262626] focus:border-[#d4a574] outline-none text-xl font-light transition-colors duration-500"
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-light tracking-[0.3em] text-[#858585] mb-4">Email</label>
                  <input
                    type="email"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#262626] focus:border-[#d4a574] outline-none text-xl font-light transition-colors duration-500"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-light tracking-[0.3em] text-[#858585] mb-4">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-[#262626] focus:border-[#d4a574] outline-none text-xl font-light transition-colors duration-500 resize-none"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="pt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-4 text-2xl font-light text-white hover:text-[#d4a574] transition-all duration-500 group"
                  >
                    Send message
                    <span className="text-4xl group-hover:translate-x-3 transition-transform duration-500">↗</span>
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
