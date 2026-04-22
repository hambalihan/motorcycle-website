import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-neon/35 bg-gradient-to-r from-neon/20 to-slate-900/60 p-8 text-center backdrop-blur-xl md:p-12"
    >
      <h3 className="text-2xl font-semibold md:text-4xl">Own the future of performance EV.</h3>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
        Join the priority list to get exclusive early access, launch pricing, and private test-drive invitations.
      </p>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 rounded-xl bg-neon px-8 py-3 font-semibold text-slate-950 shadow-glow"
      >
        Get Priority Access
      </motion.button>
    </motion.section>
  );
};

export default CTA;
