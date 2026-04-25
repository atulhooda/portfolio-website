const stats = [
  {
    label: "Projects",
    value: "Few",
    description: "Shipped end-to-end across web and AI",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" />
        <rect x="13" y="4" width="7" height="7" />
        <rect x="4" y="13" width="7" height="7" />
        <rect x="13" y="13" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Experience",
    value: "2+",
    description: "Years building real systems",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 17l4-4 4 4 8-8" />
        <path d="M14 5h6v6" />
      </svg>
    ),
  },
  {
    label: "Clients",
    value: "5+",
    description: "Delivered solutions across AI/ML and full-stack",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M14.5 19c0-2.2 1.6-4 3.5-4s3.5 1.5 3.5 4" />
      </svg>
    ),
  },
  {
    label: "Hackathons",
    value: "3+",
    description: "Built fast, shipped under pressure",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 L4 14 H11 L9 22 L20 9 H13 Z" />
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
          <span>01 &nbsp; ABOUT ME</span>
        </div>

        <h2 className="mt-16 text-3xl font-black uppercase leading-[0.95] tracking-tighter text-neutral-900 md:mt-24 md:text-5xl lg:text-6xl">
          Fixing bugs
          <br />
          I created…
          <br />
          <span className="text-neutral-400">like a responsible adult.</span>
        </h2>

        <div className="mt-12 flex flex-col items-end md:mt-16">
          <div className="flex w-full max-w-md items-center gap-3 text-neutral-400">
            <span className="text-lg text-amber-500">✦</span>
            <span className="block h-px flex-1 bg-neutral-400/50" />
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
            I&apos;m a <span className="font-semibold text-[#D04A1F]">Third-year Computer Engineering</span>{" "}
             student at{" "}
            <span className="font-semibold text-[#D04A1F]">
              Army Institute of Technology, Pune
            </span>
            , focused on building real-world systems. I work across{" "}
            <span className="font-semibold text-[#D04A1F]">AI/ML</span> and{" "}
            <span className="font-semibold text-[#D04A1F]">full-stack</span>{" "}
            development, and I&apos;m currently running a{" "}
            <span className="font-semibold text-[#D04A1F]">startup</span>{" "}
            where I create practical solutions for clients in both domains.
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
