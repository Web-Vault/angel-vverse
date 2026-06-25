'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ target, duration = 2000 }: { target: string; duration?: number }) {
  const [count, setCount] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const match = target.match(/(\d+)(.*)/);
          if (!match) {
            setCount(target);
            return;
          }

          const numericTarget = parseInt(match[1]);
          const suffix = match[2];
          const increment = numericTarget / 100;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current) + suffix);
            }
          }, duration / 100);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}
