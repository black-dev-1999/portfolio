function Experience() {
  return (
    <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-blue-400">Career</p>

        <h2 className="mt-2 text-4xl font-bold">Experience</h2>

        <div className="mt-10 border-l border-blue-500/30 pl-8">
          <div className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-blue-500" />

            <p className="text-sm text-blue-400">Software Engineer</p>

            <h3 className="mt-2 text-2xl font-semibold">
              CAP Digisoft Solutions
            </h3>

            <p className="mt-1 text-slate-500">2022 – Present</p>

            <p className="mt-6 max-w-3xl leading-8 text-slate-400">
              Developed responsive web applications and REST APIs. Worked with
              React.js, JavaScript, PHP, MySQL and backend technologies. Built
              reusable UI components, integrated APIs and optimized application
              performance.
            </p>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>→ Developed reusable React components</li>
              <li>→ Integrated REST APIs</li>
              <li>→ Worked with MySQL databases</li>
              <li>→ Implemented responsive UI designs</li>
              <li>→ Debugged and optimized applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
