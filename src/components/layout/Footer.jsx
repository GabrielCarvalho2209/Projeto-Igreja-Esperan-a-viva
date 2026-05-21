import { MapPin, Mail, Phone } from "lucide-react";
import { churchInfo } from "../../data/mockData";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-3">
        <div>
          <h2 className="font-bold text-slate-950">{churchInfo.name}</h2>
          <p className="mt-2 text-sm text-slate-600">{churchInfo.tagline}</p>
        </div>
        <address className="space-y-2 text-sm not-italic text-slate-600">
          <p className="flex gap-2"><MapPin size={18} /> {churchInfo.address}</p>
          <p className="flex gap-2"><Phone size={18} /> {churchInfo.phone}</p>
          <p className="flex gap-2"><Mail size={18} /> {churchInfo.email}</p>
        </address>
        <div className="text-sm text-slate-600 md:text-right">
          <p>Projeto educacional React + Spring Boot.</p>
          <p className="mt-1">Preparado para deploy na Vercel.</p>
        </div>
      </div>
    </footer>
  );
}
