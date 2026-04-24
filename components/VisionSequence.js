'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { easePremium } from './motion';

const frames = [
  {
    src: '/assets/HeroBanner.jpg',
    alt: 'Motorcycle template front view',
    label: 'Front'
  },
  {
    src: '/assets/HeroBanner.jpg',
    alt: 'Motorcycle template side profile',
    label: 'Side'
  },
  {
    src: '/assets/HeroBanner.jpg',
    alt: 'Motorcycle template rear view',
    label: 'Rear'
  }
];

function SequenceFrame({ frame, index, progress, reduced }) {
  const ranges = [
    [0, 0.16, 0.34, 0.46],
    [0.26, 0.42, 0.58, 0.74],
    [0.58, 0.74, 0.92, 1]
  ];
  const [inStart, fullStart, fullEnd, outEnd] = ranges[index];

  const opacity = useTransform(progress, [inStart, fullStart, fullEnd, outEnd], [0, 1, 1, 0]);
  const scale = useTransform(progress, [inStart, fullStart, outEnd], [reduced ? 1 : 0.96, 1, reduced ? 1 : 1.04]);
  const y = useTransform(progress, [inStart, outEnd], [reduced ? 0 : 30, reduced ? 0 : -30]);
  const x = useTransform(progress, [inStart, outEnd], [reduced ? 0 : (index - 1) * -24, reduced ? 0 : (index - 1) * 24]);

  return (
    <m.div style={{ opacity, scale, x, y }} className="absolute inset-0 will-change-transform">
      <Image
        src={frame.src}
        alt={frame.alt}
        fill
        sizes="100vw"
        className="object-contain object-center drop-shadow-[0_44px_110px_rgba(0,0,0,0.78)]"
      />
    </m.div>
  );
}

export default function VisionSequence() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const lightX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? '0%' : '-14%', prefersReducedMotion ? '0%' : '14%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.78, 0.96], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 24, prefersReducedMotion ? 0 : -38]);

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#040406_48%,#000_100%)]" />
        <m.div
          style={{ x: lightX }}
          className="absolute left-[-20%] top-[52%] h-px w-[140%] bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.34),rgba(255,255,255,0.26),rgba(239,68,68,0.3),transparent)] blur-[2px]"
        />

        <m.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-[12vh] text-white md:px-10"
        >
          <m.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.72, once: false }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40 md:text-sm"
          >
            Pseudo-360 reveal
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ amount: 0.72, once: false }}
            transition={{ duration: 1.1, delay: 0.08, ease: easePremium }}
            className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[6rem]"
          >
            Form, turning into intent.
          </m.h2>
        </m.div>

        <div className="absolute inset-x-[-14vw] bottom-[10vh] top-[30vh] z-10 md:inset-x-[-4vw] md:bottom-[8vh] md:top-[24vh]">
          {frames.map((frame, index) => (
            <SequenceFrame
              key={`${frame.label}-${index}`}
              frame={frame}
              index={index}
              progress={scrollYProgress}
              reduced={prefersReducedMotion}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 z-30 h-px w-36 -translate-x-1/2 overflow-hidden bg-white/10">
          <m.div style={{ width: progressWidth }} className="h-px bg-white/70" />
        </div>
      </div>
    </section>
  );
}
