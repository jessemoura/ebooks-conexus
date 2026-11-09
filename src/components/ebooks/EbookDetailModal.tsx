import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookFormat, Ebook } from '../../types';
import { useApp } from '../../context/AppContext';
import { siteConfig } from '../../config/siteConfig';
import {
  getAvailableFormats,
  getBookChannels,
  getBookLanguageLabel,
  getFormatBadgeLabel
} from '../../utils/bookFormats';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { 
  X, 
  BookOpen, 
  FileText, 
  Tablet,
  Layers, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Tag, 
  Calendar, 
  Globe, 
  Lock,
  Hash,
  Package,
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
  const coverUrl =
    ebook.coverImage !== undefined
      ? ebook.coverImage
      : `/assets/ebooks/${ebook.slug}.jpg`;

  const channels = getBookChannels(ebook);
  const availableFormats = getAvailableFormats(ebook);

  // Mensagem contextual para o canal de atendimento WhatsApp (exclusivo para tirar dúvidas)
  const getWhatsAppMessage = () => {
    const isDigitalOnly = availableFormats.length === 1 && availableFormats[0] === 'pdf';
    if (language === 'en') {
      return isDigitalOnly
        ? `Hello! I have a question regarding the e-book: "${ebook.title}".`
        : `Hello! I have a question regarding the book: "${ebook.title}".`;
    }
    if (language === 'es') {
      return isDigitalOnly
        ? `¡Hola! Tengo una consulta sobre el e-book: "${ebook.title}".`
        : `¡Hola! Tengo una consulta sobre el libro: "${ebook.title}".`;
    }
    return isDigitalOnly
      ? `Olá! Gostaria de tirar dúvidas sobre o e-book: "${ebook.title}".`
      : `Olá! Gostaria de tirar dúvidas sobre a obra: "${ebook.title}".`;
  };

  const whatsAppInquiryUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  // Ao clicar em uma tag, fecha o modal e filtra o catálogo pela tag
  const handleTagClick = (tag: string) => {
    onClose();
    navigate(`/ebooks?q=${encodeURIComponent(tag)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getFormatFullLabel = (format: BookFormat) => {
    if (format === 'pdf') return t.ebooksSection.formatDigitalPdf;
    if (format === 'paperback') return t.ebooksSection.formatPrintedPaperback;
    return t.ebooksSection.formatKindle;
  };

  const formatsSummaryText = availableFormats.map(getFormatFullLabel).join(' • ');
  const displayLanguage = getBookLanguageLabel(ebook.language, language);
  const displayIsbn = channels.paperback.isbn || ebook.isbn?.trim() || undefined;
  const displayAsin = channels.paperback.asin || channels.kindle.asin || ebook.asin?.trim() || undefined;

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
          .format-option-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 0.95rem 1.05rem;
            border-radius: var(--radius-md);
            background: var(--bg-secondary);
            border: 1px solid var(--border-subtle);
            transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          }
          .format-option-card:hover {
            border-color: var(--border-gold);
            box-shadow: var(--shadow-sm);
          }
          .format-option-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            flex-shrink: 0;
          }
          @media (max-width: 560px) {
            .format-option-card {
              flex-direction: column;
              align-items: stretch;
            }
            .format-option-actions {
              width: 100%;
            }
            .format-option-actions a {
              flex: 1;
              justify-content: center;
            }
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
              {coverUrl && !imgError ? (
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
                  alignItems: 'flex-start',
                  gap: '0.4rem',
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
                      border: '1px solid rgba(244, 162, 97, 0.3)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {ebook.categoryLabel}
                  </span>
                )}

                {availableFormats.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: '0.3rem' }}>
                    {availableFormats.map((fmt) => (
                      <span
                        key={fmt}
                        style={{
                          color: fmt === 'paperback' ? 'var(--color-gold-300)' : fmt === 'kindle' ? 'var(--color-orange-400)' : '#ffffff',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          background: fmt === 'paperback' ? 'rgba(10, 39, 28, 0.82)' : 'rgba(0, 0, 0, 0.7)',
                          backdropFilter: 'blur(6px)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)',
                          border: fmt === 'paperback' ? '1px solid rgba(212, 175, 55, 0.4)' : 'none'
                        }}
                      >
                        {fmt === 'paperback' ? <BookOpen size={11} /> : fmt === 'kindle' ? <Tablet size={11} /> : <FileText size={11} />}
                        {getFormatBadgeLabel(fmt)}
                      </span>
                    ))}
                  </div>
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
              {(formatsSummaryText || ebook.format) && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', flexShrink: 0 }}>
                    <FileText size={13} /> {availableFormats.length > 1 ? t.ebooksSection.formatsLabel : t.ebooksSection.formatLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', textAlign: 'right' }}>
                    {formatsSummaryText || ebook.format}
                  </span>
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
                <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{displayLanguage}</span>
              </div>

              {ebook.categoryLabel && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Layers size={13} /> {t.ebooksSection.categoryLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{ebook.categoryLabel}</span>
                </div>
              )}

              {ebook.volume !== undefined && ebook.volume !== '' && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Package size={13} /> {t.ebooksSection.volumeLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Vol. {ebook.volume}</span>
                </div>
              )}

              {displayIsbn && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Hash size={13} /> {t.ebooksSection.isbnLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace' }}>{displayIsbn}</span>
                </div>
              )}

              {displayAsin && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Hash size={13} /> {t.ebooksSection.asinLabel}
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace' }}>{displayAsin}</span>
                </div>
              )}

              {ebook.releaseDate && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={13} /> {t.ebooksSection.releaseDateLabel}
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

            {/* Ações e Escolha de Formato */}
            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.95rem'
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <Sparkles size={14} color="var(--color-gold-500)" />
                  <span>{t.ebooksSection.chooseFormatTitle}</span>
                </h4>

                {availableFormats.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {/* 1. E-book Digital — PDF (Hotmart) */}
                    {channels.pdf.available && channels.pdf.url && (
                      <div className="format-option-card">
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              fontWeight: 700,
                              fontSize: '0.94rem',
                              color: 'var(--text-primary)',
                              marginBottom: '0.2rem'
                            }}
                          >
                            <FileText size={16} color="var(--color-orange-500)" style={{ flexShrink: 0 }} />
                            <span>{t.ebooksSection.pdfFormatTitle}</span>
                          </div>
                          <p style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                            {t.ebooksSection.pdfFormatDesc}
                          </p>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'inline-block', marginTop: '0.2rem' }}>
                            {t.ebooksSection.hotmartNote}
                          </span>
                        </div>

                        <div className="format-option-actions">
                          <a
                            href={channels.pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ padding: '0.68rem 1.15rem', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
                          >
                            <span>{t.ebooksSection.buyEbookBtn}</span>
                            <ArrowRight size={15} />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* 2. Livro Impresso — Paperback (Amazon) */}
                    {channels.paperback.available && channels.paperback.primaryUrl && (
                      <div className="format-option-card">
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              fontWeight: 700,
                              fontSize: '0.94rem',
                              color: 'var(--text-primary)',
                              marginBottom: '0.2rem'
                            }}
                          >
                            <BookOpen size={16} color="var(--text-green)" style={{ flexShrink: 0 }} />
                            <span>{t.ebooksSection.paperbackFormatTitle}</span>
                          </div>
                          <p style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                            {t.ebooksSection.paperbackFormatDesc}
                          </p>
                          {(channels.paperback.isbn || channels.paperback.asin) && (
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'inline-block', marginTop: '0.2rem', fontFamily: 'monospace' }}>
                              {[
                                channels.paperback.isbn ? `ISBN ${channels.paperback.isbn}` : null,
                                channels.paperback.asin ? `ASIN ${channels.paperback.asin}` : null
                              ]
                                .filter(Boolean)
                                .join(' • ')}
                            </span>
                          )}
                        </div>

                        <div className="format-option-actions">
                          {channels.paperback.usUrl && (
                            <a
                              href={channels.paperback.usUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-green"
                              style={{ padding: '0.68rem 1.15rem', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
                            >
                              <span>{t.ebooksSection.buyAmazonBtn}</span>
                              <ExternalLink size={14} />
                            </a>
                          )}

                          {channels.paperback.ukUrl && (
                            <a
                              href={channels.paperback.ukUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={channels.paperback.usUrl ? 'btn btn-outline' : 'btn btn-green'}
                              style={{ padding: '0.68rem 1rem', fontSize: '0.86rem', whiteSpace: 'nowrap' }}
                            >
                              <span>
                                {channels.paperback.usUrl
                                  ? t.ebooksSection.amazonUkShortBtn
                                  : t.ebooksSection.buyAmazonUkBtn}
                              </span>
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 3. Kindle (Amazon Kindle) */}
                    {channels.kindle.available && channels.kindle.primaryUrl && (
                      <div className="format-option-card">
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              fontWeight: 700,
                              fontSize: '0.94rem',
                              color: 'var(--text-primary)',
                              marginBottom: '0.2rem'
                            }}
                          >
                            <Tablet size={16} color="var(--color-gold-500)" style={{ flexShrink: 0 }} />
                            <span>{t.ebooksSection.kindleFormatTitle}</span>
                          </div>
                          <p style={{ fontSize: '0.79rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                            {t.ebooksSection.kindleFormatDesc}
                          </p>
                          {channels.kindle.asin && (
                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'inline-block', marginTop: '0.2rem', fontFamily: 'monospace' }}>
                              ASIN {channels.kindle.asin}
                            </span>
                          )}
                        </div>

                        <div className="format-option-actions">
                          {channels.kindle.usUrl && (
                            <a
                              href={channels.kindle.usUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-navy"
                              style={{ padding: '0.68rem 1.15rem', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
                            >
                              <span>{t.ebooksSection.readKindleBtn}</span>
                              <ExternalLink size={14} />
                            </a>
                          )}

                          {channels.kindle.ukUrl && (
                            <a
                              href={channels.kindle.ukUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={channels.kindle.usUrl ? 'btn btn-outline' : 'btn btn-navy'}
                              style={{ padding: '0.68rem 1rem', fontSize: '0.86rem', whiteSpace: 'nowrap' }}
                            >
                              <span>
                                {channels.kindle.usUrl
                                  ? t.ebooksSection.amazonUkShortBtn
                                  : t.ebooksSection.readKindleBtn}
                              </span>
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Se não houver nenhum formato com URL válida cadastrada, NUNCA abre WhatsApp: exibe estado informativo */
                  <div
                    style={{
                      padding: '0.85rem 1.2rem',
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
              </div>

              {/* Botão Secundário: Ver Coleção Completa */}
              {ebook.collectionId && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate(`/colecoes#${ebook.collectionId}`);
                  }}
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Layers size={15} color="#D4AF37" />
                  <span>{t.ebooksSection.viewInCollection}</span>
                </button>
              )}

              {/* Atendimento WhatsApp: EXCLUSIVAMENTE no CTA de tirar dúvidas */}
              <div style={{ textAlign: 'center', marginTop: '0.1rem' }}>
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
