import { MapPin } from "lucide-react";
import { PageShell } from "../../components/common/PageShell";
import { churchInfo } from "../../data/mockData";

export function Location() {
  return (
    <PageShell title="Localizacao" eyebrow="Como chegar">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="min-h-[360px] overflow-hidden rounded-lg border border-slate-200 bg-white">
          <iframe
            title="Mapa da igreja"
            src="https://www.google.com/maps?q=Sao%20Paulo%20Centro&output=embed"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
          />
        </div>
        <aside className="rounded-lg border border-slate-200 bg-white p-5">
          <MapPin className="text-blue-700" size={28} />
          <h2 className="mt-4 text-xl font-bold text-slate-950">Endereco</h2>
          <p className="mt-2 text-slate-700">{churchInfo.address}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Para o MVP escolar, o mapa usa uma localizacao demonstrativa. A turma pode
            trocar pelo endereco real da igreja antes da apresentacao.
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
