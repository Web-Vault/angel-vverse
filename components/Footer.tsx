'use client';
import Image from 'next/image';
import Link from 'next/link';
import siteData from '../data/siteData.json';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/image.png"
                alt="Angel Vverse Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h2 className="text-base font-semibold">{siteData.companyName}</h2>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteData.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-muted-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-accent transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-muted-foreground">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteData.contact.email}`} className="text-sm hover:text-accent transition-colors">
                  {siteData.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteData.contact.phone}`} className="text-sm hover:text-accent transition-colors">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="text-sm">{siteData.contact.location}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-muted-foreground">Follow</h3>
            <div className="flex gap-4">
              <a
                href={siteData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
              >
                📸
              </a>
              <a
                href={siteData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
              >
                📘
              </a>
              <a
                href={siteData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
              >
                💼
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {siteData.companyName}. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Designed with care</p>
        </div>
      </div>
    </footer>
  );
}
