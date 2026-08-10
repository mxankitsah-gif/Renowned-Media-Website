/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import ContactView from './components/ContactView';
import BlogView from './components/BlogView';
import ProjectDetailModal from './components/ProjectDetailModal';
import { ActiveTab, ProjectItem } from './types';
import { initGA, trackPageView, trackQuoteClick } from './lib/analytics';
import SEOStructuredData from './components/SEOStructuredData';

// WordPress Builder Imports
import { BuilderProvider } from './context/BuilderContext';
import { BuilderToolbar } from './components/builder/BuilderToolbar';
import { ImagePickerModal } from './components/builder/ImagePickerModal';
import { AddSectionModal } from './components/builder/AddSectionModal';

const pathToTab: Record<string, ActiveTab> = {
  '/': 'home',
  '/service': 'services',
  '/portfolio': 'portfolio',
  '/about': 'about',
  '/contact': 'contact',
  '/blog': 'blog'
};

const tabToPath: Record<ActiveTab, string> = {
  'home': '/',
  'services': '/service',
  'portfolio': '/portfolio',
  'about': '/about',
  'contact': '/contact',
  'blog': '/blog'
};

const getTabFromPath = (path: string): ActiveTab => {
  const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  return pathToTab[cleanPath] || 'home';
};

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(() => {
    return getTabFromPath(window.location.pathname);
  });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    trackPageView(activeTab);

    const seoMeta: Record<ActiveTab, { title: string; description: string }> = {
      home: {
        title: 'Renowned Media | Digital Marketing, SEO & Content Production Agency',
        description: 'Premium digital marketing, SEO, video production, social media growth and branding services.',
      },
      about: {
        title: 'About Renowned Media',
        description: "Learn about Renowned Media's expertise in SEO, branding, content production and growth strategy.",
      },
      services: {
        title: 'Digital Marketing Services | Renowned Media',
        description: 'SEO, social media marketing, video production, website development, branding and advertising solutions.',
      },
      portfolio: {
        title: 'Portfolio | Renowned Media',
        description: 'Explore our client success stories, campaigns and digital growth projects.',
      },
      contact: {
        title: 'Contact Renowned Media',
        description: 'Connect with our team for SEO, branding, content production and digital growth solutions.',
      },
      blog: {
        title: 'Digital Marketing Blog | Renowned Media',
        description: 'SEO guides, marketing insights, content strategy and digital growth resources.',
      },
    };

    const pageSeo = seoMeta[activeTab] || seoMeta.home;
    document.title = pageSeo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageSeo.description);
  }, [activeTab]);

  const handleTabChange = (tab: ActiveTab) => {
    const targetPath = tabToPath[tab] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab }, '', targetPath);
    }
    setActiveTab(tab);
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    trackQuoteClick(`service_request_${serviceId}`);
    handleTabChange('contact');
  };

  const handleRequestQuoteGeneral = () => {
    trackQuoteClick('general_cta');
    handleTabChange('contact');
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'about':
        return (
          <motion.div
            key="about-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <AboutView />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <ServicesView 
              onSelectServiceForQuote={handleSelectServiceForQuote} 
              onTabChange={handleTabChange}
              onRequestQuote={handleRequestQuoteGeneral}
            />
          </motion.div>
        );
      case 'portfolio':
        return (
          <motion.div
            key="portfolio-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <PortfolioView onSelectProject={setSelectedProject} onRequestQuote={handleRequestQuoteGeneral} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <ContactView />
          </motion.div>
        );
      case 'blog':
        return (
          <motion.div
            key="blog-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pt-24 min-h-[80vh]"
          >
            <BlogView onTabChange={handleTabChange} onRequestQuote={handleRequestQuoteGeneral} />
          </motion.div>
        );
      case 'home':
      default:
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[90vh]"
          >
            <HomeView
              onTabChange={handleTabChange}
              onSelectProject={setSelectedProject}
              onRequestQuote={handleRequestQuoteGeneral}
            />
          </motion.div>
        );
    }
  };

  return (
    <BuilderProvider>
      <div className="relative min-h-screen flex flex-col bg-background font-sans selection:bg-primary-container selection:text-on-primary-container" id="renowned-app-root">
        {/* Search Engine Optimization (SEO) & Structured Data */}
        <SEOStructuredData />
        
        {/* Global Header Navigation */}
        <Header
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onRequestQuote={handleRequestQuoteGeneral}
        />

        {/* Dynamic Main View Screen Section with AnimatePresence */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {renderActiveView()}
          </AnimatePresence>
        </main>

        {/* Shared Global Page Footer */}
        <Footer onTabChange={handleTabChange} />

        {/* Project Detail Dialog Box */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        {/* WordPress Style Builder Floating Bar & Modals */}
        <BuilderToolbar />
        <ImagePickerModal />
        <AddSectionModal />

        {/* Floating WhatsApp Live Chat Button */}
        <a
          href="https://wa.me/918828998296?text=Hi%20Renowned%20Media%2C%20I%20want%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1 group w-14 h-14 md:w-auto md:h-12 md:px-5 md:py-3 gap-2 cursor-pointer"
          id="whatsapp-floating-cta"
          title="Chat on WhatsApp"
        >
          <svg
            className="w-7 h-7 md:w-5 md:h-5 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden md:inline font-mono text-[10px] font-bold uppercase tracking-widest leading-none select-none">
            Live Chat With Us
          </span>
        </a>

      </div>
    </BuilderProvider>
  );
}
