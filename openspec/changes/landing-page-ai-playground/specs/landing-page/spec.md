## ADDED Requirements

### Requirement: Hero section com título e subtítulo
A landing page SHALL exibir uma seção hero de largura total com o título "ai-playground" em destaque e um subtítulo descrevendo o propósito do lab.

#### Scenario: Renderização do hero
- **WHEN** o usuário acessa a página
- **THEN** o título "ai-playground" é visível na viewport inicial sem scroll

#### Scenario: Subtítulo presente
- **WHEN** o usuário acessa a página
- **THEN** um subtítulo descritivo aparece abaixo do título principal

### Requirement: Seção "Sobre"
A landing page SHALL exibir uma seção "Sobre" com descrição do propósito do repositório.

#### Scenario: Conteúdo sobre visível
- **WHEN** o usuário rola a página
- **THEN** uma seção com título "Sobre" e texto explicativo é exibida

### Requirement: Cards de experimentos
A landing page SHALL exibir uma grade de cards representando experimentos do lab, com título e descrição breve.

#### Scenario: Grade de cards renderizada
- **WHEN** o usuário acessa a seção de experimentos
- **THEN** ao menos 3 cards são exibidos com título e descrição

#### Scenario: Card com link opcional
- **WHEN** um experimento possui URL associada
- **THEN** o card exibe um link clicável para o experimento

### Requirement: Footer com informações do projeto
A landing page SHALL exibir um footer com o nome do projeto e link para o repositório GitHub.

#### Scenario: Footer visível
- **WHEN** o usuário chega ao fim da página
- **THEN** um footer é exibido com texto de crédito e link para o GitHub

### Requirement: Layout responsivo
A landing page SHALL ser responsiva, adaptando-se a viewports mobile (≥320px), tablet (≥768px) e desktop (≥1280px).

#### Scenario: Visualização mobile
- **WHEN** a página é acessada em viewport de 375px de largura
- **THEN** todo o conteúdo é legível sem scroll horizontal

#### Scenario: Grade responsiva de cards
- **WHEN** a página é acessada em desktop
- **THEN** os cards de experimentos são exibidos em múltiplas colunas

### Requirement: Acessibilidade básica
A landing page SHALL usar semântica HTML5 correta e atributos ARIA onde necessário, garantindo navegação por teclado.

#### Scenario: Estrutura semântica
- **WHEN** a página é inspecionada
- **THEN** os elementos `<header>`, `<main>`, `<section>`, `<footer>` são usados corretamente

#### Scenario: Links acessíveis
- **WHEN** um link não possui texto descritivo
- **THEN** um atributo `aria-label` é fornecido
