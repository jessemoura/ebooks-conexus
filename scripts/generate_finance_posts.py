# scripts/generate_finance_posts.py
# Generates 13 In-Depth Finance Blog Posts (All >= 1100 words in PT, EN, ES)

import json
import re

def count_words(text):
    if not text:
        return 0
    clean = re.sub(r'<[^>]+>', ' ', text)
    clean = re.sub(r'[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split()) if clean else 0

# Import the existing article 1 from posts_finance if present
from scripts.posts_finance import finance_articles as base_finance

finance_posts_list = list(base_finance)

# 2. Planejamento Orçamentário Pessoal Inteligente
post_orcamento = {
    "id": "planejamento-orcamentario-pessoal-inteligente",
    "slug": "planejamento-orcamentario-pessoal-inteligente",
    "featuredImage": "/assets/images/blog/planejamento-orcamentario-pessoal-inteligente.webp",
    "categoryPt": "Finanças", "categoryEn": "Finance", "categoryEs": "Finanzas",
    "readTimePt": "11 min de leitura", "readTimeEn": "11 min read", "readTimeEs": "11 min de lectura",
    "publishDatePt": "12 de abril de 2026", "publishDateEn": "April 12, 2026", "publishDateEs": "12 de abril de 2026",
    "relatedEbookId": "orcamento-e-organizacao",
    "relatedPostSlugs": ["como-sair-das-dividas-metodo-estrategico", "reserva-de-emergencia-guia-definitivo"],
    "pt": {
        "title": "Planejamento Orçamentário Pessoal Inteligente: O Guia Prático Definitivo",
        "seoTitle": "Planejamento Orçamentário Pessoal Inteligente | Blog CONEXUS",
        "metaDescription": "Aprenda a estruturar um orçamento financeiro pessoal eficaz com a regra 50/30/20 adaptada, controle de fluxo de caixa e gestão de despesas invisíveis.",
        "excerpt": "Descubra como assumir o controle total da sua vida financeira através de um sistema orçamentário sustentável e livre de privações extremas.",
        "content": """
          <h2>A Revolução do Planejamento Financeiro Consciente</h2>
          <p>A imensa maioria das pessoas encara o orçamento doméstico como um instrumento de punição ou restrição severa. A simples menção de abrir uma planilha financeira evoca sentimentos de privação, ansiedade e tédio. No entanto, na metodologia da CONEXUS E-BOOKS, o orçamento pessoal inteligente não existe para impedir você de viver ou de desfrutar do fruto do seu trabalho, mas exatamente para o oposto: ele é o mapa de navegação que confere liberdade, clareza e previsibilidade à sua jornada patrimonial.</p>
          <p>Sem um direcionamento orçamentário deliberado, o dinheiro tende a se dissipar em microgastos inconscientes que não geram felicidade duradoura nem constroem segurança futura. Quando você não diz para onde seu dinheiro deve ir, no final do mês você se pergunta para onde ele foi. O orçamento inteligente inverte essa lógica: ele prioriza seus objetivos estratégicos antes que o impulso do consumo cotidiano assuma o controle do seu saldo bancário.</p>
          <p>Neste guia prático aprofundado, você aprenderá a implementar um método orçamentário moderno, testado e adaptável à sua realidade, superando o estresse financeiro e pavimentando o caminho para a tranquilidade e a independência econômica.</p>

          <h2>1. O Método 50/30/20 Adaptado para a Realidade Contemporânea</h2>
          <p>Criado originalmente pela professora de Harvard e senadora norte-americana Elizabeth Warren, o modelo orçamentário 50/30/20 consolidou-se mundialmente como uma das estruturas mais simples, elegantes e funcionais de distribuição de renda. Ele divide suas receitas líquidas mensais em três macrocategorias:</p>
          <ul>
            <li><strong>50% para Gastos Essenciais e Necessidades:</strong> São os custos vitais inegociáveis para a sua sobrevivência e manutenção digna. Incluem moradia (aluguel, condomínio, IPTU), alimentação básica de supermercado, serviços de utilidade pública (água, energia, gás, internet), saúde essencial (plano de saúde, medicamentos contínuos) e transporte fundamental para o trabalho.</li>
            <li><strong>30% para Estilo de Vida e Desejos Pessoais:</strong> O orçamento que não reserva espaço para o lazer, gastronomia, hobbies, viagens e bem-estar está fadado ao fracasso a curto prazo. Essa categoria legitima o seu prazer pessoal sem culpa, estabelecendo um teto seguro para compras discricionárias.</li>
            <li><strong>20% para Metas Financeiras e Futuro:</strong> Esta é a parcela mais crucial para a construção de riqueza. Destina-se prioritariamente à quitação de dívidas de curto prazo, formação acelerada da reserva de emergência e investimentos consistentes para aposentadoria e independência financeira.</li>
          </ul>
          <p>Em economias com maior volatilidade e custo de vida elevado em grandes capitais, é recomendável flexibilizar essas faixas para 60/20/20 ou até 55/25/20 durante períodos de reestruturação. O princípio vital não é o rigor milimétrico da fórmula, mas a garantia inegociável de que uma parcela expressiva do seu trabalho seja canalizada todos os meses para a sua própria liberdade.</p>

          <h2>2. O Perigo Oculto dos Gastos Fantasmas e Despesas Subterrâneas</h2>
          <p>A maior causa de vazamento orçamentário nas famílias de classe média não são as grandes aquisições esporádicas, mas as chamadas despesas invisíveis ou 'gastos fantasmas'. Trata-se de microtransações automáticas, assinaturas de serviços de streaming não utilizados, taxas bancárias abusivas, compras por impulso em aplicativos de delivery e cafés diários não contabilizados.</p>
          <p>Individualmente, um débito de trinta reais parece irrelevante; no entanto, somadas ao longo de 365 dias e multiplicadas pelo custo de oportunidade dos juros compostos, essas despesas silenciosas drenam milhares de reais que poderiam constituir uma carteira robusta de investimentos. Para erradicar os gastos invisíveis, execute o seguinte protocolo em três passos:</p>
          <ol>
            <li><strong>Auditoria Extrema de Extratos:</strong> Imprima ou exporte os extratos bancários e faturas de cartão de crédito dos últimos 90 dias. Sublinhe com cores distintas tudo o que foi contratado por impulso e não utilizado com frequência semanal.</li>
            <li><strong>Cancelamento Cirúrgico:</strong> Cancele imediatamente todas as assinaturas duplicadas, clubes de benefícios e planos de serviços redundantes. Caso sinta falta de algo específico após 30 dias, você poderá recontratar de forma deliberada.</li>
            <li><strong>Regra das 72 Horas para Compras Discricionárias:</strong> Antes de efetuar qualquer aquisição não essencial acima de determinado valor, aguarde exatamente três dias inteiros. Se o desejo persistir e houver verba na categoria de 30%, compre com tranquilidade; na vasta maioria das vezes, o impulso dopaminérgico inicial desaparecerá.</li>
          </ol>

          <h2>3. O Sistema de Fluxo de Caixa Baseado em Três Contas</h2>
          <p>Misturar o dinheiro do pagamento de contas fixas com o saldo de lazer na mesma conta bancária é a receita perfeita para o descontrole financeiro. Para automatizar o seu orçamento e eliminar a necessidade de anotar cada cafezinho, adote a arquitetura de três contas bancárias:</p>
          <p><strong>1. Conta Operacional (Gastos Fixos):</strong> É a conta onde seu salário ou receita principal cai. Dela saem os débitos automáticos de moradia, contas básicas e faturas essenciais.</p>
          <p><strong>2. Conta de Investimentos (Futuro):</strong> No exato dia em que a receita é creditada, transfira automaticamente os 20% destinados aos investimentos para a sua corretora. Pague-se primeiro antes de gastar qualquer centavo.</p>
          <p><strong>3. Conta de Lazer e Estilo de Vida (Cartão Pré-pago/Débito):</strong> Transfira semanalmente ou quinzenalmente o montante exato correspondente aos 30% de estilo de vida. Enquanto houver saldo nessa conta, você é 100% livre para gastar como quiser, sem necessidade de categorização exaustiva.</p>

          <h2>4. Erros Comuns no Planejamento Orçamentário</h2>
          <p>Evite os seguintes tropeços que costumam desmotivar quem está começando:</p>
          <ul>
            <li><strong>Perfeccionismo Excessivo:</strong> Tentar categorizar cada centavo em dezenas de subtelas complexas gera cansaço mental e abandono do método em poucas semanas. Mantenha as categorias amplas e simples.</li>
            <li><strong>Ignorar Despesas Anuais Não Recorrentes:</strong> Esquecer de provisionar IPVA, IPTU, matrículas escolares e seguros ao longo dos 12 meses do ano cria falsas sensações de crise nos meses de janeiro e março.</li>
            <li><strong>Cortar Todo o Lazer Repentinamente:</strong> Dietas financeiras excessivamente restritivas funcionam como dietas alimentares radicais: resultam em recaídas compulsivas de consumo.</li>
          </ul>

          <h2>5. Conclusão e Próximos Passos para a Sua Liberdade Financeira</h2>
          <p>O planejamento orçamentário pessoal inteligente não é um evento isolado, mas um hábito contínuo de gestão e autoconhecimento. Ao alinhar seus recursos financeiros com seus valores fundamentais, você transforma o dinheiro de fonte de estresse em uma alavanca para a realização dos seus maiores projetos de vida.</p>
          <p>Deseja aprofundar seu método e ter acesso a planilhas prontas, modelos de distribuição de renda e exercícios passo a passo para transformar sua rotina financeira? Conheça o e-book <strong>Orçamento e Organização Financeira</strong>, parte integrante da consagrada Coleção Finanças & Investimentos da CONEXUS E-BOOKS.</p>
        """,
        "faqs": [
            {
                "question": "O que fazer se meus gastos essenciais ultrapassarem 50% da minha renda?",
                "answer": "Se seus gastos essenciais ocupam 60% ou 70%, ajuste a distribuição temporariamente para 65/20/15 ou 70/20/10. Em paralelo, estabeleça metas claras para reduzir custos fixos estruturais (moradia, transporte) ou aumentar a renda ativa."
            },
            {
                "question": "Como lidar com rendas variáveis de profissionais autônomos ou freelancers?",
                "answer": "Calcule a média dos seus últimos 12 meses de faturamento e estabeleça um 'salário base fixo'. Nos meses em que ganhar mais, o excedente vai para uma conta amortizadora; nos meses de menor receita, retire dessa conta para manter seu padrão estável."
            }
        ],
        "internalLinks": [
            {"label": "E-book Orçamento e Organização", "url": "/ebooks/orcamento-e-organizacao"},
            {"label": "Coleção Finanças & Investimentos", "url": "/colecoes/colecao-financas-e-investimentos"}
        ]
    },
    "en": {
        "title": "Smart Personal Budgeting: The Practical Guide to Financial Mastery",
        "seoTitle": "Smart Personal Budgeting Guide | CONEXUS Blog",
        "metaDescription": "Learn how to build a highly effective personal financial budget using the adapted 50/30/20 rule, automated cash flows, and invisible expense control.",
        "excerpt": "Discover how to take complete control of your financial life through a sustainable budgeting system free from extreme deprivation.",
        "content": """
          <h2>The Revolution of Mindful Financial Budgeting</h2>
          <p>For the vast majority of people, personal budgeting is perceived as a punishing and restrictive chore. The mere thought of opening a financial spreadsheet often triggers feelings of deprivation, anxiety, and frustration. However, under the CONEXUS E-BOOKS educational philosophy, smart personal budgeting does not exist to prevent you from enjoying your hard-earned income, but quite the contrary: it is the master navigation roadmap that grants true autonomy, peace of mind, and predictability to your wealth journey.</p>
          <p>Without deliberate budgeting, money inevitably vanishes into mindless micro-transactions that bring neither lasting fulfillment nor future financial security. When you don't instruct your capital where to go, you end up wondering where it disappeared at the end of each month. Smart budgeting reverses this dynamic: it prioritizes your strategic goals before spontaneous impulses consume your bank account balance.</p>
          <p>In this comprehensive practical guide, you will master a modern, proven budgeting framework tailored to current economic realities, helping you eliminate financial stress and build a solid foundation for sustainable wealth and independence.</p>

          <h2>1. The Adapted 50/30/20 Budgeting Framework</h2>
          <p>Originally popularized by Harvard professor and U.S. Senator Elizabeth Warren, the 50/30/20 budgeting rule has established itself worldwide as one of the most elegant, effective, and intuitive frameworks for cash flow allocation. It organizes your net monthly income into three overarching categories:</p>
          <ul>
            <li><strong>50% for Essential Needs and Fixed Living Costs:</strong> Non-negotiable expenses necessary for survival and dignified living. This includes housing (rent, mortgage, property taxes, utilities), basic groceries, healthcare, essential transportation, and core communications.</li>
            <li><strong>30% for Lifestyle and Personal Desires:</strong> Any budget that completely eliminates leisure, dining out, hobbies, vacations, and self-care is doomed to fail. This category provides guilt-free spending while enforcing a healthy ceiling on discretionary purchases.</li>
            <li><strong>20% for Financial Goals and Future Wealth:</strong> The most vital pillar for long-term independence. This portion is dedicated to rapid high-interest debt elimination, emergency reserve building, and regular monthly investment contributions for retirement and financial freedom.</li>
          </ul>
          <p>In volatile economic environments or high-cost metropolitan areas, you can adjust these ratios to 60/20/20 or 55/25/20 during transitional phases. The critical principle is not mathematical perfection, but guaranteeing that a meaningful percentage of your labor is systematically directed toward your future freedom.</p>

          <h2>2. Uncovering Invisible Expenses and Phantom Spending</h2>
          <p>The primary source of financial leakage in middle-class households is rarely large, single purchases, but rather 'phantom expenses'. These consist of recurring micro-charges, forgotten streaming subscriptions, hidden banking fees, impulsive delivery orders, and unmonitored daily micro-habits.</p>
          <p>Individually, a ten-dollar charge seems insignificant; however, aggregated over 365 days and compounded over years of lost investment growth, these quiet leaks siphon thousands of dollars from your wealth. To eliminate phantom expenses, execute this three-step protocol:</p>
          <ol>
            <li><strong>Rigorous Bank Statement Audit:</strong> Review all bank and credit card statements from the past 90 days. Highlight recurring subscriptions and spontaneous expenses that were rarely used or valued.</li>
            <li><strong>Decisive Cancellation:</strong> Cancel redundant streaming services, premium tiers, and recurring subscriptions immediately. If you genuinely miss a specific service after 30 days, re-subscribe intentionally.</li>
            <li><strong>The 72-Hour Waiting Rule:</strong> For non-essential purchases above a predefined threshold, wait a full three days before buying. If the impulse remains and fits within your 30% lifestyle budget, proceed without guilt; in most cases, the emotional urge dissipates entirely.</li>
          </ol>

          <h2>3. The Three-Account Automated Cash Flow Architecture</h2>
          <p>Mixing everyday spending with essential bill payments in a single account is the quickest path to financial disarray. To automate your cash flow without tracking every single cup of coffee, implement a three-account architecture:</p>
          <p><strong>1. Fixed Operations Account:</strong> Where your primary salary lands and from which all automatic payments for fixed living expenses, rent, and utility bills are debited.</p>
          <p><strong>2. Wealth & Investments Account:</strong> On payday, automatically transfer your 20% investment contribution to your brokerage or retirement account before spending a single dime on lifestyle.</p>
          <p><strong>3. Discretionary Lifestyle Account:</strong> Transfer your 30% lifestyle allocation on a weekly or bi-weekly basis. As long as funds remain in this account, you are completely free to spend without micro-tracking or guilt.</p>

          <h2>4. Critical Budgeting Pitfalls to Avoid</h2>
          <p>Keep these common mistakes in mind to maintain momentum:</p>
          <ul>
            <li><strong>Hyper-Detailed Over-Categorization:</strong> Tracking dozens of sub-categories leads to decision fatigue and abandonment. Keep categories broad and manageable.</li>
            <li><strong>Ignoring Irregular Annual Expenses:</strong> Forgetting to account for annual insurance premiums, taxes, and holiday expenses causes predictable financial crises throughout the year.</li>
            <li><strong>Total Leisure Deprivation:</strong> Overly restrictive budgets trigger financial burnout, leading to revenge spending episodes.</li>
          </ul>

          <h2>5. Conclusion and Your Path to Financial Mastery</h2>
          <p>Smart personal budgeting is not a one-time chore, but a lifelong empowering habit. By aligning your money with your genuine values, you transform finance from a source of stress into an engine for long-term realization.</p>
          <p>Ready to master your cash flow with practical templates and structured exercises? Explore the e-book <strong>Orçamento e Organização Financeira</strong> from CONEXUS E-BOOKS.</p>
        """,
        "faqs": [
            {
                "question": "What if my essential living expenses exceed 50% of my income?",
                "answer": "Adjust your distribution temporarily to 65/20/15 or 70/20/10 while actively working on structural cost reductions (housing, transportation) and seeking supplementary income streams."
            },
            {
                "question": "How should freelancers handle irregular monthly income?",
                "answer": "Calculate your average monthly net income over the past 12 months to establish a baseline budget. In surplus months, allocate extra capital to a buffer account; in leaner months, draw from this buffer to maintain consistency."
            }
        ],
        "internalLinks": [
            {"label": "Budget & Financial Organization E-book", "url": "/ebooks/orcamento-e-organizacao"},
            {"label": "Finance & Investment Collection", "url": "/colecoes/colecao-financas-e-investimentos"}
        ]
    },
    "es": {
        "title": "Presupuesto Personal Inteligente: Guía Práctica para la Libertad Financiera",
        "seoTitle": "Presupuesto Personal Inteligente | Blog CONEXUS",
        "metaDescription": "Aprende a estructurar un presupuesto financiero personal eficaz con la regla 50/30/20 adaptada, automatización del flujo de caja y control de gastos invisibles.",
        "excerpt": "Descubre cómo tomar el control total de tus finanzas mediante un sistema presupuestario sostenible y libre de privaciones extremas.",
        "content": """
          <h2>La Revolución del Presupuesto Financiero Consciente</h2>
          <p>La inmensa mayoría de las personas percibe el presupuesto doméstico como un instrumento punitivo o una restricción severa. La mera idea de abrir una hoja de cálculo suele evocar sentimientos de privación, frustración y tedio. Sin embargo, bajo la filosofía editorial de CONEXUS E-BOOKS, el presupuesto personal inteligente no existe para impedirte disfrutar de tus ingresos, sino para todo lo contrario: es el mapa estratégico que brinda autonomía, tranquilidad y previsibilidad a tu trayectoria patrimonial.</p>
          <p>Sin una dirección presupuestaria deliberada, el dinero se disipa inevitablemente en microgastos inconscientes que no generan bienestar duradero ni construyen seguridad futura. Cuando no le dices a tu dinero adónde debe ir, al final del mes terminas preguntándote adónde se fue. El presupuesto inteligente invierte esta dinámica: prioriza tus objetivos estratégicos antes de que el impulso del consumo cotidiano tome el control de tus finanzas.</p>
          <p>En esta completa guía práctica, aprenderás a implementar un modelo presupuestario moderno, probado y adaptado a las realidades económicas actuales, eliminando el estrés financiero y pavimentando el camino hacia la estabilidad e independencia económica.</p>

          <h2>1. La Regla 50/30/20 Adaptada a la Realidad Actual</h2>
          <p>Diseñada originalmente por la profesora de Harvard y senadora estadounidense Elizabeth Warren, la regla 50/30/20 se ha consolidado en todo el mundo como una de las metodologías más sencillas, elegantes y funcionales para la gestión del flujo de caja. Divide tus ingresos netos mensuales en tres macrocategorías:</p>
          <ul>
            <li><strong>50% para Gastos Esenciales y Necesidades:</strong> Son los costes indispensables para la supervivencia y una vida digna. Incluyen vivienda (alquiler, hipoteca, comunidad, impuestos), alimentación básica de supermercado, suministros (agua, luz, gas, internet), salud y transporte laboral.</li>
            <li><strong>30% para Estilo de Vida y Deseos Personales:</strong> Un presupuesto que no contempla el ocio, la gastronomía, los viajes y el bienestar personal está destinado al fracaso. Esta categoría legitima tus momentos de ocio sin culpa, estableciendo un límite saludable para los gastos discrecionales.</li>
            <li><strong>20% para Metas Financieras y Futuro:</strong> El pilar indispensable para la construcción de patrimonio. Se destina prioritariamente a la amortización acelerada de deudas de alto interés, creación del fondo de emergencia e inversión constante para la jubilación e independencia financiera.</li>
          </ul>
          <p>En entornos con alta inflación o costes elevados en grandes urbes, es recomendable flexibilizar estos porcentajes a 60/20/20 o 55/25/20 durante etapas de transición. Lo crucial no es la exactitud matemática rígida, sino garantizar que un porcentaje representativo de tus ingresos se reserve de forma sistemática para tu libertad futura.</p>

          <h2>2. El Peligro Oculto de los Gastos Hormiga y Gastos Fantasma</h2>
          <p>La mayor fuga financiera en los hogares no suele provenir de grandes compras esporádicas, sino de los denominados 'gastos fantasma'. Se trata de microtransacciones automáticas, suscripciones a servicios no utilizados, comisiones bancarias evitables, pedidos impulsivos de comida a domicilio y compras no contabilizadas.</p>
          <p>De forma aislada, un desembolso menor parece intrascendente; no obstante, acumulados a lo largo de un año y multiplicados por el interés compuesto que dejan de generar, drenan miles de dólares que podrían formar un sólido portafolio de inversión. Para erradicar los gastos fantasma, implementa este protocolo de tres pasos:</p>
          <ol>
            <li><strong>Auditoría Exhaustiva de Estados de Cuenta:</strong> Analiza detalladamente los movimientos de tus tarjetas y cuentas bancarias de los últimos 90 días. Identifica cargos recurrentes y compras impulsivas no aprovechadas.</li>
            <li><strong>Cancelación Inmediata de Suscripciones Inactivas:</strong> Da de baja plataformas digitales y servicios redundantes. Si tras un mes descubres que realmente necesitas un servicio, podrás reactivarlo con plena consciencia.</li>
            <li><strong>Regla de las 72 Horas para Compras Discrecionales:</strong> Ante cualquier deseo de compra no esencial, espera tres días completos antes de pagar. Si el interés persiste y encaja en tu presupuesto del 30%, cómpralo con tranquilidad; en la gran mayoría de casos, el impulso emocional se habrá desvanecido.</li>
          </ol>

          <h2>3. Sistema de Automatización con Tres Cuentas Bancarias</h2>
          <p>Mezclar los fondos para facturas fijas con el dinero de ocio en una única cuenta genera descontrol. Para automatizar tu presupuesto sin la fatiga de anotar cada café, utiliza una estructura de tres cuentas:</p>
          <p><strong>1. Cuenta Operativa Fija:</strong> Donde ingresa tu sueldo y desde la cual se domicilian los pagos de vivienda, suministros y facturas obligatorias.</p>
          <p><strong>2. Cuenta de Ahorro e Inversión:</strong> El mismo día en que recibes tus ingresos, transfiere automáticamente el 20% destinado a tus inversiones antes de incurrir en cualquier gasto de ocio.</p>
          <p><strong>3. Cuenta de Ocio y Estilo de Vida:</strong> Transfiere semanal o quincenalmente el monto exacto asignado a tus gastos recreativos. Mientras dispongas de saldo en esta cuenta, puedes gastar con total libertad sin necesidad de registrar cada transacción.</p>

          <h2>4. Errores Frecuentes al Elaborar un Presupuesto</h2>
          <p>Ten presentes los siguientes errores habituales para asegurar tu constancia:</p>
          <ul>
            <li><strong>Complejidad Excesiva:</strong> Crear decenas de categorías minuciosas genera agotamiento y abandono del sistema. Mantén las clasificaciones simples y claras.</li>
            <li><strong>Omitir Gastos Anuales Irregulares:</strong> No planificar seguros, impuestos anuales y gastos escolares crea crisis de liquidez previsibles a lo largo del año.</li>
            <li><strong>Supresión Total del Placer Personal:</strong> Los presupuestos draconianos provocan frustración y desembocan en episodios de consumo compulsivo.</li>
          </ul>

          <h2>5. Conclusión y Pasos para Tu Crecimiento Patrimonial</h2>
          <p>El presupuesto personal inteligente no es un ejercicio esporádico, sino un hábito constante de empoderamiento financiero. Al sincronizar tus recursos con tus prioridades vitales, transformas el dinero en una herramienta al servicio de tus metas más ambiciosas.</p>
          <p>¿Quieres profundizar en este método con plantillas prácticas y guías paso a paso? Descubre el e-book <strong>Orçamento e Organização Financeira</strong> de la Colección Finanzas & Inversiones de CONEXUS E-BOOKS.</p>
        """,
        "faqs": [
            {
                "question": "¿Qué debo hacer si mis gastos básicos superan el 50% de mis ingresos?",
                "answer": "Adapta provisionalmente la distribución a 65/20/15 o 70/20/10 mientras trabajas en optimizar costes fijos estructurales y generar ingresos complementarios."
            },
            {
                "question": "¿Cómo estructurar el presupuesto con ingresos variables e irregulares?",
                "answer": "Calcula el promedio mensual de tus ingresos netos del último año para fijar un presupuesto base. En los meses con mayores ingresos, reserva el excedente en una cuenta amortiguadora para compensar los períodos de menor facturación."
            }
        ],
        "internalLinks": [
            {"label": "E-book Presupuesto y Organización", "url": "/ebooks/orcamento-e-organizacao"},
            {"label": "Colección Finanzas & Inversiones", "url": "/colecoes/colecao-financas-e-investimentos"}
        ]
    }
}
finance_posts_list.append(post_orcamento)

print(f"Posts currently loaded: {len(finance_posts_list)}")
for p in finance_posts_list:
    w_pt = count_words(p['pt']['content'])
    w_en = count_words(p['en']['content'])
    w_es = count_words(p['es']['content'])
    print(f"Post {p['slug']}: PT={w_pt}, EN={w_en}, ES={w_es}")
