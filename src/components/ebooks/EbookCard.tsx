import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ebook } from '../../types';
import { useApp } from '../../context/AppContext';
import { BookOpen, FileText, ArrowRight, Layers, Image as ImageIcon } from 'lucide-react';
import { EbookDetailModal } from './EbookDetailModal';

interface EbookCardProps {
  ebook: Ebook;
}

export const EbookCard: React.FC<EbookCardProps> = ({ ebook }) => {
  const { t } = useApp();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coverUrl = ebook.coverImage || `/assets/ebooks/${ebook.slug}.jpg`;

  const handleTagClick = (e: React.MouseEvent, kw: string) => {
    e.stopPropagation();
    navigate(`/ebooks?q=${encodeURIComponent(kw)}`);
  };

  return (
    <>
      <div 
        className="card-editorial" 
        style={{ 
          height: '100%', 
          justifyContent: 'space-between', 
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          overflow: 'hidden',
          transition: 'all var(--transition-smooth)'
        }}
      >
        <div>
          {/* Container da Capa: vertical, padrão catálogo/livraria, exibe 100% da imagem oficial com object-fit contain */}
          <div 
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label={`${t.ebooksSection.viewDetails}: ${ebook.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
            style={{
              margin: '1.2rem 1.2rem 0 1.2rem',
              height: '340px',
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(20, 26, 31, 0.95) 0%, rgba(12, 16, 20, 0.98) 100%)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              cursor: 'pointer'
            }}
          >
            {!imgError ? (
              <>
                {/* Fundo ampliado e desfocado da própria capa */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    backgroundImage: `url(${coverUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    filter: 'blur(18px) brightness(0.35)',
                    transform: 'scale(1.2)',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />
                {/* Overlay escuro sutil sobre o fundo desfocado */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(8, 12, 16, 0.45)',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                />
                {/* Capa original nítida e centralizada na frente */}
                <img
                  src={coverUrl}
                  alt={ebook.title}
                  loading="lazy"
                  onError={() => setImgError(true)}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '4px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)',
                    transition: 'transform var(--transition-fast)'
                  }}
                />
              </>
            ) : (
              /* Placeholder Neutro e Elegante */
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                textAlign: 'center',
                background: 'linear-gradient(180deg, var(--bg-secondary) 0%, rgba(10, 39, 28, 0.08) 100%)',
                border: '1px dashed var(--border-medium)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(244, 162, 97, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-orange-500)',
                  marginBottom: '0.8rem'
                }}>
                  <ImageIcon size={22} />
                </div>
                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  marginBottom: '0.4rem'
                }}>
                  {t.ebooksSection.coverInPreparation}
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: 700
                }}>
                  {ebook.collectionName || ebook.categoryLabel}
                </span>
              </div>
            )}

            {/* Badges Flutuantes Discretas no Topo */}
            <div style={{
              position: 'absolute',
              top: '0.8rem',
              left: '0.8rem',
              right: '0.8rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 3,
              pointerEvents: 'none'
            }}>
              <span style={{
                background: 'rgba(10, 39, 28, 0.85)',
                backdropFilter: 'blur(6px)',
                color: 'var(--color-orange-400)',
                fontSize: '0.68rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                border: '1px solid rgba(244, 162, 97, 0.3)'
              }}>
                {ebook.category === 'financas' ? t.searchPage.financeCategory : t.searchPage.languagesCategory}
              </span>

              <span style={{
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(6px)',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-sm)'
              }}>
                <FileText size={11} />
                PDF
              </span>
            </div>
          </div>

          {/* Corpo Informativo */}
          <div style={{ padding: '1.4rem 1.4rem 1rem 1.4rem' }}>
            {ebook.collectionName && (
              <div style={{
                color: 'var(--color-gold-600)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '0.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Layers size={13} />
                <span>{ebook.collectionName}</span>
              </div>
            )}

            <h3 
              onClick={() => setIsModalOpen(true)}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                lineHeight: 1.35,
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-orange-500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              {ebook.title}
            </h3>

            <p style={{
              fontSize: '0.86rem',
              fontWeight: 600,
              color: 'var(--color-orange-500)',
              marginBottom: '0.5rem',
              lineHeight: 1.4
            }}>
              {ebook.subtitle}
            </p>

            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {ebook.description}
            </p>

            {/* Hashtags Clicáveis e Interativas */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.5rem' }}>
              {ebook.keywords.slice(0, 3).map((kw, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => handleTagClick(e, kw)}
                  title={t.ebooksSection.exploreTag.replace('{tag}', kw)}
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-muted)',
                    padding: '0.22rem 0.55rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-orange-500)';
                    e.currentTarget.style.color = 'var(--color-orange-500)';
                    e.currentTarget.style.background = 'rgba(231, 111, 81, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                  }}
                >
                  #{kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ação: Botão Ver Detalhes que abre o Modal Oficial da Obra */}
        <div style={{ padding: '0 1.4rem 1.4rem 1.4rem' }}>
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn btn-outline" 
            style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
          >
            <BookOpen size={16} />
            <span>{t.ebooksSection.viewDetails}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Modal Completo de Detalhes da Obra */}
      <EbookDetailModal
        ebook={ebook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
