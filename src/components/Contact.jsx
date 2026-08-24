function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-blue-400">Contact</p>

        <h2 className="mt-2 text-4xl font-bold">Let's Work Together</h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">
          I'm currently looking for new opportunities. If you have a project or
          job opportunity, feel free to contact me.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:karuppusamy58010@gmail.com"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/karuppusamy-p-0349b1197/"
            target="_blank"
            className="rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/karu-1999"
            target="_blank"
            className="rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-500 hover:text-blue-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
