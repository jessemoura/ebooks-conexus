import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';

export const CompactFaqSection: React.FC = () => {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    question: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.question) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-py" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <span className="badge badge-green">
            <HelpCircle size={13} />
            <span>{t.faqSection.badge}</span>
          </span>
          <h2>{t.faqSection.title}</h2>
          <p>{t.faqSection.subtitle}</p>
        </div>

        {/* Acordeão com as 5 Perguntas Oficiais Traduzidas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '3.5rem' }}>
          {t.faqSection.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: isOpen ? '1.5px solid var(--border-green)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.2rem 1.5rem',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    color: 'var(--text-primary)',
                    gap: '1rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s',
                      color: isOpen ? 'var(--color-orange-500)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.3rem 1.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.68,
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1rem'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloco: "Não encontrou a resposta que procurava?" */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-orange)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(231, 111, 81, 0.12)',
            color: 'var(--color-orange-500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.2rem auto'
          }}>
            <MessageSquare size={24} />
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem'
          }}>
            {t.faqSection.notFoundTitle}
          </h3>

          <p style={{
            fontSize: '0.98rem',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 1.8rem auto',
            lineHeight: 1.6
          }}>
            {t.faqSection.notFoundSubtitle}
          </p>

          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              <Sparkles size={16} />
              <span>{t.faqSection.sendQuestionBtn}</span>
            </button>
          ) : (
            <div style={{
              maxWidth: '560px',
              margin: '2rem auto 0 auto',
              textAlign: 'left',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              animation: 'fadeIn 0.25s ease-out'
            }}>
              {submitted ? (
                <div style={{
                  background: 'rgba(19, 70, 51, 0.1)',
                  border: '1px solid var(--border-green)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  textAlign: 'center',
                  color: 'var(--color-green-700)'
                }}>
                  <CheckCircle2 size={32} color="var(--color-green-600)" style={{ margin: '0 auto 0.6rem auto' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    {t.faqSection.successTitle}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {t.faqSection.successSubtitle}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                      {t.faqSection.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
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
                      {t.faqSection.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
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
                      {t.faqSection.formQuestion}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
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
                    style={{ padding: '0.8rem', width: '100%' }}
                  >
                    <span>{t.faqSection.formSubmit}</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
