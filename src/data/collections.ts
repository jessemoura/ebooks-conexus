import { Collection, Language } from '../types';

export const collectionsData: Record<Language, Collection[]> = {
  pt: [
    {
      id: 'financas-investimentos',
      slug: 'financas-investimentos',
      title: 'Finanças & Investimentos',
      subtitle: 'Da Mentalidade Estratégica à Construção de Patrimônio',
      description: 'Uma série abrangente de 10 volumes projetada para transformar sua compreensão sobre capital, gestão de riscos, renda passiva e inteligência financeira de longo prazo.',
      volumesCount: 10,
      category: 'financas',
      categoryLabel: 'Finanças',
      accentColor: '#D4AF37',
      featured: true
    },
    {
      id: 'parlando-italiano',
      slug: 'parlando-italiano',
      title: 'Parlando Italiano',
      subtitle: 'Domínio do Idioma com Fluência e Cultura',
      description: 'Coleção editorial em 6 volumes focada na aquisição estruturada do idioma italiano — da pronúncia refinada à comunicação profissional e nuances da rica cultura italiana.',
      volumesCount: 6,
      category: 'idiomas',
      categoryLabel: 'Idiomas',
      accentColor: '#008C45',
      featured: true
    },
    {
      id: 'hablando-espanol',
      slug: 'hablando-espanol',
      title: 'Hablando Español',
      subtitle: 'Comunicação Global, Negócios e Vocabulário Prático',
      description: 'Série completa em 6 volumes desenhada para acelerar sua fluência no espanhol para viagens, ambientes corporativos e diálogos internacionais de alto impacto.',
      volumesCount: 6,
      category: 'idiomas',
      categoryLabel: 'Idiomas',
      accentColor: '#E63946',
      featured: true
    }
  ],
  en: [
    {
      id: 'financas-investimentos',
      slug: 'financas-investimentos',
      title: 'Finanças & Investimentos',
      subtitle: 'From Strategic Mindset to Wealth Building',
      description: 'A comprehensive 10-volume series designed to transform your understanding of capital, risk management, passive income, and long-term financial intelligence.',
      volumesCount: 10,
      category: 'financas',
      categoryLabel: 'Finance',
      accentColor: '#D4AF37',
      featured: true
    },
    {
      id: 'parlando-italiano',
      slug: 'parlando-italiano',
      title: 'Parlando Italiano',
      subtitle: 'Mastering the Language with Fluency and Culture',
      description: 'A 6-volume editorial series focused on the structured acquisition of Italian — from refined pronunciation to professional communication and nuances of Italian culture.',
      volumesCount: 6,
      category: 'idiomas',
      categoryLabel: 'Languages',
      accentColor: '#008C45',
      featured: true
    },
    {
      id: 'hablando-espanol',
      slug: 'hablando-espanol',
      title: 'Hablando Español',
      subtitle: 'Global Communication, Business and Practical Vocabulary',
      description: 'A complete 6-volume series crafted to accelerate your Spanish fluency for travel, corporate environments, and high-impact international dialogue.',
      volumesCount: 6,
      category: 'idiomas',
      categoryLabel: 'Languages',
      accentColor: '#E63946',
      featured: true
    }
  ],
  es: [
    {
      id: 'financas-investimentos',
      slug: 'financas-investimentos',
      title: 'Finanças & Investimentos',
      subtitle: 'De la Mentalidad Estratégica a la Construcción de Patrimonio',
      description: 'Una serie integral de 10 volúmenes diseñada para transformar su comprensión del capital, gestión de riesgos, ingresos pasivos e inteligencia financiera a largo plazo.',
      volumesCount: 10,
      category: 'financas',
      categoryLabel: 'Finanzas',
      accentColor: '#D4AF37',
      featured: true
    },
    {
      id: 'parlando-italiano',
      slug: 'parlando-italiano',
      title: 'Parlando Italiano',
      subtitle: 'Dominio del Idioma con Fluidez y Cultura',
      description: 'Colección editorial en 6 volúmenes enfocada en la adquisición estructurada del italiano — desde la pronunciación refinada hasta la comunicación profesional y matices culturales.',
      volumesCount: 6,
      category: 'idiomas',
      categoryLabel: 'Idiomas',
      accentColor: '#008C45',
      featured: true
    },
    {
      id: 'hablando-espanol',
      slug: 'hablando-espanol',
      title: 'Hablando Español',
      subtitle: 'Comunicación Global, Negocios y Vocabulario Práctico',
      description: 'Serie completa en 6 volúmenes diseñada para acelerar su fluidez en español para viajes, entornos corporativos y diálogos internacionales de alto impacto.',
      volumesCount: 6,
      category: 'idiomas',
      categoryLabel: 'Idiomas',
      accentColor: '#E63946',
      featured: true
    }
  ]
};

export const getCollections = (lang: Language = 'pt'): Collection[] => {
  return collectionsData[lang] || collectionsData.pt;
};

export const initialCollections = collectionsData.pt;
