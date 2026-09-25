import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export const CatalogCta: React.FC = () => {
  const { t } = useApp();

  return (
    <section style={{
      paddingTop: '5rem',
      paddingBottom: '5rem',
      background: 'linear-gradient(135deg, #0a271c 0%, #134633 50%, #0e3526 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Detalhes Laranja / Dourado Geométricos */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '350px',
        height: '100%',
        background: 'radial-gradient(circle at 100% 50%, rgba(231, 111, 81, 0.18), transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '2rem 1rem'
        }}>
          <span className="badge badge-orange" style={{ background: 'rgba(231, 111, 81, 0.2)', color: '#f4a261', marginBottom: '1.2rem' }}>
            <Sparkles size={13} />
            <span>{t.catalogCta.badge}</span>
          </span>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '1.2rem'
          }}>
            {t.catalogCta.title}
          </h2>

          <p style={{
            fontSize: '1.08rem',
            color: '#cbdcd3',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 2.4rem auto'
          }}>
            {t.catalogCta.subtitle}
          </p>

          <Link
            to="/ebooks"
            className="btn btn-primary"
            style={{
              padding: '1rem 2.6rem',
              fontSize: '1.05rem',
              boxShadow: '0 8px 30px rgba(231, 111, 81, 0.4)'
            }}
          >
            <BookOpen size={19} />
            <span>{t.catalogCta.btn}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
