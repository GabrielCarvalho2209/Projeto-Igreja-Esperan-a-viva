export function PageShell({ title, eyebrow, children, actions }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{eyebrow}</p>}
          <h1 className="mt-2 text-3xl font-bold text-slate-950 md:text-4xl">{title}</h1>
        </div>
        {actions && <div>{actions}</div>}
      </div>
      {children}
    </section>
  );
}
