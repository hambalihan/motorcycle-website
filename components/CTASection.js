'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easePremium } from './motion';

export default function CTASection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const blockY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 34, prefersReducedMotion ? 0 : -24]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);

  return (
    <section ref={sectionRef} className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#050608_46%,#000_100%)]" />
      <m.div
        style={{ scale: glowScale }}
        className="absolute left-1/2 top-1/2 h-[26rem] w-[56rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),rgba(239,68,68,0.1)_42%,transparent_72%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.86)_100%)]" />

      <m.div
        style={{ y: blockY }}
        className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-20 text-center md:px-10"
      >
        <m.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42 md:text-sm"
        >
          05 / Reserve
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1.08, delay: 0.08, ease: easePremium }}
          className="mt-6 text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[6rem]"
        >
          Make the last section the first test ride
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.95, delay: 0.18, ease: easePremium }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/62 md:text-xl md:leading-9"
        >
          Add a lead form, a dealer finder, or a reservation flow here. The page above has already done the emotional work.
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 0.9, delay: 0.28, ease: easePremium }}
          className="mx-auto mt-12 w-fit rounded-full border border-white/12 bg-white/6 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl"
        >
          Reserve interest
        </m.div>
      </m.div>
    </section>
  );
}
