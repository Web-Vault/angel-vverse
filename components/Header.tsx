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
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon, number: '01', subtitle: 'Start Here' },
    { href: '/about', label: 'About', icon: UsersIcon, number: '02', subtitle: 'Our Story' },
    { href: '/services', label: 'Services', icon: ServicesIcon, number: '03', subtitle: 'What We Do' },
    { href: '/portfolio', label: 'Portfolio', icon: SparkleIcon, number: '04', subtitle: 'Our Work' },
    { href: '/contact', label: 'Contact', icon: MailIcon, number: '05', subtitle: 'Get In Touch' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed left-6 top-6 z-50 transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
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

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed right-6 top-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${scrolled ? 'scale-90' : 'scale-100'}`}
      >
        {isMenuOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl">☰</span>
        )}
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white overflow-hidden"
          >
            <div className="h-full w-full flex">
              <div className="hidden lg:flex lg:w-1/2 h-full bg-accent-soft">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full flex flex-col justify-center items-center p-12"
                >
                  <AnimatePresence>
                    {activeItem !== null ? (
                      <motion.div
                        key="active-content"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                      >
                        <div className="mb-6">
                          {(() => {
                            const ActiveIcon = navItems[activeItem].icon;
                            return <ActiveIcon className="w-20 h-20 text-accent mx-auto" />;
                          })()}
                        </div>
                        <span className="text-7xl lg:text-8xl font-black text-accent">
                          {navItems[activeItem].number}
                        </span>
                        <h2 className="text-2xl lg:text-4xl font-bold text-accent mt-4">
                          {navItems[activeItem].label}
                        </h2>
                        <p className="text-lg text-accent/70 mt-2">
                          {navItems[activeItem].subtitle}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default-content"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                      >
                        <div className="mb-4">
                      <Image
                        src="/image.png"
                        alt="Angel Vverse"
                        width={60}
                        height={60}
                        className="rounded-2xl mx-auto"
                        priority
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-accent">Angel Vverse</h2>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="mt-12 flex gap-8 text-center"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest">Email</span>
                      <a href={`mailto:${siteData.contact.email}`} className="text-accent hover:opacity-80">
                        {siteData.contact.email}
                      </a>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest">Phone</span>
                      <a href={`tel:${siteData.contact.phone}`} className="text-accent hover:opacity-80">
                        {siteData.contact.phone}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 h-full bg-white">
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full flex flex-col justify-evenly px-8 lg:px-16 py-12"
                >

                  <nav className="space-y-4 lg:space-y-6">
                    {navItems.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.08, duration: 0.4 }}
                        whileHover={{ x: -8 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          onMouseEnter={() => setActiveItem(idx)}
                          onMouseLeave={() => setActiveItem(null)}
                          className="block group"
                        >
                          <div className="flex items-center gap-6 lg:gap-10">
                            <span className="text-3xl lg:text-5xl font-black text-accent/20 group-hover:text-accent transition-colors duration-300">
                              {item.number}
                            </span>
                            <div className="flex-1">
                              <h3 className="text-3xl lg:text-6xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                {item.label}
                              </h3>
                              <p className="text-sm lg:text-lg text-muted-foreground mt-1">
                                {item.subtitle}
                              </p>
                            </div>
                            <span className="text-3xl lg:text-5xl opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 text-accent">
                              →
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="lg:hidden mt-12 pt-8 border-t border-gray-100">
                    <div className="flex justify-center gap-4 mb-8">
                      <a
                        href={siteData.socialLinks.instagram}
                        className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <span className="text-lg">📷</span>
                      </a>
                      <a
                        href={siteData.socialLinks.facebook}
                        className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <span className="text-lg">📘</span>
                      </a>
                      <a
                        href={siteData.socialLinks.linkedin}
                        className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                      >
                        <span className="text-lg">💼</span>
                      </a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                        <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest">Email</span>
                        <a href={`mailto:${siteData.contact.email}`} className="text-accent text-sm hover:opacity-80 transition-opacity">
                          {siteData.contact.email}
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4">
                        <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest">Phone</span>
                        <a href={`tel:${siteData.contact.phone}`} className="text-accent text-sm hover:opacity-80 transition-opacity">
                          {siteData.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex mt-12 lg:mt-14 justify-end gap-4">
                    <a
                      href={siteData.socialLinks.instagram}
                      className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg">📷</span>
                    </a>
                    <a
                      href={siteData.socialLinks.facebook}
                      className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg">📘</span>
                    </a>
                    <a
                      href={siteData.socialLinks.linkedin}
                      className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg">💼</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
