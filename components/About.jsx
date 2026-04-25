const stats = [
  {
    label: "Focus",
    value: "100%",
    description: "Trusted with shipping real product",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 12 L21 12 M12 3 L12 21" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: "Experience",
    value: "4+",
    description: "Years learning, breaking, and shipping",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 17l4-4 4 4 8-8" />
        <path d="M14 5h6v6" />
      </svg>
    ),
  },
  {
    label: "Delivered Projects",
    value: "12+",
    description: "Across web, systems, and tooling",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" />
      </svg>
    ),
  },
  {
    label: "Growth Impact",
    value: "+40%",
    description: "Average improvement after rebuilds",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" />
        <rect x="13" y="4" width="7" height="7" />
        <rect x="4" y="13" width="7" height="7" />
        <rect x="13" y="13" width="7" height="7" />
      </svg>
    ),
  },
];

const noiseUrl =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const notch =
  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#efece7] px-6 py-24 md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.1] mix-blend-overlay"
        style={{ backgroundImage: noiseUrl }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {[18, 36, 54, 72, 90].map((x) => (
          <div
            key={x}
            className="absolute bottom-0 top-0 w-px bg-neutral-400/30"
            style={{ left: `${x}%` }}
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-24 z-10 hidden h-12 w-12 items-center justify-center rounded-md bg-neutral-900 md:flex"
      >
        <span className="text-2xl text-amber-300">✦</span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-[44%] z-10 hidden flex-col gap-[3px] md:flex"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="block h-px bg-neutral-500/40"
            style={{ width: `${[8, 14, 6, 18, 10, 22, 8, 12, 16, 6, 20, 10, 14, 8, 18, 12, 6, 16][i]}px` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-2 text-[11px] font-mono font-semibold tracking-[0.25em] text-neutral-700 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#D04A1F]" />
          <span>01 &nbsp; WHY ME</span>
        </div>

        <h2 className="mt-16 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-neutral-900 md:mt-24 md:text-8xl lg:text-[8.5rem]">
          Engineered
          <br />
          to work.
          <br />
          <span className="text-neutral-400">Built to last.</span>
        </h2>

        <div className="mt-12 flex flex-col items-end md:mt-16">
          <div className="flex w-full max-w-md items-center gap-3 text-neutral-400">
            <span className="text-lg text-amber-500">✦</span>
            <span className="block h-px flex-1 bg-neutral-400/50" />
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
            I&apos;m a Computer Engineering student who likes shipping working
            systems — clean code, thoughtful design, and projects that solve
            actual problems instead of decorating slide decks.
          </p>
        </div>

        <div className="mt-28 grid grid-cols-1 gap-6 md:mt-36 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative bg-white p-7 shadow-[0_4px_20px_rgb(0,0,0,0.04)] md:p-8 ${
                i % 2 === 1 ? "md:mt-20" : ""
              }`}
              style={{ clipPath: notch }}
            >
              <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-700">
                <span className="h-2.5 w-2.5 bg-[#D04A1F]" />
                <span>{stat.label}</span>
              </div>

              <div className="mt-10 text-5xl font-extrabold tracking-tight text-neutral-900 md:mt-12 md:text-6xl">
                {stat.value}
              </div>

              <div className="mt-6 h-px w-full bg-neutral-200" />

              <div className="mt-6 flex items-end justify-between gap-4">
                <p className="max-w-[160px] text-sm leading-relaxed text-neutral-500">
                  {stat.description}
                </p>
                <span className="text-neutral-300">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
