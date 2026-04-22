'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MotionFade from './MotionFade';
import { easeSmooth } from './motion';

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -80]);
  const panelScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, prefersReducedMotion ? 1 : 1.018]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -22]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -70]);

  return (
    <section ref={sectionRef} id="chapter-two" className="section-shell flex min-h-[95vh] items-center">
      <m.div style={{ y: ambientY }} className="section-depth section-depth-center will-change-transform" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-24">
        <m.div style={{ y: copyY }} className="relative will-change-transform">
          <MotionFade className="max-w-3xl">
            <span className="section-tag">Chapter two</span>
            <h2 className="section-title mt-8">
              Performance should feel immediate, not overwhelming.
            </h2>
            <p className="section-copy mt-8 max-w-xl">
              The power arrives without drama. The interface stays quiet. What remains is the sensation of motion
              arriving exactly when you ask for it.
            </p>
          </MotionFade>
        </m.div>

        <MotionFade delay={0.12} className="relative">
          <m.div
            style={{ scale: panelScale }}
            className="story-frame glass-panel depth-panel overflow-hidden rounded-[2.4rem] p-4 will-change-transform md:p-5"
          >
            <div className="showcase-foreground" />
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
              <m.img
                src="https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1800&q=80"
                alt="Premium electric motorcycle close-up"
                className="h-[34rem] w-full object-cover md:h-[46rem]"
                style={{ y: imageY, scale: 1.08 }}
                animate={prefersReducedMotion ? undefined : { scale: [1.08, 1.095, 1.08] }}
                transition={prefersReducedMotion ? undefined : { duration: 10.5, repeat: Infinity, repeatType: 'mirror', ease: easeSmooth }}
              />
            </div>
            <div className="story-caption">
              Range, torque, and control delivered with the calm of a flagship product.
            </div>
          </m.div>
        </MotionFade>
      </div>
    </section>
  );
}
