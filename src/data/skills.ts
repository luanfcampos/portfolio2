export type SkillCategory = {
  id: string
  label: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next', 'Vite', 'Tailwind CSS'],
  },
    {
    id: 'backend',
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJs', 'GraphQL', 'Firebase', 'Supabase'],
  },
      {
    id: 'mobile',
    label: 'mobile',
    items: ['React Native', 'Flutter'],
  },
  {
    id: 'tools',
    label: 'Ferramentas',
    items: ['Git', 'GitHub', 'Figma', 'VS Code', 'Photoshop'],
  },
  {
    id: 'practices',
    label: 'Boas práticas',
    items: ['Componentização', 'UX/UI básico', 'Acessibilidade', 'Responsividade'],
  },
]

