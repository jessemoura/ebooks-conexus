import React from 'react';

interface FlagIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Bandeira do Brasil 🇧🇷 (SVG Vetorial de Alta Resolução)
 */
export const BrazilFlag: React.FC<FlagIconProps> = ({ size = 20, className, style }) => {
  const width = size;
  const height = Math.round(size * 0.7);

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 720 504" 
      className={className}
      style={{ 
        borderRadius: '2px', 
        verticalAlign: 'middle', 
        display: 'inline-block',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        ...style 
      }}
      aria-hidden="true"
    >
      <rect width="720" height="504" fill="#009b3a" />
      <polygon points="360,40 680,252 360,464 40,252" fill="#fedf00" />
      <circle cx="360" cy="252" r="126" fill="#002776" />
      <path d="M 234 252 A 126 126 0 0 0 486 252 A 136 136 0 0 1 234 252" fill="#ffffff" />
    </svg>
  );
};

/**
 * Bandeira do Reino Unido 🇬🇧 (SVG Vetorial de Alta Resolução)
 */
export const UKFlag: React.FC<FlagIconProps> = ({ size = 20, className, style }) => {
  const width = size;
  const height = Math.round(size * 0.7);

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 60 30" 
      className={className}
      style={{ 
        borderRadius: '2px', 
        verticalAlign: 'middle', 
        display: 'inline-block',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        ...style 
      }}
      aria-hidden="true"
    >
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
};

/**
 * Bandeira da Espanha 🇪🇸 (SVG Vetorial de Alta Resolução)
 */
export const SpainFlag: React.FC<FlagIconProps> = ({ size = 20, className, style }) => {
  const width = size;
  const height = Math.round(size * 0.7);

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 750 500" 
      className={className}
      style={{ 
        borderRadius: '2px', 
        verticalAlign: 'middle', 
        display: 'inline-block',
        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
        ...style 
      }}
      aria-hidden="true"
    >
      <rect width="750" height="500" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
      {/* Brasão Simplificado e Reconhecível */}
      <circle cx="210" cy="250" r="45" fill="#AA151B" />
      <rect x="200" y="225" width="20" height="50" fill="#F1BF00" />
    </svg>
  );
};
