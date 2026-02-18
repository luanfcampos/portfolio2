export function ContactSection() {
  const emailTo = 'seuemail@exemplo.com'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') ?? '').toString()
    const fromEmail = (formData.get('email') ?? '').toString()
    const message = (formData.get('message') ?? '').toString()

    const subject = `Contato via portfólio - ${name || 'Novo contato'}`
    const bodyLines = [
      name && `Nome: ${name}`,
      fromEmail && `E-mail de contato: ${fromEmail}`,
      '',
      'Mensagem:',
      message || '(sem mensagem)',
    ].filter(Boolean)

    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = mailtoUrl
  }

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
          Se você quiser trocar uma ideia sobre um projeto ou oportunidade, é só me mandar uma
          mensagem pelo formulário abaixo ou pelas minhas redes.
        </p>
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-black/30 p-6 text-xs text-slate-200 md:grid-cols-[2fr,1.4fr]">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-[0.7rem] font-medium text-slate-300">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Como eu posso te chamar?"
                className="h-9 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[0.75rem] text-slate-100 outline-none ring-accent/40 transition focus:border-accent focus:ring-1"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-[0.7rem] font-medium text-slate-300">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="h-9 w-full rounded-md border border-white/10 bg-black/40 px-3 text-[0.75rem] text-slate-100 outline-none ring-accent/40 transition focus:border-accent focus:ring-1"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-[0.7rem] font-medium text-slate-300">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Me conta um pouco sobre o que você precisa..."
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-[0.75rem] text-slate-100 outline-none ring-accent/40 transition focus:border-accent focus:ring-1"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex h-9 items-center justify-center rounded-full bg-accent px-4 text-[0.75rem] font-semibold text-white shadow-sm transition hover:bg-accent/90"
            >
              Enviar mensagem
            </button>
          </form>
          <div className="space-y-3 rounded-xl border border-dashed border-white/15 bg-black/40 p-4">
            <h3 className="text-[0.8rem] font-semibold text-slate-200">Redes & contato direto</h3>
            <ul className="space-y-2 text-[0.75rem]">
              <li>
                <span className="text-slate-400">E-mail: </span>
                <a
                  href="mailto:luanfcampos.dev@gmail.com"
                  className="text-accent hover:underline"
                >
                  luanfcampos.dev@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-400">GitHub: </span>
                <a
                  href="https://github.com/luanfcampos"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  github.com/luanfcampos
                </a>
              </li>
              <li>
                <span className="text-slate-400">LinkedIn: </span>
                <a
                  href="https://linkedin.com/in/luanfc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  linkedin.com/in/luanfc
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

