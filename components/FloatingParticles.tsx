'use client';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            x: [Math.random() * 100, Math.random() * 100 + 50, Math.random() * 100 - 50, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * 100 - 50, Math.random() * 100 + 50, Math.random() * 100],
            opacity: [0, 0.6, 0.3, 0.6, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 30 + 10,
            height: Math.random() * 30 + 10,
            backgroundColor: i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fcd34d' : '#fffbeb',
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );
}
