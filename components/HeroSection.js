'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MagneticButton } from './MagneticAction';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import { easePremium, easeSmooth, hoverLift, softSpring } from './motion';

const stats = [
  { label: 'Top speed', value: '260 km/h' },
  { label: 'Range', value: '340 km' },
  { label: 'Fast charge', value: '20 min' }
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -140]);
  const secondaryGlowY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 90]);
  const mediaScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, prefersReducedMotion ? 1 : 1.02, prefersReducedMotion ? 1 : 0.985]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -34]);

  const words = ['A', 'story', 'told', 'through', 'light,', 'speed,', 'and', 'silence.'];

  return (
    <section ref={sectionRef} className="section-shell flex min-h-[96vh] flex-col justify-center pt-10 md:pt-14">
      <div className="grid gap-16 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-24">
        <m.div style={{ y: contentY }} className="max-w-4xl will-change-transform">
          <StaggerGroup className="space-y-0">
            <StaggerItem>
              <span className="section-tag">Electric future, redefined</span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="headline mt-7 max-w-6xl">
                {words.map((word, index) => (
                  <span key={`${word}-${index}`} className="headline-word">
                    <m.span
                      initial={{ opacity: 0, y: '110%' }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.82, delay: 0.14 + index * 0.05, ease: easePremium }}
                      className="inline-block will-change-transform"
                    >
                      {word}
                    </m.span>
                  </span>
                ))}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="subheadline mt-10 max-w-xl">
                Aether One is designed as a cinematic object first: a machine that feels sculpted by air, stripped of
                noise, and reduced to the moments that matter.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-11 flex flex-wrap items-center gap-4 md:gap-5">
                <MagneticButton
                  as="a"
                  href="#reserve"
                  whileHover={hoverLift}
                  transition={softSpring}
                  className="rounded-full bg-neon px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow"
                >
                  Reserve now
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#showcase"
                  strength={12}
                  whileHover={{ y: -2.5, scale: 1.005 }}
                  transition={softSpring}
                  className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl"
                >
                  Explore design
                </MagneticButton>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup className="mt-20 grid gap-7 border-t border-white/10 pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                <p className="mt-4 text-[1.95rem] font-bold tracking-[-0.05em] text-white md:text-[2.1rem]">{stat.value}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </m.div>

        <m.div style={{ y: mediaY }} className="relative will-change-transform">
          <div className="depth-grid depth-grid-hero" />
          <m.div style={{ y: glowY }} className="hero-float hero-float-one will-change-transform" />
          <m.div style={{ y: secondaryGlowY }} className="hero-float hero-float-two will-change-transform" />
          <m.div style={{ y: foregroundY }} className="hero-float hero-float-three will-change-transform" />
          <m.div
            initial={{ opacity: 0, y: 30, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -8, 0], rotate: [0, -0.9, 0] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.8, ease: easePremium }
                : { duration: 8.5, repeat: Infinity, repeatType: 'mirror', ease: easeSmooth }
            }
            style={{ scale: mediaScale }}
            className="glass-panel depth-panel relative overflow-hidden rounded-[2.2rem] p-4 will-change-transform md:p-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(48,168,255,0.18),transparent_55%)]" />
            <div className="absolute inset-x-10 top-4 h-24 rounded-full bg-neon/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
              <m.img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80"
                alt="Futuristic motorcycle in a dark studio"
                className="h-[30rem] w-full object-cover md:h-[38rem]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.025, 1] }}
                transition={prefersReducedMotion ? undefined : { duration: 11, repeat: Infinity, repeatType: 'mirror', ease: easeSmooth }}
              />
            </div>

            <m.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.36, duration: 0.82, ease: easePremium }}
              className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl will-change-transform md:bottom-8 md:left-8 md:right-8 md:p-6"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-neon/80">Ride intelligence</p>
              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="max-w-md text-xl font-semibold tracking-[-0.04em] text-white">Every surface exists to make the ride feel inevitable.</p>
                <p className="max-w-xs text-[0.95rem] leading-7 text-slate-400">Fast when asked, quiet when needed, and composed in every frame.</p>
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
