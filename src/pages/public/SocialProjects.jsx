import { PageShell } from "../../components/common/PageShell";
import { ProjectCard } from "../../components/social/ProjectCard";
import { projectsMock } from "../../data/mockData";

export function SocialProjects() {
  return (
    <PageShell title="Projetos sociais" eyebrow="Servico a comunidade">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsMock.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageShell>
  );
}
