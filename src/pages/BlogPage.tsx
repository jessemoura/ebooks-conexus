import React, { useState, useMemo } from 'react';
import { getBlogPosts } from '../data/blogPosts';
import { ArticleCard } from '../components/blog/ArticleCard';
import { SEO } from '../components/common/SEO';
import { useApp } from '../context/AppContext';
import { Sparkles, Filter } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { t, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.blogSection.allCategory },
    { id: 'financas', label: t.searchPage.financeCategory },
    { id: 'idiomas', label: t.searchPage.languagesCategory },
  ];

  const blogPosts = useMemo(() => getBlogPosts(language), [language]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return blogPosts;
    return blogPosts.filter(p => {
      const catLower = p.category.toLowerCase();
      if (selectedCategory === 'financas') {
        return catLower.includes('finan') || catLower.includes('invest') || catLower.includes('wealth');
      }
      if (selectedCategory === 'idiomas') {
        return catLower.includes('idioma') || catLower.includes('language') || catLower.includes('lengua');
      }
      return catLower.includes(selectedCategory);
    });
  }, [blogPosts, selectedCategory]);

  return (
    <>
      <SEO 
        title={t.blogSection.headerTitle} 
        description={t.blogSection.headerSubtitle}
      />

      <main style={{ paddingBottom: '6rem' }}>
        {/* Header do Blog */}
        <section style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={13} />
              <span>{t.blogSection.headerBadge}</span>
            </span>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              {t.blogSection.headerTitle}
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65
            }}>
              {t.blogSection.headerSubtitle}
            </p>
          </div>
        </section>

        {/* Filtro por Categoria */}
        <div className="container" style={{ marginTop: '2.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            <Filter size={15} color="var(--text-muted)" />
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.45rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: selectedCategory === cat.id ? '1.5px solid var(--color-orange-500)' : '1px solid var(--border-subtle)',
                  background: selectedCategory === cat.id ? 'var(--color-green-800)' : 'var(--bg-card)',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Artigos CONEXUS */}
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
