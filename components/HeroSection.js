'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const easeCinematic = [0.16, 1, 0.3, 1];
const HERO_IMAGE = '/assets/HeroBanner.jpg';

const copyVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.16
    }
  }
};

const copyItem = {
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.05, ease: easeCinematic }
  }
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const copyY = useTransform(scrollYProgress, [0, 0.78], [0, prefersReducedMotion ? 0 : -84]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bikeY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -58]);
  const bikeX = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 58]);
  const bikeScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.06]);
  const ambientX = useTransform(scrollYProgress, [0, 1], [prefersReducedMotion ? 0 : -30, prefersReducedMotion ? 0 : 34]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#020203_0%,#07070b_44%,#000_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_46%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/78 to-transparent" />

      <m.div
        style={{ x: ambientX }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.03, 1] }}
        transition={prefersReducedMotion ? undefined : { duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-12rem] top-[16%] h-[34rem] w-[56rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.26),rgba(37,99,235,0.07)_42%,transparent_72%)] blur-3xl"
      />
      <m.div
        style={{ x: ambientX }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.42, 0.72, 0.42], scale: [1.01, 1, 1.01] }}
        transition={prefersReducedMotion ? undefined : { duration: 9.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[0%] top-[54%] h-48 w-[42rem] -rotate-6 bg-[linear-gradient(90deg,transparent,rgba(239,68,68,0.26),rgba(255,255,255,0.12),transparent)] blur-2xl"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-14 pt-24 md:px-10 lg:flex-row lg:items-center lg:gap-10 lg:pb-0 lg:pt-0">
        <m.div
          variants={copyVariants}
          initial="hidden"
          animate="show"
          style={{ y: copyY, opacity: copyOpacity }}
          className="flex min-h-[42vh] flex-col justify-center lg:min-h-0 lg:w-[44%]"
        >
          <m.p variants={copyItem} className="text-xs font-semibold uppercase tracking-[0.24em] text-white/46 md:text-sm">
            APEX ONE
          </m.p>
          <m.h1
            variants={copyItem}
            className="mt-7 max-w-[10ch] text-6xl font-semibold uppercase leading-[0.86] tracking-[-0.055em] text-white md:text-8xl lg:text-[7.4rem]"
          >
            Built for the next ride
          </m.h1>
          <m.p variants={copyItem} className="mt-8 max-w-md text-lg leading-8 text-white/64 md:text-xl md:leading-9">
            A premium electric motorcycle landing page template built to make the machine feel desirable before the first ride.
          </m.p>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.32, ease: easeCinematic }}
          style={{ x: bikeX, y: bikeY, scale: bikeScale }}
          className="relative h-[48vh] w-full flex-1 will-change-transform sm:h-[54vh] lg:h-[82vh] lg:w-[56%]"
        >
          <m.div
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, -0.3, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 7.8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full"
          >
            <Image
              src={HERO_IMAGE}
              alt="Motorcycle hero render"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-contain object-center lg:object-right drop-shadow-[0_48px_110px_rgba(0,0,0,0.82)]"
            />
          </m.div>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: easeCinematic }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/42"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em]">Scroll to explore</span>
        <span className="relative h-11 w-px overflow-hidden bg-white/12">
          <m.span
            animate={prefersReducedMotion ? undefined : { y: ['-100%', '135%'] }}
            transition={prefersReducedMotion ? undefined : { duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-0 h-7 w-px bg-white/70"
          />
        </span>
      </m.div>
    </section>
  );
}
