import React, { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogPostBySlug, getBlogPosts } from '../data/blogPosts';
import { getEbooks } from '../data/ebooks';
import { siteConfig } from '../config/siteConfig';
import { SEO } from '../components/common/SEO';
import { EbookCard } from '../components/ebooks/EbookCard';
import { ArticleCard } from '../components/blog/ArticleCard';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronRight, 
  Link as LinkIcon,
  HelpCircle 
} from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const post = useMemo(() => {
    if (!slug) return undefined;
    return getBlogPostBySlug(slug, language);
  }, [slug, language]);

  const allEbooks = useMemo(() => getEbooks(language), [language]);
  const allPosts = useMemo(() => getBlogPosts(language), [language]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedEbook = post.relatedEbookId 
    ? allEbooks.find(e => e.id === post.relatedEbookId) 
    : null;

  const relatedPosts = post.relatedPostSlugs 
    ? allPosts.filter(p => post.relatedPostSlugs?.includes(p.slug))
    : [];

  const postCanonicalUrl = `${siteConfig.brand.domainUrl}/blog/${post.slug}`;
  const absoluteFeaturedImageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${siteConfig.brand.domainUrl}${post.featuredImage.startsWith('/') ? '' : '/'}${post.featuredImage}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': postCanonicalUrl
    },
    'headline': post.title,
    'description': post.metaDescription,
    'image': absoluteFeaturedImageUrl,
    'datePublished': post.publishDate,
    'url': postCanonicalUrl,
    'author': {
      '@type': 'Organization',
      'name': 'CONEXUS E-BOOKS',
      'url': siteConfig.brand.domainUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'CONEXUS E-BOOKS',
      'url': siteConfig.brand.domainUrl,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.brand.domainUrl}/logo.png`
      }
    }
  };

  return (
    <>
      <SEO 
        title={post.seoTitle}
        description={post.metaDescription}
        canonical={postCanonicalUrl}
        image={absoluteFeaturedImageUrl}
        type="article"
        schema={articleSchema}
      />

      <main style={{ paddingBottom: '6rem' }}>
        {/* Breadcrumb & Top Bar */}
        <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: '1rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)' }}>{t.blogSection.breadcrumbHome}</Link>
            <ChevronRight size={14} />
            <Link to="/blog" style={{ color: 'var(--text-secondary)' }}>{t.blogSection.breadcrumbBlog}</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>
              {post.title}
            </span>
          </div>
        </div>

        <article className="container" style={{ maxWidth: '840px', paddingTop: '3rem' }}>
          {/* Categoria e Metadados */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
            <span className="badge badge-orange">{post.category}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Calendar size={14} />
                {post.publishDate}
              </span>
              <span>&bull;</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* H1 Principal do Artigo */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}>
            {post.title}
          </h1>

          {/* Resumo / Lead do Artigo */}
          <p style={{
            fontSize: '1.18rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            fontStyle: 'italic',
            borderLeft: '3px solid var(--color-gold-500)',
            paddingLeft: '1.2rem'
          }}>
            {post.excerpt}
          </p>

          {/* Imagem Destacada 16:9 Padrão CONEXUS */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '3rem',
            boxShadow: 'var(--shadow-md)',
            backgroundColor: '#08182B'
          }}>
            <img 
              src={post.featuredImage} 
              alt={post.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block'
              }}
            />
          </div>

          {/* Conteúdo do Artigo */}
          <div 
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.8,
              color: 'var(--text-primary)',
              marginBottom: '3.5rem'
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Links Internos Contextuais */}
          {post.internalLinks && post.internalLinks.length > 0 && (
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '3.5rem'
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <LinkIcon size={16} color="#D4AF37" />
                <span>{t.blogSection.relatedLinksTitle}</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {post.internalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.url} style={{ color: 'var(--text-gold)', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'underline' }}>
                      &rarr; {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ do Artigo */}
          {post.faqs && post.faqs.length > 0 && (
            <section style={{
              marginBottom: '4rem',
              padding: '2.5rem 2rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <HelpCircle size={24} color="#D4AF37" />
                <span>{t.blogSection.articleFaqTitle}</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {post.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div 
                      key={index}
                      style={{
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden'
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        style={{
                          width: '100%',
                          padding: '1.1rem 1.4rem',
                          background: isOpen ? 'var(--bg-secondary)' : 'var(--bg-card)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          fontWeight: 600,
                          fontSize: '1rem',
                          color: 'var(--text-primary)',
                          transition: 'background var(--transition-fast)',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                      </button>
                      {isOpen && (
                        <div style={{ padding: '1.1rem 1.4rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, borderTop: '1px solid var(--border-subtle)' }}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* E-book Relacionado + CTA de Compra */}
          {relatedEbook && (
            <section style={{
              marginBottom: '4.5rem',
              padding: '2.5rem 2rem',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>
                  {t.blogSection.relatedEbookBadge}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)' }}>
                  {t.blogSection.relatedEbookTitle}
                </h3>
              </div>

              <div style={{ maxWidth: '420px', margin: '0 auto' }}>
                <EbookCard ebook={relatedEbook} />
              </div>
            </section>
          )}

          {/* Artigos Relacionados */}
          {relatedPosts.length > 0 && (
            <section style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '3.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                {t.blogSection.relatedArticles}
              </h3>
              <div className="blog-grid">
                {relatedPosts.map(p => (
                  <ArticleCard key={p.id} post={p} />
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
};
