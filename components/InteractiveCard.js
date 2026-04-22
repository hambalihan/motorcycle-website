'use client';

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { softSpring } from './motion';

const tiltSpring = {
  stiffness: 140,
  damping: 18,
  mass: 0.5
};

export default function InteractiveCard({ children, className, hoverScale = 1.01, ...props }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, tiltSpring);
  const smoothRotateY = useSpring(rotateY, tiltSpring);
  const smoothGlowX = useSpring(glowX, tiltSpring);
  const smoothGlowY = useSpring(glowY, tiltSpring);
  const translateY = useTransform(smoothRotateX, [-6, 6], [3, -3]);

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 7);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <m.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: hoverScale }}
      transition={softSpring}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        y: translateY,
        transformStyle: 'preserve-3d'
      }}
      className={`interactive-card ${className}`}
      {...props}
    >
      <m.span
        aria-hidden="true"
        className="interactive-card-glow"
        style={{ left: smoothGlowX, top: smoothGlowY }}
      />
      <div className="relative z-[1] h-full">{children}</div>
    </m.div>
  );
}
