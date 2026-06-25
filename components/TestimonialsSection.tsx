'use client';
import { motion } from 'framer-motion';
import testimonials from '../data/testimonials.json';
import { SparkleIcon } from './Icons';

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-accent-soft/40 relative">
      {/* Soft Background Blurs */}
      <div className="absolute -top-40 left-0 w-[26rem] h-[26rem] bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-[22rem] h-[22rem] bg-accent-soft/40 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <SparkleIcon className="w-5 h-5 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-accent">Client Love</span>
            <SparkleIcon className="w-5 h-5 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">What They Say</h2>
        </motion.div>

        {/* Creative Minimal Asymmetrical Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              className={`${idx % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
            >
              <div
                className="bg-white p-7 lg:p-9 border border-accent/10 shadow-sm h-full relative"
                style={{
                  borderRadius: idx % 2 === 0 ? '2.5rem 1rem 2.5rem 1rem' : '1rem 2.5rem 1rem 2.5rem'
                }}
              >
                {/* Real Opening Quote */}
                <div className="text-7xl text-accent/15 absolute top-2 left-5 font-serif leading-none">“</div>
                
                {/* Real Closing Quote */}
                <div className="text-7xl text-accent/10 absolute -bottom-6 right-6 font-serif leading-none">”</div>

                <div className="relative z-10 pt-8 pb-4">
                  <p className="text-base lg:text-lg leading-relaxed mb-8 text-muted">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-accent-soft rounded-[1.25rem] flex items-center justify-center text-xl border border-accent/20 shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-base text-foreground">{testimonial.name}</p>
                      <p className="text-muted text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
