'use client';

import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { easePremium } from './motion';

export default function MotionProvider({ children }) {
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.82, ease: easePremium }}>
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={pathname}
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            transition={{ duration: 0.72, ease: easePremium }}
            className="page-transition-shell"
          >
            <m.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              exit={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: easePremium }}
              className="page-transition-curtain"
            />
            {children}
          </m.div>
        </AnimatePresence>
      </MotionConfig>
    </LazyMotion>
  );
}
