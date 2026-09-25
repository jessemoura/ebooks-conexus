import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getEbooks } from '../../data/ebooks';
import { EbookCard } from '../ebooks/EbookCard';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export const FeaturedEbooks: React.FC = () => {
  const { t, language } = useApp();
  const ebooks = useMemo(() => getEbooks(language), [language]);
  const featuredList = useMemo(() => ebooks.filter(e => e.featured).slice(0, 4), [ebooks]);

  return (
    <section className="section-py" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <span className="badge badge-orange">
            <Sparkles size={13} />
            <span>{t.ebooksSection.badge}</span>
          </span>
          <h2>{t.ebooksSection.title}</h2>
          <p>{t.ebooksSection.subtitle}</p>
        </div>

        {/* Grid de E-books */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.2rem',
          marginBottom: '3.5rem'
        }}>
          {featuredList.map((ebook) => (
            <EbookCard key={ebook.id} ebook={ebook} />
          ))}
        </div>

        {/* Link para Catálogo Completo */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/ebooks" className="btn btn-primary" style={{ padding: '0.85rem 2.4rem' }}>
            <span>{t.ebooksSection.viewAllEbooks}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};
