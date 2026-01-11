# Magic RPTable

Projeto para jogar RPG de mesa com amigos.

## Stack

- **Runtime:** Bun
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS + styled-components
- **Ícones:** HeroIcons ([Figma](https://www.figma.com/design/2dAwbJ7KZhq9itSnNVQvw4/Heroicons--Community-?node-id=1695-333&t=EiBJitCm7K5KwiwL-0) | [GitHub](https://github.com/tailwindlabs/heroicons))
- **Testes:** Bun Test (unitários) + Playwright (E2E)
- **Lint:** ESLint + Prettier

## Pré-requisitos

- [Bun](https://bun.sh) instalado

## Instalação

```bash
bun install
```

## Scripts

- `bun run dev` - Inicia servidor de desenvolvimento
- `bun run build` - Build para produção
- `bun run preview` - Preview do build de produção
- `bun test` - Executa testes unitários (Bun Test)
- `bun run test:jest` - Executa testes com Jest (alternativa)
- `bun run test:e2e` - Executa testes E2E com Playwright
- `bun run lint` - Executa ESLint
- `bun run format` - Formata código com Prettier
- `bun run type-check` - Verifica tipos TypeScript

## Estrutura

```
src/
├── components/     # Componentes reutilizáveis
├── hooks/          # Hooks customizados
├── contexts/       # Contexts e Providers
├── utils/          # Funções utilitárias
├── types/          # Tipos globais
├── styles/         # Estilos globais e tema
└── pages/          # Páginas/Views principais
```

## Path Aliases

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@styles/*` → `src/styles/*`
- `@hooks/*` → `src/hooks/*`
- `@contexts/*` → `src/contexts/*`
- `@utils/*` → `src/utils/*`
- `@types/*` → `src/types/*`
- `@pages/*` → `src/pages/*`
