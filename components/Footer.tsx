'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import { SparkleIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        {/* Hero Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <SparkleIcon className="w-4 h-4" />
              <span>Let's Create Something Amazing</span>
            </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to <span className="text-accent">elevate</span> your brand?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-accent/90 transition-all hover:gap-5"
          >
            Start a Project
            <span>→</span>
          </Link>
        </motion.div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 pt-12 border-t border-white/10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8">
              <Image
                src="/image.png"
                alt="Angel Vverse Logo"
                width={56}
                height={56}
                className="rounded-xl"
              />
              <div>
                <h2 className="text-xl font-bold">{siteData.companyName}</h2>
                <p className="text-sm text-white/60">{siteData.tagline}</p>
              </div>
            </Link>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              {siteData.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
              >
                📸
              </a>
              <a
                href={siteData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
              >
                📘
              </a>
              <a
                href={siteData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
              >
                💼
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-widest text-white/50">Navigate</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-lg font-medium text-white hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-widest text-white/50">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${siteData.contact.email}`} className="text-lg font-medium text-white hover:text-accent transition-colors">
                  {siteData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteData.contact.phone}`} className="text-lg font-medium text-white hover:text-accent transition-colors">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="text-lg font-medium text-white">
                {siteData.contact.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} {siteData.companyName}. Crafted with passion.</p>
          <div className="flex gap-6 text-sm text-white/50">
            <span>Design</span>
            <span>•</span>
            <span>Development</span>
            <span>•</span>
            <span>Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
