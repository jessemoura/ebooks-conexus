# scripts/compile_all_30_blog_posts.py
# Compiles all 30 articles (90 versions) into src/data/blogPosts.ts
# Audits word counts strictly against the >= 1,000 words rule

import json
import re
import os
import sys

sys.path.insert(0, os.path.abspath('.'))

def count_words(text):
    if not text:
        return 0
    # Strip HTML tags
    clean = re.sub(r'<[^>]+>', ' ', text)
    # Strip non-alphanumeric punctuation except letters and spaces
    clean = re.sub(r'[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split()) if clean else 0

# Import all base articles
from scripts.posts_finance_1_5 import posts_finance_1_5
from scripts.finance_posts_data import post_dividas
from scripts.generate_all_finance import post_reserva
from scripts.content_finance_all import article_5
from scripts.gen_finance import post_6
from scripts.gen_finance_part2 import post_7
from scripts.data_finance_1_13 import post_8
from scripts.finance_complete import post_9
from scripts.finance_complete_10_13 import post_10
from scripts.data_finance_11_13 import post_11
from scripts.data_finance_12_13 import post_12, post_13

from scripts.data_spanish_all import post_14
from scripts.data_spanish_15_22 import post_15
from scripts.build_language_modules import post_16
from scripts.gen_spanish_17_22 import post_17
from scripts.gen_spanish_18_22 import post_18
from scripts.gen_spanish_19_22 import post_19
from scripts.gen_spanish_20_22 import post_20, post_21, post_22

from scripts.data_italian_23_26 import post_23
from scripts.data_italian_24_26 import post_24, post_25
from scripts.data_italian_26_30 import post_26
from scripts.data_italian_27_30 import post_27, post_28, post_29, post_30

# Import expansion modules
from scripts.expand_finance_2_13 import finance_expansions
from scripts.expand_spanish_14_22 import spanish_expansions
from scripts.expand_italian_23_30 import italian_expansions
from scripts.expand_part2 import supplemental_expansions
from scripts.expand_part3 import booster_expansions
from scripts.expand_part4 import final_booster

all_expansions_list = [
    finance_expansions,
    spanish_expansions,
    italian_expansions,
    supplemental_expansions,
    booster_expansions,
    final_booster
]

raw_articles = [
    # 1 to 13 Finance
    posts_finance_1_5[0], # 1
    posts_finance_1_5[1], # 2
    post_dividas,          # 3
    post_reserva,          # 4
    article_5,             # 5
    post_6,                # 6
    post_7,                # 7
    post_8,                # 8
    post_9,                # 9
    post_10,               # 10
    post_11,               # 11
    post_12,               # 12
    post_13,               # 13
    # 14 to 22 Spanish
    post_14,               # 14
    post_15,               # 15
    post_16,               # 16
    post_17,               # 17
    post_18,               # 18
    post_19,               # 19
    post_20,               # 20
    post_21,               # 21
    post_22,               # 22
    # 23 to 30 Italian
    post_23,               # 23
    post_24,               # 24
    post_25,               # 25
    post_26,               # 26
    post_27,               # 27
    post_28,               # 28
    post_29,               # 29
    post_30                # 30
]

print(f"Total raw articles assembled: {len(raw_articles)}")

# Build the structured BlogPost lists for pt, en, es
pt_posts = []
en_posts = []
es_posts = []

audit_results = []
all_word_counts = []

for idx, a in enumerate(raw_articles, 1):
    slug = a["slug"]
    img = a["featuredImage"]
    ebook_id = a.get("relatedEbookId")
    rel_slugs = a.get("relatedPostSlugs", [])
    
    # PT
    pt_data = a["pt"]
    pt_content = pt_data["content"].strip()
    # EN
    en_data = a["en"]
    en_content = en_data["content"].strip()
    # ES
    es_data = a["es"]
    es_content = es_data["content"].strip()

    for exp_dict in all_expansions_list:
        if slug in exp_dict:
            e = exp_dict[slug]
            if "pt" in e and e["pt"]:
                pt_content = pt_content + "\n" + e["pt"].strip()
            if "en" in e and e["en"]:
                en_content = en_content + "\n" + e["en"].strip()
            if "es" in e and e["es"]:
                es_content = es_content + "\n" + e["es"].strip()

    pt_w = count_words(pt_content)
    pt_obj = {
        "id": a["id"],
        "slug": slug,
        "title": pt_data["title"],
        "seoTitle": pt_data["seoTitle"],
        "metaDescription": pt_data["metaDescription"],
        "excerpt": pt_data["excerpt"],
        "content": pt_content,
        "featuredImage": img,
        "category": a["categoryPt"],
        "readTime": a["readTimePt"],
        "publishDate": a["publishDatePt"],
        "faqs": pt_data["faqs"],
        "relatedEbookId": ebook_id,
        "relatedPostSlugs": rel_slugs,
        "internalLinks": pt_data.get("internalLinks", [])
    }
    pt_posts.append(pt_obj)
    
    en_w = count_words(en_content)
    en_obj = {
        "id": a["id"],
        "slug": slug,
        "title": en_data["title"],
        "seoTitle": en_data["seoTitle"],
        "metaDescription": en_data["metaDescription"],
        "excerpt": en_data["excerpt"],
        "content": en_content,
        "featuredImage": img,
        "category": a["categoryEn"],
        "readTime": a["readTimeEn"],
        "publishDate": a["publishDateEn"],
        "faqs": en_data["faqs"],
        "relatedEbookId": ebook_id,
        "relatedPostSlugs": rel_slugs,
        "internalLinks": en_data.get("internalLinks", [])
    }
    en_posts.append(en_obj)
    
    es_w = count_words(es_content)
    es_obj = {
        "id": a["id"],
        "slug": slug,
        "title": es_data["title"],
        "seoTitle": es_data["seoTitle"],
        "metaDescription": es_data["metaDescription"],
        "excerpt": es_data["excerpt"],
        "content": es_content,
        "featuredImage": img,
        "category": a["categoryEs"],
        "readTime": a["readTimeEs"],
        "publishDate": a["publishDateEs"],
        "faqs": es_data["faqs"],
        "relatedEbookId": ebook_id,
        "relatedPostSlugs": rel_slugs,
        "internalLinks": es_data.get("internalLinks", [])
    }
    es_posts.append(es_obj)
    
    status = "APROVADO" if (pt_w >= 1000 and en_w >= 1000 and es_w >= 1000) else "REPROVADO"
    audit_results.append({
        "num": idx,
        "slug": slug,
        "pt_words": pt_w,
        "en_words": en_w,
        "es_words": es_w,
        "status": status
    })
    all_word_counts.extend([pt_w, en_w, es_w])

# Print Audit Table
print("\n" + "="*80)
print("AUDITORIA DE PALAVRAS POR ARTIGO E IDIOMA")
print("="*80)
print(f"{'#':<3} | {'Slug / Artigo':<55} | {'PT':<5} | {'EN':<5} | {'ES':<5} | {'Status'}")
print("-" * 85)
reprovados_count = 0
for r in audit_results:
    print(f"{r['num']:<3} | {r['slug']:<55} | {r['pt_words']:<5} | {r['en_words']:<5} | {r['es_words']:<5} | {r['status']}")
    if r['status'] != "APROVADO":
        reprovados_count += 1

print("-" * 85)
min_words = min(all_word_counts)
max_words = max(all_word_counts)
avg_words = sum(all_word_counts) / len(all_word_counts)
print(f"Total de artigos únicos: {len(raw_articles)}")
print(f"Total de versões (PT+EN+ES): {len(all_word_counts)}")
print(f"Menor artigo encontrado: {min_words} palavras")
print(f"Maior artigo: {max_words} palavras")
print(f"Média de palavras: {avg_words:.1f} palavras")
print(f"Artigos reprovados (<1000 palavras): {reprovados_count}")
print("="*80)

# Write src/data/blogPosts.ts
ts_content = "import { BlogPost, Language } from '../types';\n\n"
ts_content += "export const blogPostsData: Record<Language, BlogPost[]> = {\n"
ts_content += "  pt: " + json.dumps(pt_posts, ensure_ascii=False, indent=2) + ",\n"
ts_content += "  en: " + json.dumps(en_posts, ensure_ascii=False, indent=2) + ",\n"
ts_content += "  es: " + json.dumps(es_posts, ensure_ascii=False, indent=2) + "\n"
ts_content += "};\n\n"
ts_content += "export const getBlogPosts = (language: Language = 'pt'): BlogPost[] => {\n"
ts_content += "  return blogPostsData[language] || blogPostsData.pt;\n"
ts_content += "};\n\n"
ts_content += "export const getBlogPostBySlug = (slug: string, language: Language = 'pt'): BlogPost | undefined => {\n"
ts_content += "  const posts = getBlogPosts(language);\n"
ts_content += "  return posts.find((p) => p.slug === slug);\n"
ts_content += "};\n"

target_path = os.path.join("src", "data", "blogPosts.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"\nSuccessfully wrote {target_path} ({os.path.getsize(target_path)} bytes)")

