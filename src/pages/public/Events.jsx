import { useEffect, useState } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { Loading } from "../../components/common/Loading";
import { PageShell } from "../../components/common/PageShell";
import { EventCard } from "../../components/events/EventCard";
import { getEvents } from "../../services/eventsService";

export function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        setEvents(await getEvents());
      } catch {
        setError("Nao foi possivel carregar os eventos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadEvents();
  }, []);

  return (
    <PageShell title="Eventos" eyebrow="Agenda da comunidade">
      {isLoading && <Loading message="Carregando eventos..." />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
