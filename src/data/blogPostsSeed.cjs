const fs = require('fs');
const path = require('path');

const posts = [
  // 1. Existing Post 1
  {
    slug: 'como-estruturar-carteira-investimentos-resiliente',
    featuredImage: '/assets/images/blog/carteira-investimentos-resiliente.webp',
    categoryPt: 'Finanças',
    categoryEn: 'Finance',
    categoryEs: 'Finanzas',
    readTimePt: '6 min de leitura',
    readTimeEn: '6 min read',
    readTimeEs: '6 min de lectura',
    publishDatePt: '10 de abril de 2026',
    publishDateEn: 'April 10, 2026',
    publishDateEs: '10 de abril de 2026',
    relatedEbookId: 'financas-do-zero',
    relatedPostSlugs: ['rebalanceamento-de-carteira-estrategias-avancadas', 'o-poder-dos-juros-compostos-construcao-patrimonio'],
    pt: {
      title: 'Como Estruturar uma Carteira de Investimentos Resiliente a Longo Prazo',
      seoTitle: 'Como Estruturar uma Carteira de Investimentos Resiliente | Blog CONEXUS',
      metaDescription: 'Aprenda os princípios fundamentais da diversificação e alocação estratégica de ativos para proteger e multiplicar seu capital com segurança.',
      excerpt: 'Descubra os princípios matemáticos e psicológicos que diferenciam investidores amadores dos profissionais na construção de portfólios duradouros.',
      content: `
        <h2>A Importância da Alocação Estratégica</h2>
        <p>Estudos clássicos de finanças quantitativas demonstram que mais de 90% da variabilidade dos retornos de uma carteira decorrem da <strong>alocação de ativos</strong>, e não da escolha individual de ações ou do momento exato de compra (timing).</p>
        
        <h3>1. Descorrelação como Escudo Patrimonial</h3>
        <p>Investir em ativos com comportamentos independentes ou inversos permite suavizar quedas bruscas de mercado. Combinar ativos de renda fixa pós-fixada, títulos atrelados à inflação e ações globais cria um ecossistema financeiro antifrágil.</p>
        
        <h3>2. O Fator Psicológico e a Disciplina de Rebalanceamento</h3>
        <p>O maior inimigo do patrimônio raramente é o mercado, mas a impulsividade emocional. Estabelecer regras claras de rebalanceamento periódico garante que você compre na baixa e realize lucros na alta de forma sistemática.</p>
      `,
      faqs: [
        { question: 'Com que frequência devo rebalancear minha carteira?', answer: 'Especialistas recomendam revisões semestrais ou anuais, ou sempre que uma classe de ativos desviar mais de 5% de sua meta percentual original.' },
        { question: 'Qual o papel dos e-books da CONEXUS nesse aprendizado?', answer: 'Nossos e-books trazem metodologias passo a passo sem jargões complexos, permitindo que você tome decisões embasadas com autonomia.' }
      ],
      internalLinks: [
        { label: 'Coleção Finanças & Investimentos', url: '/colecoes' },
        { label: 'Catálogo Completo de E-books', url: '/ebooks' }
      ]
    },
    en: {
      title: 'How to Build a Resilient Long-Term Investment Portfolio',
      seoTitle: 'How to Build a Resilient Investment Portfolio | CONEXUS Blog',
      metaDescription: 'Learn the core principles of strategic diversification and asset allocation to protect and grow your capital safely.',
      excerpt: 'Discover the mathematical and psychological principles that separate amateur investors from professionals in long-term wealth building.',
      content: `
        <h2>The Core Importance of Strategic Allocation</h2>
        <p>Classic quantitative finance research demonstrates that over 90% of a portfolio's return variability originates from <strong>asset allocation</strong>, rather than individual stock selection or market timing.</p>
        
        <h3>1. Uncorrelated Assets as a Wealth Shield</h3>
        <p>Investing in assets with independent or inverse market behaviors softens sharp drawdowns. Combining fixed income, inflation-protected securities, and global equities creates an antifragile financial foundation.</p>
        
        <h3>2. The Psychological Factor & Rebalancing Discipline</h3>
        <p>The biggest obstacle in wealth preservation is rarely the market, but emotional impulsivity. Clear periodic rebalancing rules systematically ensure buying low and taking gains high.</p>
      `,
      faqs: [
        { question: 'How often should I rebalance my portfolio?', answer: 'Experts recommend semi-annual or annual reviews, or whenever an asset class drifts by more than 5% from its original target percentage.' },
        { question: 'What is the role of CONEXUS ebooks in this learning path?', answer: 'Our ebooks provide step-by-step frameworks without convoluted jargon, empowering you to make autonomous, well-grounded financial decisions.' }
      ],
      internalLinks: [
        { label: 'Finanças & Investimentos Collection', url: '/colecoes' },
        { label: 'Full E-books Catalog', url: '/ebooks' }
      ]
    },
    es: {
      title: 'Cómo Estructurar una Cartera de Inversiones Resiliente a Largo Plazo',
      seoTitle: 'Cómo Estructurar una Cartera de Inversiones Resiliente | Blog CONEXUS',
      metaDescription: 'Aprenda los principios fundamentales de la diversificación estratégica y asignación de activos para proteger y multiplicar su patrimonio.',
      excerpt: 'Descubra los principios matemáticos y psicológicos que diferencian a los inversores aficionados de los profesionales en carteras duraderas.',
      content: `
        <h2>La Importancia de la Asignación Estratégica</h2>
        <p>Los estudios clásicos de finanzas cuantitativas demuestran que más del 90% de la variabilidad de los rendimientos de una cartera proviene de la <strong>asignación de activos</strong>, y no de la selección individual de valores o el momento de compra.</p>
        
        <h3>1. Descorrelación como Escudo Patrimonial</h3>
        <p>Invertir en activos con comportamientos independientes o inversos permite suavizar caídas bruscas. Combinar renta fija, títulos ligados a la inflación y renta variable global crea una base antifrágil.</p>
        
        <h3>2. El Factor Psicológico y la Disciplina de Rebalanceo</h3>
        <p>El mayor obstáculo rara vez es el mercado, sino la impulsividad emocional. Establecer reglas claras de rebalanceo periódico garantiza comprar en mínimos y tomar beneficios de forma sistemática.</p>
      `,
      faqs: [
        { question: '¿Con qué frecuencia debo rebalancear mi cartera?', answer: 'Los expertos recomiendan revisiones semestrales o anuales, o siempre que una clase de activo se desvíe más del 5% de su objetivo original.' },
        { question: '¿Cuál es el papel de los e-books de CONEXUS en este aprendizaje?', answer: 'Nuestros e-books proporcionan metodologías paso a paso sin jerga innecesaria, permitiéndole tomar decisiones con total autonomía.' }
      ],
      internalLinks: [
        { label: 'Colección Finanças & Investimentos', url: '/colecoes' },
        { label: 'Catálogo Completo de E-books', url: '/ebooks' }
      ]
    }
  },

  // 2. Existing Post 2
  {
    slug: 'superando-o-portunhol-guia-pratico',
    featuredImage: '/assets/images/blog/aprender-espanhol-autentico.webp',
    categoryPt: 'Idiomas',
    categoryEn: 'Languages',
    categoryEs: 'Idiomas',
    readTimePt: '5 min de leitura',
    readTimeEn: '5 min read',
    readTimeEs: '5 min de lectura',
    publishDatePt: '05 de abril de 2026',
    publishDateEn: 'April 05, 2026',
    publishDateEs: '05 de abril de 2026',
    relatedEbookId: 'hablando-espanol-primeros-pasos',
    relatedPostSlugs: ['falsos-cognatos-em-espanhol-principais-armadilhas', 'conversacao-em-espanhol-como-destravar-a-fala'],
    pt: {
      title: 'Superando o "Portunhol": Estratégias Reais para Dominar o Espanhol Autêntico',
      seoTitle: 'Superando o Portunhol: Dicas e Métodos para Fluência | Blog CONEXUS',
      metaDescription: 'Aprenda a eliminar os vícios do portunhol, dominar falsos cognatos e comunicar-se com clareza em contextos pessoais e profissionais.',
      excerpt: 'A proximidade entre português e espanhol é tanto uma aliada quanto uma armadilha. Veja como acelerar sua fluência com método estruturado.',
      content: `
        <h2>A Ilusão da Semelhança Linguística</h2>
        <p>Embora falantes de português compreendam grande parte do espanhol passivamente, a produção ativa sem preparo resulta no conhecido <em>portunhol</em>, repleto de falsos amigos e desvios estruturais que prejudicam reuniões executivas e apresentações.</p>
        
        <h3>Os Falsos Amigos Mais Críticos</h3>
        <p>Palavras como <em>embarazada</em> (grávida, não envergonhada), <em>exquisito</em> (delicioso, não estranho) e <em>propina</em> (gorjeta) são clássicos exemplos que exigem atenção redobrada em conversas corporativas e viagens.</p>
        
        <h3>Prática Ativa com Materiais Editoriais</h3>
        <p>A leitura imersiva com guias contextuais de pronúncia e exercícios práticos consolida as conexões neurais necessárias para a espontaneidade verbal.</p>
      `,
      faqs: [
        { question: 'Quanto tempo leva para transitar do portunhol à fluência real?', answer: 'Com dedicação diária de 20 a 30 minutos e materiais focados para lusófonos, nota-se grande clareza e segurança em menos de 90 dias.' },
        { question: 'Qual a principal diferença entre espanhol e portunhol?', answer: 'O portunhol é uma adaptação improvisada com vocabulário em português disfarçado com sotaque, enquanto o espanhol autêntico respeita fonemas, regências e tempos próprios.' }
      ],
      internalLinks: [
        { label: 'Coleção Hablando Español', url: '/colecoes' },
        { label: 'Acessar Catálogo de Idiomas', url: '/ebooks' }
      ]
    },
    en: {
      title: 'Mastering Authentic Spanish: Practical Strategies Beyond Surface Similarity',
      seoTitle: 'Overcoming Surface Spanish: Tips & Methods for Real Fluency | CONEXUS Blog',
      metaDescription: 'Eliminate false cognates, master grammatical nuance, and communicate with authority in international and professional settings.',
      excerpt: 'Language proximity is both an asset and a common trap. Learn how to accelerate your fluency through structured editorial methodology.',
      content: `
        <h2>The Illusion of Language Similarity</h2>
        <p>While passive comprehension can be misleadingly high, active unassisted production often results in unintended false friends that undermine professional dialogue and presentations.</p>
        
        <h3>Key Critical False Friends</h3>
        <p>Words like <em>embarazada</em> (pregnant, not embarrassed), <em>exquisito</em> (delicious, not weird), and <em>propina</em> (tip) require focused attention in travel and business.</p>
        
        <h3>Active Practice with Editorial Materials</h3>
        <p>Immersive reading coupled with pronunciation guides and applied context solidifies neural pathways for natural verbal spontaneity.</p>
      `,
      faqs: [
        { question: 'How long does it take to achieve genuine fluency?', answer: 'With 20 to 30 minutes of focused daily dedication using structured resources, noticeable confidence develops within 90 days.' },
        { question: 'What is the most common mistake for beginners?', answer: 'Assuming Portuguese rules apply directly to Spanish syntax, which produces noticeable communicative errors.' }
      ],
      internalLinks: [
        { label: 'Hablando Español Collection', url: '/colecoes' },
        { label: 'Browse Languages Catalog', url: '/ebooks' }
      ]
    },
    es: {
      title: 'Estrategias Prácticas para un Dominio Auténtico del Español',
      seoTitle: 'Estrategias para Dominar el Español: Fluidez y Precisión | Blog CONEXUS',
      metaDescription: 'Aprenda a eliminar falsos amigos y comunicarse con total claridad y autoridad en contextos profesionales y personales.',
      excerpt: 'La proximidad lingüística puede ser una gran aliada o una trampa sutil. Conozca cómo acelerar su fluidez con método estructurado.',
      content: `
        <h2>La Ilusión de la Semejanza Lingüística</h2>
        <p>Aunque la comprensión pasiva suele ser alta, la producción activa sin metodología da lugar a interferencias que restan profesionalidad en reuniones y negociaciones.</p>
        
        <h3>Falsos Amigos Críticos</h3>
        <p>Términos comunes requieren atención precisa para asegurar una comunicación transparente y de alto impacto internacional.</p>
        
        <h3>Práctica Activa con Materiales Editoriales</h3>
        <p>La lectura inmersiva combinada con guías contextuales de pronunciación afianza las conexiones para una expresión fluida y natural.</p>
      `,
      faqs: [
        { question: '¿Cuánto tiempo lleva alcanzar una fluidez auténtica?', answer: 'Con una dedicación diaria de 20 a 30 minutos y materiales diseñados metódicamente, se nota gran seguridad en menos de 90 días.' },
        { question: '¿Cómo evitar las interferencias del portugués?', answer: 'Estudiando con materiales comparativos específicos que resaltan las diferencias fonéticas y estructurales.' }
      ],
      internalLinks: [
        { label: 'Colección Hablando Español', url: '/colecoes' },
        { label: 'Catálogo de Idiomas', url: '/ebooks' }
      ]
    }
  },

  // 3. Existing Post 3
  {
    slug: 'o-metodo-para-aprender-italiano-do-zero',
    featuredImage: '/assets/images/blog/aprender-italiano-do-zero.webp',
    categoryPt: 'Idiomas',
    categoryEn: 'Languages',
    categoryEs: 'Idiomas',
    readTimePt: '7 min de leitura',
    readTimeEn: '7 min read',
    readTimeEs: '7 min de lectura',
    publishDatePt: '28 de março de 2026',
    publishDateEn: 'March 28, 2026',
    publishDateEs: '28 de marzo de 2026',
    relatedEbookId: 'parlando-italiano-primi-passi',
    relatedPostSlugs: ['pronuncia-e-fonetica-italiana-guia-pratico', 'conversacao-em-italiano-expressoes-para-falar-como-nativo'],
    pt: {
      title: 'O Método Estruturado para Aprender Italiano do Zero com Naturalidade',
      seoTitle: 'Como Aprender Italiano do Zero: Método Estruturado | CONEXUS',
      metaDescription: 'Descubra o passo a passo para dominar a língua italiana, desde a melodia da pronúncia até a construção de diálogos complexos.',
      excerpt: 'Aprender italiano vai além da gramática: é uma experiência cultural de ritmo, expressividade e enriquecimento intelectual.',
      content: `
        <h2>A Musicalidade e a Estrutura da Língua Italiana</h2>
        <p>O italiano é uma língua de sonoridade única, cuja compreensão intuitiva se desenvolve quando combinamos o estudo da raiz latina das palavras com a leitura estruturada e a imersão linguística.</p>
        
        <h3>Construção Vocabular por Frequência de Uso</h3>
        <p>Em vez de decorar tabelas verbais isoladas, priorize as estruturas comunicativas de maior recorrência no cotidiano italiano e na literatura contemporânea.</p>
      `,
      faqs: [
        { question: 'A coleção Parlando Italiano serve para iniciantes absolutos?', answer: 'Sim, o Volume 1 foi desenhado especificamente para quem nunca teve contato prévio com o idioma.' },
        { question: 'O italiano é difícil para quem fala português?', answer: 'Por compartilharem raízes latinas, a curva inicial de compreensão é extremamente rápida e prazerosa.' }
      ],
      internalLinks: [
        { label: 'Coleção Parlando Italiano', url: '/colecoes' },
        { label: 'Catálogo Geral de E-books', url: '/ebooks' }
      ]
    },
    en: {
      title: 'A Structured Method to Learn Italian from Scratch with Natural Flow',
      seoTitle: 'How to Learn Italian from Scratch: Structured Method | CONEXUS',
      metaDescription: 'Discover a step-by-step approach to mastering the Italian language, from melodic pronunciation to constructing sophisticated dialogues.',
      excerpt: 'Learning Italian transcends rote grammar: it is a cultural journey of rhythm, expressive precision, and intellectual enrichment.',
      content: `
        <h2>The Musicality and Structure of the Italian Language</h2>
        <p>Italian possesses a distinct sonic melody. Intuitive comprehension accelerates when combining root Latin etymology with structured reading and linguistic immersion.</p>
        
        <h3>Vocabulary Building by Real-World Frequency</h3>
        <p>Rather than memorizing isolated conjugations, prioritize communicative patterns with the highest recurrence in contemporary dialogue.</p>
      `,
      faqs: [
        { question: 'Is the Parlando Italiano collection suitable for complete beginners?', answer: 'Yes, Volume 1 is specifically engineered for readers with no prior exposure to the language.' },
        { question: 'How much time should I invest weekly?', answer: 'Around 3 to 4 sessions of 25 minutes weekly produce significant spoken results.' }
      ],
      internalLinks: [
        { label: 'Parlando Italiano Collection', url: '/colecoes' },
        { label: 'General E-books Catalog', url: '/ebooks' }
      ]
    },
    es: {
      title: 'El Método Estructurado para Aprender Italiano desde Cero con Naturalidad',
      seoTitle: 'Cómo Aprender Italiano desde Cero: Método Estructurado | CONEXUS',
      metaDescription: 'Descubra el paso a paso para dominar la lengua italiana, desde la melodía de la pronunciación hasta la construcción de diálogos complejos.',
      excerpt: 'Aprender italiano va más allá de la gramática: es una experiencia cultural de ritmo, expresividad y enriquecimiento intelectual.',
      content: `
        <h2>La Musicalidad y la Estructura de la Lengua Italiana</h2>
        <p>El italiano es una lengua de sonoridad única, cuya comprensión intuitiva se desarrolla combinando la etimología latina con la lectura estructurada y la inmersión lingüística.</p>
        
        <h3>Construcción de Vocabulario por Frecuencia de Uso</h3>
        <p>En lugar de memorizar tablas aisladas, priorice las estructuras comunicativas de mayor recurrencia en el diálogo contemporáneo.</p>
      `,
      faqs: [
        { question: '¿La colección Parlando Italiano es apta para principiantes absolutos?', answer: 'Sí, el Volumen 1 fue diseñado específicamente para personas sin contacto previo con el idioma.' },
        { question: '¿Es similar el italiano al español?', answer: 'Tienen una similitud léxica superior al 80%, facilitando enormemente el aprendizaje guiado.' }
      ],
      internalLinks: [
        { label: 'Colección Parlando Italiano', url: '/colecoes' },
        { label: 'Catálogo General de E-books', url: '/ebooks' }
      ]
    }
  }
];

module.exports = { posts };
