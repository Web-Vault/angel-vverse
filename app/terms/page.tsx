"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Scale,
  FileCheck,
  Shield,
  AlertCircle,
  RefreshCw,
  Link2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsAndConditions() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      icon: Scale,
      title: "Agreement to Terms",
      description: "Understanding our service agreement",
      content:
        "By accessing our website, you agree to be bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
      items: [
        "Acceptance of terms",
        "Legal compliance",
        "Responsible usage",
        "Local regulations",
      ],
    },
    {
      icon: FileCheck,
      title: "Use License",
      description: "Your rights and permissions",
      content:
        "Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.",
      items: [
        "Personal use only",
        "Non-commercial use",
        "Temporary access",
        "Single copy download",
      ],
    },
    {
      icon: AlertCircle,
      title: "Disclaimer",
      description: "Understanding our limitations",
      content:
        "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.",
      items: [
        "No warranties",
        "As-is basis",
        "Limited liability",
        "User responsibility",
      ],
    },
    {
      icon: Shield,
      title: "Limitations",
      description: "Scope of our liability",
      content:
        "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website.",
      items: [
        "Damage limitations",
        "Data loss",
        "Business interruption",
        "Service availability",
      ],
    },
    {
      icon: RefreshCw,
      title: "Revisions",
      description: "Updates and changes",
      content:
        "The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any materials are accurate, complete or current.",
      items: [
        "Content updates",
        "Error corrections",
        "Version control",
        "Change notifications",
      ],
    },
    {
      icon: Link2,
      title: "External Links",
      description: "Third-party content",
      content:
        "We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.",
      items: [
        "Third-party links",
        "External content",
        "No endorsement",
        "User discretion",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] mt-[80px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">
                Legal Agreement
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white mx-5">Terms &</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Conditions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Our service agreement and usage terms for a transparent
              partnership
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
                <Link href="/privacy" className="flex items-center gap-2">
                  View Privacy Policy
                  <Shield className="w-5 h-5" />
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
                  Questions About Our Terms?
                </h2>
                <p className="text-gray-600 mb-8">
                  Our legal team is here to help you understand our terms and
                  conditions and address any concerns you may have.
                </p>
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        Email Us
                      </h3>
                      <p className="text-blue-600">legal@yourcompany.com</p>
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
