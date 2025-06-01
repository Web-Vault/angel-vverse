"use client";

import { motion } from "framer-motion";
import {
  Star,
  Link as LinkIcon,
  Home,
  Briefcase,
  FileText,
  BookOpen,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronRight,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
  description: string;
}

interface Section {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accentColor: string;
  links: LinkItem[];
}

export default function SitemapPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    initial: {
      opacity: 1,
      x: 0,
    },
    hover: {
      opacity: 1,
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const linkHeadingVariants = {
    initial: {
      opacity: 1,
      x: 0,
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const linkIconVariants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const sections = [
    {
      title: "Main Pages",
      description: "Essential pages for navigating our website",
      icon: Home,
      color: "from-blue-500 to-cyan-500",
      accentColor: "blue",
      links: [
        {
          href: "/",
          label: "Home",
          description: "Welcome to our digital marketing platform",
        },
        {
          href: "/about",
          label: "About Us",
          description: "Learn about our story and mission",
        },
        {
          href: "/services",
          label: "Services",
          description: "Explore our service offerings",
        },
        {
          href: "/contact",
          label: "Contact",
          description: "Get in touch with our team",
        },
      ],
    },
    {
      title: "Services",
      description: "Comprehensive digital marketing solutions",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      accentColor: "purple",
      links: [
        {
          href: "/services/digital-marketing",
          label: "Digital Marketing",
          description: "End-to-end digital marketing strategies",
        },
        {
          href: "/services/seo",
          label: "SEO Services",
          description: "Search engine optimization expertise",
        },
        {
          href: "/services/social-media",
          label: "Social Media Marketing",
          description: "Engaging social media campaigns",
        },
        {
          href: "/services/content-marketing",
          label: "Content Marketing",
          description: "Compelling content creation",
        },
        {
          href: "/services/ppc",
          label: "PPC Advertising",
          description: "Targeted paid advertising",
        },
      ],
    },
    {
      title: "Case Studies",
      description: "Real-world success stories",
      icon: FileText,
      color: "from-emerald-500 to-teal-500",
      accentColor: "emerald",
      links: [
        {
          href: "/case-studies",
          label: "All Case Studies",
          description: "Browse our complete portfolio",
        },
        {
          href: "/case-studies/ecommerce",
          label: "E-commerce Success",
          description: "Online retail transformation",
        },
        {
          href: "/case-studies/saas",
          label: "SaaS Growth",
          description: "Software company expansion",
        },
        {
          href: "/case-studies/retail",
          label: "Retail Transformation",
          description: "Brick-and-mortar digital evolution",
        },
      ],
    },
    {
      title: "Resources",
      description: "Knowledge and tools for your success",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      accentColor: "amber",
      links: [
        {
          href: "/blog",
          label: "Blog",
          description: "Latest insights and trends",
        },
        {
          href: "/resources/guides",
          label: "Marketing Guides",
          description: "Comprehensive how-to guides",
        },
        {
          href: "/resources/tools",
          label: "Free Tools",
          description: "Helpful marketing utilities",
        },
        {
          href: "/resources/ebooks",
          label: "E-books",
          description: "In-depth digital marketing guides",
        },
      ],
    },
    {
      title: "Legal",
      description: "Important legal information",
      icon: Shield,
      color: "from-slate-500 to-gray-500",
      accentColor: "slate",
      links: [
        {
          href: "/privacy",
          label: "Privacy Policy",
          description: "How we protect your data",
        },
        {
          href: "/terms",
          label: "Terms & Conditions",
          description: "Our service agreement",
        },
        {
          href: "/sitemap",
          label: "Sitemap",
          description: "Complete site navigation",
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">
                Site Navigation
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Site{" "}
              <span className="relative inline-block">
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Map
                </motion.span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive digital marketing platform and discover
              everything we offer
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section: Section, index: number) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 overflow-hidden group">
                      <div
                        className={`h-2 bg-gradient-to-r ${section.color} group-hover:h-3 transition-all duration-300`}
                      />
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-8">
                          <div
                            className={`p-4 rounded-xl bg-gradient-to-r ${section.color} bg-opacity-10 relative overflow-hidden`}
                          >
                            <Icon
                              className={`w-7 h-7 bg-gradient-to-r ${section.color} bg-clip-text text-transparent relative z-10`}
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                  {section.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  {section.description}
                                </p>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ChevronRight
                                  className={`w-6 h-6 text-${section.accentColor}-500`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-4">
                          {section.links.map((link) => (
                            <motion.li
                              key={link.href}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link
                                href={link.href}
                                className="group/link block p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1">
                                    <motion.div
                                      className="flex items-center gap-2"
                                      variants={linkHeadingVariants}
                                      initial="initial"
                                      whileHover="hover"
                                    >
                                      <motion.div variants={linkIconVariants}>
                                        <LinkIcon
                                          className={`w-4 h-4 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                                        />
                                      </motion.div>
                                      <div className="relative">
                                        <div className="flex items-center gap-1">
                                          <span className="font-semibold text-gray-900 group-hover/link:text-blue-600 transition-colors duration-300">
                                            {link.label}
                                          </span>
                                          <motion.div
                                            initial={{
                                              opacity: 0,
                                              x: -5,
                                              y: 5,
                                            }}
                                            animate={{ opacity: 1, x: 0, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                                          >
                                            <ArrowUpRight
                                              className={`w-4 h-4 bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                                            />
                                          </motion.div>
                                        </div>
                                        <motion.div
                                          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"
                                          initial={{ width: 0 }}
                                          whileHover={{ width: "100%" }}
                                          transition={{ duration: 0.3 }}
                                        />
                                      </div>
                                    </motion.div>
                                    <p className="text-sm text-gray-500 mt-2 ml-8 group-hover/link:text-gray-700 transition-colors duration-300">
                                      {link.description}
                                    </p>
                                  </div>
                                  <motion.div
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"
                                  >
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover/link:text-blue-600 group-hover/link:translate-x-1 transition-all duration-300" />
                                  </motion.div>
                                </div>
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
