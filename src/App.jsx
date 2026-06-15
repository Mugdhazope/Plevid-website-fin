import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimationBridge from './routing/AnimationBridge.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import SeasonalEditionPage from './pages/SeasonalEditionPage.jsx';
import SeasonalEdition2Page from './pages/SeasonalEdition2Page.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <AnimationBridge />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/seasonal-edition" element={<SeasonalEditionPage />} />
        <Route path="/seasonal-edition-2" element={<SeasonalEdition2Page />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
