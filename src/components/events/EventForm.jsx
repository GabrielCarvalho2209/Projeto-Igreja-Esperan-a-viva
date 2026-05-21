import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
};

export function EventForm({ onSubmit, isSubmitting }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      setError("Preencha todos os campos para concluir a inscricao.");
      return;
    }

    setError("");
    await onSubmit(form);
    setForm(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Nome completo</span>
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="Digite o nome"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700">E-mail</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="email@exemplo.com"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700">Telefone</span>
        <input
          name="phone"
          value={form.phone}
          onChange={updateField}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="(11) 99999-9999"
        />
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Enviando..." : "Confirmar inscricao"}
      </button>
    </form>
  );
}
