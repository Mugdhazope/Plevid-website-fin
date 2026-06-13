import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import ProjectCard from '../components/pages/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        label="projects"
        title="completed & ongoing work"
        description="A selection of residential, hospitality, and commercial projects where Plevid lighting defines the experience."
      />
      <section className="plevid-section">
        <div className="plevid-section__inner">
          <div className="plevid-grid plevid-grid--2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
