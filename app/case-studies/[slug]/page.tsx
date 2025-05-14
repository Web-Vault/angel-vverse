"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { caseStudies } from "@/app/data/case-studies";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudyPage() {
  const params = useParams();
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/#case-study"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-16">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium mb-4">
              {caseStudy.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {caseStudy.title}
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Impact</h2>
              <ul className="space-y-4">
                {caseStudy.impact.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Key Results</h3>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="text-blue-600 font-semibold">{result}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Want Similar Results?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help your business achieve similar
                success.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}