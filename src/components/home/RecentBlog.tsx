import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../data/blogPosts';
import { ArticleCard } from '../blog/ArticleCard';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export const RecentBlog: React.FC = () => {
  const { t, language } = useApp();
  const posts = useMemo(() => getBlogPosts(language).slice(0, 2), [language]);

  return (
    <section className="section-py" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <span className="badge badge-green">
            <Sparkles size={13} />
            <span>{t.blogSection.badge}</span>
          </span>
          <h2>{t.blogSection.title}</h2>
          <p>{t.blogSection.subtitle}</p>
        </div>

        {/* Grid de Artigos CONEXUS (2 por linha no Desktop) */}
        <div className="blog-grid" style={{ marginBottom: '3.5rem' }}>
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>

        {/* Botão Ver Todos */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/blog" className="btn btn-outline" style={{ padding: '0.85rem 2.2rem', borderColor: 'var(--border-green)' }}>
            <span>{t.blogSection.viewAllPosts}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};
