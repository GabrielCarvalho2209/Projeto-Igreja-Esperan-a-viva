import { CalendarDays, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function EventCard({ event }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-700">
        <CalendarDays size={18} /> {event.date} as {event.time}
      </p>
      <h2 className="mt-3 text-xl font-bold text-slate-950">{event.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{event.description}</p>
      <div className="mt-4 space-y-2 text-sm text-slate-600">
        <p className="flex items-center gap-2"><MapPin size={17} /> {event.location}</p>
        <p className="flex items-center gap-2"><Users size={17} /> Ate {event.capacity} participantes</p>
      </div>
      <Link
        to={`/eventos/${event.id}`}
        className="mt-5 inline-flex justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
      >
        Ver detalhes
      </Link>
    </article>
  );
}
