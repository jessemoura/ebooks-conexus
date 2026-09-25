import React, { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCollections } from '../data/collections';
import { getEbooks } from '../data/ebooks';
import { getBundleByCollectionId } from '../data/bundles';
import { EbookCard } from '../components/ebooks/EbookCard';
import { SEO } from '../components/common/SEO';
import { useApp } from '../context/AppContext';
import { Layers, Sparkles, BookOpen, CheckCircle2, FileText } from 'lucide-react';

export const CollectionsPage: React.FC = () => {
  const { t, language } = useApp();
  const location = useLocation();
  const collections = useMemo(() => getCollections(language), [language]);
  const ebooks = useMemo(() => getEbooks(language), [language]);

  // Smooth scroll to collection if hash is present
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 120);
      }
    }
  }, [location.hash, collections]);

  return (
    <>
      <SEO 
        title={t.collectionsSection.headerTitle} 
        description={t.collectionsSection.headerSubtitle}
      />

      <main style={{ paddingBottom: '6rem' }}>
        {/* Header da Página */}
        <section style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={13} />
              <span>{t.collectionsSection.headerBadge}</span>
            </span>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              {t.collectionsSection.headerTitle}
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65
            }}>
              {t.collectionsSection.headerSubtitle}
            </p>
          </div>
        </section>

        {/* Listagem Aprofundada das Coleções */}
        <div className="container" style={{ marginTop: '3.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {collections.map((col) => {
              const colEbooks = ebooks.filter(e => e.collectionId === col.id);
              const bundle = getBundleByCollectionId(col.id, language);

              return (
                <section 
                  key={col.id} 
                  id={col.slug}
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-subtle)',
                    padding: '2.8rem 2.2rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  {/* Cabeçalho da Coleção */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '2rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '1.8rem'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.6rem' }}>
                        <span className="badge badge-green">
                          {col.category === 'financas' ? t.searchPage.financeCategory : t.searchPage.languagesCategory}
                        </span>
                        <span style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: 'var(--text-gold)',
                          background: 'rgba(212, 175, 55, 0.1)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-gold)'
                        }}>
                          {col.volumesCount} {t.collectionsSection.volumes}
                        </span>
                      </div>

                      <h2 style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2rem',
                        color: 'var(--text-primary)',
                        marginBottom: '0.4rem'
                      }}>
                        {col.title}
                      </h2>

                      <p style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--color-gold-600)',
                        marginBottom: '0.8rem'
                      }}>
                        {col.subtitle}
                      </p>

                      <p style={{
                        fontSize: '0.98rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '780px',
                        lineHeight: 1.65
                      }}>
                        {col.description}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'var(--bg-secondary)',
                      padding: '0.8rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      <Layers size={20} color="#D4AF37" />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{t.collectionsSection.completeSeriesBadge}</span>
                    </div>
                  </div>

                  {/* DESTAQUE OFICIAL: OFERTA DA COLEÇÃO COMPLETA */}
                  {bundle && (
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(14, 53, 38, 0.08) 0%, rgba(244, 162, 97, 0.08) 100%)',
                      border: '2px solid var(--border-gold)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.8rem',
                      marginBottom: '2.5rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1.5rem',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div style={{ maxWidth: '680px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                          <span style={{
                            background: 'var(--color-orange-gradient)',
                            color: '#ffffff',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-full)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em'
                          }}>
                            {t.bundlesSection.boxsetBadge}
                          </span>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-gold-500)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <FileText size={14} />
                            {bundle.format} ({bundle.volumesCount} {t.collectionsSection.volumes})
                          </span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                          {bundle.title}
                        </h3>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                          {bundle.description}
                        </p>
                      </div>

                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-green)',
                        padding: '0.6rem 1.1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--color-green-700)'
                      }}>
                        <CheckCircle2 size={16} color="#25D366" />
                        <span>{t.bundlesSection.allVolumesIncluded.replace('{count}', String(bundle.volumesCount))}</span>
                      </div>
                    </div>
                  )}

                  {/* E-books Individuais Pertencentes à Coleção */}
                  {colEbooks.length > 0 && (
                    <div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <BookOpen size={18} color="var(--color-gold-500)" />
                        <span>{t.collectionsSection.availableVolumes} ({colEbooks.length})</span>
                      </h3>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '1.8rem'
                      }}>
                        {colEbooks.map(ebook => (
                          <EbookCard key={ebook.id} ebook={ebook} />
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

