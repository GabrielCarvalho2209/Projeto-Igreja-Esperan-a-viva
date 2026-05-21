import { Mail, Phone } from "lucide-react";
import { PageShell } from "../../components/common/PageShell";
import { churchInfo } from "../../data/mockData";

export function Contact() {
  return (
    <PageShell title="Contato" eyebrow="Fale conosco">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <form className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Nome</span>
            <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">E-mail</span>
            <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Mensagem</span>
            <textarea rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </label>
          <button type="button" className="rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800">
            Enviar mensagem
          </button>
        </form>
        <aside className="rounded-lg border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-bold text-slate-950">Canais oficiais</h2>
          <p className="mt-4 flex items-center gap-2 text-slate-700"><Phone size={20} /> {churchInfo.phone}</p>
          <p className="mt-3 flex items-center gap-2 text-slate-700"><Mail size={20} /> {churchInfo.email}</p>
        </aside>
      </div>
    </PageShell>
  );
}
