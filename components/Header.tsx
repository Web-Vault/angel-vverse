'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import siteData from '../data/siteData.json';
import { HomeIcon, UsersIcon, ServicesIcon, MailIcon, SparkleIcon } from './Icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/about', label: 'About', icon: UsersIcon },
    { href: '/services', label: 'Services', icon: ServicesIcon },
    { href: '/portfolio', label: 'Portfolio', icon: SparkleIcon },
    { href: '/contact', label: 'Contact', icon: MailIcon },
  ];

  return (
    <>
      {/* Floating Logo Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed left-6 top-6 z-50 transition-all duration-300 ${
          scrolled ? 'scale-90' : 'scale-100'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 bg-white border border-border rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all"
        >
          <Image
            src="/image.png"
            alt="Angel Vverse Logo"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="font-semibold text-sm hidden lg:block">{siteData.companyName}</span>
        </Link>
      </motion.div>

      {/* Floating Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed right-6 top-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
          scrolled ? 'scale-90' : 'scale-100'
        } ${isMenuOpen ? 'rotate-180' : ''}`}
      >
        {isMenuOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </motion.button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 3rem) 3rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-foreground"
          >
            <div className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
              <nav className="space-y-8 text-center">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex flex-row items-center gap-8"
                    >
                      <item.icon className="w-16 h-16 text-white mb-2 group-hover:text-accent transition-colors" />
                      <span className="text-4xl md:text-6xl font-bold text-white group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
