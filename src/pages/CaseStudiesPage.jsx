import PageShell from '../components/layout/PageShell.jsx';
import PageHero from '../components/pages/PageHero.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import CaseStudyFeature from '../components/case-studies/CaseStudyFeature.jsx';
import { caseStudies } from '../data/caseStudies.js';
import '../components/case-studies/case-study-feature.css';

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <Reveal>
        <PageHero
          label="case studies"
          title="projects that define spaces"
          description="In-depth looks at how Plevid delivers architectural lighting from concept to commissioning."
        />
      </Reveal>
      <section className="plevid-section">
        <div className="plevid-section__inner">
          {caseStudies.map((study, index) => (
            <CaseStudyFeature key={study.id} study={study} index={index} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
