export const churchInfo = {
  name: "Igreja Esperanca Viva",
  tagline: "Comunidade, fe e servico para a cidade.",
  address: "Av. Central, 1200 - Centro, Sao Paulo - SP",
  phone: "(11) 4002-2026",
  email: "contato@esperancaviva.org",
  pixKey: "doacoes@esperancaviva.org",
  bank: "Banco Comunitario",
  agency: "0001",
  account: "12345-6",
};

export const heroImage =
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80";

export const eventsMock = [
  {
    id: 1,
    title: "Culto de Celebracao",
    description: "Encontro semanal com louvor, palavra e comunhao.",
    date: "2026-06-07",
    time: "19:00",
    location: "Templo principal",
    capacity: 180,
  },
  {
    id: 2,
    title: "Encontro de Jovens",
    description: "Noite de conversa, musica e atividades para adolescentes e jovens.",
    date: "2026-06-14",
    time: "18:30",
    location: "Sala multiuso",
    capacity: 80,
  },
  {
    id: 3,
    title: "Acao Solidaria",
    description: "Entrega de cestas e atendimento a familias da comunidade.",
    date: "2026-06-21",
    time: "09:00",
    location: "Patio social",
    capacity: 60,
  },
];

export const participantsMock = [
  { id: 1, eventId: 1, name: "Ana Clara", email: "ana@email.com", phone: "(11) 98888-1111" },
  { id: 2, eventId: 1, name: "Marcos Lima", email: "marcos@email.com", phone: "(11) 97777-2222" },
  { id: 3, eventId: 2, name: "Juliana Reis", email: "juliana@email.com", phone: "(11) 96666-3333" },
];

export const membersMock = [
  { id: 1, name: "Helena Duarte", email: "helena@email.com", phone: "(11) 95555-4444", role: "Membro", active: true },
  { id: 2, name: "Pedro Martins", email: "pedro@email.com", phone: "(11) 94444-5555", role: "Voluntario", active: true },
  { id: 3, name: "Carla Rocha", email: "carla@email.com", phone: "(11) 93333-6666", role: "Lideranca", active: true },
];

export const projectsMock = [
  {
    id: 1,
    title: "Mesa Solidaria",
    description: "Distribuicao mensal de alimentos para familias cadastradas.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Reforco Escolar",
    description: "Apoio gratuito para estudantes do ensino fundamental.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Visitas e Cuidado",
    description: "Acompanhamento de idosos e pessoas em situacao de vulnerabilidade.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80",
  },
];
