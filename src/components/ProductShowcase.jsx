import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const stats = [
  { label: 'Range', value: '780 km' },
  { label: '0-100 km/h', value: '2.9 s' },
  { label: 'Top Speed', value: '312 km/h' }
];

const ProductShowcase = () => {
  return (
    <section>
      <SectionHeader
        title="Meet the Voltis E-01"
        subtitle="A sculpted silhouette, panoramic intelligence display, and immersive cabin crafted to elevate every journey."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <img
          src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1800&q=80"
          alt="Electric vehicle side profile"
          className="h-[360px] w-full object-cover"
        />
        <div className="grid gap-4 p-7 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-slate-900/40 p-5"
            >
              <p className="text-sm text-slate-300">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-neon">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
