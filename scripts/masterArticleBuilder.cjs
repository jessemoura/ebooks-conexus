const fs = require('fs');
const path = require('path');

// Helper to count words accurately
function getWordCount(text) {
  if (!text) return 0;
  const clean = text.replace(/<[^>]+>/g, ' ').replace(/[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]/g, ' ').replace(/\s+/g, ' ').trim();
  return clean ? clean.split(/\s+/).length : 0;
}

// Master definition of 30 topics
const topics = [
  // 1. Carteira Resiliente
  {
    id: 'como-estruturar-carteira-investimentos-resiliente',
    slug: 'como-estruturar-carteira-investimentos-resiliente',
    featuredImage: '/assets/images/blog/carteira-investimentos-resiliente.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '10 de abril de 2026', publishDateEn: 'April 10, 2026', publishDateEs: '10 de abril de 2026',
    relatedEbookId: 'financas-do-zero',
    relatedPostSlugs: ['rebalanceamento-de-carteira-estrategias-avancadas', 'o-poder-dos-juros-compostos-construcao-patrimonio'],
    topicKey: 'asset_allocation'
  },
  // 2. Orçamento Pessoal
  {
    id: 'planejamento-orcamentario-pessoal-inteligente',
    slug: 'planejamento-orcamentario-pessoal-inteligente',
    featuredImage: '/assets/images/blog/planejamento-orcamentario-pessoal-inteligente.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '24 de março de 2026', publishDateEn: 'March 24, 2026', publishDateEs: '24 de marzo de 2026',
    relatedEbookId: 'orcamento-e-organizacao',
    relatedPostSlugs: ['como-sair-das-dividas-metodo-estrategico', 'reserva-de-emergencia-guia-definitivo'],
    topicKey: 'smart_budgeting'
  },
  // 3. Reserva de Emergência
  {
    id: 'reserva-de-emergencia-guia-definitivo',
    slug: 'reserva-de-emergencia-guia-definitivo',
    featuredImage: '/assets/images/blog/reserva-de-emergencia-guia-definitivo.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '20 de março de 2026', publishDateEn: 'March 20, 2026', publishDateEs: '20 de marzo de 2026',
    relatedEbookId: 'dividas-e-reserva',
    relatedPostSlugs: ['como-sair-das-dividas-metodo-estrategico', 'guia-completo-renda-fixa-tesouro-cdb'],
    topicKey: 'emergency_fund'
  },
  // 4. Sair das Dívidas
  {
    id: 'como-sair-das-dividas-metodo-estrategico',
    slug: 'como-sair-das-dividas-metodo-estrategico',
    featuredImage: '/assets/images/blog/como-sair-das-dividas-metodo-estrategico.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '16 de março de 2026', publishDateEn: 'March 16, 2026', publishDateEs: '16 de marzo de 2026',
    relatedEbookId: 'dividas-e-reserva',
    relatedPostSlugs: ['planejamento-orcamentario-pessoal-inteligente', 'reserva-de-emergencia-guia-definitivo'],
    topicKey: 'debt_elimination'
  },
  // 5. Primeiros Investimentos
  {
    id: 'do-zero-aos-primeiros-investimentos',
    slug: 'do-zero-aos-primeiros-investimentos',
    featuredImage: '/assets/images/blog/do-zero-aos-primeiros-investimentos.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '12 de março de 2026', publishDateEn: 'March 12, 2026', publishDateEs: '12 de marzo de 2026',
    relatedEbookId: 'primeiros-investimentos',
    relatedPostSlugs: ['guia-completo-renda-fixa-tesouro-cdb', 'como-estruturar-carteira-investimentos-resiliente'],
    topicKey: 'first_investments'
  },
  // 6. Renda Fixa
  {
    id: 'guia-completo-renda-fixa-tesouro-cdb',
    slug: 'guia-completo-renda-fixa-tesouro-cdb',
    featuredImage: '/assets/images/blog/guia-completo-renda-fixa-tesouro-cdb.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '13 min de leitura', readTimeEn: '13 min read', readTimeEs: '13 min de lectura',
    publishDatePt: '08 de março de 2026', publishDateEn: 'March 08, 2026', publishDateEs: '08 de marzo de 2026',
    relatedEbookId: 'renda-fixa',
    relatedPostSlugs: ['reserva-de-emergencia-guia-definitivo', 'o-poder-dos-juros-compostos-construcao-patrimonio'],
    topicKey: 'fixed_income'
  },
  // 7. Fundos Imobiliários
  {
    id: 'como-investir-fundos-imobiliarios-fiis',
    slug: 'como-investir-fundos-imobiliarios-fiis',
    featuredImage: '/assets/images/blog/como-investir-fundos-imobiliarios-fiis.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '04 de março de 2026', publishDateEn: 'March 04, 2026', publishDateEs: '04 de marzo de 2026',
    relatedEbookId: 'fundos-e-imobiliario',
    relatedPostSlugs: ['dividendos-e-renda-passiva-guia-pratico', 'analise-fundamentalista-de-acoes-para-iniciantes'],
    topicKey: 'real_estate_funds'
  },
  // 8. Análise Fundamentalista de Ações
  {
    id: 'analise-fundamentalista-de-acoes-para-iniciantes',
    slug: 'analise-fundamentalista-de-acoes-para-iniciantes',
    featuredImage: '/assets/images/blog/analise-fundamentalista-de-acoes-para-iniciantes.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '13 min de leitura', readTimeEn: '13 min read', readTimeEs: '13 min de lectura',
    publishDatePt: '28 de fevereiro de 2026', publishDateEn: 'February 28, 2026', publishDateEs: '28 de febrero de 2026',
    relatedEbookId: 'acoes-crescimento-oportunidades',
    relatedPostSlugs: ['dividendos-e-renda-passiva-guia-pratico', 'investimentos-internacionais-como-dolarizar-patrimonio'],
    topicKey: 'fundamental_analysis'
  },
  // 9. Dividendos e Renda Passiva
  {
    id: 'dividendos-e-renda-passiva-guia-pratico',
    slug: 'dividendos-e-renda-passiva-guia-pratico',
    featuredImage: '/assets/images/blog/dividendos-e-renda-passiva-guia-pratico.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '24 de fevereiro de 2026', publishDateEn: 'February 24, 2026', publishDateEs: '24 de febrero de 2026',
    relatedEbookId: 'acoes-crescimento-oportunidades',
    relatedPostSlugs: ['como-investir-fundos-imobiliarios-fiis', 'o-poder-dos-juros-compostos-construcao-patrimonio'],
    topicKey: 'dividend_growth'
  },
  // 10. Investimentos Internacionais
  {
    id: 'investimentos-internacionais-como-dolarizar-patrimonio',
    slug: 'investimentos-internacionais-como-dolarizar-patrimonio',
    featuredImage: '/assets/images/blog/investimentos-internacionais-como-dolarizar-patrimonio.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '20 de fevereiro de 2026', publishDateEn: 'February 20, 2026', publishDateEs: '20 de febrero de 2026',
    relatedEbookId: 'investimentos-internacionais',
    relatedPostSlugs: ['como-estruturar-carteira-investimentos-resiliente', 'rebalanceamento-de-carteira-estrategias-avancadas'],
    topicKey: 'international_investing'
  },
  // 11. Juros Compostos
  {
    id: 'o-poder-dos-juros-compostos-construcao-patrimonio',
    slug: 'o-poder-dos-juros-compostos-construcao-patrimonio',
    featuredImage: '/assets/images/blog/o-poder-dos-juros-compostos-construcao-patrimonio.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '16 de fevereiro de 2026', publishDateEn: 'February 16, 2026', publishDateEs: '16 de febrero de 2026',
    relatedEbookId: 'construcao-de-patrimonio',
    relatedPostSlugs: ['como-estruturar-carteira-investimentos-resiliente', 'planejamento-para-independencia-financeira-regra-dos-4'],
    topicKey: 'compound_interest'
  },
  // 12. Rebalanceamento Avançado
  {
    id: 'rebalanceamento-de-carteira-estrategias-avancadas',
    slug: 'rebalanceamento-de-carteira-estrategias-avancadas',
    featuredImage: '/assets/images/blog/rebalanceamento-de-carteira-estrategias-avancadas.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '12 de fevereiro de 2026', publishDateEn: 'February 12, 2026', publishDateEs: '12 de febrero de 2026',
    relatedEbookId: 'construcao-de-patrimonio',
    relatedPostSlugs: ['como-estruturar-carteira-investimentos-resiliente', 'investimentos-internacionais-como-dolarizar-patrimonio'],
    topicKey: 'advanced_rebalancing'
  },
  // 13. Independência Financeira e Regra dos 4%
  {
    id: 'planejamento-para-independencia-financeira-regra-dos-4',
    slug: 'planejamento-para-independencia-financeira-regra-dos-4',
    featuredImage: '/assets/images/blog/planejamento-para-independencia-financeira-regra-dos-4.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '13 min de leitura', readTimeEn: '13 min read', readTimeEs: '13 min de lectura',
    publishDatePt: '08 de fevereiro de 2026', publishDateEn: 'February 08, 2026', publishDateEs: '08 de febrero de 2026',
    relatedEbookId: 'independencia-financeira',
    relatedPostSlugs: ['o-poder-dos-juros-compostos-construcao-patrimonio', 'dividendos-e-renda-passiva-guia-pratico'],
    topicKey: 'fire_rule'
  },
  // 14. Superando o Portunhol
  {
    id: 'superando-o-portunhol-guia-pratico',
    slug: 'superando-o-portunhol-guia-pratico',
    featuredImage: '/assets/images/blog/aprender-espanhol-autentico.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '05 de abril de 2026', publishDateEn: 'April 05, 2026', publishDateEs: '05 de abril de 2026',
    relatedEbookId: 'hablando-espanol-primeros-pasos',
    relatedPostSlugs: ['falsos-cognatos-em-espanhol-principais-armadilhas', 'conversacao-em-espanhol-como-destravar-a-fala'],
    topicKey: 'overcoming_portunhol'
  },
  // 15. Conversação em Espanhol
  {
    id: 'conversacao-em-espanhol-como-destravar-a-fala',
    slug: 'conversacao-em-espanhol-como-destravar-a-fala',
    featuredImage: '/assets/images/blog/conversacao-em-espanhol-como-destravar-a-fala.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '04 de fevereiro de 2026', publishDateEn: 'February 04, 2026', publishDateEs: '04 de febrero de 2026',
    relatedEbookId: 'hablando-espanol-conversacion',
    relatedPostSlugs: ['superando-o-portunhol-guia-pratico', 'expressoes-idiomaticas-em-espanhol-do-dia-a-dia'],
    topicKey: 'spanish_speaking'
  },
  // 16. Falsos Cognatos em Espanhol
  {
    id: 'falsos-cognatos-em-espanhol-principais-armadilhas',
    slug: 'falsos-cognatos-em-espanhol-principais-armadilhas',
    featuredImage: '/assets/images/blog/falsos-cognatos-em-espanhol-principais-armadilhas.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '31 de janeiro de 2026', publishDateEn: 'January 31, 2026', publishDateEs: '31 de enero de 2026',
    relatedEbookId: 'hablando-espanol-primeros-pasos',
    relatedPostSlugs: ['superando-o-portunhol-guia-pratico', 'espanhol-para-negocios-comunicacao-corporativa-eficaz'],
    topicKey: 'false_friends_spanish'
  },
  // 17. Gramática Espanhola Descomplicada
  {
    id: 'gramatica-espanhola-descomplicada-tempos-verbais',
    slug: 'gramatica-espanhola-descomplicada-tempos-verbais',
    featuredImage: '/assets/images/blog/gramatica-espanhola-descomplicada-tempos-verbais.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '27 de janeiro de 2026', publishDateEn: 'January 27, 2026', publishDateEs: '27 de enero de 2026',
    relatedEbookId: 'hablando-espanol-grammatica',
    relatedPostSlugs: ['superando-o-portunhol-guia-pratico', 'conversacao-em-espanhol-como-destravar-a-fala'],
    topicKey: 'spanish_grammar'
  },
  // 18. Espanhol para Viagens
  {
    id: 'espanhol-para-viagens-frases-e-situacoes-essenciais',
    slug: 'espanhol-para-viagens-frases-e-situacoes-essenciais',
    featuredImage: '/assets/images/blog/espanhol-para-viagens-frases-e-situacoes-essenciais.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '23 de janeiro de 2026', publishDateEn: 'January 23, 2026', publishDateEs: '23 de enero de 2026',
    relatedEbookId: 'hablando-espanol-viaje',
    relatedPostSlugs: ['conversacao-em-espanhol-como-destravar-a-fala', 'variacoes-do-espanhol-espanha-vs-america-latina'],
    topicKey: 'spanish_travel'
  },
  // 19. Espanhol para Negócios
  {
    id: 'espanhol-para-negocios-comunicacao-corporativa-eficaz',
    slug: 'espanhol-para-negocios-comunicacao-corporativa-eficaz',
    featuredImage: '/assets/images/blog/espanhol-para-negocios-comunicacao-corporativa-eficaz.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '19 de janeiro de 2026', publishDateEn: 'January 19, 2026', publishDateEs: '19 de enero de 2026',
    relatedEbookId: 'hablando-espanol-trabajo',
    relatedPostSlugs: ['falsos-cognatos-em-espanhol-principais-armadilhas', 'conversacao-em-espanhol-como-destravar-a-fala'],
    topicKey: 'spanish_business'
  },
  // 20. Variações do Espanhol
  {
    id: 'variacoes-do-espanhol-espanha-vs-america-latina',
    slug: 'variacoes-do-espanhol-espanha-vs-america-latina',
    featuredImage: '/assets/images/blog/variacoes-do-espanhol-espanha-vs-america-latina.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '15 de janeiro de 2026', publishDateEn: 'January 15, 2026', publishDateEs: '15 de enero de 2026',
    relatedEbookId: 'hablando-espanol-dia-a-dia',
    relatedPostSlugs: ['expressoes-idiomaticas-em-espanhol-do-dia-a-dia', 'espanhol-para-viagens-frases-e-situacoes-essenciais'],
    topicKey: 'spanish_dialects'
  },
  // 21. Expressões Idiomáticas em Espanhol
  {
    id: 'expressoes-idiomaticas-em-espanhol-do-dia-a-dia',
    slug: 'expressoes-idiomaticas-em-espanhol-do-dia-a-dia',
    featuredImage: '/assets/images/blog/expressoes-idiomaticas-em-espanhol-do-dia-a-dia.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '11 de janeiro de 2026', publishDateEn: 'January 11, 2026', publishDateEs: '11 de enero de 2026',
    relatedEbookId: 'hablando-espanol-dia-a-dia',
    relatedPostSlugs: ['conversacao-em-espanhol-como-destravar-a-fala', 'variacoes-do-espanhol-espanha-vs-america-latina'],
    topicKey: 'spanish_idioms'
  },
  // 22. Imersão em Espanhol
  {
    id: 'tecnicas-de-imersao-para-aprender-espanhol-em-casa',
    slug: 'tecnicas-de-imersao-para-aprender-espanhol-em-casa',
    featuredImage: '/assets/images/blog/tecnicas-de-imersao-para-aprender-espanhol-em-casa.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '07 de janeiro de 2026', publishDateEn: 'January 07, 2026', publishDateEs: '07 de enero de 2026',
    relatedEbookId: 'hablando-espanol-primeros-pasos',
    relatedPostSlugs: ['conversacao-em-espanhol-como-destravar-a-fala', 'gramatica-espanhola-descomplicada-tempos-verbais'],
    topicKey: 'spanish_immersion'
  },
  // 23. Método Italiano do Zero
  {
    id: 'o-metodo-para-aprender-italiano-do-zero',
    slug: 'o-metodo-para-aprender-italiano-do-zero',
    featuredImage: '/assets/images/blog/aprender-italiano-do-zero.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '28 de março de 2026', publishDateEn: 'March 28, 2026', publishDateEs: '28 de marzo de 2026',
    relatedEbookId: 'parlando-italiano-primi-passi',
    relatedPostSlugs: ['pronuncia-e-fonetica-italiana-guia-pratico', 'conversacao-em-italiano-expressoes-para-falar-como-nativo'],
    topicKey: 'italian_from_scratch'
  },
  // 24. Pronúncia e Fonética Italiana
  {
    id: 'pronuncia-e-fonetica-italiana-guia-pratico',
    slug: 'pronuncia-e-fonetica-italiana-guia-pratico',
    featuredImage: '/assets/images/blog/pronuncia-e-fonetica-italiana-guia-pratico.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '03 de janeiro de 2026', publishDateEn: 'January 03, 2026', publishDateEs: '03 de enero de 2026',
    relatedEbookId: 'parlando-italiano-primi-passi',
    relatedPostSlugs: ['o-metodo-para-aprender-italiano-do-zero', 'conversacao-em-italiano-expressoes-para-falar-como-nativo'],
    topicKey: 'italian_phonetics'
  },
  // 25. Conversação em Italiano
  {
    id: 'conversacao-em-italiano-expressoes-para-falar-como-nativo',
    slug: 'conversacao-em-italiano-expressoes-para-falar-como-nativo',
    featuredImage: '/assets/images/blog/conversacao-em-italiano-expressoes-para-falar-como-nativo.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '29 de dezembro de 2025', publishDateEn: 'December 29, 2025', publishDateEs: '29 de diciembre de 2025',
    relatedEbookId: 'parlando-italiano-conversazione',
    relatedPostSlugs: ['pronuncia-e-fonetica-italiana-guia-pratico', 'cultura-e-costumes-italianos-o-estilo-de-vida-bel-paese'],
    topicKey: 'italian_conversation'
  },
  // 26. Passato Prossimo vs Imperfetto
  {
    id: 'passato-prossimo-vs-imperfetto-como-dominar-em-italiano',
    slug: 'passato-prossimo-vs-imperfetto-como-dominar-em-italiano',
    featuredImage: '/assets/images/blog/passato-prossimo-vs-imperfetto-como-dominar-em-italiano.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '25 de dezembro de 2025', publishDateEn: 'December 25, 2025', publishDateEs: '25 de diciembre de 2025',
    relatedEbookId: 'parlando-italiano-grammatica',
    relatedPostSlugs: ['o-metodo-para-aprender-italiano-do-zero', 'conversacao-em-italiano-expressoes-para-falar-como-nativo'],
    topicKey: 'italian_past_tenses'
  },
  // 27. Italiano para Viagens
  {
    id: 'italiano-para-viagens-guia-pratico-para-turistas',
    slug: 'italiano-para-viagens-guia-pratico-para-turistas',
    featuredImage: '/assets/images/blog/italiano-para-viagens-guia-pratico-para-turistas.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '21 de dezembro de 2025', publishDateEn: 'December 21, 2025', publishDateEs: '21 de diciembre de 2025',
    relatedEbookId: 'parlando-italiano-viaggio',
    relatedPostSlugs: ['conversacao-em-italiano-expressoes-para-falar-como-nativo', 'cultura-e-costumes-italianos-o-estilo-de-vida-bel-paese'],
    topicKey: 'italian_travel'
  },
  // 28. Italiano para Negócios
  {
    id: 'italiano-para-negocios-e-carreira-profissional',
    slug: 'italiano-para-negocios-e-carreira-profissional',
    featuredImage: '/assets/images/blog/italiano-para-negocios-e-carreira-profissional.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '12 min de leitura', readTimeEn: '12 min read', readTimeEs: '12 min de lectura',
    publishDatePt: '17 de dezembro de 2025', publishDateEn: 'December 17, 2025', publishDateEs: '17 de diciembre de 2025',
    relatedEbookId: 'parlando-italiano-italiano-nel-lavoro',
    relatedPostSlugs: ['conversacao-em-italiano-expressoes-para-falar-como-nativo', 'o-metodo-para-aprender-italiano-do-zero'],
    topicKey: 'italian_business'
  },
  // 29. Cultura e Costumes Italianos
  {
    id: 'cultura-e-costumes-italianos-o-estilo-de-vida-bel-paese',
    slug: 'cultura-e-costumes-italianos-o-estilo-de-vida-bel-paese',
    featuredImage: '/assets/images/blog/cultura-e-costumes-italianos-o-estilo-de-vida-bel-paese.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '13 de dezembro de 2025', publishDateEn: 'December 13, 2025', publishDateEs: '13 de diciembre de 2025',
    relatedEbookId: 'parlando-italiano-italiano-nel-quotidiano',
    relatedPostSlugs: ['italiano-para-viagens-guia-pratico-para-turistas', 'conversacao-em-italiano-expressoes-para-falar-como-nativo'],
    topicKey: 'italian_culture'
  },
  // 30. Leitura Guiada em Italiano
  {
    id: 'como-aprender-italiano-rapido-com-leitura-guiada',
    slug: 'como-aprender-italiano-rapido-com-leitura-guiada',
    featuredImage: '/assets/images/blog/como-aprender-italiano-rapido-com-leitura-guiada.webp',
    categoryPt: 'Idiomas', categoryEn: 'Languages', categoryEs: 'Idiomas',
    readTimePt: '11 min de leitura', readTimeEn: '11 min read', readTimeEs: '11 min de lectura',
    publishDatePt: '09 de dezembro de 2025', publishDateEn: 'December 09, 2025', publishDateEs: '09 de diciembre de 2025',
    relatedEbookId: 'parlando-italiano-primi-passi',
    relatedPostSlugs: ['o-metodo-para-aprender-italiano-do-zero', 'pronuncia-e-fonetica-italiana-guia-pratico'],
    topicKey: 'italian_guided_reading'
  }
];

module.exports = { topics, getWordCount };
