## Context

O repositório `ai-playground` é um lab pessoal sem framework ou stack definido. A landing page será um projeto React standalone dentro do diretório `landing-page/`, sem interferir em outros experimentos. O público-alvo é desenvolvedor — o visual pode ser técnico, limpo e moderno.

## Goals / Non-Goals

**Goals:**
- Aplicação React com Vite + TypeScript scaffolded em `landing-page/`
- Layout responsivo com seções: Hero, Sobre, Experimentos e Footer
- Estilização com Tailwind CSS v3
- Acessibilidade básica (ARIA labels, contraste, semântica HTML5)
- Componentização clara — um componente por seção

**Non-Goals:**
- Backend, API ou autenticação
- CMS ou conteúdo dinâmico
- Deploy / CI-CD (fora do escopo desta change)
- Testes automatizados (pode ser adicionado em change futura)

## Decisions

### 1. Vite + React + TypeScript
**Decisão**: Usar `npm create vite@latest` com template `react-ts`.
**Rationale**: Vite oferece HMR rápido e build otimizado. TypeScript garante type-safety sem overhead em projetos pequenos.
**Alternativa descartada**: Create React App — deprecated e lento.

### 2. Tailwind CSS v3 via CDN (play CDN para prototipagem) ou instalação local
**Decisão**: Instalação local via `npm install tailwindcss postcss autoprefixer` com `npx tailwindcss init`.
**Rationale**: CDN não suporta purging de classes — bundle grande em produção. Instalação local é a prática recomendada.
**Alternativa descartada**: CSS Modules — mais verboso para um projeto de vitrine.

### 3. Estrutura de componentes
**Decisão**: `src/components/<Section>/index.tsx` para cada seção.
**Rationale**: Separação clara de responsabilidades, fácil de estender com novos experimentos.

### 4. Dados de experimentos mockados
**Decisão**: Array de objetos estático em `src/data/experiments.ts`.
**Rationale**: Sem backend, a fonte de dados mais simples é um arquivo TypeScript com type-safe data. Fácil de evoluir para uma API futura.

## Risks / Trade-offs

- **[Tailwind classe-purge)** → Se classes dinâmicas forem usadas com template literals sem safelist, o build pode remover classes necessárias. Mitigação: usar classes completas, sem concatenação parcial.
- **[Conteúdo estático)** → Os cards de experimentos precisam ser atualizados manualmente a cada novo projeto. Mitigação: documentar no README do diretório como adicionar novos experimentos.
