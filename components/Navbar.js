'use client';

import { m } from 'framer-motion';
import { MagneticButton } from './MagneticAction';
import { easePremium, hoverLift, softSpring } from './motion';

const links = [
  { href: '#chapter-one', label: 'Design' },
  { href: '#chapter-two', label: 'Experience' },
  { href: '#reserve', label: 'Reserve' }
];

export default function Navbar() {
  return (
    <m.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.82, ease: easePremium }}
      className="sticky top-4 z-50 mb-8 md:mb-10"
    >
      <nav className="glass-nav mx-auto flex items-center justify-between rounded-full px-4 py-3 md:px-7 md:py-4">
        <MagneticButton as="a" href="#" strength={10} whileHover={hoverLift} transition={softSpring} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-neon/10 text-sm font-bold tracking-[0.3em] text-neon shadow-glow">
            A
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-slate-500">Aether Motors</p>
            <p className="text-[0.95rem] font-semibold tracking-[-0.03em] text-white">Model One</p>
          </div>
        </MagneticButton>

        <m.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 0.18,
                staggerChildren: 0.07
              }
            }
          }}
          className="hidden items-center gap-9 text-[0.9rem] text-slate-400 md:flex"
        >
          {links.map((link) => (
            <m.a
              key={link.href}
              href={link.href}
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: easePremium }
                }
              }}
              whileHover={{ y: -1.5 }}
              transition={softSpring}
              className="transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </m.a>
          ))}
        </m.div>

        <MagneticButton
          as="a"
          href="#reserve"
          strength={10}
          whileHover={hoverLift}
          transition={softSpring}
          className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:border-neon/40 hover:text-neon"
        >
          Reserve
        </MagneticButton>
      </nav>
    </m.header>
  );
}
