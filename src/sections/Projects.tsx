export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 py-12"
    >
      <header className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Projetos
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Em breve, cartões com os meus principais trabalhos e cases.
          </p>
        </div>
      </header>
      <div className="grid gap-4 rounded-2xl border border-dashed border-white/10 p-6 text-center text-xs text-slate-400">
        <p>
          Aqui eu vou listar meus projetos com título, descrição, tecnologias usadas e links para
          ver online e no GitHub.
        </p>
      </div>
    </section>
  )
}

