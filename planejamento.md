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

## Fases de Desenvolvimento

### Fase 0: Setup e Estrutura Base

#### 0.1: Setup Inicial do Projeto
- Inicializar projeto com Bun
- Configurar TypeScript
- Instalar dependências básicas (React, styled-components, Tailwind)
- **Teste:** Projeto inicia sem erros

#### 0.2: Configuração de Ferramentas
- Configurar ESLint e Prettier
- Configurar Husky com pre-commit hooks
- Configurar Jest
- Configurar Playwright
- **Teste:** Comandos `npm run lint`, `npm run test` funcionam

#### 0.3: Estrutura de Pastas e Path Aliases
- Criar estrutura de pastas base (components, hooks, contexts, utils, types, styles, pages)
- Configurar path aliases no tsconfig.json (@/*, @components/*, @styles/*)
- **Teste:** Imports com path aliases funcionam

#### 0.4: Estilos Globais e Tema Base
- Criar estilos globais (reset, fontes, cores base)
- Configurar tema básico (cores, espaçamentos)
- **Teste:** Estilos aplicam corretamente na aplicação

#### 0.5: Layout Principal e Componentes UI Básicos
- Criar layout principal da aplicação
- Criar componentes básicos reutilizáveis (Button, Input, Modal)
- **Teste:** Layout renderiza, componentes básicos funcionam

#### 0.6: Sistema de Notificações e Error Boundaries
- Implementar sistema de notificações/toasts básico
- Criar Error Boundary
- **Teste:** Notificações aparecem, erros são capturados

### Fase 1: Board

#### 1.1: Componente de Board Básico (Grid Visual)
- Criar componente Board com grid visual estático
- Grid com células visíveis
- **Teste:** Grid renderiza na tela com células visíveis

#### 1.2: Sistema de Coordenadas e Grid Configurável
- Implementar sistema de coordenadas (x, y)
- Grid configurável (tamanho de célula, quantidade de células)
- Tipo de grid configurável (quadrado, hexágono - começar com quadrado)
- **Teste:** Grid responde a mudanças de configuração

#### 1.3: Controle de Tamanho do Grid
- O Mestre pode aumentar/diminuir quantidade de células em X e Y
- Interface para editar dimensões do grid
- **Teste:** Grid redimensiona corretamente quando dimensões mudam

#### 1.4: Zoom e Pan no Board
- Implementar zoom (zoom in/out)
- Implementar pan (arrastar board)
- Controles de zoom
- **Teste:** Zoom e pan funcionam corretamente

#### 1.5: Grid Responsivo
- Board responsivo em diferentes tamanhos de tela
- Ajuste automático quando necessário
- **Teste:** Board se adapta a diferentes tamanhos de viewport

### Fase 2: Rolagem de Dados

#### 2.1: Componente de Dado Individual
- Criar componente Dice para um tipo de dado (D4, D6, D8, D10, D12, D20, D100)
- Visualização do dado
- **Teste:** Componente renderiza corretamente para cada tipo

#### 2.2: Hook useDice para Lógica de Rolagem
- Criar hook useDice com função de rolagem
- Lógica de randomização (Math.random)
- Retornar resultado da rolagem
- **Teste:** Hook retorna valores válidos dentro do range do dado

#### 2.3: Interface de Seleção de Dados
- Interface para selecionar tipo de dado
- Botões para cada tipo de dado (D4, D6, D8, D10, D12, D20, D100)
- **Teste:** Interface permite selecionar diferentes tipos de dado

#### 2.4: Exibição de Resultados e Histórico
- Exibir resultado da rolagem
- Histórico de rolagens (últimas N rolagens)
- Limpar histórico
- **Teste:** Resultados exibem corretamente, histórico funciona

### Fase 3: Personagens no Board

#### 3.1: Estrutura de Dados de Personagens
- Definir tipos/interfaces para Personagem
- Diferenciar jogadores e inimigos
- Propriedades básicas (id, name, position, type)
- **Teste:** Tipos estão corretos, dados validam

#### 3.2: Adicionar Personagem ao Board
- Interface/formulário para adicionar personagem
- Campos: nome, tipo (jogador/inimigo)
- Validação de dados
- **Teste:** Personagem é criado com dados válidos

#### 3.3: Renderizar Personagens no Board
- Renderizar personagens nas posições corretas do grid
- Indicador visual por tipo (jogador vs inimigo)
- **Teste:** Personagens aparecem nas posições corretas

#### 3.4: Sistema de Movimento (Drag and Drop)
- Implementar drag and drop para mover personagens
- Validação de movimento (dentro do grid)
- Atualizar posição no estado
- **Teste:** Personagens podem ser movidos arrastando

#### 3.5: Diferenciação Visual Jogadores vs Inimigos
- Estilos diferentes para jogadores e inimigos
- Cores/bordas/distintivos visuais
- **Teste:** Diferenciação visual está clara

### Fase 4: Esconder/Mostrar Posições no Board (Fog of War)

#### 4.1: Sistema de Overlay de Fog
- Criar overlay que cobre células do grid
- Sistema de camadas (board, fog, personagens)
- **Teste:** Overlay renderiza sobre o grid

#### 4.2: Toggle de Visibilidade por Célula
- Toggle para mostrar/esconder célula individual
- Estado de visibilidade por célula
- **Teste:** Células podem ser mostradas/escondidas individualmente

#### 4.3: Ferramentas de Edição (Pincel e Borracha)
- Modo pincel (esconder células)
- Modo borracha (mostrar células)
- Seleção de modo de edição
- **Teste:** Pincel esconde, borracha mostra células

#### 4.4: Salvar/Restaurar Estado do Fog
- Persistir estado do fog (em memória)
- Resetar fog
- **Teste:** Estado do fog é mantido, reset funciona

### Fase 5: Tab de Imagem

#### 5.1: Sistema de Tabs Básico
- Componente de tabs
- Alternar entre tabs
- **Teste:** Tabs alternam corretamente

#### 5.2: Upload de Imagem de Cenário
- Input para upload de arquivo de imagem
- Input para URL de imagem
- Validação de tipo de arquivo/URL
- **Teste:** Upload e URL funcionam, validação rejeita tipos inválidos

#### 5.3: Visualização de Imagem em Tela Cheia
- Exibir imagem em tamanho adequado
- Ajuste de zoom/pan na imagem (opcional)
- **Teste:** Imagem exibe corretamente

#### 5.4: Alternar entre Board e Imagem
- Tab para Board
- Tab para Imagem
- Alternar entre os dois
- **Teste:** Alternância funciona, estados são mantidos

### Fase 6: Imagens de Personagens

#### 6.1: Input para URL de Imagem
- Campo de input para URL
- Validação de URL válida
- Preview da imagem
- **Teste:** URL válida carrega imagem, inválida mostra erro

#### 6.2: Upload de Arquivo de Imagem
- Input type file para upload
- Validação de tipo de arquivo (imagem)
- Conversão para URL local (URL.createObjectURL)
- **Teste:** Upload funciona, tipos inválidos são rejeitados

#### 6.3: Preview de Imagem Antes de Adicionar
- Modal ou área de preview
- Mostrar imagem antes de confirmar
- Botão confirmar/cancelar
- **Teste:** Preview funciona, confirmação adiciona imagem

#### 6.4: Renderizar Imagem no Personagem do Board
- Personagem exibe imagem customizada
- Fallback para indicador padrão se sem imagem
- **Teste:** Imagem aparece no personagem no board

#### 6.5: Gerenciar Imagens (Editar/Remover)
- Opção para editar imagem do personagem
- Opção para remover imagem (voltar ao padrão)
- **Teste:** Edição e remoção funcionam

### Fase 7: Ficha dos Jogadores

#### 7.1: Estrutura Base de Ficha (Layout)
- Layout básico da ficha
- Seções/campos básicos
- Visualização da ficha
- **Teste:** Layout renderiza corretamente

#### 7.2: Sistema de Propriedades Customizáveis
- Estrutura de dados para propriedades customizáveis
- Tipos de propriedades (texto, número, etc)
- **Teste:** Propriedades podem ser definidas

#### 7.3: Editor de Propriedades da Ficha
- Interface para adicionar propriedades
- Interface para editar valores das propriedades
- Interface para remover propriedades
- **Teste:** Editor permite criar/editar/remover propriedades

#### 7.4: Salvar/Carregar Estrutura de Ficha
- Persistir estrutura da ficha (em memória)
- Persistir valores da ficha (em memória)
- **Teste:** Estrutura e valores são mantidos

#### 7.5: Integração com Inventário (Preparar)
- Preparar estrutura para integrar inventário
- Campo/área reservada para inventário
- **Teste:** Estrutura permite integração futura

### Fase 8: Inventário

#### 8.1: Estrutura de Dados de Itens
- Definir tipos/interfaces para Item
- Propriedades básicas (id, name, description, quantity, etc)
- **Teste:** Tipos estão corretos

#### 8.2: Interface de Inventário (Lista/Grid)
- Componente de inventário
- Lista ou grid de itens
- Visualização dos itens
- **Teste:** Inventário renderiza itens corretamente

#### 8.3: Adicionar/Remover Itens
- Interface para adicionar item ao inventário
- Interface para remover item do inventário
- Validação
- **Teste:** Adicionar/remover funcionam

#### 8.4: Itens Interativos (Ações/Callbacks)
- Itens podem ter ações/interações
- Sistema de callbacks para ações de itens
- **Teste:** Ações de itens funcionam

#### 8.5: Integração com Ficha do Jogador
- Inventário vinculado à ficha do jogador
- Cada jogador tem seu inventário
- **Teste:** Inventários são independentes por jogador

### Fase 9: Backend (Futuro)

#### 9.1: Persistência de Estados
- Backend para salvar estados
- API para salvar/carregar sessões
- **Teste:** Estados são persistidos e carregados

#### 9.2: Sincronização entre Sessões
- Sistema de sincronização em tempo real
- Múltiplos usuários na mesma sessão
- **Teste:** Múltiplos usuários sincronizam

#### 9.3: Sistema de Salvar/Carregar Sessões
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
