import { Landmark } from "lucide-react";
import { PageShell } from "../../components/common/PageShell";
import { CopyPixButton } from "../../components/donations/CopyPixButton";
import { QRCodeBox } from "../../components/donations/QRCodeBox";
import { churchInfo } from "../../data/mockData";

export function Donations() {
  return (
    <PageShell title="Doacoes e dizimos" eyebrow="Contribuicao">
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <Landmark className="text-blue-700" size={30} />
          <h2 className="mt-4 text-xl font-bold text-slate-950">Dados para contribuicao</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Esta tela foi pensada para consulta rapida no celular. Antes da entrega final,
            valide os dados com a lideranca da igreja.
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="text-sm font-medium text-slate-500">Chave Pix</dt>
              <dd className="mt-1 break-words font-semibold text-slate-950">{churchInfo.pixKey}</dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="text-sm font-medium text-slate-500">Banco</dt>
              <dd className="mt-1 font-semibold text-slate-950">{churchInfo.bank}</dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="text-sm font-medium text-slate-500">Agencia</dt>
              <dd className="mt-1 font-semibold text-slate-950">{churchInfo.agency}</dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="text-sm font-medium text-slate-500">Conta</dt>
              <dd className="mt-1 font-semibold text-slate-950">{churchInfo.account}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <CopyPixButton pixKey={churchInfo.pixKey} />
          </div>
        </article>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">QR Code Pix</h2>
          <p className="mt-2 text-sm text-slate-600">QR Code demonstrativo para o MVP.</p>
          <div className="mt-5">
            <QRCodeBox />
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
