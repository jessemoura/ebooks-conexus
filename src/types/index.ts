export type Language = 'pt' | 'en' | 'es';
export type Theme = 'light' | 'dark';

export type BookFormat = 'pdf' | 'paperback' | 'kindle';

export type CategorySlug =
  | 'financas'
  | 'idiomas'
  | 'negocios'
  | 'desenvolvimento'
  | 'infantil';

export interface BookChannelConfig {
  published?: boolean;
  language?: Language | string;
  volume?: number | string;
  availableFormats?: BookFormat[];
  hotmartEnabled?: boolean;
  hotmartCheckoutUrl?: string;
  amazonUrl?: string;
  amazonUkUrl?: string;
  kindleUrl?: string;
  kindleUkUrl?: string;
  asin?: string;
  kindleAsin?: string;
  isbn?: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  volumesCount: number;
  category: CategorySlug;
  categoryLabel: string;
  accentColor?: string;
  coverImage?: string;
  featured?: boolean;
}

export interface Ebook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  collectionId?: string;
  collectionName?: string;
  volume?: number | string;
  category: CategorySlug;
  categoryLabel: string;
  keywords: string[];
  pages?: number;
  format: string; // "PDF" / "Paperback" (compatibilidade)
  availableFormats?: BookFormat[]; // Ex.: ['pdf'], ['pdf', 'paperback'], ['paperback', 'kindle']
  language?: Language | string; // Idioma real da obra ('pt' | 'en' | 'es' | string)
  coverImage?: string;
  featured?: boolean;
  published?: boolean; // Permite preparar títulos no catálogo sem exibir antes da confirmação pública
  hotmartCheckoutUrl?: string; // URL oficial Hotmart (PDF)
  hotmartEnabled?: boolean; // Permite desativar Hotmart sem apagar a URL
  amazonUrl?: string; // URL oficial Amazon.com (Paperback)
  amazonUkUrl?: string; // URL oficial Amazon.co.uk (Paperback)
  kindleUrl?: string; // URL oficial Amazon.com (Kindle)
  kindleUkUrl?: string; // URL oficial Amazon.co.uk (Kindle)
  asin?: string; // ASIN oficial na Amazon
  kindleAsin?: string; // ASIN específico Kindle, se distinto
  isbn?: string; // ISBN oficial (Paperback)
  releaseDate: string;
}

export interface CollectionBundle {
  id: string;
  slug: string;
  collectionId: string;
  title: string;
  subtitle: string;
  description: string;
  volumesCount: number;
  category: CategorySlug;
  categoryLabel: string;
  format: string; // "PDF"
  coverImage?: string;
  includedEbookIds: string[];
  featured?: boolean;
  hotmartCheckoutUrl?: string; // Configurado posteriormente
  releaseDate: string;
}

export interface BlogPostFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string; // Conteúdo estruturado H2/H3
  featuredImage: string; // 16:9
  category: string;
  readTime: string;
  publishDate: string;
  faqs: BlogPostFAQ[];
  relatedEbookId?: string;
  relatedPostSlugs?: string[];
  internalLinks?: { label: string; url: string }[];
}
