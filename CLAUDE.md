# CLAUDE.md - Instruções Técnicas para o Agente

## Stack e Configurações

### Frontend

- **Runtime:** Bun com TypeScript
- **Estilização:** Tailwind CSS + styled-components
- **Import de styled-components:** Sempre usar `import * as SC from "./styled";`

### Testes

- **Ferramentas:** Playwright e Jest
- **Coverage:** Iniciar com cobertura baixa nas features mais importantes, aumentando gradualmente
- **Abordagem:** Para cada especificação técnica, demonstrar maneiras de utilizar e testes para contexto
- **Estrutura:** Testes colocalizados com componentes (`ComponentName.test.tsx`)
- **Browser MCP:** Sempre que for necessário testar algo usando MCP do browser, utilizar o browser em uma tab diretamente no Cursor. Não abrir o app do Chrome separadamente

### Lint e Qualidade

- Utilizar regras de Lint configuradas
- Executar `npm run lint` antes de commits
- Prettier configurado: semicolons, double quotes, no trailing comma, tabWidth 2
- **Format on Save:** Configurado no VSCode/Cursor para formatar automaticamente ao salvar (Ctrl+S). Todas as linhas adicionadas devem seguir o estilo do Prettier

### Performance

- Analisar necessidade de `useMemo`, `useCallback` e `Memo`
- Aplicar otimizações quando necessário

## Acessibilidade (a11y)

- Utilizar HTML semântico
- Elementos interativos acessíveis via teclado
- Imagens com atributo `alt` (preenchido ou vazio se decorativo)
- Usar atributos ARIA quando necessário

## Commits e Versionamento

- Seguir padrão de commits semânticos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Usar **husky** para hooks de pré-commit (já configurado com pretty-quick)

## Path Aliases

- Usar path aliases configurados no `tsconfig.json`:
  - `@/*` para `src/*`
  - `@styles/*` para `src/styles/*`
  - `@components/*` para `src/components/*`

## Estrutura de Pastas e Arquivos

### Estrutura Recomendada

```
src/
├── components/          # Componentes reutilizáveis
│   └── ComponentName/
│       ├── ComponentName.tsx
│       ├── ComponentName.test.tsx
│       ├── styled.ts
│       ├── types.ts
│       └── index.ts
├── hooks/              # Hooks customizados
│   └── useHookName.ts
├── contexts/           # Contexts e Providers
│   ├── ContextName/
│   │   ├── ContextName.tsx
│   │   ├── reducer.ts
│   │   ├── types.ts
│   │   └── index.ts
├── utils/              # Funções utilitárias
│   └── utilName.ts
├── types/              # Tipos globais
│   └── globalTypes.ts
├── styles/             # Estilos globais
│   └── globalStyles.ts
└── pages/              # Páginas/Views principais
    └── PageName/
        ├── PageName.tsx
        └── index.ts
```

### Organização de Componentes

Para componentes complexos, usar a seguinte estrutura:

- `ComponentName.tsx` - Componente principal
- `ComponentName.test.tsx` - Testes do componente (colocalizados)
- `styled.ts` - Estilos styled-components (quando necessário)
- `types.ts` - Tipos e interfaces específicas do componente
- `index.ts` - Export do componente

Para componentes simples, pode ser apenas `ComponentName.tsx` e `ComponentName.test.tsx`.

## Instruções Gerais de Código

### Comentários

- Todos os comentários devem ter uma ideia clara para entendimento e contexto de outros agents

### Idioma

- Variáveis, funções, classes, tipagens e outros elementos de código devem ser em inglês

### Modificações

- Não alterar trechos de código ou arquivos que não foram explicitamente solicitados para modificação

### Exemplos

- Sempre que possível, fornecer exemplos prontos para uso

## Padrão de Código

### Estrutura

- **TypeScript** para arquivos `.ts` e `.tsx`
- Componentes devem ser **function components** com **arrow functions**
- Sempre tipar props e funções

### Convenções de Nomenclatura

#### Arquivos

- Componentes: **PascalCase** (ex: `Button.tsx`, `CharacterCard.tsx`)
- Hooks customizados: **camelCase** com prefixo `use` (ex: `useBoard.ts`, `useDice.ts`)
- Utilitários: **camelCase** (ex: `formatDate.ts`, `validateInput.ts`)
- Types/Interfaces: **camelCase** (ex: `types.ts`, `boardTypes.ts`)
- Constantes: **SCREAMING_SNAKE_CASE**
- Styled components: `styled.ts` (arquivo), componentes dentro em **PascalCase**

#### Código

- Componentes: **PascalCase** (ex: `const Button = () => {}`)
- Funções: **camelCase** (ex: `const handleClick = () => {}`)
- Variáveis: **camelCase** (ex: `const userName = ""`)
- Constantes: **SCREAMING_SNAKE_CASE** (ex: `const MAX_SIZE = 100`)
- Interfaces: **PascalCase** com sufixo opcional (ex: `ButtonProps`, `User`)
- Types: **PascalCase** (ex: `type Status = "idle" | "loading"`)
- Props interfaces: `ComponentNameProps` (ex: `ButtonProps`, `CharacterCardProps`)

### Tipos TypeScript

#### Interface vs Type

**Usar `interface` quando:**

- Definindo formas de objetos que podem ser estendidas
- Props de componentes
- Estruturas de dados que podem ser ampliadas

**Usar `type` quando:**

- Union types (ex: `type Status = "idle" | "loading" | "error"`)
- Intersection types
- Tipos utilitários (Pick, Omit, etc)
- Tipos que não representam objetos

**Exemplos:**

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

type Status = "idle" | "loading" | "error" | "success";

interface User {
  id: string;
  name: string;
}

type UserWithEmail = User & {
  email: string;
};
```

#### Tipagem de Props

Sempre usar interfaces para props de componentes:

```typescript
interface CharacterCardProps {
  character: Character;
  onMove: (position: Position) => void;
  isSelected?: boolean;
}

export const CharacterCard = ({
  character,
  onMove,
  isSelected
}: CharacterCardProps) => {
  // ...
};
```

### Estrutura de Componentes

#### Componente Simples

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

#### Componente com Styled Components

Quando usar styled-components, criar arquivo `styled.ts`:

```typescript
import * as SC from "./styled";

interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  return (
    <SC.CardContainer>
      <SC.CardTitle>{title}</SC.CardTitle>
    </SC.CardContainer>
  );
};
```

#### Componente Complexo (com separação de lógica)

Quando o componente tiver lógica complexa, separar em hook customizado:

**useCharacterLogic.ts:**

```typescript
export const useCharacterLogic = (characterId: string) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const moveCharacter = useCallback((newPosition: Position) => {
    setPosition(newPosition);
  }, []);

  return { position, moveCharacter };
};
```

**CharacterCard.tsx:**

```typescript
import { useCharacterLogic } from "./useCharacterLogic";

interface CharacterCardProps {
  characterId: string;
}

export const CharacterCard = ({ characterId }: CharacterCardProps) => {
  const { position, moveCharacter } = useCharacterLogic(characterId);

  return (
    <div>
      {/* UI do componente */}
    </div>
  );
};
```

### Imports e Organização

#### Ordem de Imports

1. Imports externos (React, bibliotecas)
2. Imports internos com path aliases (@components, @utils, etc)
3. Imports relativos (./, ../)
4. Imports de tipos (com `type` quando apropriado)

**Exemplo:**

```typescript
import { useState, useCallback } from "react";
import { Button } from "@components/Button";
import { formatDate } from "@utils/formatDate";
import * as SC from "./styled";
import type { CharacterProps } from "./types";
```

#### Agrupamento

Agrupar imports por categoria, deixando uma linha em branco entre grupos:

```typescript
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@components/Button";
import { Card } from "@components/Card";

import { formatDate } from "@utils/formatDate";
import { validateInput } from "@utils/validation";

import * as SC from "./styled";
import type { CharacterProps } from "./types";
```

### Estado e Lógica

- Usar **React Hooks** para estado local
- Usar **Context API + useReducer** para estado compartilhado entre componentes
- Usar **Redux** apenas se o estado compartilhado se tornar muito complexo
- Caso um arquivo fique muito grande em termos de lógica de estados e HTML, fazer a separação dos arquivos em um hook personalizado e um arquivo de view

### Organização

- Separar lógica de negócio da apresentação
- Criar hooks customizados quando a lógica for reutilizável
- Manter componentes pequenos e focados

## Gerenciamento de Estado

### Context API + useReducer

Usar Context API com useReducer para estado compartilhado entre múltiplos componentes.

**Estrutura:**

1. Criar types para o estado e ações
2. Criar reducer
3. Criar Context e Provider
4. Exportar hook customizado para usar o context

**Exemplo:**

**types.ts:**

```typescript
export interface BoardState {
  characters: Character[];
  gridSize: number;
  fogOfWar: boolean[][];
}

export type BoardAction =
  | { type: "ADD_CHARACTER"; payload: Character }
  | { type: "MOVE_CHARACTER"; payload: { id: string; position: Position } }
  | { type: "TOGGLE_FOG"; payload: { x: number; y: number } };
```

**reducer.ts:**

```typescript
import type { BoardState, BoardAction } from "./types";

export const boardReducer = (
  state: BoardState,
  action: BoardAction
): BoardState => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload]
      };
    case "MOVE_CHARACTER":
      return {
        ...state,
        characters: state.characters.map((char) =>
          char.id === action.payload.id
            ? { ...char, position: action.payload.position }
            : char
        )
      };
    case "TOGGLE_FOG":
      const newFog = [...state.fogOfWar];
      newFog[action.payload.y][action.payload.x] =
        !newFog[action.payload.y][action.payload.x];
      return {
        ...state,
        fogOfWar: newFog
      };
    default:
      return state;
  }
};
```

**BoardContext.tsx:**

```typescript
import { createContext, useContext, useReducer, ReactNode } from "react";
import { boardReducer } from "./reducer";
import type { BoardState, BoardAction } from "./types";

interface BoardContextType {
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

interface BoardProviderProps {
  children: ReactNode;
  initialState: BoardState;
}

export const BoardProvider = ({ children, initialState }: BoardProviderProps) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = (): BoardContextType => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within BoardProvider");
  }
  return context;
};
```

**Uso:**

```typescript
import { useBoard } from "@contexts/BoardContext";

export const CharacterCard = ({ characterId }: CharacterCardProps) => {
  const { state, dispatch } = useBoard();

  const handleMove = (position: Position) => {
    dispatch({
      type: "MOVE_CHARACTER",
      payload: { id: characterId, position }
    });
  };

  // ...
};
```

### Quando usar useState vs Context

- **useState:** Estado local ao componente ou estado que não precisa ser compartilhado
- **Context + useReducer:** Estado compartilhado entre múltiplos componentes, estado complexo com múltiplas ações

## Testes

### Estrutura de Testes

Testes devem ser colocalizados com os componentes: `ComponentName.test.tsx`

### Testes com Jest (Unitários)

**Teste de Componente:**

```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render with label", () => {
    render(<Button label="Click me" onClick={jest.fn()} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Teste de Hook Customizado:**

```typescript
import { renderHook, act } from "@testing-library/react";
import { useDice } from "./useDice";

describe("useDice", () => {
  it("should roll dice and return result", () => {
    const { result } = renderHook(() => useDice());

    act(() => {
      result.current.roll(20);
    });

    expect(result.current.value).toBeGreaterThanOrEqual(1);
    expect(result.current.value).toBeLessThanOrEqual(20);
  });
});
```

**Teste de Reducer:**

```typescript
import { boardReducer } from "./reducer";
import type { BoardState } from "./types";

describe("boardReducer", () => {
  const initialState: BoardState = {
    characters: [],
    gridSize: 10,
    fogOfWar: []
  };

  it("should add character", () => {
    const newCharacter = { id: "1", name: "Hero", position: { x: 0, y: 0 } };
    const action = { type: "ADD_CHARACTER", payload: newCharacter };

    const newState = boardReducer(initialState, action);

    expect(newState.characters).toHaveLength(1);
    expect(newState.characters[0]).toEqual(newCharacter);
  });
});
```

### Testes com Playwright (E2E)

**Teste de Fluxo Completo:**

```typescript
import { test, expect } from "@playwright/test";

test("should add character to board", async ({ page }) => {
  await page.goto("/");

  await page.click('[data-testid="add-character-button"]');
  await page.fill('[data-testid="character-name-input"]', "Hero");
  await page.click('[data-testid="confirm-button"]');

  await expect(page.locator('[data-testid="character-Hero"]')).toBeVisible();
});

test("should roll dice and display result", async ({ page }) => {
  await page.goto("/");

  await page.click('[data-testid="dice-button-d20"]');

  await expect(page.locator('[data-testid="dice-result"]')).toBeVisible();
  const result = await page
    .locator('[data-testid="dice-result"]')
    .textContent();
  expect(Number(result)).toBeGreaterThanOrEqual(1);
  expect(Number(result)).toBeLessThanOrEqual(20);
});
```

### Boas Práticas de Testes

- Usar `data-testid` para elementos que precisam ser testados
- Testar comportamentos, não implementação
- Focar em testes que agregam valor (features críticas primeiro)
- Manter testes simples e legíveis
- Usar fixtures/mocks quando necessário

## Tratamento de Erros e Validação

### Error Boundaries

Usar Error Boundaries para capturar erros de renderização:

```typescript
import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}
```

### Validação de Dados

Sempre validar dados de entrada:

```typescript
export const validateCharacter = (
  character: unknown
): character is Character => {
  return (
    typeof character === "object" &&
    character !== null &&
    "id" in character &&
    "name" in character &&
    typeof (character as Character).id === "string" &&
    typeof (character as Character).name === "string"
  );
};
```

### Estados de Loading e Error

Sempre tratar estados de loading e error:

```typescript
interface ComponentState {
  data: Data | null;
  isLoading: boolean;
  error: string | null;
}

export const Component = () => {
  const [state, setState] = useState<ComponentState>({
    data: null,
    isLoading: true,
    error: null,
  });

  if (state.isLoading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;
  if (!state.data) return <div>No data</div>;

  return <div>{/* Render data */}</div>;
};
```

## Responsividade

- Usar Tailwind CSS para breakpoints responsivos
- Considerar mobile-first approach quando apropriado
- Testar em diferentes tamanhos de tela
- Garantir que elementos interativos sejam acessíveis em mobile (tamanho de toque adequado)

## Comunicação

- **Direto, claro e conciso**
- **Limitações:** Dizer diretamente se não souber algo e pedir mais informações
- **Detalhes:** Fornecer explicações detalhadas apenas se solicitado
- **Foco:** Responder com o mínimo necessário para entendimento e execução
- **Conteúdo:** Nunca inventar informações ou estruturas inexistentes
- **Encerramento:** Não usar frases de encerramento

## Exemplos Práticos

### Exemplo Completo: Componente com Todas as Convenções

**types.ts:**

```typescript
export interface DiceProps {
  sides: number;
  onRoll?: (result: number) => void;
  disabled?: boolean;
}

export type DiceType = 4 | 6 | 8 | 10 | 12 | 20 | 100;
```

**styled.ts:**

```typescript
import styled from "styled-components";

export const DiceButton = styled.button<{ disabled?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;
```

**Dice.test.tsx:**

```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { Dice } from "./Dice";

describe("Dice", () => {
  it("should render dice button", () => {
    render(<Dice sides={20} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call onRoll when clicked", () => {
    const handleRoll = jest.fn();
    render(<Dice sides={20} onRoll={handleRoll} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleRoll).toHaveBeenCalled();
  });
});
```

**Dice.tsx:**

```typescript
import { useState, useCallback } from "react";
import * as SC from "./styled";
import type { DiceProps } from "./types";

export const Dice = ({ sides, onRoll, disabled }: DiceProps) => {
  const [result, setResult] = useState<number | null>(null);

  const roll = useCallback(() => {
    const value = Math.floor(Math.random() * sides) + 1;
    setResult(value);
    onRoll?.(value);
  }, [sides, onRoll]);

  return (
    <SC.DiceButton onClick={roll} disabled={disabled}>
      D{sides} {result && `(${result})`}
    </SC.DiceButton>
  );
};
```

**index.ts:**

```typescript
export { Dice } from "./Dice";
export type { DiceProps, DiceType } from "./types";
```

### Exemplo: Hook Customizado

**useDice.ts:**

```typescript
import { useState, useCallback } from "react";

interface UseDiceReturn {
  result: number | null;
  roll: (sides: number) => void;
  reset: () => void;
}

export const useDice = (): UseDiceReturn => {
  const [result, setResult] = useState<number | null>(null);

  const roll = useCallback((sides: number) => {
    const value = Math.floor(Math.random() * sides) + 1;
    setResult(value);
  }, []);

  const reset = useCallback(() => {
    setResult(null);
  }, []);

  return { result, roll, reset };
};
```

**useDice.test.ts:**

```typescript
import { renderHook, act } from "@testing-library/react";
import { useDice } from "./useDice";

describe("useDice", () => {
  it("should roll dice and return result", () => {
    const { result } = renderHook(() => useDice());

    act(() => {
      result.current.roll(20);
    });

    expect(result.current.result).toBeGreaterThanOrEqual(1);
    expect(result.current.result).toBeLessThanOrEqual(20);
  });

  it("should reset result", () => {
    const { result } = renderHook(() => useDice());

    act(() => {
      result.current.roll(20);
    });

    expect(result.current.result).not.toBeNull();

    act(() => {
      result.current.reset();
    });

    expect(result.current.result).toBeNull();
  });
});
```

## Observações Importantes

- **Backend:** Não criar nada de backend neste momento
- **Persistência:** Estados serão gerenciados apenas em memória no frontend inicial
- **Priorização:** Seguir ordem de prioridade do MVP definida no planejamento.md
