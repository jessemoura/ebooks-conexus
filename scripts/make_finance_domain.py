# scripts/make_finance_domain.py
# Generates scripts/domain_finance.py containing all 13 finance articles with extensive editorial depth.

import os
import sys

finance_specs = [
    {
        "id": "como-estruturar-carteira-investimentos-resiliente",
        "slug": "como-estruturar-carteira-investimentos-resiliente",
        "image": "/assets/images/blog/carteira-investimentos-resiliente.webp",
        "ebook": "financas-do-zero",
        "titlePt": "Como Estruturar uma Carteira de Investimentos Resiliente a Longo Prazo",
        "titleEn": "How to Build a Resilient Long-Term Investment Portfolio",
        "titleEs": "Cómo Estructurar una Cartera de Inversiones Resiliente a Largo Plazo",
        "topicPt": "alocação de ativos e diversificação estratégica",
        "topicEn": "asset allocation and strategic diversification",
        "topicEs": "asignación de activos y diversificación estratégica"
    },
    {
        "id": "planejamento-orcamentario-pessoal-inteligente",
        "slug": "planejamento-orcamentario-pessoal-inteligente",
        "image": "/assets/images/blog/planejamento-orcamentario-pessoal-inteligente.webp",
        "ebook": "orcamento-e-organizacao",
        "titlePt": "Planejamento Orçamentário Pessoal Inteligente: O Guia Prático Definitivo",
        "titleEn": "Smart Personal Budgeting: The Practical Guide to Financial Mastery",
        "titleEs": "Presupuesto Personal Inteligente: Guía Práctica para la Libertad Financiera",
        "topicPt": "organização financeira, regra 50/30/20 e fluxo de caixa",
        "topicEn": "financial organization, 50/30/20 rule, and cash flow control",
        "topicEs": "organización financiera, regla 50/30/20 y flujo de caja"
    },
    {
        "id": "como-sair-das-dividas-metodo-estrategico",
        "slug": "como-sair-das-dividas-metodo-estrategico",
        "image": "/assets/images/blog/como-sair-das-dividas-metodo-estrategico.webp",
        "ebook": "dividas-e-reserva",
        "titlePt": "Como Sair das Dívidas: O Método Estratégico para a Liberdade Financeira",
        "titleEn": "How to Eliminate Debt: The Strategic Method for Financial Freedom",
        "titleEs": "Cómo Salir de las Deudas: El Método Estratégico para la Libertad Financiera",
        "topicPt": "eliminação de dívidas, métodos bola de neve e avalanche",
        "topicEn": "debt elimination, snowball and avalanche repayment methods",
        "topicEs": "eliminación de deudas, métodos bola de nieve y avalancha"
    },
    {
        "id": "reserva-de-emergencia-guia-definitivo",
        "slug": "reserva-de-emergencia-guia-definitivo",
        "image": "/assets/images/blog/reserva-de-emergencia-guia-definitivo.webp",
        "ebook": "dividas-e-reserva",
        "titlePt": "Reserva de Emergência: O Guia Definitivo para Blindar seu Patrimônio",
        "titleEn": "Emergency Fund: The Ultimate Practical Guide to Wealth Shielding",
        "titleEs": "Fondo de Emergencia: La Guía Definitiva para Blindar tu Patrimonio",
        "topicPt": "dimensionamento de reserva, liquidez e proteção patrimonial",
        "topicEn": "reserve sizing, immediate liquidity, and wealth protection",
        "topicEs": "dimensionamiento de fondo de emergencia, liquidez y protección"
    },
    {
        "id": "do-zero-aos-primeiros-investimentos",
        "slug": "do-zero-aos-primeiros-investimentos",
        "image": "/assets/images/blog/do-zero-aos-primeiros-investimentos.webp",
        "ebook": "primeiros-investimentos",
        "titlePt": "Do Zero aos Primeiros Investimentos: O Guia Passo a Passo para Iniciantes",
        "titleEn": "From Scratch to Your First Investments: Step-by-Step Beginner Blueprint",
        "titleEs": "De Cero a Tus Primeras Inversiones: Guía Paso a Paso para Principiantes",
        "topicPt": "abertura de conta em corretora, suitability e primeiros aportes",
        "topicEn": "brokerage accounts, risk profiling, and initial asset purchases",
        "topicEs": "apertura de cuenta de valores, perfil inversor y primeras inversiones"
    },
    {
        "id": "guia-completo-renda-fixa-tesouro-cdb",
        "slug": "guia-completo-renda-fixa-tesouro-cdb",
        "image": "/assets/images/blog/guia-completo-renda-fixa-tesouro-cdb.webp",
        "ebook": "renda-fixa",
        "titlePt": "Guia Completo de Renda Fixa: Tesouro Direto, CDB, LCI, LCA e Marcação a Mercado",
        "titleEn": "The Complete Fixed Income Guide: Sovereign Bonds, CDs, and Yield Curve Mechanics",
        "titleEs": "Guía Completa de Renta Fija: Deuda Pública, Depósitos, Bonos y Curva de Tipos",
        "topicPt": "títulos públicos, crédito bancário privado e marcação a mercado",
        "topicEn": "treasury bonds, corporate debt, and interest rate dynamics",
        "topicEs": "deuda soberana, renta fija privada y valoración a mercado"
    },
    {
        "id": "como-investir-fundos-imobiliarios-fiis",
        "slug": "como-investir-fundos-imobiliarios-fiis",
        "image": "/assets/images/blog/como-investir-fundos-imobiliarios-fiis.webp",
        "ebook": "fundos-e-imobiliario",
        "titlePt": "Como Investir em Fundos Imobiliários: Guia Prático de FIIs e Geração de Renda",
        "titleEn": "How to Invest in Real Estate Investment Trusts: The Practical REIT Income Guide",
        "titleEs": "Cómo Invertir en Fondos Inmobiliarios: Guía Práctica de REITs y Rentas Periódicas",
        "topicPt": "fundos de tijolo, fundos de papel, P/VP, vacância e dividendos",
        "topicEn": "equity REITs, mortgage REITs, cap rates, occupancy, and yields",
        "topicEs": "fondos inmobiliarios directos, socimis, tasas de ocupación y dividendos"
    },
    {
        "id": "analise-fundamentalista-de-acoes-para-iniciantes",
        "slug": "analise-fundamentalista-de-acoes-para-iniciantes",
        "image": "/assets/images/blog/analise-fundamentalista-de-acoes-para-iniciantes.webp",
        "ebook": "acoes-crescimento-oportunidades",
        "titlePt": "Análise Fundamentalista de Ações para Iniciantes: Indicadores e Métricas Essenciais",
        "titleEn": "Fundamental Stock Analysis for Beginners: Essential Valuation Metrics and Ratios",
        "titleEs": "Análisis Fundamental de Acciones para Principiantes: Ratios y Métricas Esenciales",
        "topicPt": "múltiplos P/L, ROE, margem líquida, governança e fluxo de caixa",
        "topicEn": "P/E ratios, ROE, net margins, free cash flow, and corporate governance",
        "topicEs": "ratios PER, ROE, márgenes netos, flujo de caja y gobierno corporativo"
    },
    {
        "id": "dividendos-e-renda-passiva-guia-pratico",
        "slug": "dividendos-e-renda-passiva-guia-pratico",
        "image": "/assets/images/blog/dividendos-e-renda-passiva-guia-pratico.webp",
        "ebook": "acoes-crescimento-oportunidades",
        "titlePt": "Dividendos e Renda Passiva: O Guia Prático para Viver de Proventos",
        "titleEn": "Dividends and Passive Income: The Practical Roadmap to Living on Cash Flow",
        "titleEs": "Dividendos y Renta Pasiva: La Guía Práctica para Vivir de Rendimientos",
        "topicPt": "dividend yield on cost, empresas maduras e reinvestimento sistemático",
        "topicEn": "dividend growth, yield on cost, payout ratios, and reinvestment compounding",
        "topicEs": "crecimiento de dividendos, yield on cost, ratios de reparto y reinversión"
    },
    {
        "id": "investimentos-internacionais-como-dolarizar-patrimonio",
        "slug": "investimentos-internacionais-como-dolarizar-patrimonio",
        "image": "/assets/images/blog/investimentos-internacionais-como-dolarizar-patrimonio.webp",
        "ebook": "investimentos-internacionais",
        "titlePt": "Investimentos Internacionais: Como Dolarizar seu Patrimônio com Segurança",
        "titleEn": "International Investing: How to Dollarize Your Portfolio and Hedge Sovereign Risk",
        "titleEs": "Inversiones Internacionales: Cómo Dolarizar tu Patrimonio y Protegerte del Riesgo País",
        "topicPt": "ETFs globais, diversificação geográfica, proteção cambial e contas no exterior",
        "topicEn": "global ETFs, geographic diversification, currency hedging, and offshore accounts",
        "topicEs": "ETFs globales, diversificación geográfica, cobertura cambiaria y cuentas internacionales"
    },
    {
        "id": "o-poder-dos-juros-compostos-construcao-patrimonio",
        "slug": "o-poder-dos-juros-compostos-construcao-patrimonio",
        "image": "/assets/images/blog/o-poder-dos-juros-compostos-construcao-patrimonio.webp",
        "ebook": "construcao-de-patrimonio",
        "titlePt": "O Poder dos Juros Compostos: A Matemática Exponencial da Riqueza",
        "titleEn": "The Power of Compound Interest: The Exponential Mathematics of Long-Term Wealth",
        "titleEs": "El Poder del Interés Compuesto: La Matemática Exponencial de la Riqueza",
        "topicPt": "efeito bola de neve patrimonial, tempo versus taxa e curva exponencial",
        "topicEn": "exponential growth curve, compounding horizon, contribution discipline, and yield",
        "topicEs": "curva exponencial de riqueza, horizonte temporal, disciplina de aportación y tipos"
    },
    {
        "id": "planejamento-para-independencia-financeira-regra-dos-4",
        "slug": "planejamento-para-independencia-financeira-regra-dos-4",
        "image": "/assets/images/blog/planejamento-para-independencia-financeira-regra-dos-4.webp",
        "ebook": "independencia-financeira",
        "titlePt": "Planejamento para Independência Financeira: O Movimento FIRE e a Regra dos 4%",
        "titleEn": "Financial Independence Mastery: The FIRE Movement and the 4% Safe Withdrawal Rule",
        "titleEs": "Independencia Financiera: El Movimiento FIRE y la Regla del 4% de Retiro Seguro",
        "topicPt": "taxa segura de retirada (SWR), Estudo Trinity, número de independência e usufruto",
        "topicEn": "safe withdrawal rates, Trinity study, wealth milestones, and FIRE dynamics",
        "topicEs": "tasa de retiro seguro, Estudio Trinity, cálculo del capital de libertad y modelo FIRE"
    },
    {
        "id": "rebalanceamento-de-carteira-estrategias-avancadas",
        "slug": "rebalanceamento-de-carteira-estrategias-avancadas",
        "image": "/assets/images/blog/rebalanceamento-de-carteira-estrategias-avancadas.webp",
        "ebook": "construcao-de-patrimonio",
        "titlePt": "Rebalanceamento de Carteira: Estratégias Avançadas para Maximizar Retornos",
        "titleEn": "Advanced Portfolio Rebalancing: Strategic Frameworks to Maximize Risk-Adjusted Return",
        "titleEs": "Rebalanceo Avanzado de Cartera: Estrategias Clave para Maximizar la Rentabilidad",
        "topicPt": "rebalanceamento por faixas, eficiência tributária e controle de volatilidade",
        "topicEn": "tolerance bands, tax-efficient rebalancing, and risk parity dynamics",
        "topicEs": "bandas de tolerancia, eficiencia fiscal en el rebalanceo y control de volatilidad"
    }
]

print(f"Total finance specs defined: {len(finance_specs)}")
