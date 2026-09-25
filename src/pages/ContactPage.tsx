import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEO 
        title={t.contactPage.seoTitle} 
        description={t.contactPage.seoDesc}
      />

      <main style={{ paddingBottom: '6rem' }}>
        {/* Header de Contato */}
        <section style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          textAlign: 'center'
        }}>
          <div className="container" style={{ maxWidth: '780px' }}>
            <span className="badge badge-green" style={{ marginBottom: '1rem' }}>
              <Sparkles size={13} />
              <span>{t.contactPage.badge}</span>
            </span>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              {t.contactPage.title}
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65
            }}>
              {t.contactPage.subtitle}
            </p>
          </div>
        </section>

        {/* Conteúdo de Contato */}
        <div className="container" style={{ maxWidth: '980px', marginTop: '3.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem'
          }}>
            {/* Coluna 1: Canais Diretos (WhatsApp & E-mail) */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {t.contactPage.directChannels}
              </h2>

              {/* Cartão de WhatsApp em Destaque */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, var(--bg-card) 100%)',
                border: '1.5px solid #25D366',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                marginBottom: '1.8rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#25D366',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <WhatsAppIcon size={24} color="#ffffff" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {t.contactPage.whatsappCardTitle}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {t.contactPage.whatsappCardSubtitle}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.4rem' }}>
                  {t.contactPage.whatsappCardDesc}
                </p>

                <a
                  href={siteConfig.whatsapp.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    color: '#ffffff',
                    border: 'none',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)'
                  }}
                >
                  <WhatsAppIcon size={20} color="#ffffff" />
                  <span>{t.contactPage.whatsappCardBtn}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* E-mail Institucional */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.4rem',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(244, 162, 97, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-orange-500)',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.contactPage.emailCardTitle}</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>{siteConfig.contact.email}</div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Formulário de Mensagem */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {t.contactPage.formTitle}
              </h2>

              {submitted ? (
                <div style={{
                  background: 'rgba(37, 211, 102, 0.1)',
                  border: '1px solid #25D366',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={40} color="#25D366" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {t.contactPage.formSuccessTitle}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {t.contactPage.formSuccessDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      {t.contactPage.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      {t.contactPage.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      {t.contactPage.formSubject}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contactPage.formSubjectPlaceholder}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      {t.contactPage.formMessage}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-medium)',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.9rem', width: '100%', marginTop: '0.5rem' }}
                  >
                    <Send size={16} />
                    <span>{t.contactPage.formSubmit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
