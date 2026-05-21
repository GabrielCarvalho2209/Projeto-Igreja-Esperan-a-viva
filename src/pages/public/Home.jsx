import { CalendarDays, HeartHandshake, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { StatCard } from "../../components/common/StatCard";
import { churchInfo, heroImage } from "../../data/mockData";

export function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <img src={heroImage} alt="Interior de uma igreja iluminada" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col justify-center px-4 py-16 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">Igreja local</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{churchInfo.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{churchInfo.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/eventos" className="rounded-md bg-blue-700 px-5 py-3 text-center font-medium text-white hover:bg-blue-800">
              Ver eventos
            </Link>
            <Link to="/doacoes" className="rounded-md bg-white px-5 py-3 text-center font-medium text-slate-950 hover:bg-slate-100">
              Contribuir
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-4">
        <StatCard label="Cultos semanais" value="4" helper="Celebracao, jovens e estudos" />
        <StatCard label="Voluntarios" value="35+" helper="Equipes de apoio e acao social" />
        <StatCard label="Projetos ativos" value="3" helper="Cuidado com a comunidade" />
        <StatCard label="Familias atendidas" value="120+" helper="Acoes sociais mensais" />
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">
          {[
            { icon: CalendarDays, title: "Cultos e eventos", text: "Acompanhe os encontros da semana e faca sua inscricao online." },
            { icon: Users, title: "Membros", text: "Area administrativa preparada para cadastro e gestao de membros." },
            { icon: HeartHandshake, title: "Projetos sociais", text: "Conheca iniciativas de cuidado, apoio e servico a comunidade." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-slate-200 p-5">
                <Icon className="text-blue-700" size={28} />
                <h2 className="mt-4 text-xl font-bold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="flex items-start gap-2 text-slate-700">
            <MapPin className="mt-1 text-blue-700" size={20} /> {churchInfo.address}
          </p>
        </div>
      </section>
    </>
  );
}
