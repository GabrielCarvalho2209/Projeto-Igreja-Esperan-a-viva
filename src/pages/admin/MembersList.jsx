import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { Loading } from "../../components/common/Loading";
import { MemberTable } from "../../components/members/MemberTable";
import { getMembers, removeMember } from "../../services/membersService";

export function MembersList() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadMembers() {
    try {
      setMembers(await getMembers());
    } catch {
      setError("Nao foi possivel carregar os membros.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadMembers();
  }, []);

  async function handleRemove(id) {
    await removeMember(id);
    await loadMembers();
  }

  return (
    <section>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">Membros</h2>
          <p className="mt-1 text-sm text-slate-600">Cadastro simples preparado para API Spring Boot.</p>
        </div>
        <Link to="/admin/membros/novo" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800">
          <Plus size={18} /> Novo membro
        </Link>
      </div>

      {isLoading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && <MemberTable members={members} onRemove={handleRemove} />}
    </section>
  );
}
