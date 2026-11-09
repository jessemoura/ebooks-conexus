import { BookChannelConfig } from '../types';

/**
 * Registro centralizado de canais comerciais, identificadores e formatos por obra.
 *
 * COMO ATIVAR UM LIVRO DO AMAZON KDP (GRADUALMENTE, UM POR UM):
 * 1. Preencha `asin`, `isbn` (quando Paperback) e `amazonUrl` (e `amazonUkUrl`, se houver).
 * 2. Se houver versão Kindle publicada, preencha também `kindleUrl` (e `kindleAsin` se diferente).
 * 3. Inclua `'paperback'` (e/ou `'kindle'`) em `availableFormats`.
 * 4. Para títulos que estavam preparados com `published: false`, altere para `published: true`
 *    (e adicione a capa oficial em `src/data/ebooks.ts`).
 *
 * COMO DESATIVAR A HOTMART DE UM TÍTULO NO FUTURO:
 * - Defina `hotmartEnabled: false` e remova `'pdf'` de `availableFormats`,
 *   sem precisar remover outros canais nem reconstruir páginas.
 *
 * IMPORTANTE: Nunca preencher URLs ou ASIN/ISBN fictícios. Campos vazios permanecem ocultos na UI.
 */
export const bookChannels: Record<string, BookChannelConfig> = {
  // =========================================================
  // COLEÇÃO: FINANÇAS & INVESTIMENTOS (Hotmart PDF ativos)
  // =========================================================
  'financas-do-zero': {
    language: 'pt',
    volume: 1,
    availableFormats: ['pdf', 'kindle'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    kindleUkUrl: 'https://www.amazon.co.uk/dp/B0HMD7F65Y',
    asin: '',
    kindleAsin: 'B0HMD7F65Y',
    isbn: ''
  },
  'orcamento-e-organizacao': {
    language: 'pt',
    volume: 2,
    availableFormats: ['pdf', 'kindle'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    kindleUkUrl: 'https://www.amazon.co.uk/dp/B0HMBYZKP9',
    asin: '',
    kindleAsin: 'B0HMBYZKP9',
    isbn: ''
  },
  'dividas-e-reserva': {
    language: 'pt',
    volume: 3,
    availableFormats: ['pdf', 'kindle'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    kindleUkUrl: 'https://www.amazon.co.uk/dp/B0H6JW92YL',
    asin: '',
    kindleAsin: 'B0H6JW92YL',
    isbn: ''
  },
  'primeiros-investimentos': {
    language: 'pt',
    volume: 4,
    availableFormats: ['pdf', 'kindle'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    kindleUkUrl: 'https://www.amazon.co.uk/dp/B0HNHF5C1J',
    asin: '',
    kindleAsin: 'B0HNHF5C1J',
    isbn: ''
  },
  'renda-fixa': {
    language: 'pt',
    volume: 5,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'fundos-e-imobiliario': {
    language: 'pt',
    volume: 6,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'acoes-crescimento-oportunidades': {
    language: 'pt',
    volume: 7,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'investimentos-internacionais': {
    language: 'pt',
    volume: 8,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'construcao-de-patrimonio': {
    language: 'pt',
    volume: 9,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'independencia-financeira': {
    language: 'pt',
    volume: 10,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },

  // =========================================================
  // COLEÇÃO: PARLANDO ITALIANO (Hotmart PDF ativos)
  // =========================================================
  'parlando-italiano-primi-passi': {
    language: 'pt',
    volume: 1,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'parlando-italiano-conversazione': {
    language: 'pt',
    volume: 2,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'parlando-italiano-grammatica': {
    language: 'pt',
    volume: 3,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'parlando-italiano-viaggio': {
    language: 'pt',
    volume: 4,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'parlando-italiano-italiano-nel-lavoro': {
    language: 'pt',
    volume: 5,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'parlando-italiano-italiano-nel-quotidiano': {
    language: 'pt',
    volume: 6,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },

  // =========================================================
  // COLEÇÃO: HABLANDO ESPAÑOL (Hotmart PDF ativos)
  // =========================================================
  'hablando-espanol-primeros-pasos': {
    language: 'pt',
    volume: 1,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'hablando-espanol-conversacion': {
    language: 'pt',
    volume: 2,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'hablando-espanol-gramatica': {
    language: 'pt',
    volume: 3,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'hablando-espanol-viaje': {
    language: 'pt',
    volume: 4,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'hablando-espanol-trabajo': {
    language: 'pt',
    volume: 5,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },
  'hablando-espanol-dia-a-dia': {
    language: 'pt',
    volume: 6,
    availableFormats: ['pdf'],
    hotmartEnabled: true,
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    asin: '',
    isbn: ''
  },

  // =========================================================
  // PRIMEIRO TÍTULO PREPARADO PARA AMAZON KDP (DESATIVADO)
  // Ativar somente após página pública Amazon/ASIN confirmados.
  // =========================================================
  'my-first-coloring-book-animals-adventures': {
    published: false,
    language: 'en',
    availableFormats: [], // Alterar para ['paperback'] quando URL/ASIN oficiais estiverem confirmados
    hotmartEnabled: false,
    hotmartCheckoutUrl: '',
    amazonUrl: '',
    amazonUkUrl: '',
    kindleUrl: '',
    kindleUkUrl: '',
    asin: '',
    isbn: ''
  }
};

