/**
 * Configuração Centralizada da Marca CONEXUS E-BOOKS
 * 
 * Todas as informações institucionais, WhatsApp, redes e links são configurados aqui.
 * Quando os números oficiais ou links forem disponibilizados, basta atualizar este arquivo.
 */

export const siteConfig = {
  brand: {
    name: 'CONEXUS E-BOOKS',
    shortName: 'CONEXUS',
    slogan: 'Conhecimento que conecta.',
    subdomain: 'ebooks.conexus.press',
    domainUrl: 'https://ebooks.conexus.press',
    mainDomainUrl: 'https://conexus.press',
    description: 'E-books práticos e cuidadosamente desenvolvidos para transformar conhecimento em aprendizado aplicável ao dia a dia.',
  },
  
  // WhatsApp Oficial Centralizado (Header CTA + Botão Flutuante + Página de Contato + CTAs)
  whatsapp: {
    number: '447341462757',
    displayNumber: '+44 7341 462757',
    baseUrl: 'https://wa.me/447341462757',
    defaultMessage: 'Olá! Gostaria de mais informações sobre os e-books e coleções da CONEXUS.',
    get directUrl() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    }
  },

  // Redes Sociais Oficiais
  social: {
    instagram: {
      handle: '@conexusebooks',
      url: 'https://www.instagram.com/conexusebooks/',
    },
  },

  // Informações de Contato Institucional (sem localização física inventada)
  contact: {
    email: 'contato@conexus.press', // Placeholder configurável
  },

  // Crédito de Desenvolvimento (Footer)
  agency: {
    name: 'CONEXUS DIGITAL MARKETING',
    url: 'https://conexus.press',
    creditText: 'Desenvolvido por',
  }
};
