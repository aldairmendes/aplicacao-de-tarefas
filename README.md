# ◈ TaskFlow — Aplicação de Tarefas

Gerenciador de tarefas moderno com CRUD completo, built com React 18, React Router v6 e Context API.

## ✨ Funcionalidades

- **Criar** tarefas com título, descrição e prioridade (Baixa / Média / Alta / Urgente)
- **Visualizar** lista com filtros: Todas | Ativas | Concluídas
- **Editar** tarefas via modal
- **Excluir** tarefas individualmente ou limpar todas as concluídas
- **Marcar** como concluída com checkbox
- **Persistência** automática via `localStorage`
- **Estatísticas** em tempo real (total, ativas, concluídas, % de progresso)

## 🛠 Tecnologias

- React 18 + Hooks (`useState`, `useEffect`, `useContext`)
- React Router DOM v6 (`BrowserRouter`, `Routes`, `Route`, `NavLink`)
- Context API para estado global
- `localStorage` para persistência entre sessões
- UUID para geração de IDs únicos

## 🚀 Como executar

```bash
# Clone o repositório
git clone https://github.com/aldairmendes/aplicacao-de-tarefas.git
cd aplicacao-de-tarefas

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📁 Estrutura

```
src/
├── context/
│   └── TaskContext.jsx     # Contexto global com CRUD completo
├── components/
│   ├── Navbar.jsx          # Barra de navegação
│   ├── TaskCard.jsx        # Card individual de tarefa
│   └── EditModal.jsx       # Modal de edição
├── pages/
│   ├── Home.jsx            # Lista de tarefas com filtros e stats
│   └── AddTask.jsx         # Formulário de nova tarefa
├── App.jsx                 # Configuração de rotas
├── index.jsx               # Entry point
└── index.css               # Estilos globais
```

## 🎨 Design

Interface dark com tipografia editorial (Syne + DM Mono), sistema de prioridades colorido e animações suaves.
