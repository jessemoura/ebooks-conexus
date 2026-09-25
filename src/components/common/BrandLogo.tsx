import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  className?: string;
  height?: number;
}

/**
 * Componente do Logo Oficial CONEXUS E-BOOKS
 * Utiliza o arquivo PNG oficial com transparência: conexus-ebooks-logo-oficial.png
 * Aplicado de forma limpa e nativa tanto no Header (Light/Dark) quanto no Rodapé.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  height = 54
}) => {
  return (
    <Link 
      to="/" 
      className={`brand-logo-link ${className}`} 
      aria-label="CONEXUS E-BOOKS — Conhecimento que conecta"
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        textDecoration: 'none',
        background: 'transparent',
        border: 'none',
        padding: 0
      }}
    >
      <img
        src="/assets/logos/conexus-ebooks-logo-oficial.png"
        alt="CONEXUS E-BOOKS — Conhecimento que conecta"
        style={{
          display: 'block',
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          background: 'transparent',
          border: 'none',
          boxShadow: 'none'
        }}
      />
    </Link>
  );
};
