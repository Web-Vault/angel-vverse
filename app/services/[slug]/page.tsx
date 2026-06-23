'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import services from '../../../data/services.json';
import { SparkleIcon, MobileIcon, PenIcon, CameraIcon, PaletteIcon } from '../../../components/Icons';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'social-media-marketing': MobileIcon,
  'strategic-content-creation-and-writing': PenIcon,
  'product-photography': CameraIcon,
  'graphic-designing': PaletteIcon
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => {
    const serviceSlug = s.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    return serviceSlug === slug;
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-40 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <Link href="/services" className="text-accent hover:underline">
            Back to services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[slug as string] || SparkleIcon;

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
              <span>Service</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <IconComponent className="w-12 h-12 text-accent" />
              <span className="text-sm font-medium text-accent bg-accent-soft px-3 py-1 rounded-full">0{service.id}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              {service.title}
            </h1>
            <p className="text-xl text-muted max-w-3xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What we offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white border border-border rounded-2xl hover:border-accent/30 hover:shadow-lg transition-all">
                  <div className="text-2xl text-accent">✅</div>
                  <p className="text-lg font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
              Let's talk about how we can help you achieve your goals with this service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground hover:text-background transition-all"
              >
                View All Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
