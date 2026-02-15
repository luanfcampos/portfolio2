import { projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 py-12"
    >
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Projetos
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Alguns projetos que mostram como eu penso interfaces, código e experiência de uso.
          </p>
        </div>
      </header>
      <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-slate-300 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between gap-3 rounded-xl border border-white/5 bg-black/40 p-4 text-left shadow-sm transition hover:border-accent/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
          >
            <img className="h-64 rounded-2xl border border-white/10" src={project.image} alt="" />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-[0.75rem] leading-relaxed text-slate-300">
                {project.description}
              </p>
            </div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 px-2 py-1 text-[0.65rem] font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            {(project.demoUrl || project.repoUrl) && (
              <div className="mt-2 flex flex-wrap gap-2 text-[0.7rem]">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="rounded-full bg-accent/90 px-3 py-1 font-semibold text-white transition hover:bg-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver projeto
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="rounded-full border border-white/15 px-3 py-1 font-medium text-slate-200 transition hover:border-accent hover:text-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver código
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

