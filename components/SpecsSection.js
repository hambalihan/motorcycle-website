'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easePremium } from './motion';

const specs = [
  { value: '178', unit: 'HP', label: 'Peak power' },
  { value: '2.9', unit: 's', label: '0-60 mph' },
  { value: '240', unit: 'mi', label: 'Estimated range' },
  { value: '18', unit: 'min', label: 'Fast charge to 80%' },
  { value: '1020', unit: 'Nm', label: 'Wheel torque' },
  { value: '214', unit: 'kg', label: 'Wet weight' }
];

export default function SpecsSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 42, prefersReducedMotion ? 0 : -28]);
  const panelOpacity = useTransform(scrollYProgress, [0.04, 0.18, 0.92], [0, 1, 1]);
  const lineX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? '0%' : '-12%', prefersReducedMotion ? '0%' : '14%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#010102_0%,#07070a_50%,#000_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_26%,rgba(37,99,235,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_72%,rgba(239,68,68,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.84)_100%)]" />

      <m.div
        style={{ x: lineX }}
        className="absolute left-[-12%] top-[30%] h-px w-[124%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] blur-[2px]"
      />
      <m.div
        style={{ x: lineX }}
        className="absolute left-[-16%] top-[68%] h-px w-[132%] bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.22),rgba(239,68,68,0.18),transparent)] blur-[2px]"
      />

      <m.div
        style={{ y: panelY, opacity: panelOpacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:px-10"
      >
        <m.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42 md:text-sm"
        >
          04 / Specifications
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 1.08, delay: 0.08, ease: easePremium }}
          className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[5.8rem]"
        >
          The numbers buyers actually compare
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 0.95, delay: 0.18, ease: easePremium }}
          className="mt-8 max-w-xl text-lg leading-8 text-white/62 md:text-xl md:leading-9"
        >
          Clean specs, high signal, no filler. This is where curiosity becomes intent.
        </m.p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {specs.map((spec, index) => (
            <m.div
              key={spec.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.36, once: false }}
              transition={{ duration: 0.86, delay: 0.1 + index * 0.06, ease: easePremium }}
              className="bg-black/72 px-8 py-10 backdrop-blur-xl md:px-10 md:py-12"
            >
              <p className="text-[3rem] font-semibold leading-none tracking-[-0.05em] text-white md:text-[3.8rem]">
                {spec.value}
                <span className="ml-2 text-lg align-top tracking-[-0.02em] text-white/55 md:text-xl">{spec.unit}</span>
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white/42">{spec.label}</p>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
