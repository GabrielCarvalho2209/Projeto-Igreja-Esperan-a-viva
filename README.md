# Igreja Esperanca Viva - Frontend

Frontend React + Vite para um sistema web de igreja local, criado para um projeto educacional de Ensino Medio Tecnico.

## Tecnologias

- ReactJS com Vite
- React Router DOM
- Context API
- Axios
- TailwindCSS
- Vercel

## Rodando localmente

```bash
npm install
cp .env.example .env
npm run dev
```

No Windows PowerShell, se `cp` nao estiver disponivel:

```bash
Copy-Item .env.example .env
```

## Variaveis de ambiente

```bash
VITE_API_URL=http://localhost:8080/api
VITE_USE_MOCKS=true
```

Use `VITE_USE_MOCKS=true` quando o backend Spring Boot ainda nao estiver disponivel. Troque para `false` quando a API real estiver pronta.

## Rotas principais

- `/`
- `/historia`
- `/horarios`
- `/localizacao`
- `/contato`
- `/eventos`
- `/eventos/:id`
- `/eventos/:id/inscricao`
- `/eventos/:id/participantes`
- `/projetos-sociais`
- `/doacoes`
- `/admin/login`
- `/admin`
- `/admin/membros`
- `/admin/membros/novo`
- `/admin/membros/:id/editar`

## Login demonstrativo

Com `VITE_USE_MOCKS=true`, a tela de login aceita os dados preenchidos por padrao:

```bash
email: admin@igreja.com
senha: 123456
```

## Deploy na Vercel

1. Suba o projeto para o GitHub.
2. Importe o repositorio na Vercel.
3. Configure as variaveis:

```bash
VITE_API_URL=http://localhost:8080/api
VITE_USE_MOCKS=true
```

4. Quando o backend Spring Boot estiver publicado, troque `VITE_API_URL` para a URL real e use `VITE_USE_MOCKS=false`.

O arquivo `vercel.json` ja inclui rewrite para que rotas como `/eventos/1` e `/admin` funcionem quando acessadas diretamente.
