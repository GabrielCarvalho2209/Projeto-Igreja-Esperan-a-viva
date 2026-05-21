import { CalendarDays, MapPin, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { Loading } from "../../components/common/Loading";
import { PageShell } from "../../components/common/PageShell";
import { getEventById } from "../../services/eventsService";

export function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvent() {
      try {
        const data = await getEventById(id);
        if (!data) {
          setError("Evento nao encontrado.");
          return;
        }
        setEvent(data);
      } catch {
        setError("Nao foi possivel carregar os detalhes do evento.");
      } finally {
        setIsLoading(false);
      }
    }

    loadEvent();
  }, [id]);

  if (isLoading) {
    return <PageShell title="Evento"><Loading /></PageShell>;
  }

  if (error) {
    return <PageShell title="Evento"><ErrorMessage message={error} /></PageShell>;
  }

  return (
    <PageShell title={event.title} eyebrow="Detalhes do evento">
      <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="max-w-3xl text-lg leading-8 text-slate-700">{event.description}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <p className="flex items-center gap-2 rounded-lg bg-slate-50 p-4 text-slate-700">
            <CalendarDays className="text-blue-700" /> {event.date} as {event.time}
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-slate-50 p-4 text-slate-700">
            <MapPin className="text-blue-700" /> {event.location}
          </p>
          <p className="flex items-center gap-2 rounded-lg bg-slate-50 p-4 text-slate-700">
            <Users className="text-blue-700" /> {event.capacity} vagas
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to={`/eventos/${event.id}/inscricao`} className="rounded-md bg-blue-700 px-4 py-2 text-center font-medium text-white hover:bg-blue-800">
            Fazer inscricao
          </Link>
          <Link to={`/eventos/${event.id}/participantes`} className="rounded-md border border-slate-300 px-4 py-2 text-center font-medium text-slate-700 hover:bg-slate-50">
            Ver participantes
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
