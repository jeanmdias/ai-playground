export interface Experiment {
  id: string
  title: string
  description: string
  url?: string
}

export const experiments: Experiment[] = [
  {
    id: 'openspec',
    title: 'OpenSpec Workflow',
    description:
      'Workflow orientado a especificações para propor, planejar e implementar mudanças com auxílio de IA.',
    url: 'https://github.com/jeanmdias/ai-playground/tree/main/openspec',
  },
  {
    id: 'landing-page',
    title: 'Landing Page React',
    description:
      'Vitrine do lab construída com Vite, React, TypeScript e Tailwind CSS seguindo boas práticas.',
  },
  {
    id: 'claude-api',
    title: 'Claude API Explorer',
    description:
      'Experimentos com a API da Anthropic: prompts, ferramentas, visão computacional e streaming.',
  },
]
