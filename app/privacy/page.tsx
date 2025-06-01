"use client";

import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileCheck,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "How we safeguard your information",
      content:
        "We implement industry-standard security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
      items: [
        "Encryption of sensitive data",
        "Regular security audits",
        "Secure data storage",
        "Access control systems",
      ],
    },
    {
      icon: Eye,
      title: "Information Collection",
      description: "What data we collect and why",
      content:
        "We collect and process information that you provide directly to us, as well as data we obtain automatically when you use our services.",
      items: [
        "Contact information",
        "Usage data",
        "Technical data",
        "Marketing preferences",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      description: "Control over your personal data",
      content:
        "You have complete control over your personal information and can exercise your rights at any time.",
      items: [
        "Access your data",
        "Correct information",
        "Request deletion",
        "Data portability",
      ],
    },
    {
      icon: FileCheck,
      title: "Data Usage",
      description: "How we use your information",
      content:
        "We use your information to provide and improve our services, communicate with you, and ensure a better user experience.",
      items: [
        "Service delivery",
        "Communication",
        "Improvements",
        "Legal compliance",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] mt-[80px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
              backgroundSize: "24px 24px",
              opacity: 0.1,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">
                Privacy terms
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white mx-2">Privacy</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Your privacy is our priority. Learn how we protect and handle your
              data with transparency and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 rounded-full"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Contact Us
                  <Mail className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white bg-white/10 backdrop-blur-sm px-8 py-6 rounded-full hover:bg-white/20 transition-all"
              >
                <Link href="/terms" className="flex items-center gap-2">
                  View Terms
                  <FileCheck className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <span className="text-blue-600 text-sm font-medium">
                  Last updated: {new Date().toLocaleDateString()}
                </span>
              </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <Card className="relative h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl text-white">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                              {section.title}
                            </h3>
                            <p className="text-blue-600 font-medium mb-4">
                              {section.description}
                            </p>
                            <p className="text-gray-600 mb-6">
                              {section.content}
                            </p>
                            <ul className="space-y-3">
                              {section.items.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-center gap-2 text-gray-600"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
              id="contact"
            >
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Have Questions About Your Privacy?
                </h2>
                <p className="text-gray-600 mb-8">
                  Our team is here to help you understand our privacy practices
                  and address any concerns you may have.
                </p>
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Email Us
                      </h3>
                      <p className="text-blue-600">privacy@yourcompany.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Call Us
                      </h3>
                      <p className="text-blue-600">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
