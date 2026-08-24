const projects = [
  {
    title: "Hospitality Pulse",
    subtitle: "Multi-Hotel Management System",
    period: "Nov 2024 – Jan 2026",
    description:
      "Built a multi-hotel administration system for managing hotels, rooms, categories, amenities, staff, checklists, tasks, and operational reports.",
    features: [
      "Multi-hotel management",
      "Hotel-wise staff management",
      "Checklist → Task Header → Tasks workflow",
      "Staff task assignment",
      "Mobile-based task execution",
      "Admin dashboard and issue reports",
    ],
    technologies: ["React.js", "PHP", "MySQL", "REST API", "JavaScript"],
  },

  {
    title: "Emstyle",
    subtitle: "Healthcare Management System",
    period: "Dec 2023 – Oct 2025",
    description:
      "Developed a healthcare management system for managing providers, patient records, registration, provider assignments, notifications, and treatment status.",
    features: [
      "Provider and patient management",
      "Location-based patient registration",
      "Patient onboarding workflow",
      "Provider assignment",
      "Email and push notifications",
      "Provider dashboard",
    ],
    technologies: ["React.js", "PHP", "MySQL", "JavaScript"],
  },

  {
    title: "Paperboy",
    subtitle: "Article Publishing Platform",
    period: "Oct 2024 – Dec 2024",
    description:
      "Built a content publishing platform where users can create and publish articles with user authentication, dashboards, engagement tracking, and revenue-sharing functionality.",
    features: [
      "User authentication",
      "Article creation and publishing",
      "Article management",
      "User dashboards",
      "Revenue-sharing system",
      "Payment and earnings logic",
    ],
    technologies: ["React.js", "PHP", "MySQL", "REST API"],
  },

  {
    title: "Plano Tamil School (PTS)",
    subtitle: "School Management System",
    period: "Dec 2022 – Mar 2023",
    description:
      "Developed a school management system with parent, student, teacher, and administrator features for tracking academic performance and student activities.",
    features: [
      "Parent portal",
      "Student management",
      "Attendance management",
      "Academic performance reports",
      "Teacher dashboard",
      "Admin dashboard",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects I've Worked On
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Here are some of the real-world applications I have contributed to
            during my professional experience.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]"
            >
              <div className="grid lg:grid-cols-[280px_1fr]">
                {/* Left */}
                <div className="border-b border-white/10 bg-slate-900/60 p-7 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-400">
                      0{index + 1}
                    </span>

                    <span className="text-xs text-slate-500">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{project.title}</h3>

                  <p className="mt-2 text-sm font-medium text-blue-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Right */}
                <div className="p-7">
                  <p className="max-w-3xl leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-7">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Key Contributions
                    </h4>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-400"
                        >
                          <span className="mt-1 text-blue-400">✓</span>

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
