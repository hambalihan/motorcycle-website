import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-14">
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-neon/30 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-neon/20 blur-3xl" />

      <div className="relative z-10 grid gap-10 md:grid-cols-[1.25fr_1fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex rounded-full border border-neon/40 bg-neon/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-neon"
          >
            VOLTIS E-01
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.75 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            Drive the <span className="text-neon">Next Electric Era</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.75 }}
            className="mt-6 max-w-xl text-base text-slate-300 md:text-lg"
          >
            Precision-crafted EVs with aerospace-grade engineering, AI-enhanced safety, and a silent surge from 0 to 100 in 2.9s.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.75 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-neon px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition"
            >
              Reserve Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md"
            >
              Explore Design
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl border border-neon/25 bg-neon/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/15 bg-slate-900/80 p-5 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1400&q=80"
              alt="Futuristic electric vehicle"
              className="h-[340px] w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
