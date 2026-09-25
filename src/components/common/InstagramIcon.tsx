import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const InstagramIcon: React.FC<{ size?: number; color?: string; className?: string }> = ({ 
  size = 20, 
  color = 'currentColor', 
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

/**
 * Botão Oficial Colorido do Instagram para o Header
 * Com o gradiente de marca característico: rosa/magenta + roxo + laranja/amarelo
 */
export const HeaderInstagramButton: React.FC<{ size?: number }> = ({ size = 36 }) => {
  return (
    <a
      href={siteConfig.social.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Siga o perfil oficial da CONEXUS E-BOOKS no Instagram"
      title="Siga @conexusebooks no Instagram"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '10px',
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
        boxShadow: '0 3px 10px rgba(214, 36, 159, 0.35)',
        flexShrink: 0
      }}
      className="header-instagram-btn"
    >
      <InstagramIcon size={Math.round(size * 0.58)} color="#ffffff" />
    </a>
  );
};
