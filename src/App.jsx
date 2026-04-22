import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-radial-neon">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />
      <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-20 pt-8 md:px-10">
        <Hero />
        <Features />
        <ProductShowcase />
        <CTA />
      </main>
    </div>
  );
};

export default App;
