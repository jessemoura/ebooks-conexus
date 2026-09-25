import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import { useApp } from '../../context/AppContext';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  post: BlogPost;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const { t } = useApp();

  return (
    <article className="blog-card">
      <div>
        {/* Imagem de Capa Padrão CONEXUS 16:9 */}
        <div className="blog-card-media">
          <img
            src={post.featuredImage}
            alt={post.title}
            loading="lazy"
            className="blog-card-img"
          />
          <span className="blog-card-category">
            {post.category}
          </span>
        </div>

        {/* Informações Editoriais do Artigo */}
        <div className="blog-card-body">
          {/* Metadados: Data e Tempo de Leitura */}
          <div className="blog-card-meta">
            <span className="blog-card-meta-item">
              <Calendar size={14} />
              {post.publishDate}
            </span>
            <span>&bull;</span>
            <span className="blog-card-meta-item">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* Título do Artigo */}
          <h3 className="blog-card-title">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Resumo com Limite Harmonioso */}
          <p className="blog-card-excerpt">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* CTA de Ação */}
      <div className="blog-card-footer">
        <Link
          to={`/blog/${post.slug}`}
          className="blog-card-cta"
        >
          <span>{t.blogSection.readArticle}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

