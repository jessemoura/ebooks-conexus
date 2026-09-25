import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ebook } from '../../types';
import { useApp } from '../../context/AppContext';
import { siteConfig } from '../../config/siteConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { 
  X, 
  BookOpen, 
  FileText, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Tag, 
  Calendar, 
  Globe, 
  Lock,
  Image as ImageIcon
} from 'lucide-react';

interface EbookDetailModalProps {
  ebook: Ebook | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EbookDetailModal: React.FC<EbookDetailModalProps> = ({
  ebook,
  isOpen,
  onClose
}) => {
  const { t, language } = useApp();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  // Reset img error on ebook change
  useEffect(() => {
    setImgError(false);
  }, [ebook?.id]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !ebook) return null;

  // Capa oficial cadastrada no catálogo
  const coverUrl = ebook.coverImage || `/assets/ebooks/${ebook.slug}.jpg`;

  // Mensagem contextual para o canal de atendimento WhatsApp (exclusivo para tirar dúvidas)
  const getWhatsAppMessage = () => {
    if (language === 'en') {
      return `Hello! I have a question regarding the e-book: "${ebook.title}".`;
    }
    if (language === 'es') {
      return `¡Hola! Tengo una consulta sobre el e-book: "${ebook.title}".`;
    }
    return `Olá! Gostaria de tirar dúvidas sobre o e-book: "${ebook.title}".`;
  };

  const whatsAppInquiryUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  // Ao clicar em uma tag, fecha o modal e filtra o catálogo pela tag
  const handleTagClick = (tag: string) => {
    onClose();
    navigate(`/ebooks?q=${encodeURIComponent(tag)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nome do idioma baseado no idioma ativo da aplicação
  const getLanguageLabel = () => {
    if (language === 'en') return 'English';
    if (language === 'es') return 'Español';
    return 'Português';
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ebook-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.2rem',
        background: 'rgba(5, 12, 9, 0.82)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid var(--border-gold)',
          boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleUp 0.22s ease-out'
        }}
      >
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.96); }
            to { opacity: 1; transform: scale(1); }
          }
          .ebook-modal-grid {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 2rem;
            overflow-y: auto;
            padding: 2.2rem;
          }
          @media (max-width: 768px) {
            .ebook-modal-grid {
              grid-template-columns: 1fr;
              padding: 1.5rem;
              gap: 1.5rem;
            }
          }
          .modal-tag-pill {
            transition: all var(--transition-fast);
          }
          .modal-tag-pill:hover {
            border-color: var(--color-orange-500) !important;
            background: rgba(231, 111, 81, 0.15) !important;
            color: var(--color-orange-500) !important;
            transform: translateY(-1px);
          }
        `}</style>

        {/* Header Superior com Botão de Fechar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.2rem 1.8rem',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="badge badge-gold">
              <Sparkles size={13} />
              <span>{t.ebooksSection.modalTitle}</span>
            </span>
            {ebook.categoryLabel && (
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                &bull; {ebook.categoryLabel}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.ebooksSection.closeModal}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-orange-500)';
              e.currentTarget.style.color = 'var(--color-orange-500)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="ebook-modal-grid">
          {/* Coluna 1: Capa Oficial em Alta Resolução */}
          <div>
            <div
              style={{
                height: '360px',
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, rgba(20, 26, 31, 0.95) 0%, rgba(12, 16, 20, 0.98) 100%)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {!imgError ? (
                <>
                  {/* Fundo ampliado e desfocado da capa oficial */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      backgroundImage: `url(${coverUrl})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      filter: 'blur(20px) brightness(0.35)',
                      transform: 'scale(1.2)',
                      zIndex: 0,
                      pointerEvents: 'none'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(8, 12, 16, 0.45)',
                      zIndex: 1,
                      pointerEvents: 'none'
                    }}
                  />
                  <img
                    src={coverUrl}
                    alt={ebook.title}
                    onError={() => setImgError(true)}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '4px',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.65)'
                    }}
                  />
                </>
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, var(--bg-secondary) 0%, rgba(10, 39, 28, 0.08) 100%)',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <ImageIcon size={32} color="var(--color-orange-500)" style={{ marginBottom: '0.8rem' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {t.ebooksSection.coverInPreparation}
                  </span>
                </div>
              )}

              {/* Badges Flutuantes */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.8rem',
                  left: '0.8rem',
                  right: '0.8rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
              >
                {ebook.categoryLabel && (
                  <span
                    style={{
                      background: 'rgba(10, 39, 28, 0.85)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--color-orange-400)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(244, 162, 97, 0.3)'
                    }}
                  >
                    {ebook.categoryLabel}
                  </span>
                )}

                {ebook.format && (
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(6px)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    <FileText size={11} />
                    {ebook.format}
                  </span>
                )}
              </div>
            </div>

            {/* Ficha Técnica (exclusivamente com metadados reais cadastrados) */}
            <div
              style={{
                marginTop: '1.2rem',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}
            >
              {ebook.format && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <FileText size={13} /> {t.ebooksSection.formatLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{ebook.format}</span>
                </div>
              )}

              {typeof ebook.pages === 'number' && ebook.pages > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <BookOpen size={13} /> {t.ebooksSection.pagesLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{ebook.pages} {t.ebooksSection.pagesLabel}</span>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Globe size={13} /> {t.ebooksSection.languageLabel}
                </span>
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{getLanguageLabel()}</span>
              </div>

              {ebook.categoryLabel && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Layers size={13} /> {t.ebooksSection.categoryLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{ebook.categoryLabel}</span>
                </div>
              )}

              {ebook.releaseDate && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={13} /> Data de Lançamento
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{ebook.releaseDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Coluna 2: Informações Editoriais e Checkout Hotmart */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Coleção Pertencente */}
              {ebook.collectionName && (
                <div
                  style={{
                    color: 'var(--color-gold-600)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Layers size={14} />
                  <span>{ebook.collectionName}</span>
                </div>
              )}

              {/* Título Principal */}
              <h2
                id="ebook-modal-title"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 2.8vw, 1.85rem)',
                  lineHeight: 1.25,
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.6rem'
                }}
              >
                {ebook.title}
              </h2>

              {/* Subtítulo */}
              {ebook.subtitle && (
                <p
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: 'var(--color-orange-500)',
                    marginBottom: '1.2rem',
                    lineHeight: 1.45
                  }}
                >
                  {ebook.subtitle}
                </p>
              )}

              {/* Sinopse / Visão Geral */}
              {ebook.description && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <BookOpen size={14} color="var(--color-gold-500)" />
                    {t.ebooksSection.synopsis}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      margin: 0
                    }}
                  >
                    {ebook.description}
                  </p>
                </div>
              )}

              {/* Palavras-chave / Hashtags Interativas */}
              {ebook.keywords && ebook.keywords.length > 0 && (
                <div style={{ marginBottom: '1.8rem' }}>
                  <h4
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--text-muted)',
                      marginBottom: '0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Tag size={13} color="var(--color-orange-500)" />
                    {t.ebooksSection.tagsLabel}
                  </h4>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {ebook.keywords.map((kw, i) => (
                      <button
                        key={i}
                        type="button"
                        className="modal-tag-pill"
                        onClick={() => handleTagClick(kw)}
                        title={t.ebooksSection.exploreTag.replace('{tag}', kw)}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          background: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}
                      >
                        #{kw}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ações e Checkout */}
            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {/* 1. Botão Principal: Abre ESTRITAMENTE o checkout Hotmart específico em nova aba */}
                {ebook.hotmartCheckoutUrl ? (
                  <a
                    href={ebook.hotmartCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1, minWidth: '220px', justifyContent: 'center' }}
                  >
                    <Sparkles size={16} />
                    <span>{t.ebooksSection.buyNow}</span>
                    <ArrowRight size={15} />
                  </a>
                ) : (
                  /* Se não houver checkout cadastrado, NUNCA abre WhatsApp: exibe estado informativo */
                  <div
                    style={{
                      flex: 1,
                      minWidth: '220px',
                      padding: '0.8rem 1.2rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      cursor: 'not-allowed',
                      textAlign: 'center'
                    }}
                  >
                    <Lock size={15} />
                    <span>{t.ebooksSection.checkoutUnavailable}</span>
                  </div>
                )}

                {/* 2. Botão Secundário: Ver Coleção Completa */}
                {ebook.collectionId && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      navigate(`/colecoes#${ebook.collectionId}`);
                    }}
                    className="btn btn-outline"
                    style={{ justifyContent: 'center' }}
                  >
                    <Layers size={15} color="#D4AF37" />
                    <span>{t.ebooksSection.viewInCollection}</span>
                  </button>
                )}
              </div>

              {/* 3. Atendimento WhatsApp: EXCLUSIVAMENTE no CTA de tirar dúvidas */}
              <div style={{ textAlign: 'center', marginTop: '0.2rem' }}>
                <a
                  href={whatsAppInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-orange-500)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <WhatsAppIcon size={15} color="var(--color-green-500)" />
                  <span>{t.ebooksSection.talkWhatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
