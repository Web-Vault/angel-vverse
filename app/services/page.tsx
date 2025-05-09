"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Rocket,
  BarChart,
  PenTool,
  Camera,
  Smartphone,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Calendar,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "content-creation",
    title: "Strategic Content Creation",
    description:
      "Data-driven content strategies that drive engagement and conversions",
    icon: <PenTool className="w-8 h-8 text-blue-600" />,
    image: "/content-marketing-isometric-illustration-marketers-copywriter-create-advertising-seo-texts-engaging-content-isolated-3d-concept-on-white-inbound-marketing-smm-media-audience-attraction-vector-removebg.png",
    features: [
      "Blog posts and articles",
      "Website copy optimization",
      "Email marketing campaigns",
      "Video script development",
      "Whitepapers & case studies",
      "SEO-optimized content",
    ],
    benefits: [
      { metric: "3.5x", label: "Higher Engagement" },
      { metric: "40%", label: "Conversion Lift" },
      { metric: "300+", label: "Keywords Ranked" },
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Management",
    description: "End-to-end social media solutions from strategy to execution",
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    image: "/social-media-marketing-illustration-for-advertising-online-service-platform-online-course-analytic-ad-management-software-website-vector-removebg-preview.png",
    features: [
      "Platform-specific strategies",
      "Content calendar management",
      "Community growth hacking",
      "Paid social advertising",
      "Influencer partnerships",
      "Performance analytics",
    ],
    benefits: [
      { metric: "2.8x", label: "ROI Increase" },
      { metric: "1M+", label: "Monthly Impressions" },
      { metric: "85%", label: "Retention Rate" },
    ],
  },
  {
    id: "product-photography",
    title: "Brand Visual Storytelling",
    description: "Premium visual content for consistent brand identity",
    icon: <Camera className="w-8 h-8 text-blue-600" />,
    image: "/video-production-concept-with-camera-and-tools-product-free-vector-removebg-preview.png",
    features: [
      "Product lifestyle shoots",
      "360° product visualization",
      "E-commerce optimization",
      "Retouching & editing",
      "Video production",
      "Brand style guides",
    ],
    benefits: [
      { metric: "55%", label: "Conversion Boost" },
      { metric: "70%", label: "Brand Recall" },
      { metric: "4.8x", label: "Social Shares" },
    ],
  },
  {
    id: "digital-advertising",
    title: "Performance Marketing",
    description: "Targeted campaigns that deliver measurable ROI",
    icon: <BarChart className="w-8 h-8 text-blue-600" />,
    image: "/website-advertising-campaign-analysis-concept-website-advertising-network-banner-advertising-on-display-networks-social-media-promotion-digital-display-advertising-campaign-illustration-vector-removeb.png",
    features: [
      "PPC campaign management",
      "Programmatic advertising",
      "Retargeting strategies",
      "Conversion rate optimization",
      "A/B testing framework",
      "ROI tracking",
    ],
    benefits: [
      { metric: "5.2x", label: "ROAS" },
      { metric: "60%", label: "CPA Reduction" },
      { metric: "$12M+", label: "Revenue Generated" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mt-[80px] min-h-screen">
      {/* Enhanced Hero Section with Dynamic Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20"
            >
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">
                Enterprise-Grade Solutions
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Strategy
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leverage cutting-edge AI insights and creative innovation to
              transform your brand's digital presence
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-8 py-6 text-lg transform transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <Link href="/quote" className="flex items-center gap-2">
                  Start Your Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-blue-500/20 text-white bg-white/5 rounded-xl px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>99.9% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Award-Winning Agency</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Integrated strategies combining cutting-edge technology, creative
              excellence, and data-driven market intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-500 border-none shadow-lg hover:shadow-xl">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-block bg-blue-100 p-4 rounded-2xl mb-6"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-32 ${
            index % 2 === 0
              ? "bg-gradient-to-br from-white to-blue-50/30"
              : "bg-gradient-to-br from-gray-50/30 to-cyan-50/30"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? "" : "lg:order-last"}`}
              >
                {/* Decorative Elements */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-3xl blur-3xl transform -rotate-6"
                />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-3xl blur-2xl transform rotate-3"
                />

                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="rounded-2xl shadow-2xl transform transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Service Header */}
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-2xl shadow-lg"
                  >
                    {service.icon}
                  </motion.div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Features List */}
                  <div className="space-y-6 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <span className="w-8 h-1 bg-blue-600 rounded-full" />
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start group"
                          viewport={{ once: true }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            viewport={{ once: true }}
                            className="mt-1 mr-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits Stats */}
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-2xl text-white">
                      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Measurable Impact
                      </h3>
                      <div className="grid grid-cols-1 gap-6">
                        {service.benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                          >
                            <div className="text-3xl font-bold mb-1">
                              {benefit.metric}
                            </div>
                            <div className="text-sm text-blue-100">
                              {benefit.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-8 py-6 transform transition-all duration-300 shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
                  >
                    <Link
                      href={`/services/${service.id}`}
                      className="flex items-center justify-center gap-2"
                    >
                      Explore {service.title}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
