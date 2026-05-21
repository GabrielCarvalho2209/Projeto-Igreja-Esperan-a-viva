import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export function MemberTable({ members, onRemove }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">E-mail</th>
              <th className="px-4 py-3">Telefone</th>
              <th className="px-4 py-3">Perfil</th>
              <th className="px-4 py-3 text-right">Acoes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {members.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-3 font-medium text-slate-950">{member.name}</td>
                <td className="px-4 py-3 text-slate-600">{member.email}</td>
                <td className="px-4 py-3 text-slate-600">{member.phone}</td>
                <td className="px-4 py-3 text-slate-600">{member.role}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link to={`/admin/membros/${member.id}/editar`} className="rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-50" aria-label={`Editar ${member.name}`}>
                      <Pencil size={17} />
                    </Link>
                    <button type="button" onClick={() => onRemove(member.id)} className="rounded-md border border-red-200 p-2 text-red-700 hover:bg-red-50" aria-label={`Remover ${member.name}`}>
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 p-3 md:hidden">
        {members.map((member) => (
          <article key={member.id} className="rounded-lg border border-slate-200 p-4">
            <h2 className="font-bold text-slate-950">{member.name}</h2>
            <p className="mt-1 text-sm text-slate-600">{member.email}</p>
            <p className="text-sm text-slate-600">{member.phone}</p>
            <p className="mt-2 text-sm font-medium text-blue-700">{member.role}</p>
            <div className="mt-4 flex gap-2">
              <Link to={`/admin/membros/${member.id}/editar`} className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-center text-sm font-medium text-slate-700">
                Editar
              </Link>
              <button type="button" onClick={() => onRemove(member.id)} className="flex-1 rounded-md border border-red-200 px-3 py-2 text-sm font-medium text-red-700">
                Remover
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
