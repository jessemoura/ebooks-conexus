import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { useApp } from '../../context/AppContext';
import { siteConfig } from '../../config/siteConfig';
import { Language } from '../../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { HeaderInstagramButton } from './InstagramIcon';
import { BrazilFlag, UKFlag, SpainFlag } from './FlagIcons';
import { 
  Sun, 
  Moon, 
  ChevronDown, 
  Check,
  Menu as MenuIcon, 
  X as CloseIcon 
} from 'lucide-react';

interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  FlagComponent: React.FC<{ size?: number }>;
}

const languageOptions: LanguageOption[] = [
  { code: 'pt', label: 'Português', shortLabel: 'PT', FlagComponent: BrazilFlag },
  { code: 'en', label: 'English', shortLabel: 'EN', FlagComponent: UKFlag },
  { code: 'es', label: 'Español', shortLabel: 'ES', FlagComponent: SpainFlag }
];

export const Header: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage, t } = useApp();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = languageOptions.find(l => l.code === language) || languageOptions[0];
  const CurrentFlag = currentLangObj.FlagComponent;

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setLangOpen(false);
  };

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.ebooks, path: '/ebooks' },
    { label: t.nav.collections, path: '/colecoes' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.about, path: '/sobre' },
    { label: t.nav.contact, path: '/contato' },
  ];

  return (
    <header className="header-glass">
      <div className="container header-container">
        {/* Logo CONEXUS E-BOOKS Oficial Transparente à esquerda (+25% no Header) */}
        <BrandLogo className="header-logo" height={68} />

        {/* Menu Desktop Centralizado */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <style>{`
            @media (min-width: 992px) {
              .desktop-nav { display: block !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações à Direita: IDIOMAS | INSTAGRAM | DARK/LIGHT | FALAR COM A CONEXUS */}
        <div className="header-actions">
          
          {/* 1. Dropdown de Idiomas com Bandeiras Visíveis Reais */}
          <div className="lang-dropdown-wrapper" ref={dropdownRef}>
            <button 
              type="button" 
              className="lang-toggle-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Selecionar idioma"
              aria-expanded={langOpen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.45rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <CurrentFlag size={18} />
              <span>{currentLangObj.shortLabel}</span>
              <ChevronDown size={13} style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', opacity: 0.7 }} />
            </button>

            {langOpen && (
              <div 
                className="lang-menu" 
                role="menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  minWidth: '160px',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '0.4rem',
                  zIndex: 1000,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                {languageOptions.map((l) => {
                  const ItemFlag = l.FlagComponent;
                  const isActive = language === l.code;
                  return (
                    <button
                      key={l.code}
                      className={`lang-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleLanguageSelect(l.code)}
                      role="menuitem"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.6rem',
                        width: '100%',
                        padding: '0.55rem 0.8rem',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        background: isActive ? 'rgba(231, 111, 81, 0.12)' : 'transparent',
                        color: isActive ? 'var(--color-orange-500)' : 'var(--text-primary)',
                        fontWeight: isActive ? 700 : 500,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background 0.15s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                        <ItemFlag size={18} />
                        <span>{l.label}</span>
                      </div>
                      {isActive && <Check size={15} color="var(--color-orange-500)" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 2. Instagram Colorido no Header */}
          <HeaderInstagramButton size={34} />

          {/* 3. Dark/Light Mode Toggle */}
          <button 
            type="button" 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Mudar para Dark Mode' : 'Mudar para Light Mode'}
            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* 4. Botão Destacado "Falar com a CONEXUS" (WhatsApp Oficial) */}
          <a 
            href={siteConfig.whatsapp.directUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ 
              fontSize: '0.85rem', 
              padding: '0.55rem 1.1rem',
              display: 'none'
            }}
            id="header-whatsapp-cta"
          >
            <style>{`
              @media (min-width: 640px) {
                #header-whatsapp-cta { display: inline-flex !important; }
              }
            `}</style>
            <WhatsAppIcon size={17} color="#ffffff" />
            <span>{t.nav.talkToUs}</span>
          </a>

          {/* Botão Mobile Menu */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.4rem',
              color: 'var(--text-primary)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          height: 'calc(100vh - var(--header-height))',
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 999,
          animation: 'fadeIn 0.2s ease-out',
          overflowY: 'auto'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'block',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Instagram Oficial</span>
            <HeaderInstagramButton size={36} />
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <a 
              href={siteConfig.whatsapp.directUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.9rem' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <WhatsAppIcon size={18} color="#ffffff" />
              <span>{t.nav.talkToUs}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
