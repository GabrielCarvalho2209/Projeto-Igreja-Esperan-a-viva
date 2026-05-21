export function Loading({ message = "Carregando..." }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-600">
      {message}
    </div>
  );
}
