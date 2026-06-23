'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import projects from '../../../data/projects.json';
import { SparkleIcon } from '../../../components/Icons';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link href="/portfolio" className="text-accent hover:underline">
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-40 pb-24 lg:pt-52 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-accent-soft text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <SparkleIcon className="w-4 h-4" />
              <span>Project</span>
            </div>
            <div className="text-sm text-accent font-medium mb-4">{project.category}</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-muted max-w-2xl mb-8">
              {project.description}
            </p>
            <div className="text-lg">Client: {project.client} • {project.year}</div>
          </motion.div>
        </div>
      </section>

      {/* Project Image/Icon */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-9xl flex items-center justify-center p-16 bg-accent-soft/30 rounded-3xl"
          >
            {project.image}
          </motion.div>
        </div>
      </section>

      {/* Project Features */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we delivered</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                className="p-6 border border-border rounded-2xl text-center hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">✅</div>
                <p className="font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent-soft/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Let's work together to create something amazing for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
              >
                View More Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-all"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
