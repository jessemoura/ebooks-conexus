import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Compass, Smartphone, RefreshCw, Sparkles } from 'lucide-react';

export const WhyConexus: React.FC = () => {
  const { t } = useApp();

  const pillars = [
    {
      icon: <ShieldCheck size={26} color="#eac66f" />,
      title: t.whyConexus.p1Title,
      desc: t.whyConexus.p1Desc
    },
    {
      icon: <Compass size={26} color="#f4a261" />,
      title: t.whyConexus.p2Title,
      desc: t.whyConexus.p2Desc
    },
    {
      icon: <Smartphone size={26} color="#eac66f" />,
      title: t.whyConexus.p3Title,
      desc: t.whyConexus.p3Desc
    },
    {
      icon: <RefreshCw size={26} color="#f4a261" />,
      title: t.whyConexus.p4Title,
      desc: t.whyConexus.p4Desc
    }
  ];

  return (
    <section className="section-py" style={{
      background: 'linear-gradient(145deg, #0a271c 0%, #0e3526 50%, #061811 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Luz e gradiente de fundo */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '10%',
        width: '500px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(231, 111, 81, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Cabeçalho da Seção */}
        <div className="section-header" style={{ color: '#ffffff' }}>
          <span className="badge badge-orange" style={{ background: 'rgba(231, 111, 81, 0.2)', color: '#f4a261', border: '1px solid rgba(231, 111, 81, 0.4)' }}>
            <Sparkles size={13} />
            <span>{t.whyConexus.badge}</span>
          </span>
          <h2 style={{ color: '#ffffff' }}>{t.whyConexus.title}</h2>
          <p style={{ color: '#cbdcd3' }}>{t.whyConexus.subtitle}</p>
        </div>

        {/* Grid de 4 Pilares */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {pillars.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.2rem 1.8rem',
                transition: 'all var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-orange-400)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(231, 111, 81, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.4rem'
              }}>
                {item.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                color: '#ffffff',
                fontSize: '1.2rem',
                marginBottom: '0.7rem',
                fontWeight: 700
              }}>
                {item.title}
              </h3>

              <p style={{
                color: '#cbdcd3',
                fontSize: '0.92rem',
                lineHeight: 1.65
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
