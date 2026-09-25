import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getEbooks } from '../data/ebooks';
import { getCollections } from '../data/collections';
import { getBundles } from '../data/bundles';
import { EbookCard } from '../components/ebooks/EbookCard';
import { BundleCard } from '../components/ebooks/BundleCard';
import { SEO } from '../components/common/SEO';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  BookOpen, 
  RotateCcw, 
  Sparkles,
  Layers,
  Package
} from 'lucide-react';

export const EbooksPage: React.FC = () => {
  const { t, language } = useApp();
  const [searchParams] = useSearchParams();

  // Estados de busca e filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOfferType, setSelectedOfferType] = useState<'all' | 'bundles' | 'singles'>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>(() => {
    const colParam = searchParams.get('collection') || searchParams.get('colecao');
    return colParam || 'all';
  });
  const [sortBy, setSortBy] = useState<'newest' | 'az' | 'za'>('newest');

  // Atualiza filtro caso o parâmetro de URL mude
  useEffect(() => {
    const colParam = searchParams.get('collection') || searchParams.get('colecao');
    if (colParam) {
      setSelectedCollection(colParam);
    }
  }, [searchParams]);

  const ebooks = useMemo(() => getEbooks(language), [language]);
  const collections = useMemo(() => getCollections(language), [language]);
  const bundles = useMemo(() => getBundles(language), [language]);

  // Filtro de Coleções Completas (Bundles)
  const filteredBundles = useMemo(() => {
    if (selectedOfferType === 'singles') return [];

    return bundles.filter((bundle) => {
      // Filtragem estrita por Coleção
      if (selectedCollection !== 'all' && bundle.collectionId !== selectedCollection) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = bundle.title.toLowerCase().includes(query);
        const matchesSubtitle = bundle.subtitle.toLowerCase().includes(query);
        const matchesDesc = bundle.description.toLowerCase().includes(query);
        const matchesCat = bundle.categoryLabel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'az') return a.title.localeCompare(b.title);
      if (sortBy === 'za') return b.title.localeCompare(a.title);
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    });
  }, [bundles, selectedOfferType, selectedCollection, searchQuery, sortBy]);

  // Filtro de E-books Individuais
  const filteredEbooks = useMemo(() => {
    if (selectedOfferType === 'bundles') return [];

    return ebooks.filter((ebook) => {
      // Filtragem estrita por Coleção
      if (selectedCollection !== 'all' && ebook.collectionId !== selectedCollection) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = ebook.title.toLowerCase().includes(query);
        const matchesSubtitle = ebook.subtitle.toLowerCase().includes(query);
        const matchesDescription = ebook.description.toLowerCase().includes(query);
        const matchesCollection = ebook.collectionName?.toLowerCase().includes(query) || false;
        const matchesCategory = ebook.categoryLabel.toLowerCase().includes(query);
        const matchesKeywords = ebook.keywords.some((kw) => kw.toLowerCase().includes(query));

        if (!matchesTitle && !matchesSubtitle && !matchesDescription && !matchesCollection && !matchesCategory && !matchesKeywords) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'az') return a.title.localeCompare(b.title);
      if (sortBy === 'za') return b.title.localeCompare(a.title);
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    });
  }, [ebooks, selectedOfferType, selectedCollection, searchQuery, sortBy]);

  const totalResultsCount = filteredBundles.length + filteredEbooks.length;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedOfferType('all');
    setSelectedCollection('all');
    setSortBy('newest');
  };

  return (
    <>
      <SEO 
        title={t.ebooksSection.headerTitle} 
        description={t.ebooksSection.headerSubtitle}
      />

      <main style={{ minHeight: '80vh', paddingBottom: '5rem' }}>
        {/* Topo / Área de Pesquisa Grande */}
        <section style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={13} />
              <span>{t.ebooksSection.headerBadge}</span>
            </span>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              {t.ebooksSection.headerTitle}
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem'
            }}>
              {t.ebooksSection.headerSubtitle}
            </p>

            {/* Barra de Pesquisa Grande e Destacada */}
            <div style={{
              position: 'relative',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-card)',
              border: '2px solid var(--border-gold)'
            }}>
              <Search 
                size={24} 
                style={{
                  position: 'absolute',
                  left: '1.4rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-gold-500)'
                }} 
              />
              <input
                type="text"
                placeholder={t.searchPage.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.4rem 1.2rem 3.6rem',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  borderRadius: 'var(--radius-lg)'
                }}
                aria-label="Search e-books and collections"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1.2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    padding: '0.4rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-secondary)',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {t.searchPage.clearSearchBtn}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Seção de Filtros e Resultados */}
        <div className="container" style={{ marginTop: '2.5rem' }}>
          
          {/* Tabs Principais: Todas as Ofertas / Coleções Completas / Volumes Individuais */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              onClick={() => setSelectedOfferType('all')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 700,
                border: selectedOfferType === 'all' ? '2px solid var(--color-orange-500)' : '1px solid var(--border-subtle)',
                background: selectedOfferType === 'all' ? 'var(--color-green-800)' : 'var(--bg-card)',
                color: selectedOfferType === 'all' ? '#ffffff' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Package size={16} />
              <span>{t.bundlesSection.filterAll}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedOfferType('bundles')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 700,
                border: selectedOfferType === 'bundles' ? '2px solid var(--color-orange-500)' : '1px solid var(--border-subtle)',
                background: selectedOfferType === 'bundles' ? 'var(--color-green-800)' : 'var(--bg-card)',
                color: selectedOfferType === 'bundles' ? '#ffffff' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Layers size={16} color={selectedOfferType === 'bundles' ? '#ffffff' : '#D4AF37'} />
              <span>{t.bundlesSection.filterBundles}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedOfferType('singles')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 700,
                border: selectedOfferType === 'singles' ? '2px solid var(--color-orange-500)' : '1px solid var(--border-subtle)',
                background: selectedOfferType === 'singles' ? 'var(--color-green-800)' : 'var(--bg-card)',
                color: selectedOfferType === 'singles' ? '#ffffff' : 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <BookOpen size={16} />
              <span>{t.bundlesSection.filterSingles}</span>
            </button>
          </div>

          {/* Barra de Filtros e Ordenação */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.2rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '2.5rem'
          }}>
            {/* Filtro por Coleções (Tabs Rápidas) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '0.3rem' }}>
                <Filter size={15} /> {t.searchPage.allCollections}
              </span>
              
              <button
                type="button"
                onClick={() => setSelectedCollection('all')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: selectedCollection === 'all' ? '1.5px solid var(--color-orange-500)' : '1px solid var(--border-subtle)',
                  background: selectedCollection === 'all' ? 'rgba(231, 111, 81, 0.15)' : 'var(--bg-card)',
                  color: selectedCollection === 'all' ? 'var(--color-orange-500)' : 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                {t.searchPage.allCollections}
              </button>

              {collections.map((col) => (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => setSelectedCollection(col.id)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: selectedCollection === col.id ? '1.5px solid var(--color-orange-500)' : '1px solid var(--border-subtle)',
                    background: selectedCollection === col.id ? 'rgba(231, 111, 81, 0.15)' : 'var(--bg-card)',
                    color: selectedCollection === col.id ? 'var(--color-orange-500)' : 'var(--text-primary)',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                >
                  {col.title} ({col.volumesCount})
                </button>
              ))}
            </div>

            {/* Filtro por Coleção (Select) e Ordenação */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              {/* Select de Coleção */}
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                style={{
                  padding: '0.5rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="all">{t.searchPage.allCollections}</option>
                {collections.map((col) => (
                  <option key={col.id} value={col.id}>
                    {col.title} ({col.volumesCount} {t.collectionsSection.volumes})
                  </option>
                ))}
              </select>

              {/* Select de Ordenação */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <SlidersHorizontal size={15} color="var(--text-muted)" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-medium)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="newest">{t.searchPage.sortNewest}</option>
                  <option value="az">{t.searchPage.sortAZ}</option>
                  <option value="za">{t.searchPage.sortZA}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contador de Resultados */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.8rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            <span>
              {t.ebooksSection.showingResults.replace('{count}', String(totalResultsCount))}
            </span>
            {(searchQuery || selectedOfferType !== 'all' || selectedCollection !== 'all') && (
              <button
                type="button"
                onClick={handleResetFilters}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-gold)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={14} />
                <span>{t.searchPage.clearFilters}</span>
              </button>
            )}
          </div>

          {/* 1. BLOCO DE COLEÇÕES COMPLETAS (QUANDO APLICÁVEL) */}
          {filteredBundles.length > 0 && (
            <section style={{ marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                <Layers size={22} color="var(--color-orange-500)" />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', margin: 0 }}>
                  {t.bundlesSection.title}
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.2rem'
              }}>
                {filteredBundles.map((bundle) => (
                  <BundleCard key={bundle.id} bundle={bundle} />
                ))}
              </div>
            </section>
          )}

          {/* 2. BLOCO DE VOLUMES INDIVIDUAIS */}
          {filteredEbooks.length > 0 && (
            <section>
              {filteredBundles.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2.5rem' }}>
                  <BookOpen size={22} color="var(--color-gold-500)" />
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', margin: 0 }}>
                    {t.bundlesSection.filterSingles}
                  </h2>
                </div>
              )}

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
              }}>
                {filteredEbooks.map((ebook) => (
                  <EbookCard key={ebook.id} ebook={ebook} />
                ))}
              </div>
            </section>
          )}

          {/* ESTADO VAZIO */}
          {totalResultsCount === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--border-medium)'
            }}>
              <BookOpen size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                {t.ebooksSection.emptyTitle}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                {t.searchPage.noResults}
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="btn btn-primary"
              >
                <RotateCcw size={16} />
                <span>{t.ebooksSection.clearFiltersBtn}</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
