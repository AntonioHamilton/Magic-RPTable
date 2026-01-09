# Magic RPTable - Design System

Design System inspirado em temáticas de RPG e D&D, com tema escuro e paleta de cores mágica e épica.

## Paleta de Cores

### Backgrounds (Fundos)

**Valores:**
- `background-primary`: `#060e26` - Fundo principal - azul muito escuro
- `background-secondary`: `#151740` - Fundo secundário - azul escuro médio
- `background-tertiary`: `#1a1f3a` - Fundo terciário - para cards e containers
- `background-elevated`: `#252b47` - Fundo elevado - modais, dropdowns
- `background-hover`: `#1f2644` - Estado hover em elementos interativos

**Uso:**
- `background-primary`: Fundo principal da aplicação
- `background-secondary`: Seções e áreas secundárias
- `background-tertiary`: Cards, painéis, containers
- `background-elevated`: Modais, popovers, dropdowns
- `background-hover`: Estados de hover em elementos interativos

### Texts (Textos)

**Valores:**
- `text-primary`: `#e8e8ec` - Texto principal - branco suave
- `text-secondary`: `#d2d2d4` - Texto secundário - cinza claro
- `text-tertiary`: `rgba(144, 152, 175, 0.9)` - Texto terciário - cinza médio
- `text-highlighted`: `#c6c6c6` - Texto destacado
- `text-disabled`: `rgba(144, 152, 175, 0.5)` - Texto desabilitado
- `text-inverse`: `#060e26` - Texto para fundos claros

**Uso:**
- `text-primary`: Títulos, textos principais
- `text-secondary`: Subtítulos, textos de apoio
- `text-tertiary`: Labels, textos auxiliares
- `text-highlighted`: Texto em destaque
- `text-disabled`: Texto desabilitado
- `text-inverse`: Texto sobre fundos claros (botões primários)

### Accents & Highlights (Acentos e Destaques)

#### Cores Principais

**Valores:**
- **Azul**: `300: #6561d9`, `400: #4d49c7`, `500: #3a37a6`, `600: #2d2a8a`
- **Roxo**: `300: #7252a6`, `400: #5a3d99`, `500: #432d73`, `600: #34235a`
- **Magenta**: `300: #d44784`, `400: #b8326f`, `500: #8c2756`, `600: #6f1e43`
- **Dourado**: `300: #f5d674`, `400: #f2c94c`, `500: #e6a209`, `600: #cc8f08`

**Uso:**
- `blue-*`: Ações primárias, botões principais, links
- `purple-*`: Elementos mágicos, features especiais, acentos
- `magenta-*`: Destaques, alertas especiais, elementos únicos
- `gold-*`: Itens raros, elementos premium, conquistas

#### Cores de Status (RPG/D&D)

**Valores:**
- **Status**: `success: #10b981`, `success-dark: #059669`, `error: #ef4444`, `error-dark: #dc2626`, `warning: #f59e0b`, `warning-dark: #d97706`, `info: #3b82f6`, `info-dark: #2563eb`
- **Elementos**: `fire: #f97316`, `fire-dark: #ea580c`, `water: #0ea5e9`, `water-dark: #0284c7`, `earth: #84cc16`, `earth-dark: #65a30d`, `air: #a78bfa`, `air-dark: #8b5cf6`, `light: #fbbf24`, `light-dark: #f59e0b`, `dark: #6b21a8`, `dark-dark: #581c87`

**Uso:**
- `status-*`: Feedback de ações, validações, notificações
- `element-*`: Diferenciação visual de elementos mágicos, tipos de dano

#### Cores de Raridade (Itens/Personagens)

**Valores:**
- `common: #9ca3af`, `uncommon: #10b981`, `rare: #3b82f6`, `epic: #a855f7`, `legendary: #f59e0b`, `mythic: #ec4899`

**Uso:**
- Bordas, backgrounds ou textos para diferenciar raridade de itens/personagens

### Bordas e Divisores

**Valores:**
- `border-primary: rgba(144, 152, 175, 0.2)`, `border-secondary: rgba(144, 152, 175, 0.1)`, `border-accent: rgba(58, 55, 166, 0.5)`, `border-hover: rgba(58, 55, 166, 0.8)`, `border-focus: #3a37a6`

### Sombras

**Valores:**
- `shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3)`
- `shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)`
- `shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)`
- `shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.3)`
- `shadow-glow-blue: 0 0 20px rgba(58, 55, 166, 0.5)`
- `shadow-glow-purple: 0 0 20px rgba(67, 45, 115, 0.5)`
- `shadow-glow-gold: 0 0 20px rgba(242, 201, 76, 0.4)`

**Uso:**
- `shadow-*`: Elevação de elementos (cards, modais, botões)
- `shadow-glow-*`: Efeitos especiais, elementos mágicos, destaque

## Tipografia

### Fontes

**Fontes principais:**
- `font-primary`: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif` - Textos gerais
- `font-heading`: `"Poppins", font-primary` - Títulos
- `font-mono`: `"JetBrains Mono", "Fira Code", "Consolas", monospace` - Código/números

### Escala Tipográfica

**Tamanhos:** `xs: 0.75rem (12px)`, `sm: 0.875rem (14px)`, `base: 1rem (16px)`, `lg: 1.125rem (18px)`, `xl: 1.25rem (20px)`, `2xl: 1.5rem (24px)`, `3xl: 1.875rem (30px)`, `4xl: 2.25rem (36px)`, `5xl: 3rem (48px)`, `6xl: 3.75rem (60px)`

**Pesos:** `light: 300`, `normal: 400`, `medium: 500`, `semibold: 600`, `bold: 700`, `extrabold: 800`

**Line Heights:** `tight: 1.25`, `snug: 1.375`, `normal: 1.5`, `relaxed: 1.625`, `loose: 2`

**Letter Spacing:** `tighter: -0.05em`, `tight: -0.025em`, `normal: 0`, `wide: 0.025em`, `wider: 0.05em`, `widest: 0.1em`

### Uso Tipográfico com styled-components

```typescript
import styled from "styled-components";
import { theme } from "@styles/theme";

export const Heading1 = styled.h1`
  font-family: ${theme.fontFamily.heading};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
  color: ${theme.colors.text.primary};
`;

export const Heading2 = styled.h2`
  font-family: ${theme.fontFamily.heading};
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.25;
  color: ${theme.colors.text.primary};
`;

export const Heading3 = styled.h3`
  font-family: ${theme.fontFamily.heading};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.375;
  color: ${theme.colors.text.primary};
`;

export const BodyText = styled.p`
  font-family: ${theme.fontFamily.sans};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.colors.text.primary};
`;

export const SmallText = styled.small`
  font-size: 0.875rem;
  color: ${theme.colors.text.secondary};
`;
```

## Espaçamentos

### Scale de Espaçamento

**Valores:** `0: 0`, `1: 0.25rem (4px)`, `2: 0.5rem (8px)`, `3: 0.75rem (12px)`, `4: 1rem (16px)`, `5: 1.25rem (20px)`, `6: 1.5rem (24px)`, `8: 2rem (32px)`, `10: 2.5rem (40px)`, `12: 3rem (48px)`, `16: 4rem (64px)`, `20: 5rem (80px)`, `24: 6rem (96px)`

**Uso:**
- **Padding interno**: `space-2` a `space-6` para componentes (usar Tailwind ou `theme.spacing` do styled-components)
- **Margin entre elementos**: `space-4` a `space-8` para seções
- **Gap em grids/flex**: `space-4` a `space-6`

## Bordas e Radius

**Valores:** `none: 0`, `sm: 0.25rem (4px)`, `md: 0.5rem (8px)`, `lg: 0.75rem (12px)`, `xl: 1rem (16px)`, `2xl: 1.5rem (24px)`, `full: 9999px`

**Uso:**
- `radius-sm`: Inputs, badges pequenos
- `radius-md`: Botões, cards pequenos
- `radius-lg`: Cards, modais
- `radius-xl`: Containers grandes
- `radius-full`: Avatares, pills

## Transições e Animações

**Durações:** `fast: 150ms`, `normal: 250ms`, `slow: 350ms`

**Easing:** `ease-in: cubic-bezier(0.4, 0, 1, 1)`, `ease-out: cubic-bezier(0, 0, 0.2, 1)`, `ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)`

**Uso com styled-components:**
```typescript
const transitionAll = "all 250ms cubic-bezier(0.4, 0, 0.2, 1)";
const transitionColors = "color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
const transitionOpacity = "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)";
const transitionTransform = "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)";
```

## Breakpoints (Responsividade)

**Valores:** `xs: 320px`, `sm: 480px`, `md: 768px`, `lg: 992px`, `xl: 1200px`, `2xl: 1536px`

**Uso com styled-components:**
```typescript
import { css } from "styled-components";

const breakpoints = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1536px",
};

export const media = {
  md: (...args: TemplateStringsArray[]) => css`
    @media (min-width: ${breakpoints.md}) {
      ${css(...args)}
    }
  `,
  lg: (...args: TemplateStringsArray[]) => css`
    @media (min-width: ${breakpoints.lg}) {
      ${css(...args)}
    }
  `,
};
```

## Componentes Base

### Botões

#### Botão Primário
```typescript
import styled from "styled-components";
import { theme } from "@styles/theme";

export const ButtonPrimary = styled.button`
  background-color: ${theme.colors.blue[500]};
  color: ${theme.colors.text.primary};
  border: none;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.md};
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.blue[400]};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4),
      0 2px 4px -1px rgba(0, 0, 0, 0.3);
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.blue[600]};
  }

  &:disabled {
    background-color: ${theme.colors.background.tertiary};
    color: ${theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;
```

#### Botão Secundário
```typescript
export const ButtonSecondary = styled.button`
  background-color: transparent;
  color: ${theme.colors.blue[500]};
  border: 2px solid ${theme.colors.blue[500]};
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.md};
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.blue[500]};
    color: ${theme.colors.text.primary};
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.blue[600]};
    border-color: ${theme.colors.blue[600]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
```

#### Botão Mágico (Acento)
```typescript
export const ButtonMagic = styled.button`
  background: linear-gradient(
    135deg,
    ${theme.colors.purple[500]} 0%,
    ${theme.colors.magenta[500]} 100%
  );
  color: ${theme.colors.text.primary};
  border: none;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(67, 45, 115, 0.5);
  cursor: pointer;

  &:hover:not(:disabled) {
    box-shadow: 0 0 20px rgba(67, 45, 115, 0.5),
      0 10px 15px -3px rgba(0, 0, 0, 0.5),
      0 4px 6px -2px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
```

### Inputs

```typescript
export const Input = styled.input`
  background-color: ${theme.colors.background.tertiary};
  color: ${theme.colors.text.primary};
  border: 1px solid rgba(144, 152, 175, 0.2);
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue[500]};
    box-shadow: 0 0 0 3px rgba(58, 55, 166, 0.1);
  }

  &:disabled {
    background-color: ${theme.colors.background.secondary};
    color: ${theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.text.tertiary};
  }
`;
```

### Cards

```typescript
export const Card = styled.div`
  background-color: ${theme.colors.background.tertiary};
  border: 1px solid rgba(144, 152, 175, 0.2);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[6]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(58, 55, 166, 0.5);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
      0 4px 6px -2px rgba(0, 0, 0, 0.4);
  }
`;

export const CardElevated = styled(Card)`
  background-color: ${theme.colors.background.elevated};
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6),
    0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;
```

### Modais

```typescript
export const ModalOverlay = styled.div`
  background-color: rgba(6, 14, 38, 0.8);
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${theme.colors.background.elevated};
  border: 1px solid rgba(58, 55, 166, 0.5);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing[8]};
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6),
    0 10px 10px -5px rgba(0, 0, 0, 0.3);
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
`;
```

## Tokens para Tailwind CSS

Para usar com Tailwind, adicione ao `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#060e26",
          secondary: "#151740",
          tertiary: "#1a1f3a",
          elevated: "#252b47",
        },
        text: {
          primary: "#e8e8ec",
          secondary: "#d2d2d4",
          tertiary: "rgba(144, 152, 175, 0.9)",
          highlighted: "#c6c6c6",
        },
        blue: {
          300: "#6561d9",
          400: "#4d49c7",
          500: "#3a37a6",
          600: "#2d2a8a",
        },
        purple: {
          300: "#7252a6",
          400: "#5a3d99",
          500: "#432d73",
          600: "#34235a",
        },
        magenta: {
          300: "#d44784",
          400: "#b8326f",
          500: "#8c2756",
          600: "#6f1e43",
        },
        gold: {
          300: "#f5d674",
          400: "#f2c94c",
          500: "#e6a209",
          600: "#cc8f08",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(58, 55, 166, 0.5)",
        "glow-purple": "0 0 20px rgba(67, 45, 115, 0.5)",
        "glow-gold": "0 0 20px rgba(242, 201, 76, 0.4)",
      },
    },
  },
};
```

## Tokens para styled-components

**Arquivo: `src/styles/theme.ts`**

```typescript
export const theme = {
  colors: {
    background: {
      primary: "#060e26",
      secondary: "#151740",
      tertiary: "#1a1f3a",
      elevated: "#252b47",
      hover: "#1f2644",
    },
    text: {
      primary: "#e8e8ec",
      secondary: "#d2d2d4",
      tertiary: "rgba(144, 152, 175, 0.9)",
      highlighted: "#c6c6c6",
      disabled: "rgba(144, 152, 175, 0.5)",
    },
    blue: {
      300: "#6561d9",
      400: "#4d49c7",
      500: "#3a37a6",
      600: "#2d2a8a",
    },
    purple: {
      300: "#7252a6",
      400: "#5a3d99",
      500: "#432d73",
      600: "#34235a",
    },
    magenta: {
      300: "#d44784",
      400: "#b8326f",
      500: "#8c2756",
      600: "#6f1e43",
    },
    gold: {
      300: "#f5d674",
      400: "#f2c94c",
      500: "#e6a209",
      600: "#cc8f08",
    },
    status: {
      success: "#10b981",
      "success-dark": "#059669",
      error: "#ef4444",
      "error-dark": "#dc2626",
      warning: "#f59e0b",
      "warning-dark": "#d97706",
      info: "#3b82f6",
      "info-dark": "#2563eb",
    },
    element: {
      fire: "#f97316",
      "fire-dark": "#ea580c",
      water: "#0ea5e9",
      "water-dark": "#0284c7",
      earth: "#84cc16",
      "earth-dark": "#65a30d",
      air: "#a78bfa",
      "air-dark": "#8b5cf6",
      light: "#fbbf24",
      "light-dark": "#f59e0b",
      dark: "#6b21a8",
      "dark-dark": "#581c87",
    },
    rarity: {
      common: "#9ca3af",
      uncommon: "#10b981",
      rare: "#3b82f6",
      epic: "#a855f7",
      legendary: "#f59e0b",
      mythic: "#ec4899",
    },
    border: {
      primary: "rgba(144, 152, 175, 0.2)",
      secondary: "rgba(144, 152, 175, 0.1)",
      accent: "rgba(58, 55, 166, 0.5)",
      hover: "rgba(58, 55, 166, 0.8)",
      focus: "#3a37a6",
    },
    shadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
      "glow-blue": "0 0 20px rgba(58, 55, 166, 0.5)",
      "glow-purple": "0 0 20px rgba(67, 45, 115, 0.5)",
      "glow-gold": "0 0 20px rgba(242, 201, 76, 0.4)",
    },
  },
  fontFamily: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    heading: '"Poppins", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1536px",
  },
  transition: {
    fast: "150ms",
    normal: "250ms",
    slow: "350ms",
    easing: {
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
} as const;

export type Theme = typeof theme;
```

## Acessibilidade

### Contraste
- Todos os textos sobre fundos escuros devem ter contraste mínimo de 4.5:1 (WCAG AA)
- Textos grandes (18px+) podem ter contraste de 3:1 (WCAG AA Large Text)

### Foco
- Sempre fornecer indicadores de foco visíveis
- Usar `border-focus` ou outline para elementos focáveis

### Tamanhos de Toque
- Elementos interativos devem ter no mínimo 44x44px em mobile

## Uso em Desenvolvimento

Este design system deve ser usado como referência para:
- Criação de componentes reutilizáveis
- Manutenção de consistência visual
- Guia para novas features
- Documentação para outros desenvolvedores
