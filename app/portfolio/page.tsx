'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import projects from '../../data/projects.json';
import { SparkleIcon } from '../../components/Icons';

export default function PortfolioPage() {
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
              <span>Our Work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              Featured Projects
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              A showcase of our best work and creative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="p-8 border border-border rounded-3xl hover:border-accent/30 hover:shadow-xl transition-all">
                    <div className="text-6xl mb-6">{project.image}</div>
                    <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs text-muted bg-accent-soft/50 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      View Project <span>→</span>
                    </div>
                  </div>
                </Link>
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
              Let's create your next project
            </h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's start something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-accent/90 transition-all"
            >
              Start Your Project
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
