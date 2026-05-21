import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageShell } from "../../components/common/PageShell";
import { EventForm } from "../../components/events/EventForm";
import { registerParticipant } from "../../services/eventsService";

export function EventRegistration() {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(participant) {
    setIsSubmitting(true);
    await registerParticipant(id, participant);
    setSuccess(true);
    setIsSubmitting(false);
  }

  return (
    <PageShell title="Inscricao em evento" eyebrow="Eventos">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <EventForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        <aside className="rounded-lg border border-slate-200 bg-white p-5">
          <CheckCircle2 className="text-blue-700" size={30} />
          <h2 className="mt-4 text-xl font-bold text-slate-950">Status</h2>
          {success ? (
            <div className="mt-3">
              <p className="text-sm leading-6 text-green-700">Inscricao registrada com sucesso.</p>
              <Link to={`/eventos/${id}/participantes`} className="mt-4 inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">
                Ver participantes
              </Link>
            </div>
          ) : (
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Preencha os dados do participante. No modo mock, a inscricao fica salva no navegador.
            </p>
          )}
        </aside>
      </div>
    </PageShell>
  );
}
