## 1. Scaffold do projeto React

- [x] 1.1 Executar `npm create vite@latest landing-page -- --template react-ts` na raiz do repositório
- [x] 1.2 Instalar dependências: `cd landing-page && npm install`
- [x] 1.3 Instalar Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
- [x] 1.4 Configurar `tailwind.config.js` com o path correto (`./src/**/*.{ts,tsx}`)
- [x] 1.5 Adicionar diretivas Tailwind ao `src/index.css` (`@tailwind base/components/utilities`)
- [x] 1.6 Limpar o conteúdo padrão de `App.tsx` e `index.css`

## 2. Dados mockados de experimentos

- [x] 2.1 Criar `src/data/experiments.ts` com a interface `Experiment` (id, title, description, url?)
- [x] 2.2 Popular o arquivo com ao menos 3 experimentos de exemplo

## 3. Componentes de seção

- [x] 3.1 Criar `src/components/Hero/index.tsx` com título "ai-playground" e subtítulo
- [x] 3.2 Criar `src/components/About/index.tsx` com descrição do lab
- [x] 3.3 Criar `src/components/ExperimentCard/index.tsx` com props `title`, `description`, `url?`
- [x] 3.4 Criar `src/components/Experiments/index.tsx` que renderiza a grade de `ExperimentCard`
- [x] 3.5 Criar `src/components/Footer/index.tsx` com crédito e link para o GitHub

## 4. Composição e layout

- [x] 4.1 Atualizar `App.tsx` para compor `<Hero>`, `<About>`, `<Experiments>` e `<Footer>` dentro de `<main>`
- [x] 4.2 Adicionar `<header>` com navegação âncora para as seções
- [x] 4.3 Garantir semântica HTML5: `<header>`, `<main>`, `<section>`, `<footer>` nos lugares corretos

## 5. Responsividade e estilo

- [x] 5.1 Aplicar classes Tailwind responsivas (`sm:`, `md:`, `lg:`) no Hero
- [x] 5.2 Configurar grade responsiva de cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- [x] 5.3 Definir paleta de cores e tipografia coerente via Tailwind (dark background, accent color)
- [x] 5.4 Garantir contraste mínimo WCAG AA nos textos principais

## 6. Acessibilidade

- [x] 6.1 Adicionar `aria-label` em links sem texto descritivo (ícone GitHub no footer)
- [x] 6.2 Verificar navegação por teclado (Tab order, focus visible)
- [x] 6.3 Adicionar `lang="pt-BR"` no `index.html`

## 7. Validação final

- [x] 7.1 Rodar `npm run dev` e verificar todas as seções no browser
- [x] 7.2 Testar em viewport 375px (mobile) e 1280px (desktop)
- [x] 7.3 Rodar `npm run build` e verificar que o build termina sem erros
