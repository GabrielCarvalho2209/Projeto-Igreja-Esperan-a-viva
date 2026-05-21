# Plano de Desenvolvimento Frontend - Sistema Web para Igreja Local

## 1. Visao Geral

Este plano organiza o desenvolvimento do frontend de um sistema web para uma igreja local usando ReactJS, Vite, React Router DOM, TailwindCSS, consumo de API REST e deploy na Vercel.

O foco e construir um MVP funcional, educativo e realista para estudantes do Ensino Medio Tecnico, considerando pouco tempo de aula, hardware limitado e trabalho colaborativo entre estudantes com computador e estudantes que usam apenas celular fora da escola.

## 2. Objetivo do Produto

Construir uma aplicacao web responsiva com:

- Paginas institucionais da igreja.
- Listagem e detalhes de eventos.
- Inscricao em eventos consumindo API.
- Area administrativa simples.
- Cadastro e gerenciamento basico de membros.
- Pagina de projetos sociais e doacoes.
- Deploy continuo na Vercel.

## 3. Stack Tecnica

| Area | Tecnologia |
|---|---|
| Frontend | ReactJS com Vite |
| Rotas | React Router DOM |
| Estilizacao | TailwindCSS |
| Estado global | Context API |
| API | Axios ou Fetch |
| Backend previsto | Spring Boot Java |
| Banco previsto | SQL Server |
| Deploy | Vercel |
| Versionamento | Git e GitHub |
| Organizacao | GitHub Projects, Trello ou Jira |
| Design | Figma |

## 4. Restricoes Reais do Projeto

| Restricao | Impacto | Decisao tecnica |
|---|---|---|
| Poucas aulas presenciais | Nao ha tempo para arquitetura complexa | Priorizar MVP e componentes reutilizaveis simples |
| Muitos alunos sem PC em casa | Nem todos poderao codar fora da escola | Separar tarefas de codigo e tarefas mobile |
| Backend pode atrasar | Frontend nao pode ficar parado | Usar mocks temporarios e depois trocar pela API real |
| Internet instavel | Risco em deploy e instalacoes | Preparar commits pequenos e usar ambientes online |
| Alunos iniciantes | Risco de confusao com Git e React | Fluxo simples: main, dev e feature branches |

## 5. Organizacao Geral dos 4 Sprints

Cada sprint dura 2 semanas. O ciclo completo cobre 8 semanas de desenvolvimento principal. As semanas restantes ate outubro devem ser usadas para ajustes, testes, apresentacao, documentacao final e integracao com backend/mobile.

| Sprint | Duracao | Tema | Entrega principal |
|---|---:|---|---|
| Sprint 1 | 2 semanas | Base do projeto e paginas institucionais | Site institucional responsivo no Vercel |
| Sprint 2 | 2 semanas | Eventos e consumo de API | Eventos carregando de API/mock |
| Sprint 3 | 2 semanas | Area administrativa e membros | Dashboard com CRUD basico |
| Sprint 4 | 2 semanas | Doacoes, projetos sociais e finalizacao | MVP completo, responsivo e documentado |

## 6. Arquitetura Base Recomendada

```bash
src/
 ├── assets/
 ├── components/
 │   ├── common/
 │   ├── layout/
 │   ├── events/
 │   ├── members/
 │   └── dashboard/
 ├── contexts/
 ├── hooks/
 ├── pages/
 │   ├── public/
 │   └── admin/
 ├── routes/
 ├── services/
 ├── styles/
 ├── App.jsx
 └── main.jsx
```

## 7. Padrao de Branches

| Branch | Uso |
|---|---|
| `main` | Versao estavel publicada para apresentacao |
| `dev` | Integracao das funcionalidades aprovadas |
| `feature/nome-da-funcionalidade` | Desenvolvimento de uma tarefa especifica |

Exemplos:

```bash
feature/home-page
feature/events-list
feature/admin-login
feature/members-crud
feature/donations-page
```

## 8. Padrao de Commits

Usar commits pequenos e claros:

```bash
feat: create home page layout
feat: add events API service
fix: adjust mobile menu spacing
style: improve donation page responsiveness
docs: update sprint 2 checklist
refactor: split event card component
```

## 9. Pipeline Geral de Desenvolvimento

1. Criar issue no GitHub com a tarefa.
2. Criar branch a partir de `dev`.
3. Desenvolver a funcionalidade.
4. Testar localmente ou no StackBlitz/Codespaces.
5. Fazer commit pequeno.
6. Abrir Pull Request para `dev`.
7. Alunos no celular revisam tela, texto, responsividade e checklist.
8. Aluno responsavel por merge aprova e integra.
9. Vercel gera preview automatico.
10. Ao fim do sprint, merge de `dev` para `main`.

## 10. Configuracao Inicial Recomendada

```bash
npm create vite@latest igreja-frontend -- --template react
cd igreja-frontend
npm install
npm install react-router-dom axios
npm install -D tailwindcss @tailwindcss/vite
npm run dev
```

Arquivo `.env`:

```bash
VITE_API_URL=https://api-sistema-igreja.exemplo.com/api
```

Arquivo `.env.example`:

```bash
VITE_API_URL=http://localhost:8080/api
```

---

# Sprint 1 - Base do Projeto e Paginas Institucionais

## 1. Sprint Goal

Construir a base tecnica do projeto React e entregar uma pagina institucional responsiva com navegacao entre Home, Historia, Horarios, Localizacao e Contato.

## 2. Features Desenvolvidas

- Criacao do projeto React com Vite.
- Configuracao do TailwindCSS.
- Configuracao do React Router DOM.
- Layout principal com Header, Navbar, Main e Footer.
- Home page responsiva.
- Pagina de historia da igreja.
- Pagina de horarios de cultos.
- Pagina de localizacao com mapa incorporado.
- Secao de contato.
- Deploy inicial na Vercel.

## 3. React Architecture for the Sprint

### Pages

- `Home.jsx`
- `About.jsx`
- `Schedules.jsx`
- `Location.jsx`
- `Contact.jsx`

### Components

- `Header.jsx`
- `Footer.jsx`
- `Layout.jsx`
- `NavLinkItem.jsx`
- `SectionTitle.jsx`
- `ScheduleCard.jsx`

### Routes

```txt
/               -> Home
/historia       -> About
/horarios       -> Schedules
/localizacao    -> Location
/contato        -> Contact
```

### Context/global state

Nenhum estado global obrigatorio neste sprint.

### API integration

Nao obrigatoria neste sprint. Conteudo pode ser estatico para acelerar a entrega.

### Folder structure

```bash
src/
 ├── components/
 │   ├── common/
 │   │   └── SectionTitle.jsx
 │   └── layout/
 │       ├── Header.jsx
 │       ├── Footer.jsx
 │       ├── Layout.jsx
 │       └── NavLinkItem.jsx
 ├── pages/
 │   └── public/
 │       ├── Home.jsx
 │       ├── About.jsx
 │       ├── Schedules.jsx
 │       ├── Location.jsx
 │       └── Contact.jsx
 ├── routes/
 │   └── AppRoutes.jsx
 ├── App.jsx
 └── main.jsx
```

## 4. Team Task Distribution

| Perfil | Responsabilidades |
|---|---|
| Estudantes com PC | Criar projeto Vite, configurar Tailwind, criar rotas, implementar layout, fazer deploy na Vercel |
| Estudantes com celular | Revisar textos institucionais, testar visual pelo link da Vercel, criar issues de ajustes, validar links e menu mobile |

## 5. Git/GitHub Pipeline

| Etapa | Acao |
|---|---|
| Branch inicial | `main` recebe projeto base |
| Integracao | Criar `dev` a partir de `main` |
| Funcionalidades | Criar branches como `feature/layout-base` e `feature/home-page` |
| Pull Request | Todo PR deve apontar para `dev` |
| Review | Pelo menos 1 aluno revisa codigo e 1 aluno revisa visual/texto |
| Deploy | Vercel conectado ao GitHub, com preview por PR |

## 6. Sprint Technical Deliverable

- Projeto React criado e versionado no GitHub.
- Paginas institucionais navegaveis.
- Layout responsivo para celular.
- Deploy funcionando na Vercel.
- README com instrucoes de instalacao.

## 7. Acceptance Criteria

- Menu navega corretamente entre as paginas.
- Home funciona em desktop e mobile.
- Footer aparece em todas as paginas.
- O projeto roda com `npm run dev`.
- A versao publicada abre sem erro na Vercel.
- Codigo esta organizado em componentes e paginas.

## 8. Sprint Risks

| Risco | Mitigacao |
|---|---|
| Alunos com dificuldade no Git | Professor ou lider tecnico cria branches base e ensina PR guiado |
| Tailwind nao configurado corretamente | Manter um commit inicial estavel antes de novas features |
| Conteudo institucional incompleto | Usar texto temporario revisado depois por alunos no celular |
| Deploy falhar | Testar build local com `npm run build` antes de enviar para `main` |

## 9. Example Code - React Router Setup

`src/routes/AppRoutes.jsx`

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/public/Home";
import { About } from "../pages/public/About";
import { Schedules } from "../pages/public/Schedules";
import { Location } from "../pages/public/Location";
import { Contact } from "../pages/public/Contact";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<About />} />
          <Route path="/horarios" element={<Schedules />} />
          <Route path="/localizacao" element={<Location />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

`src/components/layout/Layout.jsx`

```jsx
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

`src/App.jsx`

```jsx
import { AppRoutes } from "./routes/AppRoutes";

export default function App() {
  return <AppRoutes />;
}
```

## 10. Folder Structure

```bash
src/
 ├── components/
 │   ├── common/
 │   └── layout/
 ├── pages/
 │   └── public/
 ├── routes/
 ├── assets/
 ├── styles/
 ├── App.jsx
 └── main.jsx
```

---

# Sprint 2 - Eventos e Consumo de API

## 1. Sprint Goal

Implementar a area de eventos com calendario/listagem, pagina de detalhes, formulario de inscricao e listagem de participantes consumindo API REST ou mock temporario.

## 2. Features Desenvolvidas

- Listagem de eventos.
- Card de evento reutilizavel.
- Pagina de detalhes do evento.
- Formulario controlado de inscricao.
- Envio de inscricao para API.
- Listagem de participantes por evento.
- Tratamento de loading e erro.
- Uso de `.env` para URL da API.

## 3. React Architecture for the Sprint

### Pages

- `Events.jsx`
- `EventDetails.jsx`
- `EventRegistration.jsx`
- `Participants.jsx`

### Components

- `EventCard.jsx`
- `EventForm.jsx`
- `Loading.jsx`
- `ErrorMessage.jsx`

### Routes

```txt
/eventos
/eventos/:id
/eventos/:id/inscricao
/eventos/:id/participantes
```

### Context/global state

Nao obrigatorio. O estado dos eventos pode ficar local nas paginas com `useState` e `useEffect`.

### API integration

Servicos previstos:

- `GET /events`
- `GET /events/{id}`
- `POST /events/{id}/registrations`
- `GET /events/{id}/participants`

### Folder structure

```bash
src/
 ├── components/
 │   ├── common/
 │   │   ├── Loading.jsx
 │   │   └── ErrorMessage.jsx
 │   └── events/
 │       ├── EventCard.jsx
 │       └── EventForm.jsx
 ├── pages/
 │   └── public/
 │       ├── Events.jsx
 │       ├── EventDetails.jsx
 │       ├── EventRegistration.jsx
 │       └── Participants.jsx
 ├── services/
 │   ├── api.js
 │   └── eventsService.js
 └── routes/
     └── AppRoutes.jsx
```

## 4. Team Task Distribution

| Perfil | Responsabilidades |
|---|---|
| Estudantes com PC | Criar services Axios, implementar `useEffect`, conectar paginas a API/mock, criar formulario, tratar estados de loading/erro |
| Estudantes com celular | Criar dados de eventos, revisar descricoes, testar inscricao no preview da Vercel, abrir issues de bugs visuais, atualizar quadro do sprint |

## 5. Git/GitHub Pipeline

| Etapa | Acao |
|---|---|
| Branches | `feature/events-list`, `feature/event-details`, `feature/event-registration` |
| PR | Cada funcionalidade deve ter PR separado |
| Review tecnico | Verificar se a URL da API usa `import.meta.env.VITE_API_URL` |
| Review funcional | Confirmar se eventos aparecem no celular |
| CI simples | Vercel Preview + `npm run build` antes do merge |

## 6. Sprint Technical Deliverable

- Eventos carregando da API ou mock documentado.
- Detalhes de evento abrindo por rota dinamica.
- Formulario de inscricao funcionando.
- Participantes listados.
- Deploy atualizado na Vercel.

## 7. Acceptance Criteria

- `/eventos` exibe eventos em cards responsivos.
- Clique no evento abre `/eventos/:id`.
- Formulario de inscricao valida campos obrigatorios.
- Participantes sao carregados por API ou mock.
- Erros de API mostram mensagem amigavel.
- Nenhuma URL de API esta fixa no codigo.

## 8. Sprint Risks

| Risco | Mitigacao |
|---|---|
| Backend ainda nao pronto | Criar mock local com dados parecidos com a API final |
| Alunos confundem estado local com global | Usar estado local nesta sprint para simplificar |
| CORS bloqueando requisicoes | Backend deve liberar origem da Vercel e localhost |
| API muda contrato | Registrar contrato no README e alinhar com equipe backend |

## 9. Example Code - Axios Service and API Consumption

`src/services/api.js`

```jsx
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
```

`src/services/eventsService.js`

```jsx
import { api } from "./api";

export async function getEvents() {
  const response = await api.get("/events");
  return response.data;
}

export async function getEventById(id) {
  const response = await api.get(`/events/${id}`);
  return response.data;
}

export async function registerParticipant(eventId, participant) {
  const response = await api.post(`/events/${eventId}/registrations`, participant);
  return response.data;
}
```

`src/pages/public/Events.jsx`

```jsx
import { useEffect, useState } from "react";
import { EventCard } from "../../components/events/EventCard";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { Loading } from "../../components/common/Loading";
import { getEvents } from "../../services/eventsService";

export function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch {
        setError("Nao foi possivel carregar os eventos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (isLoading) return <Loading message="Carregando eventos..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1 className="text-2xl font-bold text-slate-900">Eventos</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
```

`src/components/events/EventCard.jsx`

```jsx
import { Link } from "react-router-dom";

export function EventCard({ event }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-medium text-blue-700">{event.date}</p>
      <h2 className="mt-2 text-lg font-semibold text-slate-900">{event.title}</h2>
      <p className="mt-2 text-sm text-slate-600">{event.description}</p>
      <Link
        to={`/eventos/${event.id}`}
        className="mt-4 inline-flex rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
      >
        Ver detalhes
      </Link>
    </article>
  );
}
```

## 10. Folder Structure

```bash
src/
 ├── components/
 │   ├── common/
 │   └── events/
 ├── pages/
 │   └── public/
 ├── services/
 ├── routes/
 ├── assets/
 └── App.jsx
```

---

# Sprint 3 - Admin Area, Login and Members

## 1. Sprint Goal

Criar uma area administrativa simples com login, dashboard basico, cadastro de membros, listagem, edicao e remocao consumindo API REST.

## 2. Features Desenvolvidas

- Tela de login.
- Context API para autenticacao simples.
- Rota protegida.
- Dashboard administrativo.
- Cadastro de membro.
- Lista de membros.
- Edicao de membro.
- Remocao de membro.
- Logout.

## 3. React Architecture for the Sprint

### Pages

- `Login.jsx`
- `Dashboard.jsx`
- `MembersList.jsx`
- `MemberForm.jsx`

### Components

- `AdminLayout.jsx`
- `ProtectedRoute.jsx`
- `MemberTable.jsx`
- `MemberFormFields.jsx`
- `DashboardCard.jsx`

### Routes

```txt
/admin/login
/admin
/admin/membros
/admin/membros/novo
/admin/membros/:id/editar
```

### Context/global state

`AuthContext` para:

- Guardar token ou usuario autenticado.
- Fazer login.
- Fazer logout.
- Informar se usuario esta autenticado.

### API integration

Servicos previstos:

- `POST /auth/login`
- `GET /members`
- `POST /members`
- `PUT /members/{id}`
- `DELETE /members/{id}`

### Folder structure

```bash
src/
 ├── components/
 │   ├── dashboard/
 │   │   └── DashboardCard.jsx
 │   ├── layout/
 │   │   └── AdminLayout.jsx
 │   └── members/
 │       ├── MemberTable.jsx
 │       └── MemberFormFields.jsx
 ├── contexts/
 │   └── AuthContext.jsx
 ├── pages/
 │   └── admin/
 │       ├── Login.jsx
 │       ├── Dashboard.jsx
 │       ├── MembersList.jsx
 │       └── MemberForm.jsx
 ├── routes/
 │   └── ProtectedRoute.jsx
 └── services/
     ├── authService.js
     └── membersService.js
```

## 4. Team Task Distribution

| Perfil | Responsabilidades |
|---|---|
| Estudantes com PC | Criar AuthContext, rotas protegidas, telas admin, services de membros, formularios controlados, merge e deploy |
| Estudantes com celular | Criar casos de teste manuais, revisar mensagens de erro, testar login no celular, conferir tabelas responsivas, documentar fluxo admin |

## 5. Git/GitHub Pipeline

| Etapa | Acao |
|---|---|
| Branches | `feature/auth-context`, `feature/admin-dashboard`, `feature/members-crud` |
| PR | PRs pequenos, revisados antes do merge |
| Review tecnico | Verificar se token nao esta escrito fixo no codigo |
| Review funcional | Validar se usuario sem login nao entra no admin |
| Deploy | Preview Vercel para cada PR e deploy final ao fim do sprint |

## 6. Sprint Technical Deliverable

- Login simples funcionando.
- Rotas admin protegidas.
- Dashboard basico publicado.
- CRUD de membros funcionando com API ou mock.
- Codigo do fluxo admin no GitHub.

## 7. Acceptance Criteria

- Usuario acessa `/admin/login`.
- Login salva estado de autenticacao.
- Usuario autenticado acessa `/admin`.
- Usuario nao autenticado e redirecionado.
- Membros podem ser criados, listados, editados e removidos.
- Formularios validam campos obrigatorios.

## 8. Sprint Risks

| Risco | Mitigacao |
|---|---|
| Login real do backend atrasar | Usar mock de login temporario e documentar troca futura |
| Alunos salvarem senha no frontend | Ensinar que senha nao deve ficar fixa no codigo |
| CRUD ficar grande demais | Priorizar listar e cadastrar; editar/remover entram se houver tempo |
| Tabela ruim no celular | Usar cards no mobile e tabela apenas em telas maiores |

## 9. Example Code - Context API and Protected Route

`src/contexts/AuthContext.jsx`

```jsx
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("church_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  function login(userData) {
    localStorage.setItem("church_user", JSON.stringify(userData));
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("church_user");
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
```

`src/routes/ProtectedRoute.jsx`

```jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
```

`src/pages/admin/Login.jsx`

```jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      setError("Preencha e-mail e senha.");
      return;
    }

    login({ name: "Administrador", email });
    navigate("/admin");
  }

  return (
    <section className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">Area administrativa</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Senha</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
```

## 10. Folder Structure

```bash
src/
 ├── components/
 │   ├── dashboard/
 │   ├── layout/
 │   └── members/
 ├── contexts/
 ├── pages/
 │   └── admin/
 ├── routes/
 ├── services/
 └── App.jsx
```

---

# Sprint 4 - Social Projects, Donations and Final Delivery

## 1. Sprint Goal

Finalizar o MVP com paginas de projetos sociais e doacoes, melhorar responsividade, acessibilidade, documentacao, deploy final e preparacao para apresentacao.

## 2. Features Desenvolvidas

- Pagina de projetos sociais.
- Pagina de doacoes com QR Code.
- Informacoes de Pix e dados bancarios.
- Melhorias finais de responsividade.
- Testes manuais em celulares.
- Ajustes de acessibilidade.
- README final.
- Checklist de apresentacao.
- Deploy final em producao na Vercel.

## 3. React Architecture for the Sprint

### Pages

- `SocialProjects.jsx`
- `Donations.jsx`
- `NotFound.jsx`

### Components

- `ProjectCard.jsx`
- `DonationBox.jsx`
- `QRCodeCard.jsx`
- `CopyPixButton.jsx`
- `ResponsiveImage.jsx`

### Routes

```txt
/projetos-sociais
/doacoes
/*
```

### Context/global state

Sem novo contexto obrigatorio. A aplicacao deve manter `AuthContext` para area admin.

### API integration

Opcional:

- `GET /social-projects`
- `GET /donation-info`

Se backend nao estiver pronto, usar conteudo estatico com comentarios no README explicando a futura integracao.

### Folder structure

```bash
src/
 ├── components/
 │   ├── donations/
 │   │   ├── DonationBox.jsx
 │   │   ├── QRCodeCard.jsx
 │   │   └── CopyPixButton.jsx
 │   └── social/
 │       └── ProjectCard.jsx
 ├── pages/
 │   └── public/
 │       ├── SocialProjects.jsx
 │       ├── Donations.jsx
 │       └── NotFound.jsx
 ├── services/
 │   └── donationService.js
 └── assets/
     └── qrcode-pix.png
```

## 4. Team Task Distribution

| Perfil | Responsabilidades |
|---|---|
| Estudantes com PC | Implementar paginas finais, ajustar rotas, corrigir bugs, revisar build, configurar variaveis na Vercel, fazer merge final |
| Estudantes com celular | Testar em dispositivos reais, revisar acessibilidade visual, conferir dados de Pix, preparar roteiro de apresentacao, atualizar README e issues finais |

## 5. Git/GitHub Pipeline

| Etapa | Acao |
|---|---|
| Branches | `feature/donations-page`, `feature/social-projects`, `fix/responsive-adjustments` |
| PR | Cada ajuste deve ter descricao e print do preview |
| Review | Revisao final por checklist |
| Release | Merge de `dev` em `main` |
| Deploy | Vercel publica branch `main` como producao |

## 6. Sprint Technical Deliverable

- MVP completo publicado na Vercel.
- Todas as paginas principais acessiveis por rota.
- README final com instalacao, rotas, API esperada e integrantes.
- Prints ou links de teste responsivo.
- Issues fechadas ou documentadas.

## 7. Acceptance Criteria

- Pagina de doacoes funciona bem em celular.
- QR Code aparece e possui texto alternativo.
- Pix pode ser copiado por botao.
- Projetos sociais aparecem em cards responsivos.
- Rotas inexistentes mostram pagina 404.
- `npm run build` executa sem erro.
- Vercel esta com variavel `VITE_API_URL` configurada.

## 8. Sprint Risks

| Risco | Mitigacao |
|---|---|
| Dados bancarios incorretos | Validar com responsavel da igreja antes da apresentacao |
| QR Code nao aparece | Manter imagem no repositorio e testar deploy |
| Falta de tempo para polimento | Priorizar bugs funcionais e responsividade mobile |
| Muitos conflitos no fim | Congelar novas features e permitir apenas fixes |

## 9. Example Code - Donation Page with Copy Button

`src/components/donations/CopyPixButton.jsx`

```jsx
import { useState } from "react";

export function CopyPixButton({ pixKey }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(pixKey);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
    >
      {copied ? "Pix copiado" : "Copiar Pix"}
    </button>
  );
}
```

`src/pages/public/Donations.jsx`

```jsx
import { CopyPixButton } from "../../components/donations/CopyPixButton";
import qrCodePix from "../../assets/qrcode-pix.png";

const donationInfo = {
  pixKey: "igreja.local@email.com",
  bank: "Banco Exemplo",
  agency: "0001",
  account: "12345-6",
};

export function Donations() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Doacoes e dizimos</h1>
        <p className="mt-3 text-slate-700">
          Contribua com os projetos da igreja de forma simples e segura.
        </p>

        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">Dados para transferencia</h2>
          <dl className="mt-4 space-y-2 text-sm text-slate-700">
            <div>
              <dt className="font-medium">Chave Pix</dt>
              <dd>{donationInfo.pixKey}</dd>
            </div>
            <div>
              <dt className="font-medium">Banco</dt>
              <dd>{donationInfo.bank}</dd>
            </div>
            <div>
              <dt className="font-medium">Agencia</dt>
              <dd>{donationInfo.agency}</dd>
            </div>
            <div>
              <dt className="font-medium">Conta</dt>
              <dd>{donationInfo.account}</dd>
            </div>
          </dl>

          <div className="mt-4">
            <CopyPixButton pixKey={donationInfo.pixKey} />
          </div>
        </div>
      </div>

      <aside className="rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-semibold text-slate-900">QR Code Pix</h2>
        <img
          src={qrCodePix}
          alt="QR Code para doacao via Pix"
          className="mt-4 w-full rounded-md border border-slate-200"
        />
      </aside>
    </section>
  );
}
```

## 10. Folder Structure

```bash
src/
 ├── components/
 │   ├── donations/
 │   ├── social/
 │   ├── common/
 │   └── layout/
 ├── contexts/
 ├── pages/
 │   ├── public/
 │   └── admin/
 ├── routes/
 ├── services/
 ├── assets/
 └── App.jsx
```

---

# 11. Workflow para Alunos com Hardware Limitado

## Alunos com computador

Devem priorizar:

- Criar e editar componentes React.
- Resolver conflitos de Git.
- Rodar `npm install`, `npm run dev` e `npm run build`.
- Integrar API.
- Configurar deploy na Vercel.
- Corrigir bugs tecnicos.

## Alunos usando celular

Devem priorizar:

- Criar issues no GitHub.
- Revisar Pull Requests pelo GitHub Mobile.
- Testar links da Vercel Preview.
- Conferir textos e conteudo institucional.
- Atualizar Trello/Jira/GitHub Projects.
- Editar telas no Figma Mobile.
- Registrar bugs com prints.
- Validar responsividade.
- Preparar documentacao e apresentacao.

## Ferramentas recomendadas

| Ferramenta | Uso |
|---|---|
| StackBlitz | Desenvolvimento React pelo navegador |
| GitHub Codespaces | Ambiente completo na nuvem |
| Google IDX | Alternativa de IDE online |
| GitHub Mobile | Issues, PRs, comentarios e reviews |
| Figma Mobile | Revisao de layout e conteudo |
| Vercel | Deploy e previews |
| Trello/Jira/GitHub Projects | Organizacao do sprint |

---

# 12. Checklist de Qualidade

## Antes de cada Pull Request

- O projeto roda com `npm run dev`.
- Nao ha erro no console do navegador.
- A pagina funciona em tela mobile.
- O codigo esta em componente separado quando faz sentido.
- Nao ha URL de API fixa no codigo.
- O commit tem mensagem clara.
- O PR tem descricao do que foi feito.

## Antes de cada Deploy

- Rodar `npm run build`.
- Conferir variaveis de ambiente na Vercel.
- Testar rotas principais.
- Testar pelo menos um celular.
- Validar formulario principal da sprint.

## Antes da apresentacao final

- Home abre corretamente.
- Eventos aparecem.
- Inscricao funciona ou mock esta explicado.
- Admin entra com login.
- Membros podem ser listados.
- Doacoes aparece no celular.
- README esta atualizado.
- O link da Vercel esta publico.

---

# 13. Contratos de API Recomendados

## Events

```json
{
  "id": 1,
  "title": "Culto de Jovens",
  "description": "Encontro especial para jovens.",
  "date": "2026-08-15",
  "time": "19:30",
  "location": "Templo principal"
}
```

## Participant

```json
{
  "id": 1,
  "name": "Maria Souza",
  "email": "maria@email.com",
  "phone": "11999999999",
  "eventId": 1
}
```

## Member

```json
{
  "id": 1,
  "name": "Joao Silva",
  "email": "joao@email.com",
  "phone": "11988888888",
  "role": "Membro",
  "active": true
}
```

---

# 14. Decisoes Tecnicas Explicadas para Estudantes

## Por que React com Vite?

Vite cria projetos React rapidamente, tem servidor local veloz e exige pouca configuracao. Isso ajuda a turma a focar em componentes, rotas e consumo de API.

## Por que React Router DOM?

O sistema tem varias paginas. O React Router permite criar rotas como `/eventos`, `/admin` e `/doacoes` sem recarregar a aplicacao inteira.

## Por que Context API?

O projeto so precisa de estado global simples, principalmente autenticacao. Zustand seria uma boa opcao, mas Context API evita adicionar mais uma biblioteca para alunos iniciantes.

## Por que Axios?

Axios simplifica chamadas HTTP e permite criar uma instancia unica com `baseURL`, o que deixa o codigo mais organizado.

## Por que TailwindCSS?

Tailwind permite criar interfaces responsivas rapidamente usando classes utilitarias. Para estudantes, isso reduz o tempo gasto criando muitos arquivos CSS.

## Por que Vercel?

Vercel integra facilmente com GitHub, gera previews de Pull Requests e facilita apresentacoes do projeto sem configurar servidor manualmente.

---

# 15. MVP Final Esperado

Ao final dos 4 sprints, o MVP deve ter:

- Site institucional responsivo.
- Paginas publicas navegaveis.
- Eventos consumindo API ou mock documentado.
- Inscricao em eventos.
- Area admin simples.
- Cadastro e listagem de membros.
- Pagina de projetos sociais.
- Pagina de doacoes com QR Code e Pix.
- Deploy final na Vercel.
- Codigo versionado no GitHub.
- README com instrucoes e rotas.

Este escopo e suficiente para demonstrar dominio de React, rotas, componentes, formularios, consumo de API, deploy e colaboracao em equipe, sem transformar o projeto em algo grande demais para o calendario escolar.
