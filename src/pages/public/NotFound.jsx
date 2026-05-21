import { Link } from "react-router-dom";
import { PageShell } from "../../components/common/PageShell";

export function NotFound() {
  return (
    <PageShell title="Pagina nao encontrada" eyebrow="Erro 404">
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-slate-600">A rota acessada nao existe neste MVP.</p>
        <Link to="/" className="mt-4 inline-flex rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800">
          Voltar para Home
        </Link>
      </div>
    </PageShell>
  );
}
