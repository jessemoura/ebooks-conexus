import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { useApp } from '../../context/AppContext';

/**
 * Componente Oficial de Crédito de Desenvolvimento: CONEXUS DIGITAL MARKETING
 * Renderiza "Desenvolvido por" / "Developed by" / "Desarrollado por" + o arquivo de imagem oficial da agência.
 * Sem texto digitado duplicado. Clicável para https://conexus.press.
 */
export const AgencyLogo: React.FC = () => {
  const { t } = useApp();

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      flexWrap: 'wrap'
    }}>
      <span style={{
        fontSize: '0.82rem',
        color: '#8ea89c',
        fontWeight: 500,
        letterSpacing: '0.02em'
      }}>
        {t.footer.developedBy}
      </span>
      
      {/* Arquivo Oficial do Logo CONEXUS DIGITAL MARKETING */}
      <a 
        href={siteConfig.agency.url} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          textDecoration: 'none',
          transition: 'opacity var(--transition-fast), transform var(--transition-fast)'
        }}
        className="agency-credit-link"
        title="CONEXUS DIGITAL MARKETING — https://conexus.press"
      >
        <img
          src="/assets/logos/conexus-digital-marketing.png"
          alt="CONEXUS DIGITAL MARKETING"
          width="180"
          height="38"
          style={{
            display: 'block',
            height: '32px',
            width: 'auto',
            maxWidth: '190px',
            objectFit: 'contain'
          }}
        />
      </a>
    </div>
  );
};
