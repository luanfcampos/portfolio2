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
]

