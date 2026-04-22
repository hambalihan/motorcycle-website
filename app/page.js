import CTASection from '../components/CTASection';
import FeaturesSection from '../components/FeaturesSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProductShowcase from '../components/ProductShowcase';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-night text-slate-100">
      <div className="animated-gradient pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(48,168,255,0.14),transparent_58%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-neon/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10rem] top-[64rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[92rem] flex-col px-6 pb-20 pt-6 md:px-10 lg:px-16">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <CTASection />
      </div>
    </main>
  );
}
