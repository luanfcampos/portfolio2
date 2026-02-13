export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 py-12"
    >
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Contato
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          Nesta seção eu vou adicionar um formulário simples e links para meu GitHub, LinkedIn e
          e-mail.
        </p>
        <div className="rounded-2xl border border-dashed border-white/10 p-6 text-xs text-slate-400">
          <p>
            Placeholder de contato — na próxima etapa, eu coloco aqui o formulário e os links
            clicáveis para as minhas redes.
          </p>
        </div>
      </div>
    </section>
  )
}

