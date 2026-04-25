"use client";

import { useState } from "react";

const heroNoiseLg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><filter id='c'><feTurbulence type='fractalNoise' baseFrequency='0.012' numOctaves='4' seed='7' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23c)'/></svg>\")";

const heroNoiseSm =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23g)'/></svg>\")";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function Field({ label, name, type = "text", placeholder, multiline = false }) {
  const inputClass =
    "w-full bg-transparent pb-2 text-xl text-[#efece7] placeholder:text-[#efece7]/45 outline-none md:text-2xl";

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor={name}
        className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#efece7]"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          required
          rows={3}
          placeholder={placeholder}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={inputClass}
        />
      )}
      <div className="flex items-center gap-3">
        <span className="text-lg text-amber-300">✦</span>
        <span aria-hidden="true" className="block h-px flex-1 bg-[#efece7]/45" />
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      const subject = `Portfolio inquiry from ${name}`;
      const body = `From: ${name} <${email}>\n\n${message}`;
      window.location.href = `mailto:atulxhooda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const payload = new FormData();
      payload.append("access_key", accessKey);
      payload.append("name", name);
      payload.append("email", email);
      payload.append("message", message);
      payload.append("subject", `Portfolio inquiry from ${name}`);
      payload.append("from_name", "Atul Hooda Portfolio");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#D04A1F] px-6 py-24 text-[#efece7] md:px-12 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.28] mix-blend-soft-light"
        style={{ backgroundImage: heroNoiseLg, backgroundSize: "100% 100%" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.14] mix-blend-soft-light"
        style={{ backgroundImage: heroNoiseSm }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {[6, 28, 50, 72, 94].map((x) => (
          <div
            key={`v-${x}`}
            className="absolute top-0 bottom-0 w-px bg-[#efece7]/[0.07]"
            style={{ left: `${x}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-[11px] font-mono font-semibold tracking-[0.25em] text-[#efece7] shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span>05 &nbsp; GET IN TOUCH</span>
        </div>

        <h2 className="mt-10 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:mt-14 md:text-8xl lg:text-[8.5rem]">
          Ready to start
          <br />
          your next
          <br />
          project?
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-[#efece7]/90 md:text-lg">
              Let&apos;s build a brand, product, or AI experience that actually
              ships. Tell me what you need — I&apos;ll handle the rest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:col-span-7">
            <Field label="Name" name="name" placeholder="Jane Smith" />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
            <Field label="Message" name="message" placeholder="Leave a message" multiline />

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-between gap-3 self-stretch rounded-full bg-neutral-900 py-2.5 pl-5 pr-2 text-[#efece7] transition hover:bg-neutral-800 disabled:opacity-60 sm:gap-5 sm:py-3 sm:pl-8 sm:pr-3"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] sm:text-sm md:text-base md:tracking-[0.35em]">
                  {status === "sending" ? "Sending…" : "Let's talk"}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#efece7] text-neutral-900 transition group-hover:bg-amber-300">
                  <ArrowIcon />
                </span>
              </button>

              {status === "success" && (
                <p className="text-sm font-semibold text-amber-200">
                  Thanks — your message landed. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-semibold text-amber-200">
                  {errorMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
