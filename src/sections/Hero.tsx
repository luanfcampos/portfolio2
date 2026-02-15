export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col justify-center gap-6 pb-16 pt-12 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-radial from-accent/15 via-transparent to-transparent absolute -left-10 top-0 h-64 w-64 blur-3xl" />
      </div>

      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accent">
        Portfólio · Front End
      </p>
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        Olá, eu sou{' '}
        <span className="text-accent">
          Luan Ferreira
        </span>
        <span className="mt-2 block text-sm font-normal text-slate-300 sm:text-base">
          Desenvolvedor Front End focado em interfaces modernas, acessíveis e performáticas.
        </span>
      </h1>
      <p className="max-w-xl text-sm leading-relaxed text-slate-300">
        Crio interfaces web claras e fluidas, com atenção aos detalhes, animações suaves e código
        bem estruturado. Aqui você encontra alguns dos projetos em que mais aprendi e evoluí como
        dev.
      </p>
      <div className="mt-1 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-accent/90"
        >
          Ver projetos
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-accent hover:text-accent"
        >
          Falar comigo
        </a>
      </div>
    </section>
  )
}

