import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { AgencyLogo } from './AgencyLogo';
import { siteConfig } from '../../config/siteConfig';
import { useApp } from '../../context/AppContext';
import { HeaderInstagramButton } from './InstagramIcon';
import { 
  Mail, 
  BookOpen, 
  Layers 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-dark-block)',
      color: '#f8fafc',
      borderTop: '2px solid var(--color-orange-500)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      marginTop: 'auto'
    }}>
      <div className="container">
        {/* Grid Superior do Rodapé */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Coluna 1: Marca & Manifesto & Ícone Social Oficial */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <BrandLogo height={78} />
            </div>
            <p style={{
              color: '#cbdcd3',
              fontSize: '0.92rem',
              lineHeight: 1.65,
              marginBottom: '1.5rem'
            }}>
              {t.footer.description}
            </p>
            {/* Ícone Oficial do Instagram Multicolorido com Gradiente */}
            <HeaderInstagramButton size={40} />
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-sans)'
            }}>
              {t.footer.quickLinks}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <Link to="/" style={{ color: '#cbdcd3', fontSize: '0.92rem' }}>{t.nav.home}</Link>
              </li>
              <li>
                <Link to="/ebooks" style={{ color: '#cbdcd3', fontSize: '0.92rem' }}>{t.nav.ebooks}</Link>
              </li>
              <li>
                <Link to="/colecoes" style={{ color: '#cbdcd3', fontSize: '0.92rem' }}>{t.nav.collections}</Link>
              </li>
              <li>
                <Link to="/blog" style={{ color: '#cbdcd3', fontSize: '0.92rem' }}>{t.nav.blog}</Link>
              </li>
              <li>
                <Link to="/sobre" style={{ color: '#cbdcd3', fontSize: '0.92rem' }}>{t.nav.about}</Link>
              </li>
              <li>
                <Link to="/contato" style={{ color: '#cbdcd3', fontSize: '0.92rem' }}>{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Coleções Iniciais */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-sans)'
            }}>
              {t.footer.collections}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li>
                <Link to="/colecoes" style={{ color: '#cbdcd3', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Layers size={14} color="#f4a261" />
                  <span>Finanças &amp; Investimentos</span>
                </Link>
              </li>
              <li>
                <Link to="/colecoes" style={{ color: '#cbdcd3', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={14} color="#f4a261" />
                  <span>Parlando Italiano</span>
                </Link>
              </li>
              <li>
                <Link to="/colecoes" style={{ color: '#cbdcd3', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={14} color="#f4a261" />
                  <span>Hablando Español</span>
                </Link>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <Link to="/ebooks" style={{ color: '#f4a261', fontSize: '0.85rem', fontWeight: 600 }}>
                  {t.footer.allCategoriesLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Institucional */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-sans)'
            }}>
              {t.footer.contactTitle}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbdcd3', fontSize: '0.92rem' }}>
                <Mail size={16} color="#f4a261" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li style={{ marginTop: '0.8rem' }}>
                <Link to="/politica-de-privacidade" style={{ color: '#8ea89c', fontSize: '0.88rem', textDecoration: 'underline' }}>
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor Dourado/Laranja Sutil */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(244, 162, 97, 0.4) 50%, transparent 100%)',
          marginBottom: '2.5rem'
        }} />

        {/* Linha Inferior: Copyright e Crédito Centralizado com Logo Oficial */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          textAlign: 'center'
        }}>
          {/* Crédito Oficial Centralizado */}
          <AgencyLogo />

          <p style={{
            fontSize: '0.8rem',
            color: '#8ea89c',
            letterSpacing: '0.02em'
          }}>
            &copy; {currentYear} {siteConfig.brand.name}. {t.footer.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
};
