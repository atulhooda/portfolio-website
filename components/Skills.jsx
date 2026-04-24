const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-neutral-50 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-neutral-500">
          <span>✦</span>
          <span>SKILLS</span>
        </div>

        <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
          A toolkit built for shipping memorable products.
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="border-t border-neutral-200 pt-6">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {group.title}
              </div>
              <ul className="space-y-3 text-base text-neutral-900">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-amber-500">✦</span>
                    <span>{item}</span>
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
