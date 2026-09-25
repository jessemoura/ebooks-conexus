import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { useApp } from '../../context/AppContext';
import { InstagramIcon } from '../common/InstagramIcon';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="section-py" style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-green)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.8rem 2.2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}>
          {/* Ícone Instagram Ouro / Laranja */}
          <div style={{
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(244, 162, 97, 0.18) 0%, rgba(19, 70, 51, 0.12) 100%)',
            border: '1.5px solid var(--color-orange-400)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-orange-500)',
            marginBottom: '1.4rem'
          }}>
            <InstagramIcon size={28} color="var(--color-orange-500)" />
          </div>

          <span className="badge badge-orange" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={12} />
            <span>{t.instagramSection.badge}</span>
          </span>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.75rem',
            color: 'var(--text-primary)',
            marginBottom: '0.8rem'
          }}>
            {t.instagramSection.title}
          </h3>

          <p style={{
            fontSize: '0.96rem',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.6,
            marginBottom: '1.8rem'
          }}>
            {t.instagramSection.subtitle}
          </p>

          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{
              padding: '0.75rem 1.8rem',
              borderColor: 'var(--color-orange-400)',
              color: 'var(--color-orange-600)',
              fontWeight: 700
            }}
          >
            <InstagramIcon size={17} color="var(--color-orange-500)" />
            <span>{t.instagramSection.followBtn}</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
