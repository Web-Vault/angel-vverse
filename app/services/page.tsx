"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PenTool, Smartphone, Camera, BarChart } from "lucide-react";
import { services } from "@/app/data/services";

const iconMap = {
  PenTool: PenTool,
  Smartphone: Smartphone,
  Camera: Camera,
  BarChart: BarChart,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Comprehensive digital solutions tailored to your business needs.
              We combine creativity, strategy, and technology to drive your
              success.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <motion.div className="relative w-max bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl border border-blue-100/20 text-blue-600">
                      <Icon className="w-8 h-8" />
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
                      {service.features.slice(0, 3).map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-600"
                        >
                          <div className="mr-3 text-blue-500">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Link */}
                    <Link
                      href={`/services/${service.slug}`}
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
            );
          })}
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
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
