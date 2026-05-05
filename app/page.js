const stats = [
  ['0-60 mph', '2.9s'],
  ['Estimated range', '210 mi'],
  ['Peak output', '144 hp'],
  ['DC fast charge', '28 min']
];

const designNotes = [
  {
    title: 'Single-piece frame',
    copy: 'A rigid aluminum spine carries the battery low through the chassis for calm, precise handling.'
  },
  {
    title: 'Quiet command center',
    copy: 'A floating glass display keeps range, route, and ride mode visible without breaking the cockpit line.'
  },
  {
    title: 'Adaptive light signature',
    copy: 'Thin front and rear light blades respond to lean, braking force, and surrounding ambient light.'
  }
];

const specs = [
  ['Battery', '18.4 kWh structural pack'],
  ['Torque', '236 lb-ft at the rear wheel'],
  ['Riding modes', 'Flow, Sport, Rain, Custom'],
  ['Suspension', 'Electronically adaptive damping'],
  ['Brakes', 'Radial monoblock calipers with regen blending'],
  ['Connectivity', 'Phone key, live diagnostics, OTA updates']
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-2xl">
        <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 text-[0.82rem] md:h-14">
          <a href="#" className="font-semibold">
            Aether One
          </a>
          <div className="hidden items-center gap-8 text-[#424245] md:flex">
            <a className="transition-colors hover:text-black" href="#design">
              Design
            </a>
            <a className="transition-colors hover:text-black" href="#performance">
              Performance
            </a>
            <a className="transition-colors hover:text-black" href="#specs">
              Tech Specs
            </a>
          </div>
          <a
            href="#reserve"
            className="rounded-full bg-[#0071e3] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0077ed]"
          >
            Reserve
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col px-5 text-center">
          <p className="mx-auto text-sm font-semibold uppercase tracking-[0.18em] text-[#6e6e73]">
            Electric motorcycle
          </p>
          <h1 className="mx-auto mt-5 max-w-5xl text-6xl font-semibold leading-[0.92] text-[#1d1d1f] md:text-8xl lg:text-[7.6rem]">
            Built for the road ahead.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-[#6e6e73] md:text-2xl md:leading-9">
            A sculptural electric motorcycle with instant response, long-distance range, and a quieter kind of power.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#reserve"
              className="rounded-full bg-[#0071e3] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077ed]"
            >
              Reserve now
            </a>
            <a
              href="#design"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0071e3] shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#fbfbfd]"
            >
              Explore design
            </a>
          </div>

          <div className="relative mt-8 flex flex-1 items-end justify-center md:mt-4">
            <div className="absolute bottom-0 h-[34%] w-full max-w-5xl rounded-[100%] bg-black/10 blur-3xl" />
            <img
              src="/assets/aether-motorcycle-hero.png"
              alt="Aether One electric motorcycle in a bright studio"
              className="relative z-10 w-full max-w-6xl object-contain drop-shadow-[0_38px_45px_rgba(29,29,31,0.18)]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-4 md:grid-cols-4 md:px-8">
          {stats.map(([label, value]) => (
            <div key={label} className="px-4 py-8 text-center">
              <p className="text-3xl font-semibold md:text-5xl">{value}</p>
              <p className="mt-2 text-sm text-[#6e6e73]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="design" className="bg-[#fbfbfd] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#86868b]">Design</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">
              Every surface earns its place.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {designNotes.map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-black/10">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#6e6e73]">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="performance" className="bg-[#111113] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Performance</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">
              Instant torque. Effortless control.
            </h2>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/70">
              Aether One reads throttle, lean angle, traction, temperature, and regen demand hundreds of times per second, then shapes power before the bike ever feels unsettled.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-lg bg-white/[0.08] p-8 ring-1 ring-white/10">
              <p className="text-5xl font-semibold">94%</p>
              <p className="mt-3 text-sm text-white/55">Peak torque available from launch</p>
            </article>
            <article className="rounded-lg bg-white/[0.08] p-8 ring-1 ring-white/10">
              <p className="text-5xl font-semibold">12 ms</p>
              <p className="mt-3 text-sm text-white/55">Drive response in Sport mode</p>
            </article>
            <article className="rounded-lg bg-white/[0.08] p-8 ring-1 ring-white/10 sm:col-span-2">
              <p className="text-3xl font-semibold">Regenerative braking that feels natural.</p>
              <p className="mt-4 text-base leading-7 text-white/60">
                Adjustable regen blends with the hydraulic system for one smooth braking curve, from city traffic to mountain descents.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="specs" className="bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#86868b]">Tech Specs</p>
              <h2 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">
                The details are the experience.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#6e6e73]">
              Tuned for daily riding, weekend distance, and the quiet precision only an electric platform can provide.
            </p>
          </div>

          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {specs.map(([label, value]) => (
              <div key={label} className="grid gap-3 py-6 md:grid-cols-[16rem_1fr] md:py-7">
                <p className="font-semibold text-[#6e6e73]">{label}</p>
                <p className="text-xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="bg-[#f5f5f7] px-5 py-24 text-center md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-semibold leading-[0.95] md:text-7xl">
            Meet the next quiet thrill.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#6e6e73]">
            Reservations for Aether One open with refundable priority deposits and early configuration access.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@aether.example?subject=Aether%20One%20reservation"
              className="rounded-full bg-[#0071e3] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0077ed]"
            >
              Reserve by email
            </a>
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0071e3] shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#fbfbfd]"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
