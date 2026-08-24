function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-lg text-blue-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Karuppusamy
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build modern, responsive and scalable web applications using
            React.js, JavaScript, Node.js, Express.js, MongoDB, PHP and MySQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/karu-1999"
              target="_blank"
              className="text-slate-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/karuppusamy-p-0349b1197/"
              target="_blank"
              className="text-slate-400 hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Developer card */}
        <div className="hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
              {`const developer = {
  name: "Karuppusamy",
  role: "Full Stack Developer",

  skills: [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PHP",
    "MySQL"
  ],

  available: true
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
