import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar/TopBar';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Footer } from './components/Footer/Footer';
import { FloatingCTA } from './components/FloatingCTA/FloatingCTA';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

/**
 * Root application component with multi-page routing.
 * Home shows all sections, other pages show dedicated content.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-dark text-white font-body">
        <TopBar />
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </BrowserRouter>
  );
}

export default App;
