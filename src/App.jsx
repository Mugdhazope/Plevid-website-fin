import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimationBridge from './routing/AnimationBridge.jsx';
import CursorHalo from './components/motion/CursorHalo.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
// import ProductsPage from './pages/ProductsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
// import SeasonalEditionPage from './pages/SeasonalEditionPage.jsx';
import SeasonalEdition2Page from './pages/SeasonalEdition2Page.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
// import TestimonialsPage from './pages/TestimonialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import KnowledgeHubPage from './pages/KnowledgeHubPage.jsx';
import ExperienceCenterPage from './pages/ExperienceCenterPage.jsx';
import CareersPage from './pages/CareersPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <CursorHalo />
      <AnimationBridge />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/seasonal-edition" element={<SeasonalEdition2Page />} />
        {/* <Route path="/seasonal-edition-v1" element={<SeasonalEditionPage />} /> */}
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
        <Route path="/experience-center" element={<ExperienceCenterPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
