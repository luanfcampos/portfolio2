export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 sm:py-4">
        <a
          href="#hero"
          className="group flex items-center gap-3 text-xs font-medium tracking-tight text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-[0.7rem] font-semibold text-accent ring-1 ring-accent/20 transition group-hover:bg-accent group-hover:text-white">
            LF
          </span>
          <span className="hidden flex-col text-[0.7rem] leading-tight text-slate-300 sm:flex">
            <span className="font-semibold">Desenvolvedor Front End</span>
            <span className="text-[0.65rem] text-slate-500">
              React · TypeScript · Interfaces modernas
            </span>
          </span>
        </a>
        <div className="flex gap-4 text-[0.7rem] font-medium text-slate-300 sm:gap-6">
          <a href="#about" className="hover:text-accent transition-colors">
            Sobre
          </a>
          <a href="#projects" className="hover:text-accent transition-colors">
            Projetos
          </a>
          <a href="#skills" className="hover:text-accent transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contato
          </a>
        </div>
      </nav>
    </header>
  )
}

