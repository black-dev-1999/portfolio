function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-blue-400">About Me</p>

        <h2 className="text-4xl font-bold">Building web applications</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="leading-8 text-slate-400">
              I am a Full Stack Developer with 3+ years of experience in
              developing web applications.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              My primary focus is building clean and reusable frontend
              applications using React.js and JavaScript.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I also have experience developing REST APIs and backend
              applications using Node.js, Express.js and PHP.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Info title="Experience" value="3+ Years" />
            <Info title="Frontend" value="React.js" />
            <Info title="Backend" value="Node.js" />
            <Info title="Database" value="MongoDB / MySQL" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 font-semibold text-white">{value}</p>
    </div>
  );
}

export default About;
