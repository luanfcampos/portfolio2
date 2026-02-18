export type Project = {
  id: string
  image: string
  title: string
  description: string
  techs: string[]
  demoUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfólio Front End',
    image:'/portfoliodev.png',
    description:
      'Este próprio portfólio, focado em uma experiência limpa, responsiva e com Tailwind CSS.',
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    demoUrl: '#hero',
    repoUrl: 'https://github.com/luanfcampos/portfolio2'
  },
    {
    id: 'adminpanel',
    title: 'Corporate Admin',
    image: '/admin.png',
    description:
      'Painel administrativo corporativo para gestão de usuários, desenvolvido com foco em boas práticas de Front-end, arquitetura escalável e experiência do usuário.',
    techs: ['React', 'Typescript', 'Vite,', 'Tailwind CSS', 'React Router', 'React Router'],
    demoUrl: 'https://corporate-admin-alpha.vercel.app/',
    repoUrl: 'https://github.com/luanfcampos/corporate-admin'
  },
    {
    id: 'kanban',
    title: 'Kanban Board',
    image: '/kanban.png',
    description:
      'Um gerenciador de tarefas visual, intuitivo e performático estilo Kanban, desenvolvido para organizar fluxos de trabalho pessoais.',
    techs: ['React', 'Typescript', 'Vite,', 'Tailwind CSS', 'Native Drag & Drop API'],
    demoUrl: 'https://kanban-board-seven-flame.vercel.app/',
    repoUrl: 'https://github.com/luanfcampos/kanban-board'
  },
  {
    id: 'market',
    title: 'OrgânicosMarket',
    image: '/organicmarket.png',
    description:
      'Marketplace de Produtos Orgânicos',
    techs: ['React', 'TypeScript', 'Vite,', 'Tailwind CSS'],
    demoUrl: 'https://organic-marketplace-hazel.vercel.app/',
    repoUrl: 'https://github.com/luanfcampos/organic-marketplace'
  },
  {
    id: 'ecclesia',
    title: 'Ecclesia Flow',
    image: '/ecclesiaflow.png',
    description:
      'Uma Landing Page moderna, responsiva e de alta performance para um SaaS de gestão de igrejas, desenvolvida com foco no público brasileiro.',
    techs: ['AOS (Animate On Scroll)', 'Alpine.js', 'Vite,', 'Tailwind CSS'],
    demoUrl: 'https://luanfcampos.github.io/EcclesiaFlowLP/',
    repoUrl: 'https://github.com/luanfcampos/EcclesiaFlowLP'
  },
  {
    id: 'memory',
    title: 'Jogo Da Memória',
    image: '/devmemory.png',
    description:
      'Um jogo da memória simples e interativo, desenvolvido com React, TypeScript e estilização com Styled Components.',
    techs: ['React', 'TypeScript', 'Vite,', 'Styled Components'],
    demoUrl: 'https://luanfcampos.github.io/devmemory/',
    repoUrl: 'https://github.com/luanfcampos/devmemory'
  },
  {
    id: 'oficina',
    title: 'Oficina Especializada',
    image: '/oficina.png',
    description:
      'Landing page moderna e responsiva para uma oficina preparadora de carros, desenvolvida com HTML, CSS e JavaScript puro. ',
    techs: ['HTML', 'JavaScript', 'CSS'],
    demoUrl: 'https://luanfcampos.github.io/oficina-lp/',
    repoUrl: 'https://github.com/luanfcampos/oficina-lp'
  },
    {
    id: 'bicho',
    title: 'Jogo do Bicho ',
    image: '/bicho.png',
    description:
      'um simulador educativo que permite aos usuários aprender e praticar o jogo do bicho de forma segura, sem envolver apostas reais',
    techs: ['React', 'Vite'],
    demoUrl: 'https://jogo-do-bicho-ten.vercel.app/',
    repoUrl: 'https://github.com/luanfcampos/jogo-do-bicho'
  },

]

