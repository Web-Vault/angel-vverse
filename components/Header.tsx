'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/image.png"
                alt="Angel Vverse Logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-semibold tracking-tight">{siteData.companyName}</h1>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm text-muted hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-sm bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent/90 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
