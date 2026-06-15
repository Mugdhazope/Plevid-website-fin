import SiteMenu from '../components/SiteMenu.jsx';
import Footer from '../components/Footer.jsx';
import OnScrollViewSwitch from '../components/projects/OnScrollViewSwitch.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsPage() {
  return (
    <>
      <SiteMenu />
      <OnScrollViewSwitch projects={projects} />
      <Footer />
    </>
  );
}
