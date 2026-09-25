import React from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { Shield } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useApp();

  return (
    <>
      <SEO 
        title={t.privacyPage.seoTitle} 
        description={t.privacyPage.seoDesc}
      />

      <main style={{ paddingBottom: '6rem' }}>
        <section style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <span className="badge badge-green" style={{ marginBottom: '1rem' }}>
              <Shield size={13} />
              <span>{t.privacyPage.badge}</span>
            </span>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              {t.privacyPage.title}
            </h1>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)'
            }}>
              {t.privacyPage.lastUpdated} &bull; {siteConfig.brand.subdomain}
            </p>
          </div>
        </section>

        <div className="container" style={{ maxWidth: '840px', marginTop: '3.5rem' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2.4rem',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t.privacyPage.s1Title}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>{siteConfig.brand.name}</strong> {t.privacyPage.s1P1}
            </p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t.privacyPage.s2Title}
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              {t.privacyPage.s2P1}
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                {t.privacyPage.s2Li1}
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                {t.privacyPage.s2Li2}
              </li>
              <li>
                {t.privacyPage.s2Li3}
              </li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t.privacyPage.s3Title}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              {t.privacyPage.s3P1}
            </p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t.privacyPage.s4Title}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              {t.privacyPage.s4P1}
            </p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {t.privacyPage.s5Title}
            </h2>
            <p>
              {t.privacyPage.s5P1} (<strong>{siteConfig.contact.email}</strong>)
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
