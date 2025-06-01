"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Users,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
  Lightbulb,
  Heart,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sections = [
    {
      title: "Our Story",
      description: "A journey of innovation and growth",
      icon: Star,
      content: {
        image: "/team-photo.jpg",
        text: [
          "We started with a simple mission: to help businesses thrive in the digital age. Since our founding, we've been passionate about combining creativity with data-driven strategies to deliver exceptional results for our clients.",
          "Today, we're proud to be a leading digital marketing agency, known for our innovative approaches and commitment to client success.",
        ],
      },
    },
    {
      title: "Our Impact",
      description: "Numbers that tell our success story",
      icon: TrendingUp,
      stats: [
        {
          value: "500+",
          label: "Happy Clients",
          description: "Satisfied businesses we've helped grow",
          icon: Users,
        },
        {
          value: "95%",
          label: "Success Rate",
          description: "Projects completed successfully",
          icon: Award,
        },
        {
          value: "300%",
          label: "Average ROI",
          description: "Return on investment for our clients",
          icon: TrendingUp,
        },
        {
          value: "15+",
          label: "Industry Awards",
          description: "Recognition for excellence",
          icon: Star,
        },
      ],
    },
    {
      title: "Our Values",
      description: "The principles that guide us",
      icon: Heart,
      values: [
        {
          title: "Innovation",
          description:
            "We stay ahead of digital trends to provide cutting-edge solutions",
          icon: Lightbulb,
        },
        {
          title: "Integrity",
          description:
            "We believe in transparent, honest relationships with our clients",
          icon: Heart,
        },
        {
          title: "Impact",
          description:
            "We focus on delivering measurable results that drive growth",
          icon: Zap,
        },
      ],
    },
    {
      title: "Our Expertise",
      description: "What we do best",
      icon: Target,
      expertise: [
        {
          title: "Digital Strategy",
          description:
            "Comprehensive digital marketing strategies tailored to your business goals",
          icon: Target,
        },
        {
          title: "Content Creation",
          description:
            "Engaging content that resonates with your target audience",
          icon: Star,
        },
        {
          title: "Social Media",
          description:
            "Strategic social media management to build your brand presence",
          icon: TrendingUp,
        },
        {
          title: "Analytics",
          description:
            "Data-driven insights to optimize your marketing performance",
          icon: Award,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] mt-[80px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          {/* Animated gradient orbs */}
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
                Our Story
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white">Crafting Digital</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              We're a team of passionate digital marketers, strategists, and
              creatives dedicated to helping businesses thrive in the digital
              landscape.
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
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white bg-white/10 backdrop-blur-sm px-8 py-6 rounded-full hover:bg-white/20 transition-all"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  variants={fadeInUp}
                  className={`mb-24 last:mb-0 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  } lg:flex items-center gap-16`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-3 text-blue-600">
                      <Icon className="w-6 h-6" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {section.description}
                    </h2>

                    {section.content && (
                      <div className="space-y-6">
                        {section.content.text.map((paragraph, i) => (
                          <p key={i} className="text-gray-600 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.stats && (
                      <div className="grid grid-cols-2 gap-6 mt-8">
                        {section.stats.map((stat, i) => {
                          const StatIcon = stat.icon;
                          return (
                            <motion.div
                              key={i}
                              variants={fadeInUp}
                              className="p-6 bg-blue-50 rounded-2xl"
                            >
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-xl">
                                  <StatIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-900">
                                    {stat.value}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {stat.label}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {section.values && (
                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {section.values.map((value, i) => {
                          const ValueIcon = value.icon;
                          return (
                            <motion.div
                              key={i}
                              variants={fadeInUp}
                              className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 transition-colors"
                            >
                              <div className="p-3 bg-blue-50 rounded-xl w-fit mb-4">
                                <ValueIcon className="w-6 h-6 text-blue-600" />
                              </div>
                              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                {value.title}
                              </h3>
                              <p className="text-gray-600">
                                {value.description}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {section.expertise && (
                      <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {section.expertise.map((item, i) => {
                          const ExpertiseIcon = item.icon;
                          return (
                            <motion.div
                              key={i}
                              variants={fadeInUp}
                              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 transition-all"
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                                  <ExpertiseIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  {section.content?.image && (
                    <div className="flex-1">
                      <motion.div
                        variants={fadeInUp}
                        className="relative aspect-square rounded-2xl overflow-hidden"
                      >
                        <Image
                          src={section.content.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Let's work together to transform your digital presence and achieve
              your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-200 hover:border-blue-200 hover:bg-white px-8 py-6 rounded-full"
              >
                <Link href="/services" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
