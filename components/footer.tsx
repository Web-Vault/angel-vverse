"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Angel Vverse <br />
                </span>
              </motion.div>
              <span className="text-blue-400 text-[9px]">
                Where creativity meets connectivity
              </span>
            </Link>
            <p className="text-blue-200 leading-relaxed">
              Transforming businesses through innovative digital marketing
              solutions. Delivering excellence in every digital touchpoint.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    className="bg-blue-800/30 hover:bg-blue-700/50 p-2.5 rounded-full flex items-center justify-center group transition-all duration-300"
                  >
                    <social.icon
                      size={18}
                      className="text-blue-300 group-hover:text-white transition-colors"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Content Creation",
                "Social Media Marketing",
                "Product Photography",
                "Graphics Design",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <ArrowUpRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link
                    href={`/services/${service
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="text-blue-200 hover:text-white transition-colors ml-1"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "About Us", href: "/about" },
                { text: "Projects", href: "/projects" },
                { text: "Blog", href: "/blog" },
                { text: "Schedule", href: "/schedule" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <ArrowUpRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors ml-1"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Marketing Street, Digital City, DC 12345",
                },
                { icon: Phone, text: "(123) 456-7890" },
                { icon: Mail, text: "info@digimarkpro.com" },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <contact.icon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-blue-200 group-hover:text-white transition-colors ml-3">
                    {contact.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-blue-800/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-200">
                Subscribe to our newsletter for the latest digital marketing
                insights.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-blue-900/30 border border-blue-800/50 rounded-lg px-4 py-2 text-white placeholder:text-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Angel Vverse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
