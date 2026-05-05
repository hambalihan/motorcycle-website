'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { easePremium } from './motion';

const DESIGN_IMAGE = '/assets/HeroBanner.jpg';

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 50, prefersReducedMotion ? 0 : -46]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.03]);
  const copyY = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : 40, prefersReducedMotion ? 0 : -26]);
  const lightX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? '0%' : '-18%', prefersReducedMotion ? '0%' : '18%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020203_0%,#050607_46%,#000_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,255,255,0.08),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_36%,rgba(0,0,0,0.88)_100%)]" />
      <m.div
        style={{ x: lightX }}
        className="absolute left-[-18%] top-[54%] h-px w-[136%] bg-[linear-gradient(90deg,transparent,rgba(37,99,235,0.3),rgba(255,255,255,0.3),rgba(239,68,68,0.22),transparent)] blur-[2px]"
      />
      <div className="absolute bottom-[12vh] left-1/2 h-16 w-[42rem] max-w-[84vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(37,99,235,0.12)_30%,rgba(239,68,68,0.07)_52%,transparent_72%)] blur-xl" />

      <m.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-x-[2vw] bottom-[10vh] top-[28vh] will-change-transform md:inset-x-[10vw] md:top-[22vh]"
      >
        <Image
          src={DESIGN_IMAGE}
          alt="Motorcycle design side profile"
          fill
          sizes="100vw"
          className="object-cover object-center drop-shadow-[0_48px_110px_rgba(0,0,0,0.86)]"
        />
      </m.div>

      <m.div style={{ y: copyY }} className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-start px-6 pt-[12vh] md:px-10">
        <m.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 0.9, ease: easePremium }}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42 md:text-sm"
        >
          02 / Design
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 1.08, delay: 0.08, ease: easePremium }}
          className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[5.8rem]"
        >
          Sculpted to be seen from every distance
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.52, once: false }}
          transition={{ duration: 0.95, delay: 0.18, ease: easePremium }}
          className="mt-8 max-w-xl text-lg leading-8 text-white/62 md:text-xl md:leading-9"
        >
          Long surfaces, a low visual center of gravity, and restrained detail give the bike a silhouette that reads as premium instantly.
        </m.p>
      </m.div>
    </section>
  );
}
