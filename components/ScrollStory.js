'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { easePremium } from './motion';

const chapters = [
  {
    eyebrow: 'Silence',
    title: 'The machine disappears.',
    copy: 'No roar. No vibration. Just motion.',
    image: '/assets/HeroBanner.jpg',
    align: 'start'
  },
  {
    eyebrow: 'Response',
    title: 'Speed arrives quietly.',
    copy: 'The horizon moves closer before the moment feels urgent.',
    image: '/assets/HeroBanner.jpg',
    align: 'end'
  },
  {
    eyebrow: 'Focus',
    title: 'The interface waits.',
    copy: 'Range, route, and ride mode appear only when they matter.',
    image: '/assets/HeroBanner.jpg',
    align: 'start'
  },
  {
    eyebrow: 'Arrival',
    title: 'Performance becomes calm.',
    copy: 'Precise. Composed. Inevitable.',
    image: '/assets/HeroBanner.jpg',
    align: 'center'
  }
];

function StorySection({ chapter, index }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : -92, prefersReducedMotion ? 0 : 92]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.16, 1.04, 1.16]);
  const shadeOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 0.7, 0.96]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [prefersReducedMotion ? 0 : 88, 0, prefersReducedMotion ? 0 : -88]);
  const textOpacity = useTransform(scrollYProgress, [0.08, 0.26, 0.74, 0.92], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.985, 1, 0.985]);
  const lineHeight = useTransform(scrollYProgress, [0.22, 0.78], ['0%', '100%']);
  const lightX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? '0%' : '-18%', prefersReducedMotion ? '0%' : '18%']);

  const alignment = {
    start: 'items-start text-left',
    center: 'items-center text-center',
    end: 'items-end text-right'
  }[chapter.align];

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      <m.img
        src={chapter.image}
        alt=""
        className="absolute inset-0 h-[118%] w-full object-cover"
        style={{ y: imageY, scale: imageScale }}
      />
      <m.div style={{ opacity: shadeOpacity }} className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28),transparent_42%,rgba(0,0,0,0.66))]" />
      <m.div
        style={{ x: lightX }}
        className="absolute left-[-20%] top-1/2 h-px w-[140%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)] opacity-40 blur-sm"
      />

      <m.div
        style={{ y: textY, opacity: textOpacity, scale: textScale }}
        className={`relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-[14vh] md:px-10 ${alignment}`}
      >
        <m.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.78, once: false }}
          transition={{ duration: 1, ease: easePremium }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40 md:text-sm"
        >
          {String(index + 1).padStart(2, '0')} / {chapter.eyebrow}
        </m.p>

        <m.h2
          initial={{ opacity: 0, y: 56, filter: 'blur(14px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.78, once: false }}
          transition={{ duration: 1.18, delay: 0.08, ease: easePremium }}
          className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.045em] text-white md:text-7xl lg:text-[6.35rem]"
        >
          {chapter.title}
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.78, once: false }}
          transition={{ duration: 1, delay: 0.22, ease: easePremium }}
          className="mt-10 max-w-xl text-lg leading-8 text-white/60 md:text-[1.28rem] md:leading-9"
        >
          {chapter.copy}
        </m.p>
      </m.div>

      <div className="absolute bottom-8 left-1/2 h-16 w-px -translate-x-1/2 overflow-hidden bg-white/10">
        <m.div style={{ height: lineHeight }} className="w-px bg-white/80" />
      </div>
    </section>
  );
}

export default function ScrollStory() {
  return (
    <div id="story">
      {chapters.map((chapter, index) => (
        <StorySection key={chapter.eyebrow} chapter={chapter} index={index} />
      ))}
    </div>
  );
}
