"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Facebook,
  FileText,
  Camera,
  Palette,
  Calendar,
  Rocket,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "All",
  "Social Media",
  "Content Creation",
  "Photography",
  "Graphics Design",
];

const projects = [
  {
    id: "retail-brand",
    title: "Retail Brand Transformation",
    category: "Social Media",
    description:
      "Social media strategy driving 150% engagement boost and 35% sales increase",
    image: "/social-media-fashion-forward.jpg",
    client: "Fashion Forward",
    year: "2023",
    results: ["150% Engagement", "35% Sales Lift", "500K+ Reach"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "ecommerce-launch",
    title: "E-commerce Product Launch",
    category: "Photography",
    description:
      "Visual campaign resulting in 200+ first-week sales for eco-products",
    image: "/eCommerce advertising.jpg",
    client: "EcoHome Essentials",
    year: "2023",
    results: ["200+ Sales", "85% CTR", "1.2M Impressions"],
  },
  {
    id: "tech-startup",
    title: "Tech Startup Branding",
    category: "Graphics Design",
    description: "Brand identity driving 300% lead increase for SaaS platform",
    image: "/tech-startup-branding.jpg",
    client: "InnovateTech Solutions",
    year: "2022",
    results: ["300% Leads", "40% Conversion", "Award Winning"],
  },
  {
    id: "content-strategy",
    title: "B2B Content Strategy",
    category: "Content Creation",
    description: "Content engine reducing CPA by 60% while boosting MQLs",
    image: "/B2B marketing.png",
    client: "Enterprise Solutions Inc.",
    year: "2022",
    results: ["75% MQL Increase", "60% CPA Reduction", "4x ROI"],
  },
  {
    id: "restaurant-campaign",
    title: "Restaurant Social Campaign",
    category: "Social Media",
    description: "Geo-targeted campaign driving 40% foot traffic surge",
    image: "/restaurant-social-media-marketing.jpg",
    client: "Flavor Fusion Restaurants",
    year: "2023",
    results: ["500K+ Reach", "40% Traffic Boost", "25% Repeat Rate"],
  },
  {
    id: "product-catalog",
    title: "Luxury Product Catalog",
    category: "Photography",
    description: "Premium visuals increasing average order value by 65%",
    image: "/jewellery-catalog.jpg",
    client: "Elegance Jewelers",
    year: "2022",
    results: ["65% AOV Increase", "50% Social Shares", "4.8★ Reviews"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Animated Background */}
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
                Award-Winning Portfolio
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Our{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of transformative digital marketing
              campaigns and discover how we help brands achieve extraordinary
              results
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
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-8 py-6 text-lg transform transition-all hover:scale-105"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Projects Gallery */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Tabs defaultValue="All" className="max-w-5xl mx-auto">
              <TabsList className="w-full mb-12 bg-gradient-to-br from-gray-50 to-blue-50 p-1 rounded-2xl backdrop-blur-sm border border-gray-200">
                <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 min-w-max md:min-w-0" initial={false}>
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="relative data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl py-4 transition-all"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center"
                      >
                        <motion.span
                          animate={{
                            rotate: activeCategory === category ? 15 : 0,
                          }}
                          className="inline-block"
                        >
                          {category === "All" && (
                            <Star className="h-6 w-6 mr-2 text-blue-600" />
                          )}
                          {category === "Social Media" && (
                            <Facebook className="h-6 w-6 mr-2 text-blue-600" />
                          )}
                          {category === "Content Creation" && (
                            <FileText className="h-6 w-6 mr-2 text-cyan-500" />
                          )}
                          {category === "Photography" && (
                            <Camera className="h-6 w-6 mr-2 text-blue-600" />
                          )}
                          {category === "Graphics Design" && (
                            <Palette className="h-6 w-6 mr-2 text-cyan-500" />
                          )}
                        </motion.span>
                        <span className="font-semibold text-gray-700">
                          {category}
                        </span>
                      </motion.div>

                      {activeCategory === category && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 border-2 border-blue-200 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          }}
                        />
                      )}
                    </TabsTrigger>
                  ))}
                </motion.div>
              </TabsList>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-sm font-medium text-blue-400 mb-2">
                              {project.category}
                            </p>
                            <h3 className="text-xl font-bold mb-2">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="text-sm text-gray-600">
                                {project.client}
                              </p>
                              <p className="text-xs text-gray-400">
                                {project.year}
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.results.map((result, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full"
                              >
                                {result}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Tabs>
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
      </section>{" "}
    </div>
  );
}
