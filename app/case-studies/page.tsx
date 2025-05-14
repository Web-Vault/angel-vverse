"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/app/data/case-studies";

export default function CaseStudiesPage() {
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
              Our Success Stories
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover how we've helped businesses achieve exceptional growth
              through innovative digital strategies
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Case Study Image */}
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
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
                      {caseStudy.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {caseStudy.title}
                    </h3>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.results.map((result, i) => (
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
                      href={`/case-studies/${caseStudy.slug}`}
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
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            Start Your Success Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}