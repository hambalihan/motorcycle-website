'use client';

import { m } from 'framer-motion';
import { easePremium } from './motion';

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: easePremium
    }
  }
};

export function StaggerGroup({ children, className, amount = 0.2, once = true }) {
  return (
    <m.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={`will-change-transform ${className || ''}`}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <m.div variants={item} className={`will-change-transform ${className || ''}`}>
      {children}
    </m.div>
  );
}
