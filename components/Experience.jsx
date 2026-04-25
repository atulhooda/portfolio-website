const roles = [
  {
    label: "Case Study 01",
    title: "Freelance Software Developer",
    org: "Vasudeva & Co.",
    orgLink: "https://www.vasudevaco.in/",
    location: "Freelance",
    overview:
      "Built a full-stack real estate website showcasing property listings, project details, and lead generation features for client inquiries.",
    learned: [
      "Developed a responsive and user-friendly interface for seamless navigation",
      "Implemented dynamic property listing and project display features",
      "Integrated inquiry and lead capture forms for client engagement",
      "Structured complex real estate data into clear, accessible sections",
      "Ensured smooth frontend-backend integration and optimized performance",
      "Focused on clean UI/UX and scalable architecture",
    ],
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Responsive UI",
    ],
  },
  {
    label: "Case Study 02",
    title: "Design Intern",
    org: "M&Y Fitness Club",
    location: "Freelance",
    overview:
      "Owned the brand presence for M&Y Fitness Club — designed and built their website end-to-end and handled ongoing creative direction across Instagram, posters, and other touchpoints.",
    learned: [
      "Designed and shipped a clean, modern website reflecting the gym's brand identity",
      "Created a consistent visual language across digital and print touchpoints",
      "Produced Instagram posts, stories, and reel graphics that drove engagement",
      "Built marketing collateral — posters, flyers, and offer creatives — for offline campaigns",
      "Established a reusable design system to speed up day-to-day content",
      "Collaborated with the founders to translate brand vision into clear visuals",
    ],
    tags: [
      "Figma",
      "Canva",
      "Photoshop",
      "Illustrator",
      "Branding",
      "Social Media Design",
      "UI/UX",
      "Web Design",
    ],
  },
  {
    label: "Case Study 03",
    title: "Design Head",
    org: "OSS Club & DDQ Club, AIT Pune",
    location: "On-campus",
    overview:
      "Led the design wing for two student clubs at Army Institute of Technology — owning visual identity, event branding, and campaign creatives that drove participation across campus.",
    learned: [
      "Owned visual identity across both clubs — posters, social media, and event collateral",
      "Designed event branding for hackathons, talks, and community sessions",
      "Built reusable templates and brand guidelines to keep output consistent",
      "Led a team of designers — assigned work, reviewed creatives, and shipped on tight timelines",
      "Translated technical events into clear, engaging visuals for non-technical audiences",
      "Drove higher event participation through stronger pre-event campaign design",
    ],
    tags: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Canva",
      "Branding",
      "Event Design",
      "Poster Design",
      "Team Leadership",
    ],
  },
];

const noiseUrl =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const notch =
  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-[#efece7] md:px-12 md:py-32"
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-24 z-10 hidden h-12 w-12 items-center justify-center rounded-md bg-[#D04A1F] md:flex"
      >
        <span className="text-2xl text-amber-300">✦</span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.06] px-4 py-2 text-[11px] font-mono font-semibold tracking-[0.25em] text-[#efece7]/80 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#D04A1F]" />
          <span>02 &nbsp; EXPERIENCE</span>
        </div>

        <h2 className="mt-16 text-4xl font-black uppercase leading-[0.95] tracking-tighter sm:text-5xl md:mt-24 md:text-7xl md:leading-[0.9] lg:text-8xl">
          Where I&apos;ve
          <br />
          been shipping.
        </h2>

        <div className="mt-12 flex flex-col items-end md:mt-16">
          <div className="flex w-full max-w-md items-center gap-3 text-[#efece7]/40">
            <span className="text-lg text-amber-400">✦</span>
            <span className="block h-px flex-1 bg-[#efece7]/30" />
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#efece7]/70 md:text-lg">
            A short timeline of the work that taught me the most — freelance
            builds, coursework, and side projects where I learned to actually
            finish things.
          </p>
        </div>

        <ol className="mt-24 space-y-6 md:mt-32">
          {roles.map((role) => (
            <li
              key={role.title}
              className="group relative bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.07] md:p-10"
              style={{ clipPath: notch }}
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#efece7]/60">
                    <span className="h-2.5 w-2.5 bg-[#D04A1F]" />
                    <span>{role.label}</span>
                  </div>

                  <h3 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl">
                    {role.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#efece7]/60 md:text-base">
                    {role.orgLink ? (
                      <a
                        href={role.orgLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 font-semibold text-[#efece7]/85 transition-colors hover:text-[#D04A1F]"
                      >
                        <span>{role.org}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                          <path d="M7 17 17 7" />
                          <path d="M8 7h9v9" />
                        </svg>
                      </a>
                    ) : (
                      <span className="font-semibold text-[#efece7]/85">{role.org}</span>
                    )}
                    <span aria-hidden="true">·</span>
                    <span>{role.location}</span>
                  </div>

                  <div className="mt-8">
                    <div className="font-mono text-lg font-semibold uppercase tracking-[0.2em] text-[#D04A1F] md:text-xl">
                      Overview
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#efece7]/80 md:text-lg">
                      {role.overview}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="font-mono text-lg font-semibold uppercase tracking-[0.2em] text-[#D04A1F] md:text-xl">
                      Key Achievements
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#efece7]/75 md:text-base">
                      {role.learned.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 block h-1 w-3 flex-none bg-[#D04A1F]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:max-w-[220px] md:justify-end">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#efece7]/20 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#efece7]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
