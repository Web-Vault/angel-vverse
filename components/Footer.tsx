'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import siteData from '../data/siteData.json';

// Toast Component
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80, scale: 0.6, rotate: -5 }}
      animate={{ opacity: 1, y: 20, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, y: -80, scale: 0.6, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] bg-gradient-to-r from-white to-gray-50 text-foreground px-10 py-6 rounded-3xl shadow-2xl flex items-center gap-5 border border-gray-100"
    >
      <motion.span 
        className="text-4xl"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        ✨
      </motion.span>
      <div className="flex-1">
        <p className="font-black text-xl text-foreground">{message}</p>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Secret discovered!
        </p>
      </div>
      <button
        onClick={onClose}
        className="p-2 text-gray-300 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-300"
      >
        <span className="text-2xl">×</span>
      </button>
    </motion.div>
  );
}

type ConfettiPiece = {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
  size: number;
  type: 'circle' | 'square' | 'star' | 'triangle';
  spinSpeed: number;
  horizontalDrift: number;
};

export default function Footer() {
  const [typed, setTyped] = useState('');
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const secretCode = 'angel';

  const generateConfetti = () => {
    const colors = ['#f59e0b', '#fbbf24', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f97316', '#06b6d4'];
    const shapes: ('circle' | 'square' | 'star' | 'triangle')[] = ['circle', 'square', 'star', 'triangle'];
    const screenWidth = window.innerWidth;
    const newConfetti = Array.from({ length: 150 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * screenWidth,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 1,
      rotation: Math.random() * 360,
      size: 5 + Math.random() * 12,
      type: shapes[Math.floor(Math.random() * shapes.length)],
      spinSpeed: 0.5 + Math.random() * 2,
      horizontalDrift: (Math.random() - 0.5) * 300,
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 6000);
  };

  const easterMessages = [
    'Great job, detective!',
    'Welcome to the club!',
    'You\'re awesome!',
    'Magic unlocked!',
    'You found it!',
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (easterEggActive) return;

      const newTyped = (typed + e.key.toLowerCase()).slice(-secretCode.length);
      setTyped(newTyped);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setTyped(''), 2000);

      if (newTyped === secretCode) {
        setEasterEggActive(true);
        generateConfetti();
        setToastMessage(easterMessages[Math.floor(Math.random() * easterMessages.length)]);
        setShowToast(true);
        
        // Auto hide toast after 5 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [typed, easterEggActive]);

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <Toast
            message={toastMessage}
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>

      {/* Confetti */}
      <AnimatePresence>
        {confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{
              x: piece.x,
              y: -30,
              opacity: 1,
              rotate: piece.rotation,
              scale: 0.3
            }}
            animate={{
              y: window.innerHeight + 100,
              x: piece.x + piece.horizontalDrift,
              rotate: piece.rotation + (1080 * piece.spinSpeed),
              scale: [0.3, 1.2, 1],
              opacity: [1, 1, 1, 0.5, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3.5 + Math.random() * 2.5,
              delay: piece.delay,
              ease: 'easeInOut',
            }}
            className="fixed left-0 top-0 pointer-events-none z-[9999]"
            style={{ 
              width: piece.size,
              height: piece.size,
            }}
          >
            {piece.type === 'circle' && (
              <div 
                className="w-full h-full rounded-full shadow-lg"
                style={{ backgroundColor: piece.color }}
              />
            )}
            {piece.type === 'square' && (
              <div 
                className="w-full h-full rounded-sm shadow-lg rotate-45"
                style={{ backgroundColor: piece.color }}
              />
            )}
            {piece.type === 'star' && (
              <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg" style={{ fill: piece.color }}>
                <path d="M12 2 L14 8 L21 9 L16 14 L17 21 L12 17 L7 21 L8 14 L3 9 L10 8 Z" />
              </svg>
            )}
            {piece.type === 'triangle' && (
              <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg" style={{ fill: piece.color }}>
                <path d="M12 2 L22 22 L2 22 Z" />
              </svg>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl bg-accent/20"
        />
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl bg-accent/15"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="py-16 lg:py-20 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Easter Egg Area */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 rounded-full bg-accent" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                  Secret Spark
                </h3>
              </div>
              
              <AnimatePresence mode="wait">
                {easterEggActive ? (
                  <motion.div 
                    key="active"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="space-y-4"
                  >
                    <motion.div 
                      className="flex items-center gap-3"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-5xl animate-pulse">🎉</span>
                      <div>
                        <p className="text-2xl lg:text-3xl font-black text-accent leading-tight">
                          Spark Found!
                        </p>
                        <p className="text-white/60 text-sm">You're officially awesome!</p>
                      </div>
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => {
                        setEasterEggActive(false);
                        setTyped('');
                      }}
                      className="group flex items-center gap-2 px-8 py-3 bg-accent/10 border border-accent/30 text-accent rounded-full font-bold hover:bg-accent hover:text-foreground transition-all duration-300"
                    >
                      <span>Pop Another Spark</span>
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="group-hover:scale-125 transition-transform"
                      >
                        ✨
                      </motion.span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="inactive"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔍</span>
                      <p className="text-xl text-white/80">
                        Type "<span className="text-accent font-mono font-bold text-2xl tracking-wider">angel</span>"
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <span>💡</span>
                      <p>Just start typing while you're here...</p>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-4">
                      <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: '0%' }}
                        animate={{ width: ['0%', '35%'] }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-accent px-10 py-6 rounded-full text-foreground transition-all duration-300 hover:scale-105"
              >
                <span className="text-xl lg:text-2xl font-bold">Start a Project</span>
                <span className="text-3xl lg:text-4xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-b border-white/10">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] mb-8 text-white/30">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/contact', label: 'Contact' },
              ].map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx }}
                  className="col-span-1"
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col gap-1 p-4 border border-white/5 hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="text-xs font-mono text-accent/60 group-hover:text-accent transition-colors duration-300">
                      /{item.label.toLowerCase()}
                    </span>
                    <span className="text-lg font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-8">
              {/* Logo */}
              <div>
                <Link href="/" className="flex items-center gap-4 mb-4">
                  <Image
                    src="/image.png"
                    alt="Angel Vverse Logo"
                    width={56}
                    height={56}
                    className="rounded-xl"
                    priority
                  />
                  <div>
                    <h4 className="text-xl font-bold">{siteData.companyName}</h4>
                    <p className="text-white/60">{siteData.tagline}</p>
                  </div>
                </Link>
                <p className="text-white/70 text-base">
                  {siteData.description}
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <div>
                  <a href={`mailto:${siteData.contact.email}`} className="text-lg font-semibold text-white hover:text-accent transition-colors duration-300">
                    {siteData.contact.email}
                  </a>
                </div>
                <div>
                  <a href={`tel:${siteData.contact.phone}`} className="text-lg font-semibold text-white hover:text-accent transition-colors duration-300">
                    {siteData.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{siteData.contact.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a href={siteData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-105 transition-all duration-300">
                  <span className="text-lg">📷</span>
                </a>
                <a href={siteData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-105 transition-all duration-300">
                  <span className="text-lg">📘</span>
                </a>
                <a href={siteData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-105 transition-all duration-300">
                  <span className="text-lg">💼</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {siteData.companyName}
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <span>Design</span>
            <span className="text-accent">×</span>
            <span>Development</span>
            <span className="text-accent">×</span>
            <span>Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
