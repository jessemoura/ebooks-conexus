import React from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { Sparkles, Award, Target, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useApp();

  return (
    <>
      <SEO 
        title={t.aboutPage.seoTitle} 
        description={t.aboutPage.seoDesc}
      />

      <main style={{ paddingBottom: '6rem' }}>
        {/* Header Institucional */}
        <section style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          paddingTop: '5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <span className="badge badge-green" style={{ marginBottom: '1rem' }}>
              <Sparkles size={13} />
              <span>{t.aboutPage.badge}</span>
            </span>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              marginBottom: '1.2rem',
              color: 'var(--text-primary)'
            }}>
              {t.aboutPage.title}
            </h1>

            <p style={{
              fontSize: '1.2rem',
              color: 'var(--color-orange-500)',
              fontWeight: 600,
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-serif)'
            }}>
              "{siteConfig.brand.slogan}"
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7
            }}>
              {t.aboutPage.intro}
            </p>
          </div>
        </section>

        {/* Conteúdo Institucional */}
        <div className="container" style={{ maxWidth: '900px', marginTop: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Bloco 1: Nossa Missão & Propósito */}
            <section style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.8rem 2.2rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                <Target size={24} color="var(--color-orange-500)" />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--text-primary)' }}>
                  {t.aboutPage.missionTitle}
                </h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                {t.aboutPage.missionP1}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.75 }}>
                {t.aboutPage.missionP2}
              </p>
            </section>

            {/* Bloco 2: O Padrão de Qualidade CONEXUS (Alto Contraste Garantido) */}
            <section style={{
              background: 'linear-gradient(145deg, #0a271c 0%, #134633 50%, #0e3526 100%)',
              color: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2.4rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid rgba(244, 162, 97, 0.35)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.8rem' }}>
                <Award size={26} color="#f4a261" />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#ffffff' }}>
                  {t.aboutPage.qualityTitle}
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} color="#f4a261" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.08rem', marginBottom: '0.4rem', fontWeight: 700 }}>
                      {t.aboutPage.q1Title}
                    </h4>
                    <p style={{ color: '#cbdcd3', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      {t.aboutPage.q1Desc}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} color="#f4a261" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.08rem', marginBottom: '0.4rem', fontWeight: 700 }}>
                      {t.aboutPage.q2Title}
                    </h4>
                    <p style={{ color: '#cbdcd3', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      {t.aboutPage.q2Desc}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <CheckCircle2 size={22} color="#f4a261" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '1.08rem', marginBottom: '0.4rem', fontWeight: 700 }}>
                      {t.aboutPage.q3Title}
                    </h4>
                    <p style={{ color: '#cbdcd3', fontSize: '0.92rem', lineHeight: 1.65 }}>
                      {t.aboutPage.q3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
