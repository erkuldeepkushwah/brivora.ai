import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeView } from '@/pages/HomePage';
import { AboutView } from '@/pages/AboutPage';
import { ServicesView } from '@/pages/ServicesPage';
import { BlogView } from '@/pages/BlogPage';
import { ContactView } from '@/pages/ContactPage';
import { PortfolioView } from '@/pages/PortfolioPage';
import { SearchModal } from '@/components/SearchModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { AccountModal } from '@/components/AccountModal';
import { ArticleReaderModal } from '@/components/ArticleReaderModal';
import { ProjectModal } from '@/components/ProjectModal';
import { DesignSystemModal } from '@/components/DesignSystemModal';
import { TermsModal } from '@/components/TermsModal';
import { BlogPost, ProjectShowcase } from '@/data/content';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [designSystemOpen, setDesignSystemOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectShowcase | null>(null);

  // Sync hash or URL query parameters on initial mount
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Universal Sticky Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        cartCount={1}
      />

      {/* Main Page Content Dynamic Router */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioView
            onOpenConsultation={() => setConsultationOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {activePage === 'blog' && (
          <BlogView
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            onOpenTerms={() => setTermsOpen(true)}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDesignSystem={() => setDesignSystemOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectArticle={(article) => {
          setSelectedArticle(article);
          setSearchOpen(false);
        }}
        onSelectProject={(project) => {
          setSelectedProject(project);
          setSearchOpen(false);
        }}
        onNavigate={(page) => {
          handleNavigate(page);
          setSearchOpen(false);
        }}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <DesignSystemModal
        isOpen={designSystemOpen}
        onClose={() => setDesignSystemOpen(false)}
      />

      <TermsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </div>
  );
}
