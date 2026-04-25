"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const thoughts = [
  "Hey, I'm Atul!",
  "Thanks for stopping by.",
  "Let's build something cool.",
  "Got a project in mind?",
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Hero() {
  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setThoughtIndex((i) => (i + 1) % thoughts.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-[#D04A1F]">
      <h1 className="sr-only">
        Atul Hooda — Computer Engineering student at Army Institute of Technology, Pune. Full-stack and AI/ML developer, founder of Engageo Agency.
      </h1>
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
        className="pointer-events-none absolute left-1/2 top-[58%] z-0 -translate-x-1/2 select-none whitespace-nowrap text-[32vw] font-black leading-[0.85] tracking-tighter text-[#efece7]/10 md:top-[14%]"
      >
        ATUL
      </span>

      <div className="relative z-30 px-4 pt-4 md:px-8 md:pt-6">
        <nav className="mx-auto flex max-w-6xl items-center rounded-full bg-[#efece7] px-5 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:px-7 md:py-3">
          <div className="flex flex-1 items-center">
            <div className="text-lg font-extrabold tracking-tight text-neutral-900 md:text-xl">
              ATUL HOODA<sup className="ml-0.5 text-[9px] font-medium">®</sup>
            </div>
          </div>

          <ul className="hidden flex-none items-center gap-1 text-[15px] font-semibold text-neutral-900 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors duration-200 hover:bg-neutral-900 hover:text-[#efece7]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 scale-0 rounded-full bg-neutral-900 transition-all duration-200 group-hover:scale-100 group-hover:bg-[#efece7]"
                  />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-end">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition-transform duration-200 hover:scale-105"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[55%] z-[25] flex items-end justify-center md:top-24">
        <div className="group pointer-events-auto relative h-full">
          <Image
            src="/pfpp.png"
            alt="Atul Hooda"
            width={1544}
            height={1544}
            priority
            unoptimized
            className="h-full w-auto max-w-full object-contain object-bottom md:max-w-none"
          />
          <div className="pointer-events-none absolute left-[80%] top-[12%] z-30 origin-bottom-left scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <div className="relative whitespace-nowrap rounded-[2rem] bg-[#efece7] px-8 py-5 text-base font-bold text-neutral-900 shadow-2xl md:text-lg">
              {thoughts[thoughtIndex]}
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-3 left-3 block h-3 w-3 rounded-full bg-[#efece7] shadow-lg"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-7 -left-1 block h-2 w-2 rounded-full bg-[#efece7] shadow-md"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-11 -left-4 block h-1.5 w-1.5 rounded-full bg-[#efece7]"
            />
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
        {[9.5, 36.5, 63.5, 90.5].map((y) => (
          <div
            key={`h-${y}`}
            className="absolute left-0 right-0 h-px bg-[#efece7]/[0.07]"
            style={{ top: `${y}%` }}
          />
        ))}
        {[6, 28, 50, 72, 94].map((x) => (
          <div
            key={`v-${x}`}
            className="absolute top-0 bottom-0 w-px bg-[#efece7]/[0.07]"
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

      <div className="absolute inset-x-0 top-28 z-[28] flex flex-col items-start gap-6 px-6 md:bottom-0 md:top-auto md:flex-row md:items-end md:justify-between md:gap-6 md:px-12 md:pb-14">
        <div className="max-w-md">
          <div>
            <p className="text-2xl font-extrabold leading-tight tracking-tight text-[#efece7] sm:text-3xl md:text-4xl">
              Computer Engineering Student.
            </p>
            <p className="mt-2 text-sm font-light leading-relaxed text-[#efece7]/65 sm:text-base md:text-lg">
              Building systems that solve real problems.
            </p>
          </div>
          <a
            href="https://wa.me/917017886366?text=Hey%20Atul%2C%20saw%20your%20portfolio%20%E2%80%94%20"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-5 rounded-full bg-neutral-900 py-2 pl-7 pr-2 text-[#efece7] transition hover:bg-neutral-800 md:mt-10"
          >
            <span className="text-xs tracking-[0.3em]">CONTACT ME</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efece7] text-neutral-900 transition group-hover:bg-[#e0ddd6]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex items-center gap-3 text-[#efece7]/70">
            <span aria-hidden="true" className="block h-px w-8 bg-current md:w-12" />
            <span className="text-xs font-bold uppercase tracking-[0.35em] sm:text-sm md:text-base md:tracking-[0.4em]">
              Connect
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/atulhooda"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition hover:scale-105 hover:bg-neutral-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/atulhooda"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition hover:scale-105 hover:bg-neutral-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://x.com/atulhoodareal"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition hover:scale-105 hover:bg-neutral-800"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/justatoool"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition hover:scale-105 hover:bg-neutral-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="mailto:atulxhooda@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition hover:scale-105 hover:bg-neutral-800"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="animate-menu-overlay fixed inset-0 z-[60] overflow-hidden bg-[#D04A1F]"
        >
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

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
            {[9.5, 36.5, 63.5, 90.5].map((y) => (
              <div
                key={`menu-h-${y}`}
                className="absolute left-0 right-0 h-px bg-[#efece7]/[0.07]"
                style={{ top: `${y}%` }}
              />
            ))}
            {[6, 28, 50, 72, 94].map((x) => (
              <div
                key={`menu-v-${x}`}
                className="absolute top-0 bottom-0 w-px bg-[#efece7]/[0.07]"
                style={{ left: `${x}%` }}
              />
            ))}
            {[9.5, 36.5, 63.5, 90.5].flatMap((y) =>
              [6, 28, 50, 72, 94].map((x) => (
                <span
                  key={`menu-s-${x}-${y}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-lg text-amber-300/40 mix-blend-soft-light"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  ✦
                </span>
              ))
            )}
          </div>

          <div className="animate-menu-fade relative z-10 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8" style={{ animationDelay: "350ms" }}>
            <div className="text-lg font-extrabold tracking-tight text-[#efece7] md:text-xl">
              ATUL HOODA<sup className="ml-0.5 text-[9px] font-medium">®</sup>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-[#efece7] transition-transform duration-200 hover:scale-105"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav className="relative z-10 flex h-[calc(100vh-7rem)] items-center justify-center">
            <ul className="flex flex-col items-center gap-1 md:gap-2">
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden leading-[0.95]">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="animate-menu-link group relative block overflow-hidden text-[14vw] font-black uppercase leading-[0.95] tracking-tighter text-[#efece7] md:text-[10vw]"
                    style={{ animationDelay: `${350 + i * 90}ms` }}
                  >
                    <span className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 block translate-y-full italic text-amber-300 transition-transform duration-[600ms] ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:translate-y-0"
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="animate-menu-fade absolute bottom-6 left-6 z-10 flex flex-col gap-1 md:bottom-10 md:left-10" style={{ animationDelay: `${350 + navLinks.length * 90 + 60}ms` }}>
            <div className="flex items-center gap-2 text-[#efece7]/70">
              <span className="text-xs font-bold uppercase tracking-[0.4em] md:text-sm">
                Contact me here
              </span>
              <span aria-hidden="true" className="block h-px w-6 bg-current" />
            </div>
            <a
              href="mailto:atulxhooda@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="text-xl font-semibold text-[#efece7] transition-opacity duration-200 hover:opacity-70 md:text-2xl"
            >
              atulxhooda@gmail.com
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
