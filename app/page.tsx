"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Rocket,
  BarChart,
  PenTool,
  Camera,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Strategic Content Creation",
    description:
      "Data-driven content strategies that drive engagement and conversions",
    icon: <PenTool className="w-8 h-8" />,
    link: "/services/content-creation",
  },
  {
    title: "Social Media Management",
    description: "End-to-end social media solutions from strategy to execution",
    icon: <Smartphone className="w-8 h-8" />,
    link: "/services/social-media-marketing",
  },
  {
    title: "Brand Photography",
    description: "Premium visual storytelling for consistent brand identity",
    icon: <Camera className="w-8 h-8" />,
    link: "/services/product-photography",
  },
  {
    title: "Digital Advertising",
    description: "Targeted PPC campaigns that deliver measurable ROI",
    icon: <BarChart className="w-8 h-8" />,
    link: "/services/advertising",
  },
];

const projects = [
  {
    title: "Luxury Retail Expansion",
    category: "Brand Strategy",
    image: "/project1.jpg",
    results: ["+300% Engagement", "+45% Conversions"],
  },
  {
    title: "SaaS Platform Launch",
    category: "Digital Campaign",
    image: "/project2.jpg",
    results: ["2M+ Impressions", "+60% Lead Gen"],
  },
  {
    title: "Fashion E-commerce",
    category: "Visual Identity",
    image: "/project3.jpg",
    results: ["+150% Revenue", "Award Winning"],
  },
];

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="mt-[80px] min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerWidth
                    : 0,
                y:
                  typeof window !== "undefined"
                    ? Math.random() * window.innerHeight
                    : 0,
              }}
              animate={{
                y: [null, -20, 20],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block"
              >
                <span className="relative inline-flex">
                  <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-blue-400 text-sm font-medium border border-blue-500/20">
                    Innovative Digital Solutions
                  </span>
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur animate-pulse" />
                </span>
              </motion.div>

              {/* Enhanced Hero Text */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="block"
                  >
                    Transform Your
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="relative inline-block"
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      Digital Presence
                    </span>
                  </motion.div>
                </h1>
              </div>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Elevate your brand with cutting-edge digital solutions powered
                by creativity, innovation, and data-driven strategies.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-8 py-6 text-lg transform transition-all hover:scale-105"
                >
                  <Link href="/quote" className="flex items-center gap-2">
                    Get Started
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="relative group overflow-hidden border-2 border-gray-600 text-white bg-gray-800/50 rounded-xl px-8 py-6 text-lg backdrop-blur-sm"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    View Services
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex items-center gap-6 pt-8"
              >
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-gray-700 to-gray-900"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-white font-semibold">500+</span>{" "}
                  satisfied clients worldwide
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-3xl" />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="relative">
                  <Image
                    src="/digital-marketing-concept-design-vector-removebg-preview.png"
                    alt="Digital Marketing"
                    width={600}
                    height={600}
                    className="rounded-2xl"
                  />
                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      y: [0, -10, 0],
                      transition: {
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute -right-8 top-1/4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-green-400" />
                      <div>
                        <div className="text-sm text-gray-300">
                          Conversion Rate
                        </div>
                        <div className="text-xl font-bold text-white">+147%</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        {/* <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </motion.div> */}
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{
              scale: [1, 1.1, 1],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 15,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 1 }}
            whileInView={{
              scale: [1, 1.2, 1],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 20,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-50/30 to-transparent rounded-full blur-3xl"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 4px 4px, #e5e7eb 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="relative inline-flex px-4 py-1">
                <span className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full text-sm font-medium px-6 py-2 border border-blue-100">
                  Our Services
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-full blur" />
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Comprehensive Digital Solutions
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Elevate your brand with our integrated approach combining
              cutting-edge technology, creative excellence, and strategic
              business acumen
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <motion.div className="relative w-max bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl border border-blue-100/20 text-blue-600">
                      {service.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 pt-4">
                      {[
                        "Strategic Planning",
                        "Expert Implementation",
                        "Performance Analytics",
                      ].map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-600"
                        >
                          <div className="mr-3 text-blue-500">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center mt-6 text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Results Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a237e10_1px,transparent_1px)] bg-[length:40px_40px]" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20"
                >
                  Proven Results
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Driving Measurable Growth
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Our data-driven approach has consistently delivered
                  exceptional results for businesses across industries
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    value: "3.2x",
                    label: "Average ROI Increase",
                    icon: <TrendingUp className="h-6 w-6" />,
                  },
                  {
                    value: "85%",
                    label: "Client Retention Rate",
                    icon: <Users className="h-6 w-6" />,
                  },
                  {
                    value: "500+",
                    label: "Campaigns Executed",
                    icon: <BarChart className="h-6 w-6" />,
                  },
                  {
                    value: "$2.1B",
                    label: "Revenue Generated",
                    icon: <Award className="h-6 w-6" />,
                  },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-blue-500/20 transition-colors">
                      <div className="text-blue-400 mb-4">{metric.icon}</div>
                      <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        {metric.value}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Link
                    href="/case-studies"
                    className="flex items-center gap-2"
                  >
                    View Case Studies
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Results Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-3xl blur-3xl" />
              <div className="relative">
                <Image
                  src="/realistic-style-dashboard-website-with-flat-color-free-vector-removebg-preview.png"
                  alt="Analytics Dashboard"
                  width={600}
                  height={600}
                  className="rounded-2xl border-white/10"
                />

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, -10, 0],
                    transition: {
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="absolute -right-8 top-1/4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-green-400" />
                    <div>
                      <div className="text-sm text-gray-300">
                        Conversion Rate
                      </div>
                      <div className="text-xl font-bold text-white">+147%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    y: [0, 10, 0],
                    transition: {
                      y: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                  transition={{ delay: 1.5 }}
                  className="absolute -left-8 bottom-1/4 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-400" />
                    <div>
                      <div className="text-sm text-gray-300">User Growth</div>
                      <div className="text-xl font-bold text-white">2.5x</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/30" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6"
            >
              Success Stories
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformative Client Partnerships
            </h2>
            <p className="text-gray-600 text-lg">
              Discover how we've helped businesses achieve exceptional growth
              through innovative digital strategies
            </p>
          </motion.div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  {/* Project Image */}
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="relative z-10"
                    >
                      <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4 transition-colors">
                        {project.title}
                      </h3>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.results.map((result, i) => (
                          <div
                            key={result}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                          >
                            <div className="text-blue-300 font-semibold">
                              {result}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* View Case Study Link */}
                      <Link
                        href={`/case-studies/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-white hover:text-blue-300 transition-colors"
                      >
                        View Case Study
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
            >
              Explore All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Bottom CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-gray-900/90">
        <div className="inset-0 ">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
                    <Rocket className="h-16 w-16 text-blue-400 relative z-10 transform transition-transform hover:scale-110" />
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ready to Transform Your Digital Presence?
                </h2>

                <p className="text-xl text-gray-300">
                  Partner with us to architect your brand's future in the
                  digital ecosystem. Let's create something extraordinary
                  together.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 rounded-xl text-lg shadow-lg hover:shadow-blue-500/20 transform transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Start Your Journey
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 text-white bg-white/10 px-12 py-6 rounded-xl text-lg backdrop-blur-sm transition-all duration-300"
                  >
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: <Users className="h-8 w-8" />,
                    stat: "500+",
                    label: "Happy Clients",
                  },
                  {
                    icon: <Award className="h-8 w-8" />,
                    stat: "15+",
                    label: "Industry Awards",
                  },
                  {
                    icon: <Calendar className="h-8 w-8" />,
                    stat: "10+",
                    label: "Years Experience",
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8" />,
                    stat: "300%",
                    label: "Avg. Growth",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="text-blue-400 mb-4">{item.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {item.stat}
                    </div>
                    <div className="text-gray-400">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
