'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { easePremium } from './motion';

const SEQUENCE_IMAGE = '/assets/HeroBanner.jpg';

const stages = [
  {
    id: 'front',
    src: SEQUENCE_IMAGE,
    label: 'Front',
    x: 0,
    y: 14,
    scale: 0.94,
    rotate: 0,
    clip: 'inset(8% 18% 6% 18%)',
    position: '50% 44%'
  },
  {
    id: 'front-left',
    src: SEQUENCE_IMAGE,
    label: 'Front quarter',
    x: -22,
    y: 8,
    scale: 0.98,
    rotate: -3,
    clip: 'inset(10% 12% 8% 20%)',
    position: '42% 48%'
  },
  {
    id: 'profile',
    src: SEQUENCE_IMAGE,
    label: 'Profile',
    x: 0,
    y: 0,
    scale: 1.04,
    rotate: 0,
    clip: 'inset(12% 4% 10% 4%)',
    position: '52% 52%',
    stable: true
  },
  {
    id: 'rear-quarter',
    src: SEQUENCE_IMAGE,
    label: 'Rear quarter',
    x: 20,
    y: 8,
    scale: 0.98,
    rotate: 3,
    clip: 'inset(10% 20% 8% 12%)',
    position: '60% 48%'
  },
  {
    id: 'front-return',
    src: SEQUENCE_IMAGE,
    label: 'Front',
    x: 0,
    y: 14,
    scale: 0.94,
    rotate: 0,
    clip: 'inset(8% 18% 6% 18%)',
    position: '50% 44%'
  }
];

function SequenceStage({ stage, index, progress, reduced }) {
  const start = 0.08;
  const end = 0.92;
  const step = (end - start) / (stages.length - 1);
  const center = start + step * index;
  const fade = stage.stable ? step * 1.7 : step * 1.05;
  const inStart = Math.max(0, center - fade);
  const fullStart = Math.max(0, center - fade * 0.42);
  const fullEnd = Math.min(1, center + fade * 0.42);
  const outEnd = Math.min(1, center + fade);

  const opacity = useTransform(progress, [inStart, fullStart, fullEnd, outEnd], [0, 1, 1, 0]);
  const scale = useTransform(
    progress,
    [inStart, center, outEnd],
    [reduced ? stage.scale : stage.scale * 0.975, stage.scale, reduced ? stage.scale : stage.scale * 1.02]
  );
  const x = useTransform(progress, [inStart, outEnd], [reduced ? stage.x : stage.x - 20, reduced ? stage.x : stage.x + 20]);
  const y = useTransform(progress, [inStart, center, outEnd], [reduced ? stage.y : stage.y + 16, stage.y, reduced ? stage.y : stage.y - 14]);
  const rotate = useTransform(progress, [inStart, center, outEnd], [stage.rotate - 1.5, stage.rotate, stage.rotate + 1.5]);

  return (
    <m.div style={{ opacity, scale, x, y, rotate }} className="absolute inset-0 will-change-transform">
      <div className="relative h-full w-full" style={{ clipPath: stage.clip }}>
        <Image
          src={stage.src}
          alt={`Motorcycle ${stage.label.toLowerCase()} template view`}
          fill
          sizes="100vw"
          style={{ objectPosition: stage.position }}
          className="object-cover brightness-[0.9] contrast-[1.05] saturate-[0.9] drop-shadow-[0_48px_110px_rgba(0,0,0,0.84)]"
        />
      </div>
    </m.div>
  );
}

export default function VisionSequenceSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const glowX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : -48, prefersReducedMotion ? 0 : 48]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.98]);
  const copyY = useTransform(scrollYProgress, [0, 0.5, 1], [prefersReducedMotion ? 0 : 34, 0, prefersReducedMotion ? 0 : -38]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.12, 0.82, 0.96], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative h-[640vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#000_0%,#050507_48%,#000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.075),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.88)_100%)]" />

        <m.div
          style={{ x: glowX, scale: glowScale }}
          className="absolute left-1/2 top-[52%] h-[28rem] w-[62rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.22),rgba(37,99,235,0.08)_38%,transparent_72%)] blur-3xl"
        />
        <m.div
          style={{ x: glowX }}
          className="absolute left-[-18%] top-[51%] h-px w-[136%] bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.3),rgba(255,255,255,0.2),rgba(239,68,68,0.22),transparent)] blur-[2px]"
        />
        <div className="absolute bottom-[12vh] left-1/2 h-16 w-[42rem] max-w-[82vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(37,99,235,0.12)_28%,rgba(239,68,68,0.08)_48%,transparent_72%)] blur-xl" />

        <m.div
          style={{ opacity: copyOpacity, y: copyY }}
          className="relative z-20 mx-auto max-w-7xl px-6 pt-[11vh] md:px-10"
        >
          <m.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.72, once: false }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42 md:text-sm"
          >
            01 / 360°
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ amount: 0.72, once: false }}
            transition={{ duration: 1.08, delay: 0.08, ease: easePremium }}
            className="mt-6 max-w-3xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[5.8rem]"
          >
            Every angle, one motion
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.72, once: false }}
            transition={{ duration: 0.96, delay: 0.18, ease: easePremium }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/62 md:text-xl md:leading-9"
          >
            Scroll drives a pinned sequence from front to profile to rear, then returns before the page continues.
          </m.p>
        </m.div>

        <div className="absolute inset-x-[4vw] bottom-[11vh] top-[26vh] z-10 md:inset-x-[10vw] md:bottom-[8vh] md:top-[22vh]">
          {stages.map((stage, index) => (
            <SequenceStage key={stage.id} stage={stage} index={index} progress={scrollYProgress} reduced={prefersReducedMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
