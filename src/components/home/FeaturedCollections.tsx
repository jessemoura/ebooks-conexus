import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getCollections } from '../../data/collections';
import { getBundleByCollectionId } from '../../data/bundles';
import { useApp } from '../../context/AppContext';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  const { t, language } = useApp();
  const collections = useMemo(() => getCollections(language), [language]);

  // Imagens temáticas/capas visuais editoriais de alta resolução
  const collectionVisuals: Record<string, { bgGradient: string; badgeColor: string; image: string }> = {
    'financas-investimentos': {
      bgGradient: 'linear-gradient(135deg, #0e3526 0%, #1a5c43 50%, #0a271c 100%)',
      badgeColor: '#e76f51',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80'
    },
    'parlando-italiano': {
      bgGradient: 'linear-gradient(135deg, #134633 0%, #237657 50%, #0e3526 100%)',
      badgeColor: '#f4a261',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
    },
    'hablando-espanol': {
      bgGradient: 'linear-gradient(135deg, #1a5c43 0%, #2e946e 50%, #0a271c 100%)',
      badgeColor: '#e76f51',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80'
    }
  };

  return (
    <section className="section-py" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <span className="badge badge-green">
            <Sparkles size={13} />
            <span>{t.collectionsSection.badge}</span>
          </span>
          <h2>{t.collectionsSection.title}</h2>
          <p>{t.collectionsSection.subtitle}</p>
        </div>

        {/* Vitrine Visual das Coleções */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.4rem'
        }}>
          {collections.map((col) => {
            const bundle = getBundleByCollectionId(col.id, language);
            const visual = collectionVisuals[col.id] || {
              bgGradient: 'linear-gradient(135deg, #0e3526 0%, #134633 100%)',
              badgeColor: '#e76f51',
              image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
            };

            return (
              <div 
                key={col.id} 
                className="card-editorial"
                style={{
                  background: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-smooth)'
                }}
              >
                <div>
                  {/* Capa Visual da Coleção com Grande Protagonismo */}
                  <div style={{
                    position: 'relative',
                    height: '220px',
                    overflow: 'hidden',
                    background: '#0a1d15'
                  }}>
                    {/* Imagem de Fundo Fotográfica com Grande Nitidez e Destaque */}
                    <img 
                      src={visual.image} 
                      alt={col.title}
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.88,
                        transition: 'transform var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />

                    {/* Gradient Overlay Inteligente CONEXUS:
                        - Região superior e central: overlay mais transparente (identidade verde sutil), permitindo visualizar arquitetura, paisagem e detalhes da fotografia
                        - Região inferior: escurecimento progressivo para contraste e legibilidade perfeita do título e badges */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(10, 39, 28, 0.20) 0%, rgba(10, 39, 28, 0.10) 30%, rgba(7, 26, 19, 0.65) 65%, rgba(5, 18, 13, 0.94) 100%)',
                      pointerEvents: 'none'
                    }} />

                    {/* Conteúdo sobre a Capa */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      padding: '1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      zIndex: 2
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: 'rgba(10, 39, 28, 0.75)',
                          backdropFilter: 'blur(8px)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)'
                        }}>
                          {col.category === 'financas' ? t.searchPage.financeCategory : t.searchPage.languagesCategory}
                        </span>

                        <span style={{
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          background: 'var(--color-orange-gradient)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          boxShadow: '0 4px 12px rgba(231, 111, 81, 0.45)'
                        }}>
                          {col.volumesCount} {t.collectionsSection.volumes}
                        </span>
                      </div>

                      <div>
                        <span style={{
                          fontSize: '0.7rem',
                          color: 'var(--color-gold-400)',
                          letterSpacing: '0.12em',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)'
                        }}>
                          {t.collectionsSection.officialSeries}
                        </span>
                        <h3 style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.45rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          lineHeight: 1.25,
                          marginTop: '0.2rem',
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.85)'
                        }}>
                          {col.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Corpo do Card */}
                  <div style={{ padding: '1.6rem 1.6rem 1.2rem 1.6rem' }}>
                    <p style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-orange-500)',
                      marginBottom: '0.6rem'
                    }}>
                      {col.subtitle}
                    </p>

                    <p style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem'
                    }}>
                      {col.description}
                    </p>
                  </div>
                </div>

                {/* Botões de Ação: Compra e Navegação */}
                <div style={{
                  padding: '0 1.6rem 1.6rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}>
                  {/* CTA Comercial Principal: Checkout Hotmart */}
                  {bundle?.hotmartCheckoutUrl && (
                    <a
                      href={bundle.hotmartCheckoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontWeight: 700
                      }}
                    >
                      <Sparkles size={16} />
                      <span>{t.collectionsSection.buyCollection}</span>
                      <ArrowRight size={15} />
                    </a>
                  )}

                  {/* CTA de Navegação Editorial: Ver Coleção e Volumes */}
                  <Link
                    to={`/colecoes#${col.slug}`}
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      borderColor: 'var(--border-green)',
                      gap: '0.5rem'
                    }}
                  >
                    <BookOpen size={16} color="var(--color-green-600)" />
                    <span>{t.collectionsSection.viewCollection}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
