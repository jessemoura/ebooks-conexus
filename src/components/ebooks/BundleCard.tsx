import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CollectionBundle } from '../../types';
import { useApp } from '../../context/AppContext';
import { Layers, ArrowRight, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';

interface BundleCardProps {
  bundle: CollectionBundle;
  compact?: boolean;
}

export const BundleCard: React.FC<BundleCardProps> = ({ bundle }) => {
  const { t } = useApp();
  const [imgError, setImgError] = useState(false);

  const coverUrl = bundle.coverImage || `/assets/ebooks/${bundle.slug}.jpg`;

  return (
    <div
      className="card-editorial"
      style={{
        height: '100%',
        justifyContent: 'space-between',
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid var(--border-gold)',
        boxShadow: '0 8px 24px rgba(212, 175, 55, 0.12)',
        overflow: 'hidden',
        transition: 'all var(--transition-smooth)'
      }}
    >
      <div>
        {/* Container da Capa do Bundle: vertical, padrão catálogo/livraria, exibe 100% da imagem oficial com object-fit contain */}
        <Link
          to={`/colecoes#${bundle.collectionId}`}
          aria-label={`${bundle.title} — ${t.collectionsSection.viewCollection}`}
          style={{
            display: 'block',
            margin: '1.2rem 1.2rem 0 1.2rem',
            height: '340px',
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, rgba(20, 26, 31, 0.95) 0%, rgba(12, 16, 20, 0.98) 100%)',
            border: '1px solid var(--border-subtle)',
            padding: '0.5rem',
            textDecoration: 'none'
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
                alt={bundle.title}
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
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.55)'
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
              background: 'linear-gradient(180deg, var(--bg-secondary) 0%, rgba(212, 175, 55, 0.08) 100%)',
              border: '1px dashed var(--border-gold)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-gold-500)',
                marginBottom: '0.8rem'
              }}>
                <ImageIcon size={24} />
              </div>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.35rem'
              }}>
                {t.ebooksSection.coverInPreparation}
              </span>
              <span style={{
                fontSize: '0.72rem',
                color: 'var(--text-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 800
              }}>
                {t.bundlesSection.boxsetBadge} &bull; {bundle.volumesCount} {t.collectionsSection.volumes}
              </span>
            </div>
          )}

          {/* Badges Flutuantes do Topo */}
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
              background: 'var(--color-orange-gradient)',
              color: '#ffffff',
              fontSize: '0.7rem',
              fontWeight: 800,
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              boxShadow: '0 4px 12px rgba(231, 111, 81, 0.4)'
            }}>
              <Sparkles size={11} />
              <span>{t.collectionsSection.completeSeriesBadge}</span>
            </span>

            <span style={{
              color: 'var(--color-gold-400)',
              fontSize: '0.72rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(6px)',
              padding: '0.25rem 0.55rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              <Layers size={12} />
              <span>{bundle.volumesCount} {t.collectionsSection.volumes}</span>
            </span>
          </div>
        </Link>

        {/* Content Body */}
        <div style={{ padding: '1.4rem 1.4rem 1rem 1.4rem' }}>
          <div style={{
            color: 'var(--color-gold-600)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '0.35rem',
            textTransform: 'uppercase'
          }}>
            {t.collectionsSection.officialSeries}
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.28rem',
            lineHeight: 1.3,
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem'
          }}>
            <Link 
              to={`/colecoes#${bundle.collectionId}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-orange-500)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'inherit'; }}
            >
              {bundle.title}
            </Link>
          </h3>

          <p style={{
            fontSize: '0.88rem',
            fontWeight: 700,
            color: 'var(--color-orange-500)',
            marginBottom: '0.5rem',
            lineHeight: 1.4
          }}>
            {bundle.subtitle}
          </p>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.2rem'
          }}>
            {bundle.description}
          </p>

          {/* Included Volumes Count Pill */}
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.65rem 0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.82rem',
            color: 'var(--text-primary)',
            fontWeight: 600,
            border: '1px solid var(--border-subtle)'
          }}>
            <CheckCircle2 size={15} color="#25D366" />
            <span>{t.bundlesSection.allVolumesIncluded.replace('{count}', String(bundle.volumesCount))}</span>
          </div>
        </div>
      </div>

      {/* Action CTAs: Compra Direta e Navegação Editorial */}
      <div style={{
        padding: '0 1.4rem 1.4rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem'
      }}>
        {bundle.hotmartCheckoutUrl && (
          <a
            href={bundle.hotmartCheckoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}
          >
            <Sparkles size={16} />
            <span>{t.collectionsSection.buyCollection}</span>
            <ArrowRight size={15} />
          </a>
        )}

        <Link
          to={`/colecoes#${bundle.collectionId}`}
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', borderColor: 'var(--border-green)' }}
        >
          <Layers size={16} color="var(--color-green-600)" />
          <span>{t.collectionsSection.viewCollection}</span>
        </Link>
      </div>
    </div>
  );
};
