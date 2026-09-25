import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, CheckCircle, Send, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { t } = useApp();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-py" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={13} />
            {t.newsletter.badge}
          </span>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.1rem',
            marginBottom: '0.8rem',
            color: 'var(--text-primary)'
          }}>
            {t.newsletter.title}
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            {t.newsletter.subtitle}
          </p>

          {submitted ? (
            <div style={{
              background: 'rgba(37, 211, 102, 0.12)',
              border: '1px solid #25D366',
              borderRadius: 'var(--radius-md)',
              padding: '1.2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              color: '#128C7E',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}>
              <CheckCircle size={20} />
              <span>{t.newsletter.successMsg}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '0.8rem',
              maxWidth: '540px',
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1 1 280px', position: 'relative' }}>
                <Mail size={18} style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)'
                }} />
                <input
                  type="email"
                  required
                  placeholder={t.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem 0.85rem 2.8rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-medium)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '0.95rem',
                    transition: 'border-color var(--transition-fast)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-gold-500)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 1.8rem',
                  flex: '0 0 auto'
                }}
              >
                <span>{t.newsletter.btn}</span>
                <Send size={15} />
              </button>
            </form>
          )}

          <p style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            marginTop: '1rem'
          }}>
            {t.newsletter.privacyNote}
          </p>
        </div>
      </div>
    </section>
  );
};
