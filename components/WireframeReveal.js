'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { easePremium } from './motion';

export default function WireframeReveal() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 46, prefersReducedMotion ? 0 : -46]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.03, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.28, 0.78, 1], [0, 1, 1, 0.24]);
  const copyY = useTransform(scrollYProgress, [0, 0.55, 1], [prefersReducedMotion ? 0 : 62, 0, prefersReducedMotion ? 0 : -46]);
  const copyOpacity = useTransform(scrollYProgress, [0.08, 0.3, 0.82, 1], [0, 1, 1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : -28, prefersReducedMotion ? 0 : 34]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#050507_48%,#000_100%)]" />
      <m.div
        style={{ y: glowY }}
        className="absolute left-[-12%] top-[32%] h-px w-[124%] bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.32),rgba(255,255,255,0.2),rgba(239,68,68,0.24),transparent)] blur-[3px]"
      />
      <m.div
        style={{ opacity: imageOpacity, x: imageX, scale: imageScale }}
        className="absolute bottom-[5vh] right-[-18vw] h-[78vh] w-[92vw] max-w-[78rem] will-change-transform md:right-[-7vw]"
      >
        <Image
          src="/assets/HeroBanner.jpg"
          alt="Motorcycle structural concept"
          fill
          sizes="(max-width: 768px) 100vw, 82vw"
          className="object-contain object-right-bottom opacity-80 drop-shadow-[0_42px_100px_rgba(0,0,0,0.82)]"
        />
      </m.div>

      <m.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40 md:text-sm">
          Chassis intelligence
        </p>
        <m.h2
          initial={{ opacity: 0, y: 38, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.72, once: false }}
          transition={{ duration: 1.12, ease: easePremium }}
          className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[6rem]"
        >
          Structure, reduced to intent.
        </m.h2>
      </m.div>
    </section>
  );
}
