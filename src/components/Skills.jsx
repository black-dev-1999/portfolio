const skills = [
  "JavaScript",
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "PHP",
  "MySQL",
  "Redux",
  "Redux Saga",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-blue-400">My Skills</p>

        <h2 className="mt-2 text-4xl font-bold">Technologies I work with</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-slate-950 p-5 text-center text-slate-300 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
