import { Clock } from "lucide-react";
import { PageShell } from "../../components/common/PageShell";

const schedules = [
  { title: "Culto de celebracao", day: "Domingo", time: "09:00 e 19:00" },
  { title: "Estudo biblico", day: "Quarta-feira", time: "20:00" },
  { title: "Encontro de jovens", day: "Sabado", time: "18:30" },
  { title: "Acao social", day: "Ultimo sabado do mes", time: "09:00" },
];

export function Schedules() {
  return (
    <PageShell title="Horarios de cultos" eyebrow="Agenda semanal">
      <div className="grid gap-4 md:grid-cols-2">
        {schedules.map((schedule) => (
          <article key={schedule.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <Clock className="text-blue-700" size={26} />
            <h2 className="mt-4 text-xl font-bold text-slate-950">{schedule.title}</h2>
            <p className="mt-2 text-slate-600">{schedule.day}</p>
            <p className="mt-1 text-sm font-medium text-blue-700">{schedule.time}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
