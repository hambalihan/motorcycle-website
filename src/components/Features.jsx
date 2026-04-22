import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const features = [
  {
    icon: '⚡',
    title: 'Ultra Fast Charging',
    description: 'Recover 320 miles in 15 minutes with 900V architecture.'
  },
  {
    icon: '🧠',
    title: 'Neural Drive OS',
    description: 'Adaptive AI learns your routes, climate, and charging habits.'
  },
  {
    icon: '🛡️',
    title: 'Autonomy Suite',
    description: '360° lidar + vision safety stack with real-time hazard prediction.'
  }
];

const Features = () => {
  return (
    <section>
      <SectionHeader
        title="Engineered for tomorrow's roads"
        subtitle="Every component is tuned for efficiency, speed, and comfort — from battery chemistry to cabin acoustics."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            whileHover={{ y: -7, scale: 1.01 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neon/40 bg-neon/10 text-2xl">
              {feature.icon}
            </div>
            <h3 className="text-lg font-medium">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Features;
