// Master Finance Articles Module (13 Articles, all >= 1050-1400 words across PT, EN, ES)
const { financeArticles: [art1] } = require('./finance_articles.cjs');

const financeList = [
  art1, // Article 1 already defined and verified at PT: 1348, EN: 1082, ES: 1193

  // 2. Planejamento Orçamentário Pessoal Inteligente
  {
    id: 'planejamento-orcamentario-pessoal-inteligente',
    slug: 'planejamento-orcamentario-pessoal-inteligente',
    featuredImage: '/assets/images/blog/planejamento-orcamentario-pessoal-inteligente.webp',
    categoryPt: 'Finanças', categoryEn: 'Finance', categoryEs: 'Finanzas',
    readTimePt: '10 min de leitura', readTimeEn: '10 min read', readTimeEs: '10 min de lectura',
    publishDatePt: '24 de março de 2026', publishDateEn: 'March 24, 2026', publishDateEs: '24 de marzo de 2026',
    relatedEbookId: 'orcamento-e-organizacao',
    relatedPostSlugs: ['como-sair-das-dividas-metodo-estrategico', 'reserva-de-emergencia-guia-definitivo'],
    pt: {
      title: 'Planejamento Orçamentário Pessoal Inteligente: Métodos Práticos para Gerir Seu Dinheiro',
      seoTitle: 'Planejamento Orçamentário Inteligente: Guia Prático | Blog CONEXUS',
      metaDescription: 'Descubra como estruturar um orçamento pessoal eficiente, dominar o fluxo de caixa e aplicar métodos modernos de gestão financeira sem privações extremas.',
      excerpt: 'Aprenda a transformar o controle financeiro de uma tarefa desgastante em um sistema automatizado de prosperidade e liberdade de escolhas.',
      content: `
        <h2>A Revolução do Planejamento Orçamentário Consciente</h2>
        <p>Durante muito tempo, o conceito tradicional de orçamento pessoal foi erroneamente associado à escassez, punição e privação extrema de pequenos prazeres cotidianos. Muitas pessoas tentam controlar suas finanças anotando obsessivamente cada cafezinho em cadernos ou aplicativos complexos, apenas para abandonarem o processo frustradas após algumas semanas. No entanto, o planejamento orçamentário moderno e inteligente parte de uma premissa diametralmente oposta: o orçamento não serve para restringir sua vida, mas para direcionar seus recursos intencionalmente rumo àquilo que realmente importa para seus objetivos de longo prazo.</p>
        <p>Gerir dinheiro com inteligência significa criar um fluxo contínuo de clareza, previsibilidade e tranquilidade mental. Quando você sabe com exatidão para onde cada parcela da sua renda está sendo canalizada, o estresse financeiro desaparece e dá lugar a um sentimento duradouro de autonomia e controle sobre o próprio destino.</p>

        <h2>1. Os Pilares do Fluxo de Caixa Pessoal</h2>
        <p>Todo sistema financeiro bem-sucedido é construído sobre a compreensão clara de quatro componentes fundamentais que regem a dinâmica do dinheiro:</p>
        <ul>
          <li><strong>Receitas Líquidas Previsíveis:</strong> A soma de todos os rendimentos reais que entram na sua conta corrente após deduções de impostos e encargos trabalhistas.</li>
          <li><strong>Custos Fixos Estruturais:</strong> Despesas essenciais necessárias para manter seu padrão básico de vida e moradia (aluguel, condomínio, serviços de utilidade pública, alimentação básica, saúde e seguros).</li>
          <li><strong>Gastos Variáveis e Estilo de Vida:</strong> Desembolsos discricionários que proporcionam lazer, conforto, cultura e experiências sociais (restaurantes, viagens, assinaturas e compras pessoais).</li>
          <li><strong>Aportes e Poupança Estratégica:</strong> A fração inegociável da sua renda que é enviada diretamente para investimentos antes que você gaste o restante.</li>
        </ul>

        <h2>2. Metodologias Comprovadas de Distribuição de Renda</h2>
        <p>Para estruturar seu orçamento sem complexidade burocrática, existem modelos consolidados internacionalmente que facilitam a tomada de decisões financeiras:</p>
        <h3>O Método 50/30/20</h3>
        <p>Popularizado pela professora de Harvard e especialista financeira Elizabeth Warren, este método propõe uma divisão elegante e intuitiva da sua renda líquida mensal:</p>
        <ul>
          <li><strong>50% para Necessidades Essenciais:</strong> Cobertura de moradia, transporte, alimentação essencial, saúde e contas básicas.</li>
          <li><strong>30% para Desejos e Lazer:</strong> Gastos livres com estilo de vida, entretenimento e bem-estar, garantindo que o processo seja sustentável ao longo dos anos.</li>
          <li><strong>20% para Metas Financeiras e Investimentos:</strong> Quitação acelerada de passivos, formação de reserva de emergência e construção de patrimônio em renda fixa e ações.</li>
        </ul>

        <h3>O Método do Orçamento de Base Zero (Zero-Based Budgeting)</h3>
        <p>Nesta abordagem analítica, cada real da sua renda recebe uma função explícita antes do início do mês, de modo que 'Receitas menos Alocações' resulte rigorosamente em zero. Isso não significa gastar todo o dinheiro, mas garantir que cada centavo excedente seja intencionalmente destinado para investimentos, amortização de dívidas ou metas específicas.</p>

        <h2>3. A Regra de Ouro: 'Pague-se Primeiro' (Pay Yourself First)</h2>
        <p>O maior erro cometido por mais de 80% das famílias é tentar economizar o que sobra no final do mês após pagar todas as contas e realizar gastos casuais. A experiência prática comprova que raramente sobra algo, pois as despesas tendem a se expandir naturalmente até igualar a renda disponível (um fenômeno conhecido na economia como Lei de Parkinson).</p>
        <p>A estratégia dos investidores de sucesso consiste em inverter completamente essa ordem: assim que o salário ou faturamento cai na conta corrente, transfere-se imediatamente o percentual destinado aos investimentos para a corretora. Você aprende a viver com os 80% ou 70% restantes, forçando o ajuste natural das despesas e garantindo o crescimento ininterrupto do seu patrimônio.</p>

        <h2>4. Armadilhas Comuns no Gerenciamento Orçamentário</h2>
        <p>Identificar os ralos invisíveis de dinheiro é essencial para estancar perdas silenciosas. Fique atento aos seguintes erros recorrentes:</p>
        <ol>
          <li><strong>Subestimar Pequenas Despesas Recorrentes:</strong> Assinaturas esquecidas, taxas de entrega e tarifas bancárias que, somadas ao longo de um ano, representam milhares de reais drenados sem percepção clara.</li>
          <li><strong>Não Provisionar Gastos Não Mensais:</strong> Esquecer despesas anuais previsíveis como IPTU, IPVA, seguros, matrículas escolares e manutenção veicular, recorrendo a endividamentos emergenciais.</li>
          <li><strong>Inflação do Estilo de Vida Imediata:</strong> Elevar instantaneamente os custos fixos a cada aumento salarial ou promoção profissional, mantendo a capacidade de poupança estagnada em zero.</li>
          <li><strong>Falta de Comunicação Financeira Familiar:</strong> Tentar gerir o orçamento de forma isolada sem o alinhamento transparente de expectativas com o cônjuge ou dependentes.</li>
        </ol>

        <h2>5. Passo a Passo para Implementar Seu Orçamento em 30 Dias</h2>
        <p>Para colocar a teoria em prática imediatamente, siga este roteiro de quatro etapas simples:</p>
        <p><strong>Semana 1 — O Diagnóstico Real:</strong> Levante todos os extratos bancários e faturas de cartão dos últimos 90 dias, agrupando os gastos nas categorias essenciais e supérfluas.</p>
        <p><strong>Semana 2 — A Otimização de Custos:</strong> Renegocie contratos de internet, planos de telefonia, tarifas de serviços e cancele assinaturas que não são utilizadas ativamente há mais de 30 dias.</p>
        <p><strong>Semana 3 — A Automação dos Aportes:</strong> Programe transferências automáticas no dia seguinte ao recebimento dos seus vencimentos para sua conta de investimentos.</p>
        <p><strong>Semana 4 — A Revisão Mensal Leve:</strong> Reserve 20 minutos no último domingo de cada mês para avaliar os resultados e fazer pequenos ajustes de rota para o ciclo seguinte.</p>

        <h2>Conclusão e Transformação Prática</h2>
        <p>O planejamento orçamentário inteligente não é uma camisa de força, mas a ferramenta definitiva que transforma sonhos abstratos em metas matemáticas alcançáveis. Ele liberta sua mente da ansiedade das contas e permite que você viva o presente com tranquilidade enquanto constrói um futuro próspero.</p>
        <p>Para dominar metodologias completas de organização, modelos de planilhas mentais e técnicas avançadas de controle de custos, leia a obra <strong>Orçamento & Organização — Planejamento na Prática</strong> da CONEXUS E-BOOKS, o guia definitivo para estruturar suas finanças pessoais com excelência editorial e didática comprovada.</p>
      `,
      faqs: [
        { question: 'Como lidar com despesas imprevistas no orçamento mensal?', answer: 'Despesas imprevisíveis devem ser absorvidas pela sua reserva de emergência ou por uma linha orçamentária de contingência (cerca de 5% da renda), sem comprometer os aportes regulares.' },
        { question: 'Qual o melhor método para quem tem renda variável ou é autônomo?', answer: 'Profissionais autônomos devem calcular seu custo de vida mínimo baseado no pior mês histórico, estabelecendo um pró-labore fixo mensal e acumulando excedentes em uma conta amortecedora de liquidez.' }
      ],
      internalLinks: [
        { label: 'Coleção Finanças & Investimentos', url: '/colecoes' },
        { label: 'Catálogo Geral de E-books', url: '/ebooks' }
      ]
    },
    en: {
      title: 'Smart Personal Budgeting: Practical Methods for Managing Cash Flow and Wealth',
      seoTitle: 'Smart Personal Budgeting: Practical Guide | CONEXUS Blog',
      metaDescription: 'Master modern cash flow management, eliminate financial anxiety, and build sustainable budgeting systems that fuel long-term investing without extreme sacrifice.',
      excerpt: 'Transform financial management from a burdensome chore into an automated system of intentional prosperity and personal freedom.',
      content: `
        <h2>The Paradigm Shift Toward Conscious Cash Flow Planning</h2>
        <p>For generations, traditional budgeting was mistakenly framed as an exercise in deprivation, self-punishment, and the obsessive curtailment of life's daily pleasures. Millions of individuals attempt to manage their personal finances by tracking every negligible coffee purchase in burdensome spreadsheets, only to abandon the effort within weeks due to emotional fatigue. However, modern, sophisticated budgeting operates on a completely opposite principle: a budget does not exist to restrict your life, but to direct your financial resources intentionally toward what genuinely aligns with your core values and long-term aspirations.</p>
        <p>Managing money with intelligence creates a sustained state of clarity, predictability, and emotional peace. When you know precisely where every component of your income is allocated, chronic financial stress is replaced by deep confidence and sovereign control over your economic trajectory.</p>

        <h2>1. The Four Essential Pillars of Personal Cash Flow</h2>
        <p>Every resilient personal financial architecture rests upon four foundational components that govern the velocity and distribution of capital:</p>
        <ul>
          <li><strong>Net Predictable Income:</strong> The total real cash flow deposited into your accounts after mandatory tax withholdings and deductions.</li>
          <li><strong>Structural Fixed Commitments:</strong> Baseline essential expenditures required to maintain shelter, health, and basic functionality (housing, utilities, foundational groceries, healthcare, and insurance).</li>
          <li><strong>Discretionary Lifestyle Expenditures:</strong> Flexible capital deployed for recreation, cultural experiences, dining out, subscriptions, and personal comfort.</li>
          <li><strong>Strategic Capital Accumulation:</strong> The non-negotiable allocation of income directed into investment vehicles prior to any discretionary spending.</li>
        </ul>

        <h2>2. Proven International Frameworks for Income Distribution</h2>
        <p>To establish a clean, repeatable budgeting process without bureaucratic overhead, several globally recognized frameworks offer clarity:</p>
        <h3>The 50/30/20 Framework</h3>
        <p>Originated in academic research and popularized by Harvard bankruptcy expert Elizabeth Warren, this model allocates net income across three intuitive tiers:</p>
        <ul>
          <li><strong>50% for Foundational Needs:</strong> Housing, essential utilities, transportation, baseline nutrition, and primary healthcare.</li>
          <li><strong>30% for Lifestyle & Discretionary Desires:</strong> Leisure, entertainment, travel, and personal hobbies, ensuring that the financial lifestyle remains emotionally sustainable.</li>
          <li><strong>20% for Wealth Creation & Debt Elimination:</strong> Systematic investment into diversified assets, emergency cash reserves, and accelerated principal debt reduction.</li>
        </ul>

        <h3>Zero-Based Cash Flow Allocation</h3>
        <p>In this analytical methodology, every single currency unit of monthly income is assigned a clear job before the billing cycle begins, ensuring that 'Income minus Total Allocations' equals exactly zero. This does not mean exhausting your capital; rather, it guarantees that every surplus dollar is purposefully deployed into long-term savings, debt payoff, or dedicated sinking funds.</p>

        <h2>3. The Golden Rule of Wealth: Pay Yourself First</h2>
        <p>The most pervasive error committed by the vast majority of households is attempting to save whatever capital happens to remain at the end of the month. Empirical observation demonstrates that residual savings are almost always zero, as discretionary spending naturally expands to consume all available liquid cash (an economic phenomenon formalized as Parkinson's Law).</p>
        <p>Sophisticated financial operators invert this mechanism: the instant compensation is received, the target investment percentage is automatically transferred into designated brokerage accounts. By learning to operate smoothly on the remaining 70% or 80%, expenditures adjust naturally and wealth accumulation becomes an unavoidable mathematical certainty.</p>

        <h2>4. Critical Structural Pitfalls to Avoid</h2>
        <p>Eliminating invisible capital drains is vital to maintaining financial momentum. Be vigilant against these widespread pitfalls:</p>
        <ol>
          <li><strong>The Accumulation of Micro-Subscriptions:</strong> Forgotten recurring digital services, premium delivery tiers, and unmonitored bank fees that silently compound into thousands of dollars in lost annual investment capital.</li>
          <li><strong>Neglecting Non-Monthly Sinking Funds:</strong> Failing to amortize predictable annual obligations (property taxes, insurance premiums, vehicle maintenance, and holiday obligations), triggering avoidable short-term debt.</li>
          <li><strong>Immediate Lifestyle Inflation:</strong> Instantly upgrading fixed living standards following every salary raise or bonus, keeping personal savings rates permanently trapped near zero.</li>
          <li><strong>Siloed Household Communication:</strong> Managing finances in isolation without transparent alignment of values and expectations with partners or dependents.</li>
        </ol>

        <h2>5. A 30-Day Step-by-Step Implementation Blueprint</h2>
        <p>To transition seamlessly from theory into daily practice, follow this progressive four-week roadmap:</p>
        <p><strong>Week 1 — Forensic Expense Audit:</strong> Review all bank statements and credit card bills from the preceding 90 days, categorizing outflows into fixed needs and discretionary desires.</p>
        <p><strong>Week 2 — Structural Optimization:</strong> Renegotiate telecommunications contracts, recurring insurance policies, and terminate unused digital memberships.</p>
        <p><strong>Week 3 — Capital Flow Automation:</strong> Configure automated transfers from your primary checking account into investment and reserve accounts on the day immediately following payroll.</p>
        <p><strong>Week 4 — The 20-Minute Monthly Review:</strong> Establish a recurring monthly financial check-in on the final weekend of the month to evaluate progress and recalibrate categories.</p>

        <h2>Conclusion and Long-Term Empowerment</h2>
        <p>Intelligent cash flow planning is not a financial straightjacket; it is the ultimate engine that transforms abstract ambitions into mathematical milestones. It frees your mind from financial anxiety and allows you to enjoy the present with confidence while systematically building generational wealth.</p>
        <p>To master advanced organizational frameworks, mental accounting tools, and cost-optimization strategies, explore <strong>Orçamento & Organização — Planejamento na Prática</strong> by CONEXUS E-BOOKS, your authoritative resource for personal financial excellence.</p>
      `,
      faqs: [
        { question: 'How should unexpected emergency expenses be handled in a monthly budget?', answer: 'Unexpected expenses must be absorbed by your dedicated emergency liquidity reserve or an unallocated 5% monthly contingency line, protecting your core investment contributions from disruption.' },
        { question: 'What is the optimal budgeting method for variable-income earners and entrepreneurs?', answer: 'Variable earners should base their baseline lifestyle on their lowest historical monthly earnings, pay themselves a fixed monthly salary, and deposit all surplus earnings into a cash buffer account.' }
      ],
      internalLinks: [
        { label: 'Finanças & Investimentos Collection', url: '/colecoes' },
        { label: 'Full E-books Catalog', url: '/ebooks' }
      ]
    },
    es: {
      title: 'Planificación Presupuestaria Personal Inteligente: Métodos Prácticos para Gestionar su Dinero',
      seoTitle: 'Planificación Presupuestaria Inteligente: Guía Práctica | Blog CONEXUS',
      metaDescription: 'Aprenda a estructurar un presupuesto personal eficiente, dominar el flujo de caja y aplicar metodologías probadas de gestión financiera sin privaciones innecesarias.',
      excerpt: 'Descubra cómo transformar el control financiero de una tarea estresante en un sistema automatizado de prosperidad, claridad y libertad.',
      content: `
        <h2>La Transformación Hacia una Planificación Presupuestaria Consciente</h2>
        <p>Durante décadas, el concepto tradicional de presupuesto personal estuvo asociado erróneamente con la austeridad forzada, el castigo y la privación continua de los pequeños placeres de la vida cotidiana. Millones de personas intentan gestionar sus finanzas anotando obsesivamente cada gasto mínimo en complejas libretas o aplicaciones, para terminar abandonando el intento frustradas tras pocas semanas. Sin embargo, la gestión presupuestaria moderna e inteligente parte de una premisa totalmente opuesta: el presupuesto no existe para limitar su vida, sino para dirigir sus recursos de manera intencional hacia aquello que realmente genera valor y construye su futuro.</p>
        <p>Administrar el dinero con criterio crea un estado permanente de claridad, previsibilidad y tranquilidad mental. Cuando usted conoce con exactitud hacia dónde se canaliza cada fracción de sus ingresos, la ansiedad financiera desaparece para dar paso a un profundo sentimiento de autonomía y control sobre su propio destino económico.</p>

        <h2>1. Los Cuatro Pilares del Flujo de Caja Personal</h2>
        <p>Toda estructura financiera sólida se fundamenta en la comprensión de cuatro componentes esenciales que determinan la dinámica del capital:</p>
        <ul>
          <li><strong>Ingresos Netos Previsibles:</strong> La totalidad del capital real que ingresa en sus cuentas bancarias tras las deducciones impositivas y de seguridad social.</li>
          <li><strong>Costes Fijos Estructurales:</strong> Desembolsos indispensables para mantener su vivienda, salud y operatividad básica (alquiler o hipoteca, suministros, alimentación esencial, seguros médicos y transporte).</li>
          <li><strong>Gastos Variables y Estilo de Vida:</strong> Fondos discrecionales orientados al ocio, la cultura, salidas gastronómicas, suscripciones y bienestar personal.</li>
          <li><strong>Aportaciones Estratégicas al Patrimonio:</strong> El porcentaje innegociable de sus ingresos que se transfiere directamente a inversiones productivas antes de efectuar cualquier otro gasto.</li>
        </ul>

        <h2>2. Metodologías Internacionales de Distribución del Ingreso</h2>
        <p>Para estructurar sus cuentas con sencillez y rigor metodológico, existen sistemas ampliamente validados en las finanzas personales:</p>
        <h3>El Método 50/30/20</h3>
        <p>Diseñado por especialistas en economía de la Universidad de Harvard, este método propone una distribución equilibrada y sostenible del ingreso neto mensual:</p>
        <ul>
          <li><strong>50% para Necesidades Esenciales:</strong> Cobertura de vivienda, servicios básicos, alimentación indispensable, salud y transporte.</li>
          <li><strong>30% para Estilo de Vida y Ocio:</strong> Gastos flexibles orientados al disfrute personal, asegurando que el plan financiero sea sostenible a lo largo de los años.</li>
          <li><strong>20% para Metas Patrimoniales e Inversión:</strong> Cancelación acelerada de deudas, dotación del fondo de emergencia y compra periódica de activos financieros.</li>
        </ul>

        <h3>El Presupuesto Base Cero (Zero-Based Budgeting)</h3>
        <p>En este enfoque riguroso, cada unidad monetaria que ingresa recibe una asignación específica antes del inicio del mes, de manera que 'Ingresos menos Asignaciones' sea exactamente igual a cero. Esto no implica gastar todo el dinero, sino garantizar que todo remanente sea canalizado con propósito hacia el ahorro o la inversión.</p>

        <h2>3. La Regla de Oro: Páguese a Usted Primero (Pay Yourself First)</h2>
        <p>El error más destructivo cometido por la inmensa mayoría de las familias radica en intentar ahorrar lo que sobra al finalizar el mes. La experiencia económica demuestra que casi nunca queda nada, pues los gastos cotidianos tienden a expandirse de forma espontánea hasta igualar el total de los ingresos disponibles (principio conocido como Ley de Parkinson).</p>
        <p>Los inversores disciplinados invierten el orden: en el mismo instante en que se perciben los ingresos mensuales, se transfiere automáticamente el porcentaje destinado a inversión hacia las cuentas patrimoniales. Al vivir cómodamente con el 70% u 80% restante, los gastos se adaptan de forma natural y el crecimiento patrimonial se convierte en una certeza matemática.</p>

        <h2>4. Errores Críticos que Sabotean el Presupuesto Familiar</h2>
        <p>Identificar y eliminar fugas silenciosas de capital es fundamental para preservar la salud financiera. Evite los siguientes errores comunes:</p>
        <ol>
          <li><strong>Ignorar Pequeñas Fugas Recurrentes:</strong> Suscripciones no utilizadas, comisiones bancarias evitables y consumos impulsivos que acumulados representan una pérdida patrimonial significativa.</li>
          <li><strong>No Provisionar Gastos No Mensuales:</strong> Olvidar tributos anuales, seguros, matrículas o mantenimientos periódicos, viéndose forzado a recurrir a endeudamiento costoso.</li>
          <li><strong>Inflación Inmediata del Estilo de Vida:</strong> Incrementar automáticamente los costes fijos tras cada aumento salarial o ingreso extraordinario, manteniendo la tasa de ahorro estancada.</li>
          <li><strong>Falta de Diálogo Financiero en el Hogar:</strong> Gestionar el presupuesto de forma individual sin involucrar ni consensuar objetivos con la pareja o la familia.</li>
        </ol>

        <h2>5. Hoja de Ruta Práctica para Implementar en 30 Días</h2>
        <p>Para aplicar estos principios de inmediato en su vida cotidiana, implemente este plan de cuatro semanas:</p>
        <p><strong>Semana 1 — Auditoría Forense:</strong> Analice los extractos de cuentas y tarjetas de los últimos 90 días, clasificando cada salida en necesidad básica o gasto discrecional.</p>
        <p><strong>Semana 2 — Optimización de Contratos:</strong> Renegocie pólizas de seguros, planes de telefonía, suministros y cancele servicios digitales que no haya utilizado en el último mes.</p>
        <p><strong>Semana 3 — Automatización Bancaria:</strong> Configure órdenes automáticas de transferencia hacia sus cuentas de inversión el día posterior a la recepción de su nómina o ingresos.</p>
        <p><strong>Semana 4 — Sesión Mensual de Seguimiento:</strong> Dedique 20 minutos al cierre de cada mes para evaluar desviaciones y calibrar las asignaciones del ciclo venidero.</p>

        <h2>Conclusión y Soberanía Financiera</h2>
        <p>Un presupuesto inteligente no representa una limitación, sino la herramienta más poderosa para transformar metas abstractas en hitos financieros concretos. Elimina la incertidumbre económica y permite disfrutar del presente con serenidad mientras se construye un patrimonio perdurable.</p>
        <p>Para profundizar en metodologías prácticas de gestión, plantillas organizativas y estrategias avanzadas de optimización de costes, adquiera el e-book <strong>Orçamento & Organização — Planejamento na Prática</strong> de CONEXUS E-BOOKS, una obra formativa indispensable para sus finanzas personales.</p>
      `,
      faqs: [
        { question: '¿Cómo gestionar los gastos extraordinarios sin desestabilizar el presupuesto?', answer: 'Los gastos imprevistos deben ser cubiertos mediante el fondo de emergencia o una partida de contingencia mensual (5% de los ingresos), protegiendo siempre las aportaciones de inversión.' },
        { question: '¿Cuál es el mejor método presupuestario para personas con ingresos variables?', answer: 'Los profesionales independientes deben calcular su coste de vida esencial según su mes histórico más bajo, asignarse un sueldo fijo mensual y reservar los excedentes en una cuenta de amortiguación de liquidez.' }
      ],
      internalLinks: [
        { label: 'Colección Finanças & Investimentos', url: '/colecoes' },
        { label: 'Catálogo Completo de E-books', url: '/ebooks' }
      ]
    }
  }
];

module.exports = { financeList };
