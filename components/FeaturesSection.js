'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MotionFade from './MotionFade';
import { StaggerGroup, StaggerItem } from './StaggerGroup';

const beats = ['Sculpted bodywork', 'A cockpit reduced to essentials', 'A glow that reads like intent'];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const layerY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -60]);
  const layerSecondaryY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 56]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -24]);
  const cardsScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, prefersReducedMotion ? 1 : 1.015]);

  return (
    <section ref={sectionRef} id="chapter-one" className="section-shell flex min-h-[92vh] items-center">
      <m.div style={{ y: layerY }} className="section-depth section-depth-left will-change-transform" />
      <m.div style={{ y: layerSecondaryY }} className="section-depth section-depth-right will-change-transform" />
      <m.div style={{ y: cardsY, scale: cardsScale }} className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center will-change-transform">
        <MotionFade className="max-w-4xl">
          <span className="section-tag">Chapter one</span>
          <h2 className="section-title mt-8">
            Design that removes everything except the feeling of forward motion.
          </h2>
          <p className="section-copy mx-auto mt-8 max-w-2xl">
            No feature wall. No visual clutter. Just a single silhouette, reduced until every line carries weight.
          </p>
        </MotionFade>

        <StaggerGroup className="mt-16 flex flex-col items-center gap-5 md:mt-20">
          {beats.map((beat) => (
            <StaggerItem key={beat} className="story-line">
              {beat}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </m.div>
    </section>
  );
}
