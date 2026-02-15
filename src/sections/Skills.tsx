import { skillCategories } from '../data/skills'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-12"
    >
      <div className="space-y-6">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Skills
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Aqui eu vou organizar minhas skills por categorias (Frontend, Ferramentas, etc.) com as
          tecnologias que eu mais uso no dia a dia.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-slate-200"
            >
              <h3 className="mb-3 text-[0.8rem] font-semibold uppercase tracking-wide text-slate-300">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-2 py-1 text-[0.65rem] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

