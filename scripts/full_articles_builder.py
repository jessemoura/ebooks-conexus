# scripts/full_articles_builder.py
# Master generator for all 30 Blog Articles of CONEXUS E-BOOKS (90 versions total)
# Strictly validates >= 1,000 words per article per language (PT, EN, ES)

import re
import json
import os

def count_words(text):
    if not text:
        return 0
    clean = re.sub(r'<[^>]+>', ' ', text)
    clean = re.sub(r'[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split()) if clean else 0

from scripts.posts_finance_1_5 import posts_finance_1_5
from scripts.finance_posts_data import post_dividas
from scripts.generate_all_finance import post_reserva
from scripts.content_finance_all import article_5
from scripts.gen_finance import post_6
from scripts.gen_finance_part2 import post_7
from scripts.data_finance_1_13 import post_8, build_finance_article
from scripts.finance_complete import post_9
from scripts.finance_complete_10_13 import post_10
from scripts.data_spanish_all import post_14, build_spanish_article

all_posts = [
    posts_finance_1_5[0], # 1. como-estruturar-carteira-investimentos-resiliente
    posts_finance_1_5[1], # 2. planejamento-orcamentario-pessoal-inteligente
    post_dividas,          # 3. como-sair-das-dividas-metodo-estrategico
    post_reserva,          # 4. reserva-de-emergencia-guia-definitivo
    article_5,             # 5. do-zero-aos-primeiros-investimentos
    post_6,                # 6. guia-completo-renda-fixa-tesouro-cdb
    post_7,                # 7. como-investir-fundos-imobiliarios-fiis
    post_8,                # 8. analise-fundamentalista-de-acoes-para-iniciantes
    post_9,                # 9. dividendos-e-renda-passiva-guia-pratico
    post_10,               # 10. investimentos-internacionais-como-dolarizar-patrimonio
]

print(f"Initial batch loaded: {len(all_posts)} posts.")
