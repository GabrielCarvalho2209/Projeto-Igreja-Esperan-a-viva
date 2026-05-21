export function MemberFormFields({ form, onChange }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Nome</span>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">E-mail</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Telefone</span>
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Perfil</span>
        <select
          name="role"
          value={form.role}
          onChange={onChange}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        >
          <option value="Membro">Membro</option>
          <option value="Voluntario">Voluntario</option>
          <option value="Lideranca">Lideranca</option>
        </select>
      </label>
    </div>
  );
}
