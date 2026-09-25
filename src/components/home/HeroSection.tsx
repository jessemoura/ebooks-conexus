import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  BookOpen, 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  Users, 
  Download, 
  ShieldCheck, 
  Smartphone, 
  Infinity as InfinityIcon,
  ChevronDown 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section 
      className="editorial-hero-section"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `linear-gradient(to right, rgba(6, 22, 16, 0.95) 0%, rgba(6, 22, 16, 0.88) 35%, rgba(6, 22, 16, 0.62) 54%, rgba(6, 22, 16, 0.18) 78%, rgba(6, 22, 16, 0.02) 92%, transparent 100%), url('/assets/images/hero-editorial-desk.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .editorial-hero-section {
          padding-top: calc(var(--header-height) + 2rem);
          padding-bottom: 0;
        }
        @media (max-width: 991px) {
          .editorial-hero-section {
            background-image: linear-gradient(180deg, rgba(6, 22, 16, 0.94) 0%, rgba(6, 22, 16, 0.86) 50%, rgba(6, 22, 16, 0.45) 80%, rgba(6, 22, 16, 0.15) 100%), url('/assets/images/hero-editorial-desk.jpg') !important;
            padding-top: calc(var(--header-height) + 1.5rem);
          }
          .hero-pills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.2rem !important;
          }
          .hero-benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem 1rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-pills-grid {
            grid-template-columns: 1fr !important;
            gap: 0.9rem !important;
          }
          .hero-benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-group a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        .hero-feature-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: #e5ece8;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .hero-feature-item:hover {
          color: #eac66f;
          transform: translateY(-1px);
        }
        .hero-benefit-card {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          padding: 0.5rem 0;
        }
      `}</style>

      {/* Conteúdo Principal do Hero */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '2rem', paddingBottom: '3.5rem' }}>
        <div style={{ maxWidth: '640px' }}>
          
          {/* Badge Editorial: LEIA. APRENDA. EVOLUA. */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.2rem',
            color: '#f4a261',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase'
          }}>
            <span>{t.hero.badge}</span>
          </div>

          {/* Título Principal */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.2rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            {t.hero.titleLine1}<br />
            {t.hero.titleLine2}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f4a261 0%, #eac66f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>{t.hero.titleHighlight}</span>
          </h1>

          {/* Descrição Comercial e Elegante */}
          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: '#dbe6e0',
            lineHeight: 1.6,
            marginBottom: '2.2rem',
            fontWeight: 400,
            maxWidth: '560px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}>
            {t.hero.subtitle}
          </p>

          {/* Grupo de CTAs */}
          <div 
            className="hero-cta-group"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}
          >
            {/* CTA Primário */}
            <Link
              to="/ebooks"
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)',
                color: '#ffffff',
                padding: '0.95rem 2rem',
                fontSize: '1.02rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                border: 'none',
                boxShadow: '0 8px 24px rgba(231, 111, 81, 0.45)',
                transition: 'all 0.25s ease'
              }}
            >
              <BookOpen size={19} />
              <span>{t.hero.primaryCta}</span>
              <ArrowRight size={17} />
            </Link>

            {/* CTA Secundário */}
            <Link
              to="/colecoes"
              className="btn"
              style={{
                background: 'rgba(10, 39, 28, 0.65)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '0.95rem 1.8rem',
                fontSize: '1.02rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease'
              }}
            >
              <span>{t.hero.secondaryCta}</span>
            </Link>
          </div>

          {/* 4 Pílulas de Valor Editorial (Ícones Dourados/Âmbar) */}
          <div 
            className="hero-pills-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, auto)',
              gap: '1.5rem',
              alignItems: 'center',
              paddingTop: '0.5rem'
            }}
          >
            <div className="hero-feature-item">
              <BookOpen size={19} color="#eac66f" />
              <span>{t.hero.pills.quality}</span>
            </div>
            <div className="hero-feature-item">
              <Globe size={19} color="#eac66f" />
              <span>{t.hero.pills.borderless}</span>
            </div>
            <div className="hero-feature-item">
              <TrendingUp size={19} color="#eac66f" />
              <span>{t.hero.pills.practical}</span>
            </div>
            <div className="hero-feature-item">
              <Users size={19} color="#eac66f" />
              <span>{t.hero.pills.future}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Faixa Inferior de Benefícios da Marca */}
      <div style={{
        background: 'rgba(6, 24, 17, 0.88)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.22)',
        position: 'relative',
        zIndex: 2,
        padding: '1.6rem 0'
      }}>
        <div className="container">
          <div 
            className="hero-benefits-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            {/* Benefício 1 */}
            <div className="hero-benefit-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(234, 198, 111, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(234, 198, 111, 0.25)'
              }}>
                <Download size={20} color="#eac66f" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                  {t.hero.benefits.b1Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#cbdcd3', margin: 0 }}>
                  {t.hero.benefits.b1Desc}
                </p>
              </div>
            </div>

            {/* Benefício 2 */}
            <div className="hero-benefit-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(234, 198, 111, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(234, 198, 111, 0.25)'
              }}>
                <ShieldCheck size={20} color="#eac66f" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                  {t.hero.benefits.b2Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#cbdcd3', margin: 0 }}>
                  {t.hero.benefits.b2Desc}
                </p>
              </div>
            </div>

            {/* Benefício 3 */}
            <div className="hero-benefit-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(234, 198, 111, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(234, 198, 111, 0.25)'
              }}>
                <Smartphone size={20} color="#eac66f" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                  {t.hero.benefits.b3Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#cbdcd3', margin: 0 }}>
                  {t.hero.benefits.b3Desc}
                </p>
              </div>
            </div>

            {/* Benefício 4 */}
            <div className="hero-benefit-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(234, 198, 111, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1px solid rgba(234, 198, 111, 0.25)'
              }}>
                <InfinityIcon size={20} color="#eac66f" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>
                  {t.hero.benefits.b4Title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#cbdcd3', margin: 0 }}>
                  {t.hero.benefits.b4Desc}
                </p>
              </div>
            </div>

          </div>

          {/* Indicador Suave de Continuidade */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.8rem',
            opacity: 0.6
          }}>
            <ChevronDown size={18} color="#eac66f" style={{ animation: 'bounce 2s infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
