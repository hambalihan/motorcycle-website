'use client';

import { m } from 'framer-motion';
import { revealTransition } from './motion';

export default function MotionFade({
  as = 'div',
  children,
  className,
  delay = 0,
  amount = 0.25,
  initialY = 24,
  once = true
}) {
  const Tag = m[as] || m.div;

  return (
    <Tag
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ ...revealTransition, delay }}
      className={`will-change-transform ${className || ''}`}
    >
      {children}
    </Tag>
  );
}
