import { CalendarDays, HeartHandshake, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StatCard } from "../../components/common/StatCard";
import { getEvents } from "../../services/eventsService";
import { getMembers } from "../../services/membersService";

export function Dashboard() {
  const [eventsCount, setEventsCount] = useState(0);
  const [membersCount, setMembersCount] = useState(0);

  useEffect(() => {
    async function loadDashboard() {
      const [events, members] = await Promise.all([getEvents(), getMembers()]);
      setEventsCount(events.length);
      setMembersCount(members.length);
    }

    loadDashboard();
  }, []);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-950">Dashboard</h2>
        <p className="mt-1 text-sm text-slate-600">Resumo simples para acompanhamento do MVP.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Eventos cadastrados" value={eventsCount} helper="Consumidos do service de eventos" />
        <StatCard label="Membros ativos" value={membersCount} helper="Gerenciados no CRUD de membros" />
        <StatCard label="Projetos sociais" value="3" helper="Conteudo publico da igreja" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { to: "/eventos", label: "Ver eventos", icon: CalendarDays },
          { to: "/admin/membros", label: "Gerenciar membros", icon: Users },
          { to: "/projetos-sociais", label: "Projetos sociais", icon: HeartHandshake },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.to} to={item.to} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 hover:bg-blue-50">
              <Icon className="text-blue-700" size={22} /> {item.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
