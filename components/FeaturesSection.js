'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easePremium } from './motion';

const beats = ['Silent when it waits', 'Immediate when it moves', 'Precise where it matters'];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const blockY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 44, prefersReducedMotion ? 0 : -28]);
  const lineX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? '0%' : '-10%', prefersReducedMotion ? '0%' : '12%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#010102_0%,#06070a_52%,#000_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(37,99,235,0.12),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_72%,rgba(239,68,68,0.08),transparent_22%)]" />

      <m.div
        style={{ x: lineX }}
        className="absolute left-[-18%] top-[36%] h-px w-[136%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] blur-[2px]"
      />
      <m.div
        style={{ x: lineX }}
        className="absolute left-[-12%] top-[66%] h-px w-[124%] bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.2),rgba(239,68,68,0.16),transparent)] blur-[2px]"
      />

      <m.div style={{ y: blockY }} className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
        <m.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42 md:text-sm"
        >
          00 / Positioning
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1.06, delay: 0.08, ease: easePremium }}
          className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[6rem]"
        >
          More than transport. It is product desire.
        </m.h2>
        <div className="mt-14 flex flex-col gap-6">
          {beats.map((beat, index) => (
            <m.p
              key={beat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5, once: false }}
              transition={{ duration: 0.88, delay: 0.18 + index * 0.08, ease: easePremium }}
              className="text-2xl font-medium tracking-[-0.03em] text-white/76 md:text-3xl"
            >
              {beat}
            </m.p>
          ))}
        </div>
      </m.div>
    </section>
  );
}
