'use client';

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { pressState, softSpring } from './motion';

const magneticSpring = {
  stiffness: 150,
  damping: 16,
  mass: 0.35
};

function useMagneticPull(strength = 16) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);
  const glowX = useTransform(springX, [-strength, strength], ['42%', '58%']);
  const glowY = useTransform(springY, [-strength, strength], ['42%', '58%']);

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left - bounds.width / 2;
    const relativeY = event.clientY - bounds.top - bounds.height / 2;

    x.set((relativeX / bounds.width) * strength * 2);
    y.set((relativeY / bounds.height) * strength * 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    springX,
    springY,
    glowX,
    glowY,
    handleMove,
    handleLeave
  };
}

export function MagneticButton({
  as = 'button',
  className,
  children,
  href,
  strength = 14,
  whileHover,
  transition = softSpring,
  ...props
}) {
  const { springX, springY, glowX, glowY, handleMove, handleLeave } = useMagneticPull(strength);
  const Component = as === 'a' ? m.a : m.button;

  return (
    <Component
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={whileHover}
      whileTap={pressState}
      transition={transition}
      style={{ x: springX, y: springY }}
      className={`interactive-button ${className}`}
      {...props}
    >
      <m.span
        aria-hidden="true"
        className="interactive-button-glow"
        style={{ left: glowX, top: glowY }}
      />
      <span className="relative z-[1] inline-flex items-center justify-center">{children}</span>
    </Component>
  );
}
