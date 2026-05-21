import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { Loading } from "../../components/common/Loading";
import { PageShell } from "../../components/common/PageShell";
import { getParticipantsByEvent } from "../../services/eventsService";

export function Participants() {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadParticipants() {
      try {
        setParticipants(await getParticipantsByEvent(id));
      } catch {
        setError("Nao foi possivel carregar os participantes.");
      } finally {
        setIsLoading(false);
      }
    }

    loadParticipants();
  }, [id]);

  return (
    <PageShell title="Participantes inscritos" eyebrow="Eventos">
      {isLoading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          {participants.length === 0 ? (
            <p className="p-5 text-slate-600">Nenhum participante inscrito ainda.</p>
          ) : (
            <ul className="divide-y divide-slate-200">
              {participants.map((participant) => (
                <li key={participant.id} className="p-4">
                  <p className="font-medium text-slate-950">{participant.name}</p>
                  <p className="text-sm text-slate-600">{participant.email} | {participant.phone}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </PageShell>
  );
}
