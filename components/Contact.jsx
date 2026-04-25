"use client";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const socialLinks = [
  { href: "https://github.com/atulhooda", label: "GitHub" },
  { href: "https://www.linkedin.com/in/atulhooda", label: "LinkedIn" },
  { href: "https://x.com/atulhoodareal", label: "X (Twitter)" },
  { href: "https://instagram.com/justatoool", label: "Instagram" },
];

const noiseUrl =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

function ArrowOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  );
}

function ColumnHeading({ icon, label }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#efece7]/70">
      <span className="text-[#D04A1F]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default function Contact() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="footer"
      className="relative overflow-hidden bg-neutral-950 px-6 pt-24 text-[#efece7] md:px-12 md:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.18] mix-blend-overlay"
        style={{ backgroundImage: noiseUrl }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {[18, 36, 54, 72, 90].map((x) => (
          <div
            key={x}
            className="absolute bottom-0 top-0 w-px bg-[#efece7]/[0.06]"
            style={{ left: `${x}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <ColumnHeading
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              }
              label="Contact"
            />
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/917017886366?text=Hey%20Atul%2C%20saw%20your%20portfolio%20%E2%80%94%20"
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-[#efece7]/70 transition-colors hover:text-[#efece7]"
              >
                +91 70178 86366
              </a>
              <a
                href="mailto:atulxhooda@gmail.com"
                className="break-all text-xl font-semibold tracking-tight text-[#efece7] transition-opacity hover:opacity-80 sm:text-2xl md:text-3xl lg:text-4xl"
              >
                atulxhooda@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <ColumnHeading
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2 22 20 H2 z" />
                </svg>
              }
              label="Navigation"
            />
            <ul className="mt-6 flex flex-col gap-3 text-base font-semibold uppercase tracking-wide">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-[#efece7] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <ColumnHeading
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zm6 12l1.1 2.9L22 18l-2.9 1.1L18 22l-1.1-2.9L14 18l2.9-1.1L18 14z" />
                </svg>
              }
              label="Social"
            />
            <ul className="mt-6 flex flex-col gap-3 text-base font-semibold uppercase tracking-wide">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-[#efece7] transition-opacity hover:opacity-70"
                  >
                    <span>{link.label}</span>
                    <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowOutIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:flex md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.2em] text-[#efece7] transition-opacity hover:opacity-70"
            >
              <span>Back to top</span>
              <span className="transition-transform group-hover:-translate-y-0.5">
                <ArrowUpIcon />
              </span>
            </button>
          </div>
        </div>

        <div className="relative mt-32 h-[34vw] md:mt-40 md:h-[26vw]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-[18%] block select-none text-center text-[44vw] font-black leading-[0.8] tracking-tighter text-[#efece7]/[0.06] md:text-[36vw]"
          >
            ATUL
          </span>
        </div>

        <div className="relative flex flex-col gap-4 border-t border-[#efece7]/10 py-8 text-xs text-[#efece7]/50 md:flex-row md:items-center md:justify-between md:text-sm">
          <div>
            © {new Date().getFullYear()} ATUL HOODA<sup>®</sup> &nbsp;|&nbsp; All Rights Reserved
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Built with Next.js &amp; Tailwind</span>
            <span aria-hidden="true">·</span>
            <span>Designed in Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
}
