export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} Portfólio Front End. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="hover:text-accent transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="hover:text-accent transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  )
}

