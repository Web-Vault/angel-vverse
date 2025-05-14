"use client";

import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Return to Projects
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
          href="/projects"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1a237e10_1px,transparent_1px)] bg-[length:40px_40px]" />
          <div className="relative z-10 p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-blue-400 font-medium">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </section>

            {/* Solution Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </section>

            {/* Technologies Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Results */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Results</h3>
              <div className="space-y-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={result.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-gray-600">{result.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">{project.duration}</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <div className="text-lg mb-4">"{project.testimonial.quote}"</div>
                <div className="font-medium">{project.testimonial.author}</div>
                <div className="text-blue-200">{project.testimonial.position}</div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            expertise and proven track record.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
} 