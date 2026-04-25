const skillGroups = [
  {
    title: "Machine Learning & AI",
    description: "Practical models that ship in real products.",
    items: [
      "Scikit-learn",
      "PyTorch / TensorFlow",
      "Model Training",
      "Feature Engineering",
      "Model Evaluation",
      "Data Preprocessing",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Generative AI",
    description: "LLM-powered features and content systems.",
    items: [
      "LLM Applications",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "OpenAI / HuggingFace APIs",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
        <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
      </svg>
    ),
  },
  {
    title: "Agentic AI",
    description: "Autonomous workflows that take real action.",
    items: ["AI Agents", "LangChain", "Tool Calling", "Workflow Automation"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
      </svg>
    ),
  },
  {
    title: "Programming Languages",
    description: "The grammar I think and ship in.",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
      </svg>
    ),
  },
  {
    title: "Database & Cloud",
    description: "Stateful systems and the infra to host them.",
    items: [
      "MongoDB",
      "PostgreSQL",
      "NeonDB",
      "Prisma",
      "AWS",
      "Docker",
      "Deployment (Vercel / EC2)",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
        <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      </svg>
    ),
  },
  {
    title: "Development Tools",
    description: "The kit on every project, every day.",
    items: ["Git / GitHub", "VS Code", "Figma", "Postman", "TurboRepo", "Linux"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
      </svg>
    ),
  },
  {
    title: "Soft Skills",
    description: "How I actually work with people.",
    items: [
      "Communication",
      "Collaboration",
      "Problem Solving",
      "Adaptability",
      "Management",
      "Leadership",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
      </svg>
    ),
  },
];

const noiseUrl =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const notch =
  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))";

export default function Skills() {
  return (
    <section
      id="skills"
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
        className="pointer-events-none absolute left-8 top-[36%] z-10 hidden flex-col gap-[3px] md:flex"
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
          <span>03 &nbsp; THE TOOLKIT</span>
        </div>

        <h2 className="mt-16 text-3xl font-black uppercase leading-[0.95] tracking-tighter text-neutral-900 md:mt-24 md:text-5xl lg:text-6xl">
          Tools I reach for
          <br />
          when something
          <br />
          <span className="text-neutral-400">actually has to ship.</span>
        </h2>

        <div className="mt-12 flex flex-col items-end md:mt-16">
          <div className="flex w-full max-w-md items-center gap-3 text-neutral-400">
            <span className="text-lg text-amber-500">✦</span>
            <span className="block h-px flex-1 bg-neutral-400/50" />
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
            A pragmatic stack for taking ideas from sketch to production —
            covering interface, infrastructure, intelligence, and identity.
          </p>
        </div>

        <div className="mt-28 grid grid-cols-1 gap-6 md:mt-36 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="group relative flex flex-col bg-white p-7 shadow-[0_4px_20px_rgb(0,0,0,0.04)] md:p-8"
              style={{ clipPath: notch }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-700">
                  <span className="h-2.5 w-2.5 bg-[#D04A1F]" />
                  <span>0{i + 1} &nbsp; {group.title}</span>
                </div>
                <span className="text-neutral-300 transition-colors group-hover:text-[#D04A1F]">
                  {group.icon}
                </span>
              </div>

              <div className="mt-10 text-3xl font-extrabold tracking-tight text-neutral-900 md:mt-12 md:text-4xl">
                {group.title}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {group.description}
              </p>

              <div className="mt-6 h-px w-full bg-neutral-200" />

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[12px] font-medium text-neutral-700 transition-colors hover:border-[#D04A1F]/30 hover:bg-[#D04A1F]/5 hover:text-[#D04A1F]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
