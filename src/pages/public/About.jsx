import { PageShell } from "../../components/common/PageShell";

export function About() {
  return (
    <PageShell title="Nossa historia" eyebrow="Institucional">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="rounded-lg border border-slate-200 bg-white p-6 leading-7 text-slate-700">
          <p>
            A Igreja Esperanca Viva nasceu do desejo de servir a comunidade local com fe,
            acolhimento e responsabilidade social. O projeto frontend foi pensado para
            mostrar essa identidade de forma simples, acessivel e responsiva.
          </p>
          <p className="mt-4">
            A plataforma organiza informacoes institucionais, eventos, inscricoes,
            membros e doacoes. Para fins educacionais, o sistema trabalha com mocks
            enquanto a API Spring Boot e o banco SQL Server sao integrados.
          </p>
        </article>
        <aside className="rounded-lg border border-slate-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-slate-950">Missao</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Ser uma comunidade de cuidado, ensino e servico, conectando pessoas e
            projetos que transformam o bairro.
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
