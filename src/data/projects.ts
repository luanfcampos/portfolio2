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
]

