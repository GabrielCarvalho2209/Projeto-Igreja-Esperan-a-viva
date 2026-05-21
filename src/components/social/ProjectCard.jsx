export function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img src={project.image} alt="" className="h-48 w-full object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-950">{project.title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
      </div>
    </article>
  );
}
