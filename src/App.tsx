import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';

// Pages
import { HomePage } from './pages/HomePage';
import { EbooksPage } from './pages/EbooksPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Header oficial com Logo, Menu, Idiomas (🇧🇷 🇬🇧 🇪🇸), Dark/Light e CTA WhatsApp */}
          <Header />

          {/* Rotas Oficiais */}
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ebooks" element={<EbooksPage />} />
              <Route path="/colecoes" element={<CollectionsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
              <Route path="/termos-de-uso" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>

          {/* Rodapé Oficial Completo + Crédito CONEXUS DIGITAL MARKETING */}
          <Footer />

          {/* Botão Oficial Flutuante e Pulsante do WhatsApp */}
          <WhatsAppButton />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
