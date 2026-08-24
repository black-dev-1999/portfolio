import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-xl font-bold tracking-wide">
          <span className="text-blue-500">&lt;</span>
          KS
          <span className="text-blue-500">/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm text-slate-300 transition hover:text-blue-400"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-300 hover:text-blue-400"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
