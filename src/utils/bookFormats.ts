import { BookFormat, Ebook, Language } from '../types';

export interface ResolvedPdfChannel {
  available: boolean;
  url?: string;
}

export interface ResolvedAmazonChannel {
  available: boolean;
  primaryUrl?: string;
  usUrl?: string;
  ukUrl?: string;
  asin?: string;
  isbn?: string;
}

export interface ResolvedKindleChannel {
  available: boolean;
  primaryUrl?: string;
  usUrl?: string;
  ukUrl?: string;
  asin?: string;
}

export interface ResolvedBookChannels {
  pdf: ResolvedPdfChannel;
  paperback: ResolvedAmazonChannel;
  kindle: ResolvedKindleChannel;
}

/**
 * Garante que nenhum botão de compra seja exibido sem uma URL HTTP(S) real e válida.
 */
export const isValidPurchaseUrl = (url?: string): url is string => {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    return (parsed.protocol === 'https:' || parsed.protocol === 'http:') && Boolean(parsed.hostname);
  } catch {
    return false;
  }
};

const isFormatEnabled = (ebook: Ebook, format: BookFormat): boolean => {
  if (Array.isArray(ebook.availableFormats)) {
    return ebook.availableFormats.includes(format);
  }
  return true;
};

/**
 * Resolve os canais comerciais realmente disponíveis para um livro,
 * combinando ativação explícita do formato com validação estrita de URL.
 */
export const getBookChannels = (ebook: Ebook): ResolvedBookChannels => {
  const pdfUrl = isValidPurchaseUrl(ebook.hotmartCheckoutUrl)
    ? ebook.hotmartCheckoutUrl.trim()
    : undefined;

  const pdfAvailable =
    ebook.hotmartEnabled !== false &&
    isFormatEnabled(ebook, 'pdf') &&
    Boolean(pdfUrl);

  const amazonUsUrl = isValidPurchaseUrl(ebook.amazonUrl)
    ? ebook.amazonUrl.trim()
    : undefined;
  const amazonUkUrl = isValidPurchaseUrl(ebook.amazonUkUrl)
    ? ebook.amazonUkUrl.trim()
    : undefined;
  const paperbackPrimaryUrl = amazonUsUrl || amazonUkUrl;
  const paperbackAvailable =
    isFormatEnabled(ebook, 'paperback') && Boolean(paperbackPrimaryUrl);

  const kindleUsUrl = isValidPurchaseUrl(ebook.kindleUrl)
    ? ebook.kindleUrl.trim()
    : undefined;
  const kindleUkUrl = isValidPurchaseUrl(ebook.kindleUkUrl)
    ? ebook.kindleUkUrl.trim()
    : undefined;
  const kindlePrimaryUrl = kindleUsUrl || kindleUkUrl;
  const kindleAvailable =
    isFormatEnabled(ebook, 'kindle') && Boolean(kindlePrimaryUrl);

  return {
    pdf: {
      available: pdfAvailable,
      url: pdfAvailable ? pdfUrl : undefined
    },
    paperback: {
      available: paperbackAvailable,
      primaryUrl: paperbackAvailable ? paperbackPrimaryUrl : undefined,
      usUrl: paperbackAvailable ? amazonUsUrl : undefined,
      ukUrl: paperbackAvailable ? amazonUkUrl : undefined,
      asin: ebook.asin?.trim() || undefined,
      isbn: ebook.isbn?.trim() || undefined
    },
    kindle: {
      available: kindleAvailable,
      primaryUrl: kindleAvailable ? kindlePrimaryUrl : undefined,
      usUrl: kindleAvailable ? kindleUsUrl : undefined,
      ukUrl: kindleAvailable ? kindleUkUrl : undefined,
      asin: (ebook.kindleAsin || ebook.asin)?.trim() || undefined
    }
  };
};

/**
 * Retorna a lista ordenada de formatos efetivamente disponíveis e compráveis do livro.
 */
export const getAvailableFormats = (ebook: Ebook): BookFormat[] => {
  const channels = getBookChannels(ebook);
  const formats: BookFormat[] = [];

  if (channels.pdf.available) formats.push('pdf');
  if (channels.paperback.available) formats.push('paperback');
  if (channels.kindle.available) formats.push('kindle');

  return formats;
};

export const hasAnyPurchaseChannel = (ebook: Ebook): boolean => {
  return getAvailableFormats(ebook).length > 0;
};

export const getFormatBadgeLabel = (format: BookFormat): string => {
  switch (format) {
    case 'pdf':
      return 'PDF';
    case 'paperback':
      return 'Paperback';
    case 'kindle':
      return 'Kindle';
  }
};

/**
 * Exibe o idioma real da obra adaptado ao idioma da interface,
 * preservando compatibilidade caso um título legado não defina idioma próprio.
 */
export const getBookLanguageLabel = (
  bookLanguage: string | undefined,
  uiLanguage: Language
): string => {
  const code = (bookLanguage || uiLanguage).trim().toLowerCase();

  const labels: Record<string, Record<Language, string>> = {
    pt: { pt: 'Português', en: 'Portuguese', es: 'Portugués' },
    en: { pt: 'Inglês', en: 'English', es: 'Inglés' },
    es: { pt: 'Espanhol', en: 'Spanish', es: 'Español' },
    it: { pt: 'Italiano', en: 'Italian', es: 'Italiano' }
  };

  if (labels[code]) {
    return labels[code][uiLanguage];
  }

  return bookLanguage || labels[uiLanguage][uiLanguage];
};

