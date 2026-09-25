# scripts/finance_complete.py
# Complete 13 Finance Articles for CONEXUS E-BOOKS (Each >= 1150 words in PT, EN, ES)

import re

def count_words(text):
    if not text:
        return 0
    clean = re.sub(r'<[^>]+>', ' ', text)
    clean = re.sub(r'[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split()) if clean else 0

from scripts.data_finance_1_13 import all_finance, build_finance_article

finance_posts = list(all_finance)

# 9. Dividendos e Renda Passiva
post_9 = build_finance_article(
    slug="dividendos-e-renda-passiva-guia-pratico",
    ebook_id="acoes-crescimento-oportunidades",
    related_slugs=["analise-fundamentalista-de-acoes-para-iniciantes", "como-investir-fundos-imobiliarios-fiis"],
    read_time_min=13,
    pub_date_pt="02 de maio de 2026", pub_date_en="May 02, 2026", pub_date_es="02 de mayo de 2026",
    title_pt="Dividendos e Renda Passiva: O Guia Prático para Viver de Proventos",
    seo_pt="Dividendos e Renda Passiva: Guia para Viver de Renda | Blog CONEXUS",
    meta_pt="Aprenda a construir uma carteira previdenciária de ações pagadoras de dividendos, calcular o Dividend Yield on Cost e reinvestir proventos.",
    excerpt_pt="Descubra a estratégia de investimento em dividendos que transforma empresas maduras e geradoras de caixa em uma máquina de renda perpétua.",
    content_pt="""
        <h2>A Filosofia da Renda Passiva e a Liberdade Financeira Real</h2>
        <p>A estratégia de investimentos focada em dividendos é uma das abordagens mais elegantes, intuitivas e psicologicamente sustentáveis de toda a história do mercado financeiro. Diferente de estratégias puramente especulativas que exigem a venda constante de ações para realizar lucros e custear o padrão de vida, a <strong>estratégia de dividendos</strong> foca na acumulação contínua de participações em empresas consolidadas, maduras e altamente lucrativas que compartilham seus resultados diretamente com seus acionistas em dinheiro vivo creditado na conta.</p>
        <p>No Brasil, onde os dividendos distribuídos às pessoas físicas contam historicamente com isenção de imposto de renda, e nos mercados internacionais onde corporações aristocratas do dividendo elevam seus proventos ininterruptamente há mais de 25 ou 50 anos consecutivos, o fluxo de renda passiva atua como um escudo psicológico contra as oscilações diárias de cotações. Quando o mercado cai, o investidor orientado a dividendos não se desespera: ele comemora a oportunidade de adquirir mais ações a preços descontados, aumentando seu <em>Yield on Cost</em> futuro.</p>
        <p>Neste guia aprofundado da CONEXUS E-BOOKS, desvendaremos a mecânica do reinvestimento de proventos, o ciclo de vida empresarial e o método prático para construir uma 'máquina de dividendos' que trabalhará por você ao longo das décadas.</p>

        <h2>1. A Diferença Entre Dividend Yield e Dividend Yield on Cost (YoC)</h2>
        <p>Um dos maiores equívocos cometidos por investidores iniciantes é analisar apenas o Dividend Yield pontual divulgado nos rankings da internet. Para compreender o verdadeiro poder dos dividendos a longo prazo, é indispensável dominar dois conceitos matemáticos:</p>
        <ul>
            <li><strong>Dividend Yield Atual (DY):</strong> É a razão entre o total de proventos pagos por ação nos últimos 12 meses e o preço de mercado atual daquela ação na bolsa. Por exemplo, uma ação cotada a R$ 50 que pagou R$ 4 de dividendos apresenta um DY de 8,0%.</li>
            <li><strong>Dividend Yield on Cost (YoC):</strong> É a relação entre os proventos recebidos no presente e o <em>preço médio original que você pagou</em> por aquela ação no passado. Se você comprou uma ação há dez anos por R$ 10 e hoje ela paga R$ 5 de dividendos por ano, seu YoC pessoal é de extraordinários 50% ao ano sobre o capital inicialmente investido.</li>
        </ul>
        <p>O objetivo do investidor previdenciário não é buscar o maior DY passageiro do momento, mas comprar empresas resilientes capazes de aumentar continuamente seus lucros por ação, elevando o seu Yield on Cost ano após ano até que os proventos cubram com folga todas as suas despesas mensais de vida.</p>

        <h2>2. O Perfil das Melhores Empresas Pagadoras de Proventos</h2>
        <p>Nem toda empresa listada na bolsa é uma boa pagadora de dividendos. Startups de tecnologia e companhias em estágio inicial de hiper-crescimento precisam reter 100% de seus lucros para reinvestir em novos data centers, contratações e expansão física. As melhores pagadoras de dividendos situam-se na fase de <strong>maturidade empresarial</strong> e reúnem características específicas:</p>
        <ol>
            <li><strong>Demanda Inelástica e Serviços Essenciais:</strong> Empresas que fornecem produtos ou serviços indispensáveis à sociedade, que as pessoas e empresas continuam consumindo mesmo durante crises e recessões severas (setores 'perenes' como energia elétrica, saneamento básico, telecomunicações e grandes bancos).</li>
            <li><strong>Baixa Necessidade de Reinvestimento de Capital (Baixo Capex):</strong> Negócios com infraestrutura física já amortizada e construída, que geram rios de caixa operacional livre sem precisar gastar bilhões anualmente apenas para manter sua operação de pé.</li>
            <li><strong>Payout Saudável e Sustentável:</strong> O <em>Payout</em> é o percentual do lucro líquido que a empresa distribui aos acionistas. Uma faixa de Payout entre 50% e 80% é considerada ideal, pois remunera fartamente os acionistas enquanto retém capital suficiente para contingências e manutenção. Payouts superiores a 100% indicam que a empresa está distribuindo dívida ou reservas passadas, o que é insustentável.</li>
            <li><strong>Histórico Consistente de Distribuição:</strong> Empresas com histórico ininterrupto de pagamentos e crescimento de proventos nos últimos 5, 10 ou 20 anos.</li>
        </ol>

        <h2>3. A Mágica Matemática do Reinvestimento Sistemático</h2>
        <p>Durante a fase de acumulação patrimonial, a regra mais importante da estratégia de dividendos é: <strong>jamais gastar os dividendos recebidos</strong>. Cada centavo de provento que entra na sua conta deve ser imediatamente utilizado para comprar mais ações da mesma empresa ou de outras excelentes companhias da sua carteira.</p>
        <p>Esse reinvestimento sistemático aciona um circuito virtuoso exponencial de três motores:</p>
        <ul>
            <li><strong>Motor 1:</strong> Você compra mais ações sem precisar tirar dinheiro adicional do seu salário mensal.</li>
            <li><strong>Motor 2:</strong> No trimestre seguinte, você terá um número maior de ações recebendo dividendos.</li>
            <li><strong>Motor 3:</strong> As próprias empresas aumentam os proventos por ação à medida que seus lucros crescem com a inflação.</li>
        </ul>
        <p>Estudos clássicos de Wharton comprovam que, ao longo de horizontes de 30 a 50 anos, mais de 80% do retorno total acumulado pelo índice S&P 500 decorre exclusivamente do reinvestimento dos dividendos somado ao poder dos juros compostos.</p>

        <h2>4. Erros Críticos que Destroem a Carteira de Dividendos</h2>
        <p>Fique atento para não cair nas armadilhas comuns dos proventos:</p>
        <ol>
            <li><strong>Cair na 'Dividend Trap' (A Armadilha do Dividendo Fantasma):</strong> Comprar uma ação com DY de 25% sem perceber que aquele dividendo foi inflado artificialmente pela venda de uma subsidiária ou que o preço da ação desabou 80% devido a problemas estruturais no negócio.</li>
            <li><strong>Ignorar o Nível de Endividamento da Companhia:</strong> Empresas endividadas que mantêm dividendos elevados apenas para agradar o mercado logo são forçadas a cortar abruptamente as distribuições para não quebrar.</li>
            <li><strong>Falta de Diversificação Setorial:</strong> Concentrar 100% da carteira apenas em bancos ou apenas em elétricas, ficando vulnerável a mudanças regulatórias setoriais pontuais.</li>
        </ol>

        <h2>5. Conclusão e Continuidade no Aprendizado</h2>
        <p>Viver de dividendos não é um sonho inalcançável, mas o resultado matemático de disciplina, consistência de aportes mensais e reinvestimento inegociável de todos os proventos durante anos. Cada nova ação que você adquire é um trabalhador incansável operando 24 horas por dia para a sua liberdade.</p>
        <p>Deseja ter acesso a fórmulas práticas de Preço Teto (Método Bazin e Décio Bazin), matrizes de seleção setorial e planilhas de projeção de renda futura? Conheça o e-book <strong>Ações: Crescimento e Oportunidades</strong> da Coleção Finanças & Investimentos da CONEXUS E-BOOKS.</p>
    """,
    faqs_pt=[
        {"question": "O que é o Preço Teto pelo Método Bazin?", "answer": "É o preço máximo a pagar por uma ação para garantir um Dividend Yield mínimo desejado (geralmente 6%). Calcula-se dividindo a média dos dividendos dos últimos anos por 0,06."},
        {"question": "Os dividendos de ações americanas pagam imposto?", "answer": "Para investidores brasileiros, os dividendos de ações nos EUA sofrem retenção na fonte de 30% pelo IRS americano, mas o ganho em moeda forte e crescimento das empresas costuma compensar amplamente."}
    ],
    title_en="Dividends and Passive Income: The Practical Roadmap to Living on Cash Flow",
    seo_en="Dividends and Passive Income: Complete Cash Flow Guide | CONEXUS Blog",
    meta_en="Learn how to build a durable dividend growth portfolio, master Yield on Cost metrics, and systematically reinvest cash flows for financial freedom.",
    excerpt_en="Discover the time-tested dividend growth investing strategy that turns cash-generating mature companies into a perpetual wealth machine.",
    content_en="""
        <h2>The Philosophy of Passive Dividend Income and Genuine Autonomy</h2>
        <p>The dividend growth investing strategy represents one of the most intellectually sound, emotionally robust, and historically proven approaches in global capital markets. Unlike speculative trading approaches that require constantly selling off shares to harvest gains and fund living expenses, the <strong>dividend growth strategy</strong> focuses on the continuous accumulation of equity stakes in dominant, mature, highly cash-generative corporations that distribute recurring cash payouts directly to shareholders.</p>
        <p>Across global markets—home to illustrious Dividend Aristocrats and Kings that have increased cash payouts without interruption for over 25 to 50 consecutive years—recurring dividend streams function as a psychological anchor during market volatility. When stock prices decline, the dividend investor does not despair: they embrace the opportunity to acquire more shares at discounted valuations, dramatically increasing their future <em>Yield on Cost</em>.</p>
        <p>In this comprehensive CONEXUS E-BOOKS master guide, we decode the mechanics of systematic dividend reinvestment, analyze corporate lifecycle economics, and present the actionable blueprint for engineering a self-sustaining cash flow engine that works for you over decades.</p>

        <h2>1. Differentiating Between Current Dividend Yield and Yield on Cost (YoC)</h2>
        <p>A widespread mistake among novice investors is obsessing exclusively over current headline dividend yields. To unlock the true mathematical power of compounding dividends, you must distinguish between two fundamental metrics:</p>
        <ul>
            <li><strong>Current Dividend Yield (DY):</strong> The ratio of total cash dividends distributed per share over the trailing twelve months relative to the prevailing market share price. For example, a stock trading at $100 paying $4.00 in annual dividends provides a current DY of 4.0%.</li>
            <li><strong>Dividend Yield on Cost (YoC):</strong> The ratio of current dividend payments received relative to the <em>original average cost basis</em> paid per share. If you acquired a premier enterprise a decade ago at a cost basis of $20 per share and it now distributes $6 in annual dividends, your personal Yield on Cost is an astonishing 30% annually on invested capital.</li>
        </ul>
        <p>The strategic objective of the dividend investor is not chasing temporary, high-risk yields, but buying durable, wide-moat companies that systematically grow their earnings and distributions year after year.</p>

        <h2>2. Anatomy of Premier Dividend Growth Enterprises</h2>
        <p>Not every publicly traded enterprise is suited for a dividend growth portfolio. Early-stage technology startups and hyper-growth businesses require 100% capital retention to finance infrastructure expansion, marketing, and R&D. The premier dividend compounders operate in the phase of <strong>corporate maturity</strong> and share distinct traits:</p>
        <ol>
            <li><strong>Inelastic Consumer Demand & Essential Utilities:</strong> Corporations providing essential goods and services that consumers and businesses purchase regardless of macroeconomic contractions (consumer staples, regulated utilities, healthcare, pipeline infrastructure, enterprise banking).</li>
            <li><strong>Low Capital Expenditure Intensity (Low Capex):</strong> Mature businesses with depreciated physical infrastructure that generate abundant free cash flow without requiring massive recurring reinvestment just to maintain operations.</li>
            <li><strong>Sustainable Payout Ratios:</strong> The <em>Payout Ratio</em> reflects the percentage of net earnings distributed as dividends. A payout ratio between 40% and 75% is optimal, rewarding shareholders while preserving a conservative buffer for operational contingencies. Payouts exceeding 100% indicate destructive capital distribution.</li>
            <li><strong>Unbroken Multi-Decade Dividend Growth Records:</strong> A demonstrated executive commitment to uninterrupted payout growth through recessions, financial crises, and inflationary cycles.</li>
        </ol>

        <h2>3. The Exponential Mechanics of Systematic Reinvestment</h2>
        <p>During your multi-decade wealth accumulation phase, the cardinal rule of dividend investing is: <strong>never spend your dividend cash flows</strong>. Every dollar in distributed provents must be automatically redirected into acquiring additional shares of high-conviction holdings.</p>
        <p>This automated reinvestment engine unleashes a three-tier compounding dynamic:</p>
        <ul>
            <li><strong>Tier 1:</strong> You accumulate additional shares without requiring fresh capital contributions from active employment earnings.</li>
            <li><strong>Tier 2:</strong> In the subsequent quarter, a larger total share count generates an increased aggregate cash dividend payout.</li>
            <li><strong>Tier 3:</strong> The underlying corporations organically grow their dividend per share, compounding total returns from both share count growth and payout growth.</li>
        </ul>
        <p>Comprehensive historical studies by the Wharton School and Ned Davis Research reveal that over 40 to 60-year horizons, reinvested dividends accounted for more than 75% of the total cumulative return generated by the S&P 500 Index.</p>

        <h2>4. Critical Traps in Dividend Investing</h2>
        <p>Shield your income portfolio by steering clear of these common pitfalls:</p>
        <ol>
            <li><strong>The Dividend Yield Trap:</strong> Buying companies sporting optical yields of 15% to 20% without realizing the yield is artificially elevated due to an 80% stock price crash following severe business impairment.</li>
            <li><strong>Overleveraged Balance Sheets:</strong> Companies funding dividends through debt issuance rather than organic operating cash flows, leading to inevitable dividend slashing.</li>
            <li><strong>Sector Concentration:</strong> Concentrating 100% of portfolio capital into a single sector (e.g., exclusively commercial banks or regional utilities), leaving income vulnerable to targeted regulatory shocks.</li>
        </ol>

        <h2>5. Conclusion and Actionable Next Steps</h2>
        <p>Living on passive dividend cash flows is not an elusive fantasy, but the predictable mathematical outcome of disciplined monthly contributions and relentless dividend reinvestment over time. Every new dividend share you purchase is an unyielding worker compounding wealth 24 hours a day for your financial freedom.</p>
        <p>Ready to master intrinsic price ceiling formulas, sector allocation matrices, and cash flow projection models? Explore the e-book <strong>Ações: Crescimento e Oportunidades</strong> from the CONEXUS E-BOOKS Finance & Investment Collection.</p>
    """,
    faqs_en=[
        {"question": "What is a Dividend Aristocrat?", "answer": "A Dividend Aristocrat is an S&P 500 company that has increased its base dividend payout to shareholders every year for at least 25 consecutive years."},
        {"question": "Are dividends taxed differently than capital gains?", "answer": "In most jurisdictions, qualified dividends benefit from preferential tax rates compared to standard income, making long-term dividend holding highly tax-efficient."}
    ],
    title_es="Dividendos y Renta Pasiva: La Guía Práctica para Vivir de Rendimientos",
    seo_es="Dividendos y Renta Pasiva: Guía para Vivir de Rentas | Blog CONEXUS",
    meta_es="Aprende a construir una cartera de acciones de crecimiento de dividendos, calcular el Yield on Cost y reinvertir rendimientos para la libertad financiera.",
    excerpt_es="Descubre la estrategia de inversión en dividendos crecientes que convierte a las empresas maduras en una máquina generadora de rentas perpetuas.",
    content_es="""
        <h2>La Filosofía de la Renta Pasiva y la Auténtica Libertad Financiera</h2>
        <p>La estrategia de inversión en dividendos crecientes representa uno de los enfoques más sensatos, sólidos y psicológicamente sostenibles en la historia de los mercados de valores. A diferencia de las tácticas especulativas que exigen vender acciones continuamente para materializar plusvalías y sufragar el coste de vida, la <strong>estrategia de dividendos</strong> se fundamenta en la acumulación sistemática de participaciones en empresas líderes, maduras y altamente rentables que distribuyen periódicamente sus beneficios directamente en efectivo en tu cuenta bancaria.</p>
        <p>En los mercados globales, las prestigiosas compañías clasificadas como Aristócratas del Dividendo (aquellas que incrementan ininterrumpidamente sus dividendos desde hace más de 25 o 50 años consecutivos) proporcionan un ancla de serenidad psicológica ante las caídas bursátiles. Cuando las cotizaciones bajan, el inversor enfocado en dividendos no siente pánico: celebra la oportunidad de comprar más títulos a precios ventajosos, incrementando sustancialmente su <em>Yield on Cost</em> futuro.</p>
        <p>En esta completa guía de CONEXUS E-BOOKS, analizaremos la mecánica del interés compuesto mediante la reinversión de dividendos, el ciclo de vida empresarial y el método estructurado para crear una máquina de rentas pasivas para toda la vida.</p>

        <h2>1. Diferencia entre Dividend Yield Actual y Yield on Cost (YoC)</h2>
        <p>Uno de los errores más frecuentes entre inversores noveles es analizar únicamente la rentabilidad por dividendo del momento. Para comprender el verdadero potencial de esta estrategia a largo plazo, es indispensable dominar dos métricas clave:</p>
        <ul>
            <li><strong>Dividend Yield Actual (DY):</strong> Mide la relación entre los dividendos distribuidos en los últimos 12 meses y el precio de cotización actual de la acción. Por ejemplo, una acción que cotiza a 40 euros y paga 2 euros de dividendo anual ofrece un DY del 5,0%.</li>
            <li><strong>Yield on Cost (YoC / Rentabilidad sobre Coste Original):</strong> Representa la relación entre los dividendos percibidos en la actualidad y el <em>precio medio de compra</em> que pagaste originalmente por dicha acción en el pasado. Si compraste una acción hace diez años a 10 euros y hoy reparte 4 euros por título, tu YoC personal es de un impresionante 40% anual sobre el capital desembolsado.</li>
        </ul>
        <p>El propósito del inversor a largo plazo no es perseguir rentabilidades elevadas pero efímeras, sino incorporar empresas sólidas capaces de hacer crecer sus dividendos año tras año hasta cubrir holgadamente sus gastos cotidianos.</p>

        <h2>2. Características de las Mejores Empresas Pagadoras de Dividendos</h2>
        <p>No todas las compañías cotizadas son aptas para una cartera de rentas. Las empresas tecnológicas emergentes o en fase de hipercrecimiento necesitan retener el 100% de sus beneficios para financiar infraestructuras y captación de clientes. Las mejores pagadoras de dividendos se sitúan en la fase de <strong>madurez corporativa</strong> y reúnen estas cualidades:</p>
        <ol>
            <li><strong>Demanda Inelástica y Sectores Esenciales:</strong> Compañías que comercializan productos o servicios indispensables que los ciudadanos continúan consumiendo incluso en recesiones severas (suministros energéticos, agua, alimentación básica, farmacia, banca sólida).</li>
            <li><strong>Baja Necesidad de Inversión de Mantenimiento (Capex Moderado):</strong> Negocios con infraestructuras ya construidas y amortizadas que generan elevados flujos libres de caja sin necesidad de acometer gastos extraordinarios recurrentes.</li>
            <li><strong>Ratio de Payout Equilibrado y Sostenible:</strong> El <em>Payout</em> es el porcentaje del beneficio neto que se reparte entre los accionistas. Un ratio entre el 45% y el 75% es óptimo, ya que remunera generosamente al inversor y reserva capital prudencial para imprevistos y crecimiento orgánico. Payouts superiores al 100% resultan insostenibles a largo plazo.</li>
            <li><strong>Historial Ininterrumpido de Pagos Crecientes:</strong> Trayectoria contrastada de incremento de dividendos a lo largo de diversos ciclos económicos.</li>
        </ol>

        <h2>3. El Impacto Exponencial de la Reinversión Sistemática</h2>
        <p>Durante la etapa de acumulación patrimonial, el principio inviolable de esta metodología es: <strong>jamás gastar los dividendos cobrados</strong>. Cada euro recibido en concepto de proventos debe reinvertirse de inmediato en la adquisición de más títulos de empresas líderes.</p>
        <p>Esta reinversión sistemática pone en marcha un triple motor de crecimiento:</p>
        <ul>
            <li><strong>Primer Motor:</strong> Compras más acciones sin tener que aportar nuevo capital de tu nómina.</li>
            <li><strong>Segundo Motor:</strong> En el siguiente ejercicio dispones de un mayor número de títulos generando ingresos.</li>
            <li><strong>Tercer Motor:</strong> Las propias compañías incrementan el dividendo por acción al calor de la inflación y sus mayores beneficios.</li>
        </ul>
        <p>Estudios empíricos demuestran que, a lo largo de cuatro décadas, más del 70% de la rentabilidad total acumulada por los grandes índices bursátiles internacionales proviene exclusivamente de la reinversión de los dividendos.</p>

        <h2>4. Trampas Habituales en la Estrategia de Dividendos</h2>
        <p>Protege tu patrimonio evitando estos errores críticos:</p>
        <ol>
            <li><strong>La Trampa del Yield Engañoso (Dividend Trap):</strong> Comprar una compañía con un dividendo aparente del 20% sin percatarse de que su cotización se ha desplomado por graves pérdidas operativas y que el dividendo será cancelado de inmediato.</li>
            <li><strong>Compañías con Exceso de Endeudamiento:</strong> Empresas que pagan dividendos mediante créditos bancarios en lugar de flujos de caja operativos reales.</li>
            <li><strong>Concentración Monotemática:</strong> Destinar todos los fondos a un solo sector económico, quedando vulnerable a cambios regulatorios imprevistos.</li>
        </ol>

        <h2>5. Conclusión y Pasos para Tu Crecimiento</h2>
        <p>Vivir de los dividendos de tu cartera no es una utopía inalcanzable, sino el resultado matemático de la paciencia, las aportaciones mensuales constantes y la reinversión disciplinada de todos los ingresos generados. Cada nueva acción que incorporas es un activo infatigable que trabaja para tu tranquilidad financiera.</p>
        <p>¿Deseas dominar modelos de selección de empresas de dividendo creciente, análisis de payout y hojas de cálculo de proyección patrimonial? Descubre el e-book <strong>Ações: Crescimento e Oportunidades</strong> de la Colección Finanzas & Inversiones de CONEXUS E-BOOKS.</p>
    """,
    faqs_es=[
        {"question": "¿Qué es una empresa Aristócrata del Dividendo?", "answer": "Es una gran compañía cotizada que ha incrementado ininterrumpidamente el pago de dividendos a sus accionistas durante al menos 25 años consecutivos."},
        {"question": "¿Es mejor elegir acciones con alto dividendo actual o con alto crecimiento de dividendo?", "answer": "Para inversores con horizontes amplios, las empresas con dividendo moderado pero alto crecimiento anual generan a largo plazo un flujo de caja total y revalorización muy superiores."}
    ]
)
finance_posts.append(post_9)

print(f"Total finance posts in finance_posts: {len(finance_posts)}")
