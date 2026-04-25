const githubUrl = "https://github.com/atulhooda";

const projects = [
  {
    name: "Engageo Agency",
    description:
      "Official site for Engageo Agency — my own studio shipping AI/ML and full-stack builds for clients. Service breakdown, case studies, and a clean inquiry flow.",
    tags: ["Next.js", "Tailwind", "Branding", "Web Design"],
    liveLink: "https://www.engageoagency.com/",
    repoLink: null,
    period: "2025",
  },
  {
    name: "Innerve — AIT Pune's Flagship Hackathon",
    description:
      "Official site for Innerve, the annual hackathon at Army Institute of Technology, Pune — event story, schedule, sponsors, and registration flow on a fast, animated frontend.",
    tags: ["Next.js", "Tailwind", "Web Design", "Frontend"],
    liveLink: "https://www.innerve.tech/",
    repoLink: null,
    period: "2025",
  },
  {
    name: "AIT MUN — Model United Nations",
    description:
      "Official site for AIT Model United Nations — committee details, agendas, registration, and a polished delegate experience built around the conference brand.",
    tags: ["Next.js", "Tailwind", "Web Design", "Frontend"],
    liveLink: "https://www.aitmun.in/",
    repoLink: null,
    period: "2025",
  },
  {
    name: "Researcher Agent",
    description:
      "Autonomous research agent that browses the web, calls tools, and synthesizes structured findings on any topic — multi-step planning with self-correction.",
    tags: ["Agents", "LangChain", "Tool Calling", "Python"],
    liveLink: null,
    repoLink: null,
    period: "2025",
  },
  {
    name: "Brand Voice Studio",
    description:
      "Generative AI workspace that learns a brand's tone from sample content and produces on-brand copy across blogs, social, and ad channels.",
    tags: ["LLMs", "Prompt Engineering", "OpenAI", "Next.js"],
    liveLink: null,
    repoLink: null,
    period: "2025",
  },
  {
    name: "RAG Knowledge Assistant",
    description:
      "Retrieval-augmented chatbot that answers from custom document sets — embeddings, vector search, and an LLM pipeline behind a clean UI.",
    tags: ["Python", "LangChain", "RAG", "Vector DB"],
    liveLink: null,
    repoLink: null,
    period: "2025",
  },
  {
    name: "Agentic Workflow Lab",
    description:
      "Experiments in autonomous AI agents — tool calling, multi-step planning, and workflow automation for repeatable real-world tasks.",
    tags: ["Agents", "LangChain", "Python", "Automation"],
    liveLink: null,
    repoLink: null,
    period: "2024 — 2025",
  },
];

const noiseUrl =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const notch =
  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="inline-flex items-center gap-3 self-start rounded-full bg-white/[0.06] px-4 py-2 text-[11px] font-mono font-semibold tracking-[0.25em] text-[#efece7]/80 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#D04A1F]" />
            <span>04 &nbsp; PROJECTS</span>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-[#efece7] px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-white"
          >
            <GithubIcon />
            <span>View all on GitHub</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <h2 className="mt-16 text-3xl font-black uppercase leading-[0.95] tracking-tighter md:mt-24 md:text-5xl lg:text-6xl">
          Things I built
          <br />
          on purpose.
          <br />
          <span className="text-[#efece7]/40">Not tutorials.</span>
        </h2>

        <div className="mt-12 flex flex-col items-end md:mt-16">
          <div className="flex w-full max-w-md items-center gap-3 text-[#efece7]/40">
            <span className="text-lg text-amber-400">✦</span>
            <span className="block h-px flex-1 bg-[#efece7]/30" />
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#efece7]/70 md:text-lg">
            A few selected builds — client work, AI experiments, and side
            projects where I learned the most by shipping. Full archive lives on
            GitHub.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:mt-32 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="group relative flex flex-col bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.08] md:p-10"
              style={{ clipPath: notch }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#efece7]/60">
                  <span className="h-2.5 w-2.5 bg-[#D04A1F]" />
                  <span>0{i + 1} &nbsp; {project.period}</span>
                </div>
                <span className="text-[#efece7]/30 transition-colors group-hover:text-[#D04A1F]">
                  <ArrowIcon />
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-extrabold tracking-tight md:text-3xl">
                {project.name}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[#efece7]/70 md:text-base">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[#efece7]/20 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#efece7]/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <div className="h-px w-full bg-[#efece7]/10" />
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D04A1F] px-4 py-2 font-semibold text-[#efece7] transition hover:bg-[#b53e18]"
                    >
                      <span>Visit Live</span>
                      <ArrowIcon />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#efece7]/15 px-4 py-2 font-medium text-[#efece7]/40">
                      Coming soon
                    </span>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#efece7]/20 px-4 py-2 font-semibold text-[#efece7]/85 transition hover:border-[#efece7]/50 hover:text-[#efece7]"
                    >
                      <GithubIcon />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-[#efece7]/20 px-6 py-3 text-sm font-semibold text-[#efece7]/85 transition hover:border-[#efece7]/60 hover:text-[#efece7]"
          >
            <GithubIcon />
            <span>See the full archive on GitHub</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
