export type Language = 'pt' | 'en' | 'es';
export type Theme = 'light' | 'dark';

export type CategorySlug = 'financas' | 'idiomas' | 'negocios' | 'desenvolvimento';

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
  category: CategorySlug;
  categoryLabel: string;
  keywords: string[];
  pages?: number;
  format: string; // "PDF"
  coverImage?: string;
  featured?: boolean;
  hotmartCheckoutUrl?: string; // Configurado posteriormente
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
