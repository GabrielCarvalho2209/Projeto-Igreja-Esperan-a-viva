import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { MemberFormFields } from "../../components/members/MemberFormFields";
import { getMemberById, saveMember } from "../../services/membersService";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: "Membro",
};

export function MemberForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadMember() {
      if (!id) return;
      const member = await getMemberById(id);
      if (member) setForm(member);
    }

    loadMember();
  }, [id]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setError("Preencha nome, e-mail e telefone.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    await saveMember(form);
    setIsSubmitting(false);
    navigate("/admin/membros");
  }

  return (
    <section>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">{id ? "Editar membro" : "Novo membro"}</h2>
          <p className="mt-1 text-sm text-slate-600">Formulario controlado com validacao simples.</p>
        </div>
        <Link to="/admin/membros" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <ArrowLeft size={18} /> Voltar
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <MemberFormFields form={form} onChange={updateField} />
        {error && <ErrorMessage message={error} />}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 disabled:bg-slate-400"
        >
          <Save size={18} /> {isSubmitting ? "Salvando..." : "Salvar membro"}
        </button>
      </form>
    </section>
  );
}
