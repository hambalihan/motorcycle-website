import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto mb-10 max-w-2xl text-center"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-neon">Future Mobility</p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-sm text-slate-300 md:text-base">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeader;
