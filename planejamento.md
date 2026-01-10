# Magic RPTable - Planejamento

## Descrição do Projeto

Um projeto para jogar RPG de mesa com amigos onde é possível mostrar combates (com distância baseada em um board), mostrar lugares, esconder ou mostrar partes do board, adicionar personagens (dos jogadores ou inimigos), rolar vários dados, ter inventário dos jogadores e a ficha de RPG deles (que possa criar as propriedades das fichas e ela possa refletir em momentos do jogo).

## MVP por Prioridade

1. **Board**
   - Sistema de grid/board para visualização
   - Base para todas as outras features

2. **Rolagem de Dados**
   - D4, D6, D8, D10, D12, D20, D100
   - Interface para rolagem

3. **Personagens no Board**
   - Adicionar personagens (jogadores e inimigos)
   - Movimentar personagens no board

4. **Esconder/Mostrar Posições no Board**
   - Sistema de fog of war
   - Controle de visibilidade

5. **Tab de Imagem**
   - Alternar entre Board e imagem de local
   - Visualização de cenários

6. **Imagens de Personagens**
   - Upload/adicionar imagens de inimigos e jogadores (via arquivo ou URL de imagem)
   - Exibir no board

7. **Ficha dos Jogadores**
   - Sistema de ficha customizável
   - Propriedades editáveis
   - Integração com inventário

8. **Inventário**
   - Sistema de inventário por jogador
   - Itens interativos

## Stack Técnica

- **Runtime:** Bun
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + styled-components
- **Testes:** Playwright + Jest
- **Lint:** ESLint + Prettier
- **Git Hooks:** Husky

## Status de Progresso

### Resumo Geral

- [x] **Fase 0:** Setup e Estrutura Base (6/6 completas)
- [ ] **Fase 1:** Board (0/5 completas)
- [ ] **Fase 2:** Rolagem de Dados (0/4 completas)
- [ ] **Fase 3:** Personagens no Board (0/5 completas)
- [ ] **Fase 4:** Esconder/Mostrar Posições no Board (0/4 completas)
- [ ] **Fase 5:** Tab de Imagem (0/4 completas)
- [ ] **Fase 6:** Imagens de Personagens (0/5 completas)
- [ ] **Fase 7:** Ficha dos Jogadores (0/5 completas)
- [ ] **Fase 8:** Inventário (0/5 completas)
- [ ] **Fase 9:** Backend (Futuro) (0/3 completas)

### Como Atualizar o Progresso

Quando uma subfase for concluída:

1. Marque o checkbox `[ ]` como `[x]` na subfase correspondente
2. Atualize o contador no título da fase (ex: `(0/6 completas)` → `(1/6 completas)`)
3. Atualize o contador no Resumo Geral acima
4. Quando todas as subfases de uma fase forem concluídas:
   - Marque o checkbox da fase no Resumo Geral como `[x]`
   - Altere o status da fase de `⏳` para `✅` (ex: `Status: **Em Progresso**` → `Status: **Concluída**`)

## Fases de Desenvolvimento

### Fase 0: Setup e Estrutura Base ✅

Status: **Concluída** (6/6 completas)

#### 0.1: Setup Inicial do Projeto [x]

- Inicializar projeto com Bun
- Configurar TypeScript
- Instalar dependências básicas (React, styled-components, Tailwind)
- **Teste:** Projeto inicia sem erros

#### 0.2: Configuração de Ferramentas [x]

- Configurar ESLint e Prettier
- Configurar Husky com pre-commit hooks
- Configurar Jest
- Configurar Playwright
- **Teste:** Comandos `npm run lint`, `npm run test` funcionam

#### 0.3: Estrutura de Pastas e Path Aliases [x]

- Criar estrutura de pastas base (components, hooks, contexts, utils, types, styles, pages)
- Configurar path aliases no tsconfig.json (@/_, @components/_, @styles/\*)
- **Teste:** Imports com path aliases funcionam

#### 0.4: Estilos Globais e Tema Base [x]

- Criar estilos globais (reset, fontes, cores base)
- Configurar tema básico (cores, espaçamentos)
- **Teste:** Estilos aplicam corretamente na aplicação

#### 0.5: Layout Principal e Componentes UI Básicos [x]

- Criar layout principal da aplicação
- Criar componentes básicos reutilizáveis (Button, Input, Modal)
- **Teste:** Layout renderiza, componentes básicos funcionam

#### 0.6: Sistema de Notificações e Error Boundaries [x]

- Implementar sistema de notificações/toasts básico
- Criar Error Boundary
- **Teste:** Notificações aparecem, erros são capturados

### Fase 1: Board ⏳

Status: **Pendente** (0/5 completas)

#### 1.1: Componente de Board Básico (Grid Visual) [ ]

- Criar componente Board com grid visual estático
- Grid com células visíveis
- **Teste:** Grid renderiza na tela com células visíveis

#### 1.2: Sistema de Coordenadas e Grid Configurável [ ]

- Implementar sistema de coordenadas (x, y)
- Grid configurável (tamanho de célula, quantidade de células)
- Tipo de grid configurável (quadrado, hexágono - começar com quadrado)
- **Teste:** Grid responde a mudanças de configuração

#### 1.3: Controle de Tamanho do Grid [ ]

- O Mestre pode aumentar/diminuir quantidade de células em X e Y
- Interface para editar dimensões do grid
- **Teste:** Grid redimensiona corretamente quando dimensões mudam

#### 1.4: Zoom e Pan no Board [ ]

- Implementar zoom (zoom in/out)
- Implementar pan (arrastar board)
- Controles de zoom
- **Teste:** Zoom e pan funcionam corretamente

#### 1.5: Grid Responsivo [ ]

- Board responsivo em diferentes tamanhos de tela
- Ajuste automático quando necessário
- **Teste:** Board se adapta a diferentes tamanhos de viewport

### Fase 2: Rolagem de Dados ⏳

Status: **Pendente** (0/4 completas)

#### 2.1: Componente de Dado Individual [ ]

- Criar componente Dice para um tipo de dado (D4, D6, D8, D10, D12, D20, D100)
- Visualização do dado
- **Teste:** Componente renderiza corretamente para cada tipo

#### 2.2: Hook useDice para Lógica de Rolagem [ ]

- Criar hook useDice com função de rolagem
- Lógica de randomização (Math.random)
- Retornar resultado da rolagem
- **Teste:** Hook retorna valores válidos dentro do range do dado

#### 2.3: Interface de Seleção de Dados [ ]

- Interface para selecionar tipo de dado
- Botões para cada tipo de dado (D4, D6, D8, D10, D12, D20, D100)
- **Teste:** Interface permite selecionar diferentes tipos de dado

#### 2.4: Exibição de Resultados e Histórico [ ]

- Exibir resultado da rolagem
- Histórico de rolagens (últimas N rolagens)
- Limpar histórico
- **Teste:** Resultados exibem corretamente, histórico funciona

### Fase 3: Personagens no Board ⏳

Status: **Pendente** (0/5 completas)

#### 3.1: Estrutura de Dados de Personagens [ ]

- Definir tipos/interfaces para Personagem
- Diferenciar jogadores e inimigos
- Propriedades básicas (id, name, position, type)
- **Teste:** Tipos estão corretos, dados validam

#### 3.2: Adicionar Personagem ao Board [ ]

- Interface/formulário para adicionar personagem
- Campos: nome, tipo (jogador/inimigo)
- Validação de dados
- **Teste:** Personagem é criado com dados válidos

#### 3.3: Renderizar Personagens no Board [ ]

- Renderizar personagens nas posições corretas do grid
- Indicador visual por tipo (jogador vs inimigo)
- **Teste:** Personagens aparecem nas posições corretas

#### 3.4: Sistema de Movimento (Drag and Drop) [ ]

- Implementar drag and drop para mover personagens
- Validação de movimento (dentro do grid)
- Atualizar posição no estado
- **Teste:** Personagens podem ser movidos arrastando

#### 3.5: Diferenciação Visual Jogadores vs Inimigos [ ]

- Estilos diferentes para jogadores e inimigos
- Cores/bordas/distintivos visuais
- **Teste:** Diferenciação visual está clara

### Fase 4: Esconder/Mostrar Posições no Board (Fog of War) ⏳

Status: **Pendente** (0/4 completas)

#### 4.1: Sistema de Overlay de Fog [ ]

- Criar overlay que cobre células do grid
- Sistema de camadas (board, fog, personagens)
- **Teste:** Overlay renderiza sobre o grid

#### 4.2: Toggle de Visibilidade por Célula [ ]

- Toggle para mostrar/esconder célula individual
- Estado de visibilidade por célula
- **Teste:** Células podem ser mostradas/escondidas individualmente

#### 4.3: Ferramentas de Edição (Pincel e Borracha) [ ]

- Modo pincel (esconder células)
- Modo borracha (mostrar células)
- Seleção de modo de edição
- **Teste:** Pincel esconde, borracha mostra células

#### 4.4: Salvar/Restaurar Estado do Fog [ ]

- Persistir estado do fog (em memória)
- Resetar fog
- **Teste:** Estado do fog é mantido, reset funciona

### Fase 5: Tab de Imagem ⏳

Status: **Pendente** (0/4 completas)

#### 5.1: Sistema de Tabs Básico [ ]

- Componente de tabs
- Alternar entre tabs
- **Teste:** Tabs alternam corretamente

#### 5.2: Upload de Imagem de Cenário [ ]

- Input para upload de arquivo de imagem
- Input para URL de imagem
- Validação de tipo de arquivo/URL
- **Teste:** Upload e URL funcionam, validação rejeita tipos inválidos

#### 5.3: Visualização de Imagem em Tela Cheia [ ]

- Exibir imagem em tamanho adequado
- Ajuste de zoom/pan na imagem (opcional)
- **Teste:** Imagem exibe corretamente

#### 5.4: Alternar entre Board e Imagem [ ]

- Tab para Board
- Tab para Imagem
- Alternar entre os dois
- **Teste:** Alternância funciona, estados são mantidos

### Fase 6: Imagens de Personagens ⏳

Status: **Pendente** (0/5 completas)

#### 6.1: Input para URL de Imagem [ ]

- Campo de input para URL
- Validação de URL válida
- Preview da imagem
- **Teste:** URL válida carrega imagem, inválida mostra erro

#### 6.2: Upload de Arquivo de Imagem [ ]

- Input type file para upload
- Validação de tipo de arquivo (imagem)
- Conversão para URL local (URL.createObjectURL)
- **Teste:** Upload funciona, tipos inválidos são rejeitados

#### 6.3: Preview de Imagem Antes de Adicionar [ ]

- Modal ou área de preview
- Mostrar imagem antes de confirmar
- Botão confirmar/cancelar
- **Teste:** Preview funciona, confirmação adiciona imagem

#### 6.4: Renderizar Imagem no Personagem do Board [ ]

- Personagem exibe imagem customizada
- Fallback para indicador padrão se sem imagem
- **Teste:** Imagem aparece no personagem no board

#### 6.5: Gerenciar Imagens (Editar/Remover) [ ]

- Opção para editar imagem do personagem
- Opção para remover imagem (voltar ao padrão)
- **Teste:** Edição e remoção funcionam

### Fase 7: Ficha dos Jogadores ⏳

Status: **Pendente** (0/5 completas)

#### 7.1: Estrutura Base de Ficha (Layout) [ ]

- Layout básico da ficha
- Seções/campos básicos
- Visualização da ficha
- **Teste:** Layout renderiza corretamente

#### 7.2: Sistema de Propriedades Customizáveis [ ]

- Estrutura de dados para propriedades customizáveis
- Tipos de propriedades (texto, número, etc)
- **Teste:** Propriedades podem ser definidas

#### 7.3: Editor de Propriedades da Ficha [ ]

- Interface para adicionar propriedades
- Interface para editar valores das propriedades
- Interface para remover propriedades
- **Teste:** Editor permite criar/editar/remover propriedades

#### 7.4: Salvar/Carregar Estrutura de Ficha [ ]

- Persistir estrutura da ficha (em memória)
- Persistir valores da ficha (em memória)
- **Teste:** Estrutura e valores são mantidos

#### 7.5: Integração com Inventário (Preparar) [ ]

- Preparar estrutura para integrar inventário
- Campo/área reservada para inventário
- **Teste:** Estrutura permite integração futura

### Fase 8: Inventário ⏳

Status: **Pendente** (0/5 completas)

#### 8.1: Estrutura de Dados de Itens [ ]

- Definir tipos/interfaces para Item
- Propriedades básicas (id, name, description, quantity, etc)
- **Teste:** Tipos estão corretos

#### 8.2: Interface de Inventário (Lista/Grid) [ ]

- Componente de inventário
- Lista ou grid de itens
- Visualização dos itens
- **Teste:** Inventário renderiza itens corretamente

#### 8.3: Adicionar/Remover Itens [ ]

- Interface para adicionar item ao inventário
- Interface para remover item do inventário
- Validação
- **Teste:** Adicionar/remover funcionam

#### 8.4: Itens Interativos (Ações/Callbacks) [ ]

- Itens podem ter ações/interações
- Sistema de callbacks para ações de itens
- **Teste:** Ações de itens funcionam

#### 8.5: Integração com Ficha do Jogador [ ]

- Inventário vinculado à ficha do jogador
- Cada jogador tem seu inventário
- **Teste:** Inventários são independentes por jogador

### Fase 9: Backend (Futuro) ⏳

Status: **Pendente** (0/3 completas)

#### 9.1: Persistência de Estados [ ]

- Backend para salvar estados
- API para salvar/carregar sessões
- **Teste:** Estados são persistidos e carregados

#### 9.2: Sincronização entre Sessões [ ]

- Sistema de sincronização em tempo real
- Múltiplos usuários na mesma sessão
- **Teste:** Múltiplos usuários sincronizam

#### 9.3: Sistema de Salvar/Carregar Sessões [ ]

- Salvar sessão completa
- Carregar sessão salva
- Listar sessões salvas
- **Teste:** Salvar/carregar funciona

## Dependências entre Fases

- **Fase 0** deve ser completada antes de qualquer outra fase
- **Fase 1 (Board)** é base para Fase 3, 4, 5
- **Fase 2 (Dados)** é independente, pode ser feita em paralelo
- **Fase 3 (Personagens)** depende de Fase 1
- **Fase 4 (Fog of War)** depende de Fase 1
- **Fase 5 (Tab de Imagem)** depende de Fase 1
- **Fase 6 (Imagens de Personagens)** depende de Fase 3
- **Fase 7 (Ficha)** pode ser iniciada em paralelo, depende parcialmente de Fase 8 para integração
- **Fase 8 (Inventário)** pode ser iniciada em paralelo, integra com Fase 7
- **Fase 9 (Backend)** depende de todas as fases anteriores

## Critérios de Teste Gerais

Cada fase deve ser testável independentemente:

- **Testes unitários:** Componentes e funções individuais
- **Testes de integração:** Funcionalidades completas
- **Testes E2E:** Fluxos completos do usuário (quando aplicável)
- **Teste manual:** Verificar visualmente e funcionalmente

## Observações

- Todas as fases de 1 a 8 devem funcionar **sem persistência** (estado em memória)
- Persistência será adicionada na Fase 9 (Backend)
- Cada fase pode ser testada e validada antes de prosseguir
- Fases marcadas como "pode ser feita em paralelo" podem ser desenvolvidas simultaneamente
- **Testes com Browser MCP:** Sempre que for necessário testar algo usando MCP do browser, utilizar o browser em uma tab diretamente no Cursor. Não abrir o app do Chrome separadamente

## Estruturas de Dados Principais

### Personagem (Character)

```typescript
interface Character {
  id: string;
  name: string;
  type: "player" | "enemy";
  position: Position;
  imageUrl?: string;
  stats?: CharacterStats;
}

interface Position {
  x: number;
  y: number;
}

interface CharacterStats {
  health?: number;
  armorClass?: number;
  [key: string]: unknown;
}
```

### Board State

```typescript
interface BoardState {
  gridSize: {
    width: number;
    height: number;
  };
  cellSize: number;
  zoom: number;
  offset: Position;
  characters: Character[];
  fogOfWar: boolean[][];
  gridType: "square" | "hexagon";
}
```

### Item de Inventário

```typescript
interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  imageUrl?: string;
  actions?: ItemAction[];
}

interface ItemAction {
  id: string;
  label: string;
  callback: () => void;
}
```

### Propriedade de Ficha

```typescript
interface CharacterSheetProperty {
  id: string;
  name: string;
  type: "text" | "number" | "boolean" | "select";
  value: unknown;
  options?: string[];
  editable: boolean;
}
```

### Ficha de Jogador

```typescript
interface CharacterSheet {
  characterId: string;
  properties: CharacterSheetProperty[];
  inventory: InventoryItem[];
}
```

## Fluxos de Usuário Principais

### Fluxo 1: Preparação da Sessão (Mestre)

1. Mestre abre a aplicação
2. Configura o board (tamanho do grid, tipo)
3. Adiciona personagens (jogadores e inimigos)
4. Adiciona imagens aos personagens (opcional)
5. Configura fog of war inicial (opcional)
6. Carrega imagem de cenário na tab de imagem (opcional)

### Fluxo 2: Durante a Sessão - Combate

1. Mestre visualiza board com personagens
2. Mestre rola dados quando necessário
3. Jogadores solicitam movimentos
4. Mestre move personagens no board (drag and drop)
5. Mestre ajusta fog of war conforme necessário
6. Mestre alterna entre board e imagem de cenário

### Fluxo 3: Gerenciamento de Fichas

1. Mestre ou jogador acessa ficha de um personagem
2. Visualiza propriedades atuais
3. Edita valores das propriedades (se permitido)
4. Adiciona/remove propriedades customizáveis (Mestre)
5. Gerencia inventário do personagem
6. Adiciona/remove itens do inventário

### Fluxo 4: Rolagem de Dados

1. Usuário seleciona tipo de dado (D4, D6, D8, D10, D12, D20, D100)
2. Clica no botão do dado
3. Sistema exibe resultado da rolagem
4. Resultado é adicionado ao histórico
5. Usuário pode limpar histórico quando necessário

## Considerações Técnicas

### Performance

- **Virtualização:** Para grids muito grandes, considerar virtualização de células
- **Memoização:** Usar React.memo, useMemo e useCallback quando apropriado
- **Otimização de Imagens:** Comprimir/otimizar imagens carregadas
- **Lazy Loading:** Carregar componentes pesados sob demanda

### Acessibilidade

- **Navegação por Teclado:** Todos os elementos interativos acessíveis via teclado
- **ARIA Labels:** Adicionar labels apropriados para leitores de tela
- **Contraste:** Seguir padrões WCAG para contraste de cores
- **Foco Visual:** Indicadores claros de foco em elementos interativos

### Estado e Gerenciamento

- **Context API:** Usar Context + useReducer para estado compartilhado do board
- **Estado Local:** useState para estado local de componentes
- **Separação de Concerns:** Separar lógica de negócio da apresentação (hooks customizados)

### Validação e Tratamento de Erros

- **Validação de Inputs:** Validar todos os inputs do usuário
- **Error Boundaries:** Capturar erros de renderização
- **Feedback ao Usuário:** Notificações claras para erros e sucessos
- **Fallbacks:** Fallbacks visuais para imagens que falham ao carregar

### Responsividade

- **Mobile First:** Considerar uso em tablets
- **Touch Gestures:** Suporte a gestos touch para zoom e pan
- **Layout Adaptativo:** Layout que se adapta a diferentes tamanhos de tela
- **Grid Responsivo:** Grid que se ajusta ao viewport disponível

## Ordem Sugerida de Implementação

### Sprint 1: Base (Fase 0)

- 0.1 a 0.6 completos

### Sprint 2: Board Básico (Fase 1 - Parte 1)

- 1.1 a 1.3

### Sprint 3: Board Avançado (Fase 1 - Parte 2)

- 1.4 a 1.5

### Sprint 4: Dados (Fase 2)

- 2.1 a 2.4 (pode ser feito em paralelo com Sprint 3)

### Sprint 5: Personagens Básico (Fase 3 - Parte 1)

- 3.1 a 3.3

### Sprint 6: Personagens Avançado (Fase 3 - Parte 2)

- 3.4 a 3.5

### Sprint 7: Fog of War (Fase 4)

- 4.1 a 4.4

### Sprint 8: Tab de Imagem (Fase 5)

- 5.1 a 5.4

### Sprint 9: Imagens de Personagens (Fase 6)

- 6.1 a 6.5

### Sprint 10: Ficha de Jogadores (Fase 7)

- 7.1 a 7.5

### Sprint 11: Inventário (Fase 8)

- 8.1 a 8.5

### Sprint 12+: Backend (Fase 9 - Futuro)

- 9.1 a 9.3

## Definições de Pronto (Definition of Done)

Cada feature/tarefa deve atender aos seguintes critérios:

- [ ] Código implementado seguindo padrões definidos
- [ ] Tipos TypeScript corretos e sem erros
- [ ] Testes unitários escritos e passando
- [ ] Testes E2E escritos (quando aplicável)
- [ ] Lint passando sem erros
- [ ] Teste manual realizado e aprovado
- [ ] Acessibilidade básica verificada
- [ ] Responsividade testada (pelo menos desktop e tablet)
- [ ] Integração com outras features funciona (se aplicável)
