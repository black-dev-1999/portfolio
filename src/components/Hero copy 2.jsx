function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-28 pb-16 lg:min-h-[calc(100vh-72px)] lg:pt-20 lg:pb-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ================= LEFT ================= */}
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-base font-medium text-blue-400 sm:text-lg">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Karuppusamy
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl lg:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I build modern, responsive and scalable web applications using
            React.js, JavaScript, Node.js, Express.js, MongoDB, PHP and MySQL.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500 sm:px-6"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400 sm:px-6"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex gap-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="order-1 flex flex-col items-center justify-center lg:order-2">
          {/* Profile Image */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />

            {/* Image */}
            <div className="relative rounded-full border-2 border-blue-500/50 p-2">
              <img
                src="/profile.jpeg"
                alt="Karuppusamy - Full Stack Developer"
                className="
          h-52 w-52
          rounded-full
          object-cover
          object-top
          sm:h-60 sm:w-60
          lg:h-64 lg:w-64
        "
              />
            </div>
          </div>

          {/* Developer Code Card */}
          <div className="mt-8 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
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
