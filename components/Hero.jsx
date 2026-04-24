import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#D04A1F]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.28] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><filter id='c'><feTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='4' seed='7' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23c)'/></svg>\")",
          backgroundSize: "100% 100%",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.14] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>\")",
        }}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[14%] z-0 -translate-x-1/2 select-none whitespace-nowrap text-[32vw] font-black leading-[0.85] tracking-tighter text-white/10"
      >
        ATUL
      </span>

      <nav className="relative z-30 flex items-center justify-between px-6 py-6 text-white md:px-12 md:py-8">
        <div className="text-2xl font-extrabold tracking-tight">
          ATUL HOODA<sup className="ml-0.5 text-[10px] font-medium">®</sup>
        </div>
        <ul className="hidden items-center gap-20 text-xs tracking-[0.3em] md:flex">
          <li>
            <a href="#about" className="transition hover:opacity-70">ABOUT</a>
          </li>
          <li>
            <a href="#projects" className="transition hover:opacity-70">PROJECTS</a>
          </li>
          <li>
            <a href="#contact" className="transition hover:opacity-70">CONTACT</a>
          </li>
        </ul>
        <button aria-label="Menu" className="flex flex-col gap-[6px]">
          <span className="block h-px w-7 bg-white" />
          <span className="block h-px w-7 bg-white" />
        </button>
      </nav>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 z-[25] flex items-end justify-center">
        <Image
          src="/pfpp.png"
          alt="Atul"
          width={1544}
          height={1544}
          priority
          unoptimized
          className="h-full w-auto object-contain object-bottom"
        />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
        {[9.5, 36.5, 63.5, 90.5].map((y) => (
          <div
            key={`h-${y}`}
            className="absolute left-0 right-0 h-px bg-white/[0.07]"
            style={{ top: `${y}%` }}
          />
        ))}
        {[6, 28, 50, 72, 94].map((x) => (
          <div
            key={`v-${x}`}
            className="absolute top-0 bottom-0 w-px bg-white/[0.07]"
            style={{ left: `${x}%` }}
          />
        ))}
        {[9.5, 36.5, 63.5, 90.5].flatMap((y) =>
          [6, 28, 50, 72, 94].map((x) => (
            <span
              key={`s-${x}-${y}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-lg text-amber-300/40 mix-blend-soft-light"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              ✦
            </span>
          ))
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 md:px-12 md:pb-14">
        <div className="max-w-md">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-white">
            <span>✦</span>
            <span>LESS NOISE. MORE IMPACT.</span>
            <span>✦</span>
          </div>
          <p className="font-mono text-sm leading-relaxed text-white md:text-base">
            I help ambitious companies launch memorable brands, build high-impact websites, and design digital products people love to use.
          </p>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-5 rounded-full bg-neutral-900 py-2 pl-7 pr-2 text-white transition hover:bg-neutral-800"
          >
            <span className="text-xs tracking-[0.3em]">BOOK A CALL</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition group-hover:bg-neutral-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 right-8 z-20 text-white md:bottom-14 md:right-14">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H8M17 7V16" />
        </svg>
      </div>
    </section>
  );
}
