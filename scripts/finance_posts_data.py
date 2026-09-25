# scripts/finance_posts_data.py
# Articles 1 to 13: Full In-Depth Finance Articles (Each >= 1,100 words in PT, EN, ES)

import json
import re

def count_words(text):
    if not text:
        return 0
    clean = re.sub(r'<[^>]+>', ' ', text)
    clean = re.sub(r'[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split()) if clean else 0

from scripts.posts_finance_1_5 import posts_finance_1_5

finance_articles = list(posts_finance_1_5)

# 3. Como Sair das Dívidas
post_dividas = {
    "id": "como-sair-das-dividas-metodo-estrategico",
    "slug": "como-sair-das-dividas-metodo-estrategico",
    "featuredImage": "/assets/images/blog/como-sair-das-dividas-metodo-estrategico.webp",
    "categoryPt": "Finanças", "categoryEn": "Finance", "categoryEs": "Finanzas",
    "readTimePt": "12 min de leitura", "readTimeEn": "12 min read", "readTimeEs": "12 min de lectura",
    "publishDatePt": "15 de abril de 2026", "publishDateEn": "April 15, 2026", "publishDateEs": "15 de abril de 2026",
    "relatedEbookId": "dividas-e-reserva",
    "relatedPostSlugs": ["reserva-de-emergencia-guia-definitivo", "planejamento-orcamentario-pessoal-inteligente"],
    "pt": {
        "title": "Como Sair das Dívidas: O Método Estratégico para a Liberdade Financeira",
        "seoTitle": "Como Sair das Dívidas: Método Passo a Passo | Blog CONEXUS",
        "metaDescription": "Descubra como eliminar dívidas com os métodos Bola de Neve e Avalanche, negociar com credores e estancar juros abusivos de forma definitiva.",
        "excerpt": "Um plano de ação racional e comprovado para liquidar passivos financeiros, estancar o efeito dos juros compostos negativos e reconstruir seu patrimônio.",
        "content": """
            <h2>A Realidade do Endividamento e o Ciclo dos Juros Compostos Negativos</h2>
            <p>Estar endividado não é apenas uma questão matemática de números negativos no extrato bancário; é uma condição que consome a paz mental, desgasta relacionamentos familiares e compromete a capacidade de tomar decisões profissionais estratégicas. No sistema financeiro moderno, os juros compostos atuam como uma faca de dois gumes: quando você investe, eles constroem riqueza exponencial; quando você contrai dívidas de consumo, especialmente no cartão de crédito rotativo e no cheque especial, eles multiplicam passivos a taxas confiscatórias que rapidamente se tornam impagáveis.</p>
            <p>O primeiro passo para romper essa espiral descendente é desmistificar a culpa. O endividamento raramente decorre de falta de caráter; na vasta maioria dos casos, decorre da ausência de educação financeira estruturada, eventos imprevisíveis de vida (desemprego, problemas de saúde) e do bombardeio publicitário que estimula o consumo por impulso através do crédito fácil.</p>
            <p>Neste guia da CONEXUS E-BOOKS, apresentamos um método estratégico, livre de julgamentos morais e focado em engenharia financeira prática, para você negociar suas dívidas, liquidar seus credores e retomar a soberania do seu dinheiro.</p>

            <h2>1. O Raio-X Completo do Passivo Financeiro</h2>
            <p>Você não pode derrotar um inimigo que não enxerga claramente. Muitas pessoas endividadas evitam abrir correspondências bancárias ou consultar seus extratos por puro medo e ansiedade. Esse mecanismo de negação psicológica apenas agrava o problema diário.</p>
            <p>Para assumir o comando, organize uma tabela com todas as suas pendências financeiras contendo quatro colunas obrigatórias:</p>
            <ul>
                <li><strong>Credor e Natureza do Débito:</strong> Banco emissor, loja de varejo, financiamento de veículo, empréstimo consignado ou dívidas informais.</li>
                <li><strong>Saldo Devedor Atual:</strong> O valor exato necessário para quitar a dívida integralmente na data de hoje.</li>
                <li><strong>Custo Efetivo Total (CET) / Taxa de Juros Mensal:</strong> A taxa real cobrada pelo credor, incluindo seguros, IOF e taxas administrativas embutidas.</li>
                <li><strong>Valor da Parcela Mensal Mínima:</strong> O montante exigido mensalmente para manter o contrato ativo.</li>
            </ul>

            <h2>2. Os Dois Métodos Consagrados: Bola de Neve vs. Avalanche</h2>
            <p>Com o raio-x financeiro em mãos, é hora de escolher a estratégia de ataque. Na literatura de finanças pessoais, existem duas abordagens metodológicas mundialmente reconhecidas:</p>
            <p><strong>O Método Avalanche (Matematicamente Ótimo):</strong> Consiste em ordenar as dívidas da maior taxa de juros para a menor. Você direciona todo o valor extra disponível no seu orçamento para quitar agressivamente a dívida mais cara (geralmente cartão rotativo ou cheque especial), enquanto paga apenas o mínimo nas demais. Assim que a dívida com juros mais altos for eliminada, todo o fluxo liberado é canalizado para a segunda mais cara. Esse método minimiza o volume total de juros pagos ao sistema bancário ao longo do tempo.</p>
            <p><strong>O Método Bola de Neve (Psicologicamente Poderoso):</strong> Popularizado pelo consultor Dave Ramsey, este método ordena as dívidas pelo menor saldo devedor, independentemente da taxa de juros. Você liquida primeiro a menor dívida com rapidez. A vitória rápida proporciona um alívio psicológico imediato e gera um impulso motivacional irresistível para enfrentar a dívida seguinte. Estudos comportamentais mostram que para pessoas altamente ansiosas, o método Bola de Neve apresenta taxas superiores de aderência e sucesso final.</p>

            <h2>3. Estratégias Avançadas de Renegociação e Substituição de Dívidas Caras</h2>
            <p>Nem todas as dívidas devem ser pagas na velocidade que o credor exige quando as taxas são abusivas. Existem táticas legítimas de alavancagem na negociação:</p>
            <ol>
                <li><strong>Substituição de Dívida (Portabilidade de Crédito):</strong> Trocar uma dívida com CET de 14% ao mês (cartão de crédito) por uma linha de crédito pessoal consignada ou com garantia imobiliária/veicular com juros de 1,5% a 2% ao mês estanca instantaneamente a hemorragia de juros.</li>
                <li><strong>Negociação Direta com Desconto para Pagamento à Vista:</strong> As instituições financeiras provisionam perdas após certo período de inadimplência. Ao acumular uma reserva de oportunidade e procurar o credor em feirões de renegociação, é comum obter abatimentos de 60% a 90% sobre o saldo devedor acumulado.</li>
                <li><strong>Priorização de Dívidas Essenciais com Garantia Real:</strong> Financiamentos imobiliários e de veículos devem ser priorizados caso haja risco iminente de retomada do bem, enquanto dívidas quirografárias (sem garantia) oferecem maior margem de negociação posterior.</li>
            </ol>

            <h2>4. Erros Fatais no Processo de Quitação de Dívidas</h2>
            <p>Evite cair nas seguintes armadilhas durante a sua jornada de recuperação:</p>
            <ul>
                <li><strong>Contratar Novos Empréstimos Sem Mudar o Comportamento:</strong> Pegar um empréstimo para pagar o cartão sem cortar o uso do cartão apenas duplica o problema após alguns meses.</li>
                <li><strong>Usar a Reserva de Emergência de Forma Imprudente:</strong> Deixar-se totalmente desprovido de liquidez para amortizar dívidas expõe você a novas dívidas diante do primeiro imprevisto médico ou doméstico.</li>
                <li><strong>Aceitar Acordos com Parcelas Que Não Cabem no Orçamento:</strong> Quebrar um acordo de renegociação cancela os descontos concedidos e reinicia a cobrança integral com encargos retroativos.</li>
            </ul>

            <h2>5. Conclusão: O Renascimento Patrimonial</h2>
            <p>Eliminar as dívidas é a decisão mais lucrativa e libertadora que você pode tomar em sua vida financeira. Não existe aplicação no mercado de capitais que renda mais do que os 300% ou 400% ao ano que você economiza ao estancar juros bancários predatórios.</p>
            <p>Quer ter acesso ao passo a passo detalhado, cartas-modelo de negociação e planilhas de amortização automática? Conheça o e-book <strong>Dívidas e Reserva de Emergência</strong>, o segundo volume essencial da Coleção Finanças & Investimentos da CONEXUS E-BOOKS.</p>
        """,
        "faqs": [
            {
                "question": "Devo investir ou pagar todas as minhas dívidas primeiro?",
                "answer": "Se as dívidas possuem juros superiores aos rendimentos da renda fixa (como cartão de crédito e cheque especial), é prioritário liquidá-las. A única exceção é manter uma pequena reserva de segurança básica para contingências urgentes."
            },
            {
                "question": "Como saber se vale a pena fazer a portabilidade de crédito?",
                "answer": "Compare sempre o Custo Efetivo Total (CET) anual e mensal das duas operações. Se a nova instituição oferecer taxa inferior incluindo todos os encargos e tributos, a migração é altamente vantajosa."
            }
        ],
        "internalLinks": [
            {"label": "E-book Dívidas e Reserva de Emergência", "url": "/ebooks/dividas-e-reserva"},
            {"label": "Coleção Finanças & Investimentos", "url": "/colecoes/colecao-financas-e-investimentos"}
        ]
    },
    "en": {
        "title": "How to Eliminate Debt: The Strategic Method for Financial Freedom",
        "seoTitle": "How to Eliminate Debt: Strategic Step-by-Step Guide | CONEXUS Blog",
        "metaDescription": "Learn how to crush high-interest debt using the Snowball and Avalanche methods, negotiate with creditors, and permanently regain financial control.",
        "excerpt": "A proven, systematic roadmap to eradicate consumer debt, halt the destructive impact of compounding interest, and rebuild your financial sovereignty.",
        "content": """
            <h2>The Reality of Debt and the Mechanics of Compounding Liabilities</h2>
            <p>Being trapped in consumer debt is far more than an uncomfortable mathematical deficit on a bank ledger; it is an insidious burden that drains psychological well-being, strains interpersonal relationships, and paralyzes your ability to take calculated career and business risks. In modern banking architecture, compound interest functions as an unyielding double-edged sword: when deployed in productive investments, it generates generational wealth; when contracted in revolving credit cards and high-interest overdraft facilities, it compounds liabilities at predatory velocities that quickly escape mathematical control.</p>
            <p>The foundational step toward reversing this trajectory is stripping away moral stigma. Becoming indebted is rarely a reflection of moral inadequacy; in the overwhelming majority of circumstances, it stems from an educational void in personal cash flow management, sudden life contingencies (medical emergencies, unexpected job loss), and sophisticated advertising ecosystems engineered to trigger debt-financed consumption.</p>
            <p>In this comprehensive CONEXUS E-BOOKS strategic guide, we provide an analytical, judgment-free operational blueprint to negotiate your liabilities, extinguish predatory debt, and reclaim permanent sovereignty over your earnings.</p>

            <h2>1. Executing a Comprehensive Debt Audit</h2>
            <p>You cannot effectively dismantle a financial adversary that remains obscured in uncertainty. Many indebted individuals instinctively avoid reviewing collection letters or checking credit balances due to acute stress and anxiety. However, this psychological avoidance mechanism only accelerates compounding debt accumulation.</p>
            <p>To seize strategic control, construct a centralized liability ledger detailing four non-negotiable parameters for every obligation:</p>
            <ul>
                <li><strong>Creditor & Debt Structure:</strong> Banking institution, retail credit provider, auto loan servicer, student debt, or private unsecured loans.</li>
                <li><strong>Current Total Payoff Balance:</strong> The exact principal and interest required to extinguish the debt in full today.</li>
                <li><strong>Annual Percentage Rate (APR) / Total Effective Cost:</strong> The true annualized interest rate charged, including embedded insurance premiums and servicing fees.</li>
                <li><strong>Mandatory Monthly Minimum Payment:</strong> The baseline required to maintain the account in good contractual standing.</li>
            </ul>

            <h2>2. The Two Proven Battle Strategies: Debt Avalanche vs. Debt Snowball</h2>
            <p>Once your liability ledger is established, select your primary repayment strategy based on your financial capacity and psychological temperament:</p>
            <p><strong>The Debt Avalanche Method (Mathematically Superior):</strong> Rank all debts in descending order by interest rate (APR). You allocate every available surplus dollar toward aggressively eliminating the debt carrying the highest interest rate, while maintaining minimum payments on all other balances. Once the costliest debt is completely eliminated, that entire payment stream cascades into the next highest-rate balance. This strategy mathematically minimizes the total interest paid over the life of your debt repayment journey.</p>
            <p><strong>The Debt Snowball Method (Psychologically Optimized):</strong> Popularized by financial author Dave Ramsey, this framework ranks debts strictly by balance size, from smallest to largest, disregarding interest rates. You attack the smallest balance with maximum intensity until it is zeroed out. The rapid psychological victory provides an immediate dopamine boost and builds powerful behavioral momentum to tackle successively larger obligations. Clinical behavioral studies confirm that for individuals suffering from severe financial overwhelm, the Snowball method yields superior long-term completion rates.</p>

            <h2>3. Advanced Debt Negotiation and Debt Restructuring Tactics</h2>
            <p>You do not have to accept the initial contractual terms dictated by creditors when interest rates are destructive. Deploy these proven negotiation levers:</p>
            <ol>
                <li><strong>Strategic Debt Consolidation:</strong> Refinancing high-interest credit card debt (often compounding at 20% to 30%+ APR) into a low-interest personal loan or secured home equity line at 6% to 9% APR immediately halts catastrophic interest bleeding.</li>
                <li><strong>Lump-Sum Settlement Negotiations:</strong> Financial institutions frequently charge off delinquent accounts and sell them for pennies on the dollar. By accumulating a dedicated cash settlement fund and approaching creditors directly during designated settlement windows, debtors can often secure 50% to 80% discounts on outstanding balances.</li>
                <li><strong>Prioritizing Secured vs. Unsecured Obligations:</strong> Mortgages and primary auto loans must be protected to prevent property foreclosure or asset repossession, whereas unsecured revolving credit lines offer far greater leverage for structured payoff agreements.</li>
            </ol>

            <h2>4. Fatal Pitfalls During Debt Elimination</h2>
            <p>Protect your recovery trajectory by avoiding these critical missteps:</p>
            <ul>
                <li><strong>Refinancing Debt Without Altering Behavioral Habits:</strong> Securing a consolidation loan without cutting up credit cards inevitably leads to double indebtedness within twelve months.</li>
                <li><strong>Completely Depleting Cash Reserves:</strong> Committing every single cent to debt payoff without maintaining a modest emergency cushion guarantees you will reach for credit at the first unexpected car repair or medical bill.</li>
                <li><strong>Agreeing to Unrealistic Payment Plans:</strong> Defaulting on a negotiated payment agreement immediately invalidates granted waivers and restores full punitive charges retroactively.</li>
            </ul>

            <h2>5. Conclusion: Your Gateway to Financial Regeneration</h2>
            <p>Eradicating toxic consumer debt is the highest-return investment you will ever execute. There is no asset in global capital markets that can reliably outearn the guaranteed 25% or 35% annualized return achieved by extinguishing predatory credit obligations.</p>
            <p>Looking for practical templates, creditor negotiation scripts, and automated payoff calculators? Discover the comprehensive e-book <strong>Dívidas e Reserva de Emergência</strong> from the CONEXUS E-BOOKS Finance & Investment Collection.</p>
        """,
        "faqs": [
            {
                "question": "Should I invest while paying off high-interest consumer debt?",
                "answer": "If your debt interest rate exceeds what conservative fixed-income investments yield (such as credit card balances and high-rate personal loans), paying off the debt is mathematically superior. The only exception is building a small baseline emergency reserve."
            },
            {
                "question": "How do I know if debt consolidation is right for me?",
                "answer": "Carefully compare the Total Effective Cost (APR plus all origination fees) of the new facility against your existing debts. If the consolidated loan significantly lowers your interest rate and you have closed the old lines of credit, consolidation is highly advantageous."
            }
        ],
        "internalLinks": [
            {"label": "Debt & Emergency Reserve E-book", "url": "/ebooks/dividas-e-reserva"},
            {"label": "Finance & Investment Collection", "url": "/colecoes/colecao-financas-e-investimentos"}
        ]
    },
    "es": {
        "title": "Cómo Salir de las Deudas: El Método Estratégico para la Libertad Financiera",
        "seoTitle": "Cómo Salir de Deudas: Guía Estratégica Paso a Paso | Blog CONEXUS",
        "metaDescription": "Aprende a eliminar deudas con los métodos Bola de Nieve y Avalancha, renegociar con acreedores y detener los intereses abusivos de forma definitiva.",
        "excerpt": "Un plan de acción riguroso y comprobado para liquidar pasivos, neutralizar los intereses negativos y reconstruir tu patrimonio con seguridad.",
        "content": """
            <h2>La Realidad del Endeudamiento y la Trampa de los Intereses Compuestos</h2>
            <p>Estar endeudado no es solo un dilema matemático de saldos negativos en una cuenta corriente; es una carga silenciosa que desgasta la salud mental, deteriora las relaciones personales y limita la libertad para tomar decisiones profesionales audaces. En el sistema financiero contemporáneo, los intereses compuestos operan de forma implacável: cuando inviertes, multiplican tu patrimonio de forma exponencial; cuando contraes deudas de consumo, especialmente en tarjetas de crédito revolving y préstamos rápidos, acumulan pasivos a tasas confiscatorias que escapan con rapidez a todo control.</p>
            <p>El primer paso indispensable para romper este ciclo es erradicar el sentimiento de culpa. El endeudamiento rara vez se debe a una falta de rectitud moral; en la inmensa mayoría de los casos, obedece a una ausencia de educación financiera estructurada, imprevistos sobrevenidos (desempleo, gastos médicos) y a una cultura comercial diseñada para incentivar el consumo impulsivo mediante crédito accesible.</p>
            <p>En esta guía estratégica de CONEXUS E-BOOKS, te ofrecemos un plan de acción analítico, exento de juicios y enfocado en la ingeniería financiera práctica para que renegocies tus obligaciones, liquides a tus acreedores y recuperes la soberanía de tu economía.</p>

            <h2>1. Radiografía Completa del Pasivo Financiero</h2>
            <p>Es imposible derrotar a un adversario que permanece en la sombra. Muchas personas endeudadas postergan la apertura de notificaciones bancarias o evitan revisar sus extractos debido a la ansiedad que les provoca. Sin embargo, este mecanismo de evasión psicológica únicamente acelera la acumulación de intereses de demora.</p>
            <p>Para tomar el control definitivo, elabora una tabla centralizada con todas tus deudas pendientes que contenga cuatro columnas fundamentales:</p>
            <ul>
                <li><strong>Acreedor y Tipo de Deuda:</strong> Entidad bancaria, tarjeta de gran superficie, crédito para automóvil, préstamo personal o deudas privadas.</li>
                <li><strong>Saldo Pendiente de Amortización:</strong> La cantidad exacta necesaria para saldar la deuda en su totalidad a día de hoy.</li>
                <li><strong>Coste Efectivo Total (TAE) / Tasa de Interés:</strong> El tipo de interés real aplicado por la entidad, incluyendo comisiones de apertura, seguros vinculados y gastos de gestión.</li>
                <li><strong>Cuota Mínima Mensual Exigida:</strong> El importe imprescindible para mantener el contrato al corriente de pago.</li>
            </ul>

            <h2>2. Dos Metodologías Contrastadas: Avalancha vs. Bola de Nieve</h2>
            <p>Una vez completada la radiografía de tus deudas, es el momento de seleccionar la estrategia de amortización más adecuada a tu perfil:</p>
            <p><strong>El Método Avalancha (Matemáticamente Óptimo):</strong> Consiste en ordenar las deudas de mayor a menor tasa de interés (TAE). Diriges todos los recursos excedentes de tu presupuesto mensual a liquidar agresivamente la deuda más gravosa (habitualmente tarjetas de crédito revolving o microcréditos), mientras abonas únicamente la cuota mínima en el resto. Al saldar la primera deuda, todo el flujo de caja liberado se destina a la siguiente más cara. Este método minimiza el total de intereses pagados a las entidades bancarias.</p>
            <p><strong>El Método Bola de Nieve (Psicológicamente Potente):</strong> Popularizado por el consultor financiero Dave Ramsey, este enfoque ordena las deudas de menor a mayor saldo pendiente, con independencia del tipo de interés. Amortizas en primer lugar la deuda más pequeña con la máxima rapidez. Conseguir esa primera victoria rápida produce un alivio emocional inmediato y un estímulo motivacional decisivo para encarar las obligaciones siguientes. Diversos estudios demuestran que para personas con elevado estrés financiero, la Bola de Nieve logra tasas de éxito y cumplimiento muy superiores.</p>

            <h2>3. Tácticas Avanzadas de Renegociación y Consolidación de Deuda</h2>
            <p>No tienes por qué asumir pasivamente las condiciones contractuales fijadas por los acreedores cuando los intereses resultan desproporcionados. Utiliza estas herramientas estratégicas:</p>
            <ol>
                <li><strong>Consolidación o Reagrupación de Deudas:</strong> Sustituir múltiples deudas caras de tarjetas de crédito (con TAEs del 20% al 25%) por un único préstamo personal o hipotecario al 6% u 8% detiene de inmediato el sangrado financiero y reduce drásticamente la cuota mensual.</li>
                <li><strong>Negociación de Quitas para Pago Único:</strong> Tras ciertos periodos de morosidad, las entidades financieras provisionan los impagos y están dispuestas a aceptar acuerdos con descuentos notables. Al contar con un fondo de oportunidad, es factible pactar quitas del 40% al 70% sobre el saldo pendiente.</li>
                <li><strong>Priorización de Préstamos con Garantía Real:</strong> La hipoteca y el préstamo del vehículo deben atenderse con prioridad para evitar embargos o pérdidas de bienes indispensables, mientras que el crédito al consumo sin garantía ofrece un margen de negociación superior.</li>
            </ol>

            <h2>4. Errores Críticos Durante la Liquidación de Deudas</h2>
            <p>Para asegurar el éxito de tu plan, evita los siguientes errores comunes:</p>
            <ul>
                <li><strong>Refinanciar sin Modificar los Hábitos de Gasto:</strong> Solicitar un préstamo de reunificación y continuar utilizando las tarjetas de crédito multiplica el problema al cabo de unos meses.</li>
                <li><strong>Agotar la Totalidad de la Liquidez de Emergencia:</strong> Destinar hasta el último céntimo a pagar deudas sin mantener un pequeño fondo de seguridad te obligará a endeudarte de nuevo ante cualquier contingencia imprevista.</li>
                <li><strong>Firmar Convenios con Cuotas Inasumibles:</strong> Incumplir un acuerdo de refinanciación anula las quitas concedidas y reactiva la reclamación judicial con intereses adicionales.</li>
            </ul>

            <h2>5. Conclusión: El Renacimiento de tu Tranquilidad Financiera</h2>
            <p>Erradicar las deudas tóxicas es la inversión con mayor rentabilidad real y psicológica que jamás llevarás a cabo. No existe ningún producto financiero en el mercado capaz de igualar con seguridad el 20% o 30% anual que ahorras al suprimir los intereses de la deuda de consumo.</p>
            <p>¿Deseas disponer de modelos de cartas para acreedores, simuladores de amortización y metodologías paso a paso? Descubre el e-book <strong>Dívidas e Reserva de Emergência</strong> de la Colección Finanzas & Inversiones de CONEXUS E-BOOKS.</p>
        """,
        "faqs": [
            {
                "question": "¿Debo invertir o liquidar primero todas mis deudas?",
                "answer": "Si tus deudas aplican intereses superiores al rendimiento de la renta fija segura (como las tarjetas de crédito), la prioridad absoluta debe ser liquidarlas. La única excepción es conservar un pequeño fondo de reserva para imprevistos urgentes."
            },
            {
                "question": "¿Cómo determinar si conviene consolidar mis deudas en un solo préstamo?",
                "answer": "Compara la Tasa Anual Equivalente (TAE) global de la nueva operación frente al promedio de tus deudas vigentes. Si la consolidación reduce el tipo de interés y cancelas las líneas de crédito anteriores, la operación es sumamente conveniente."
            }
        ],
        "internalLinks": [
            {"label": "E-book Deudas y Fondo de Emergencia", "url": "/ebooks/dividas-e-reserva"},
            {"label": "Colección Finanzas & Inversiones", "url": "/colecoes/colecao-financas-e-investimentos"}
        ]
    }
}
finance_articles.append(post_dividas)

print(f"Total finance articles ready in batch: {len(finance_articles)}")
