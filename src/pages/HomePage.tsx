import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCollections } from '../components/home/FeaturedCollections';
import { FeaturedEbooks } from '../components/home/FeaturedEbooks';
import { WhyConexus } from '../components/home/WhyConexus';
import { RecentBlog } from '../components/home/RecentBlog';
import { CatalogCta } from '../components/home/CatalogCta';
import { InstagramSection } from '../components/home/InstagramSection';
import { CompactFaqSection } from '../components/home/CompactFaqSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { SEO } from '../components/common/SEO';
import { siteConfig } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export const HomePage: React.FC = () => {
  const { t } = useApp();

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': siteConfig.brand.name,
    'url': siteConfig.brand.domainUrl,
    'description': siteConfig.brand.description,
    'publisher': {
      '@type': 'Organization',
      'name': siteConfig.brand.name,
      'url': siteConfig.brand.domainUrl,
      'logo': `${siteConfig.brand.domainUrl}/favicon.svg`
    }
  };

  return (
    <>
      <SEO 
        title={t.nav.home} 
        schema={websiteSchema} 
      />

      <main>
        {/* 1: Hero Fotográfico Premium */}
        <HeroSection />

        {/* 2: Coleções em destaque */}
        <FeaturedCollections />

        {/* 3: E-books em destaque */}
        <FeaturedEbooks />

        {/* 4: Por que CONEXUS E-BOOKS */}
        <WhyConexus />

        {/* 5: Conteúdos recentes do Blog */}
        <RecentBlog />

        {/* 6: CTA para conhecer o catálogo */}
        <CatalogCta />

        {/* 7: Bloco Instagram @conexusebooks */}
        <InstagramSection />

        {/* 8: FAQ compacto */}
        <CompactFaqSection />

        {/* 9: Newsletter */}
        <NewsletterSection />
      </main>
    </>
  );
};
