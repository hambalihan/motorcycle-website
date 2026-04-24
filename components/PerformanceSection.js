'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { easePremium } from './motion';

const PERFORMANCE_IMAGE = '/assets/HeroBanner.jpg';

const metrics = [
  ['178', 'HP'],
  ['2.9', 's'],
  ['240', 'mi']
];

export default function PerformanceSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);
  const imageY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 40, prefersReducedMotion ? 0 : -36]);
  const copyY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 32, prefersReducedMotion ? 0 : -26]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      <m.div style={{ scale: imageScale, y: imageY }} className="absolute inset-0 will-change-transform">
        <Image
          src={PERFORMANCE_IMAGE}
          alt="Motorcycle in dramatic light streaks"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </m.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_26%,rgba(0,0,0,0.76)_100%)]" />

      <m.div style={{ y: copyY }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:px-10">
        <m.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42 md:text-sm"
        >
          03 / Performance
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 1.08, delay: 0.08, ease: easePremium }}
          className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[5.8rem]"
        >
          Power delivered like a flagship product
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 0.95, delay: 0.18, ease: easePremium }}
          className="mt-8 max-w-xl text-lg leading-8 text-white/62 md:text-xl md:leading-9"
        >
          The experience is dramatic in motion and quiet in presentation. That contrast is what makes it feel expensive.
        </m.p>

        <div className="mt-14 flex flex-wrap gap-8 text-white/80">
          {metrics.map(([value, unit], index) => (
            <m.div
              key={unit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4, once: false }}
              transition={{ duration: 0.88, delay: 0.24 + index * 0.08, ease: easePremium }}
            >
              <p className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                {value}
                <span className="ml-2 text-base align-top tracking-[-0.02em] text-white/55 md:text-lg">{unit}</span>
              </p>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
