'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MagneticButton } from './MagneticAction';
import { StaggerGroup, StaggerItem } from './StaggerGroup';
import { hoverLift, softSpring } from './motion';

export default function CTASection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -18]);
  const panelScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, prefersReducedMotion ? 1 : 1.01]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -52]);

  return (
    <section ref={sectionRef} id="reserve" className="section-shell flex min-h-[88vh] items-center pb-8">
      <m.div style={{ y: ambientY }} className="section-depth section-depth-bottom will-change-transform" />
      <m.div style={{ y: panelY, scale: panelScale }} className="relative will-change-transform">
      <StaggerGroup className="glass-panel depth-panel relative overflow-hidden rounded-[2.4rem] px-7 py-14 md:px-12 md:py-20 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(48,168,255,0.16),transparent_30%)]" />
        <div className="cta-foreground" />
        <div className="relative flex flex-col items-start gap-12">
          <StaggerItem className="max-w-4xl">
            <span className="section-tag">Final chapter</span>
            <h2 className="section-title mt-8 max-w-4xl">Aether One is built to feel memorable before the ride even begins.</h2>
            <p className="section-copy mt-8 max-w-2xl">
              Join the early access list for launch pricing, private previews, and first allocation updates.
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <MagneticButton
              whileHover={hoverLift}
              transition={softSpring}
              className="rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-glow"
            >
              Join waitlist
            </MagneticButton>
            <p className="body-muted max-w-xs">Limited launch allocations available worldwide.</p>
          </StaggerItem>
        </div>
      </StaggerGroup>
      </m.div>
    </section>
  );
}
