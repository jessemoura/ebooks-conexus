# scripts/fix_and_reorganize_blog_posts.py
import re
import json
import os
import sys

sys.path.insert(0, os.path.abspath('.'))

from scripts.compile_all_30_blog_posts import (
    raw_articles,
    all_expansions_list,
    count_words
)

def fix_lexical_issues(text, lang):
    if not text:
        return text
    
    # Italian contextual typos & Portuguese contamination in Italian quotes
    text = text.replace('di hoje', 'di oggi')
    text = text.replace('di hoje.', 'di oggi.')
    text = text.replace('de hoje', 'di oggi')
    text = text.replace('pontos concordati', 'punti concordati')
    text = text.replace('ações concordate', 'azioni concordate')
    text = text.replace('acoes concordate', 'azioni concordate')
    text = text.replace('fases de proyecto', 'fasi di progetto')
    text = text.replace('fases del progetto', 'fasi del progetto')
    text = text.replace('delle ações concordate', 'delle azioni concordate')
    text = text.replace('delle acoes concordate', 'delle azioni concordate')
    text = text.replace('delle ações', 'delle azioni')
    text = text.replace('delle acoes', 'delle azioni')

    # EN fixes (translate PT ebook titles in CTAs)
    if lang == 'en':
        text = text.replace('Orçamento e Organização Financeira', 'Budgeting and Financial Organization')
        text = text.replace('Dívidas e Reserva de Emergência', 'Debt Management and Emergency Funds')
        text = text.replace('Ações: Crescimento e Oportunidades', 'Stocks: Growth and Opportunities')
        text = text.replace('Fundos Imobiliários: Renda Mensal', 'Real Estate Investment Trusts')
        text = text.replace('Renda Fixa: Segurança e Rentabilidade', 'Fixed Income: Security and Returns')
        text = text.replace('Mentalidade Financeira', 'Financial Mindset')
        text = text.replace('Planejamento Financeiro para o Futuro', 'Financial Planning for the Future')
        text = text.replace('Investimentos no Exterior', 'International Investing')
        text = text.replace('Renda Passiva: O Caminho para a Liberdade', 'Passive Income: The Path to Freedom')

    # Spanish fixes (translate PT ebook titles in CTAs & spelling)
    if lang == 'es':
        text = text.replace('Conclusao', 'Conclusión')
        text = text.replace('Espanha vs', 'España vs')
        text = text.replace('Espanhol', 'Español')
        text = text.replace('espanhol', 'español')
        text = text.replace('lingua', 'lengua')
        text = text.replace('Orçamento e Organização Financeira', 'Presupuesto y Organización Financiera')
        text = text.replace('Dívidas e Reserva de Emergência', 'Deudas y Fondo de Emergencia')
        text = text.replace('Ações: Crescimento e Oportunidades', 'Acciones: Crecimiento y Oportunidades')
        text = text.replace('Fundos Imobiliários: Renda Mensal', 'Fondos Inmobiliarios y Rentas')
        text = text.replace('Renda Fixa: Segurança e Rentabilidade', 'Renta Fija: Seguridad y Rentabilidad')
        text = text.replace('Mentalidade Financeira', 'Mentalidad Financiera')
        text = text.replace('Planejamento Financeiro para o Futuro', 'Planificación Financiera para el Futuro')
        text = text.replace('Investimentos no Exterior', 'Inversiones en el Extranjero')
        text = text.replace('Renda Passiva: O Caminho para a Liberdade', 'Rentas Pasivas: El Camino a la Libertad')

        
    return text

def reorganize_and_renumber_content(html_content, lang):
    """
    Parses HTML content into sections split by <h2> tags.
    Identifies conclusion sections, moves them to the end,
    renumbers all numbered <h2> tags cleanly, and returns clean HTML.
    """
    html_content = fix_lexical_issues(html_content, lang)
    
    # Split content by <h2> tags preserving the headings
    tokens = re.split(r'(<h2[^>]*>.*?</h2>)', html_content, flags=re.IGNORECASE | re.DOTALL)
    
    pre_content = tokens[0].strip()
    
    current_h2 = None
    current_title = ""
    current_body = []
    sections = []
    
    for tok in tokens[1:]:
        h2_match = re.match(r'<h2[^>]*>(.*?)</h2>', tok, flags=re.IGNORECASE | re.DOTALL)
        if h2_match:
            if current_h2 is not None:
                sections.append({
                    "h2_tag": current_h2,
                    "h2_title": current_title,
                    "body": "\n".join(current_body).strip()
                })
            current_h2 = tok
            current_title = h2_match.group(1).strip()
            current_body = []
        else:
            if tok.strip():
                current_body.append(tok.strip())
                
    if current_h2 is not None:
        sections.append({
            "h2_tag": current_h2,
            "h2_title": current_title,
            "body": "\n".join(current_body).strip()
        })

    # Separate conclusion sections from body sections
    body_sections = []
    conclusion_sections = []
    
    for s in sections:
        title_lower = s["h2_title"].lower()
        if any(w in title_lower for w in [
            'conclus', 'considerações finais', 'consideraciones finales',
            'próximos passos', 'proximos passos', 'pasos para tu crecimiento',
            'actionable next steps', 'your path to fluency'
        ]):
            conclusion_sections.append(s)
        else:
            body_sections.append(s)
            
    # Combine: body sections first, conclusion at the end
    reordered_sections = body_sections + conclusion_sections
    
    # Now renumber H2s cleanly
    counter = 1
    new_section_blocks = []
    
    for idx, s in enumerate(reordered_sections):
        orig_title = s["h2_title"]
        # Remove any leading numbers like "1. ", "1 - ", "12. "
        clean_title = re.sub(r'^\d+[\.\-\s]+\s*', '', orig_title).strip()
        
        new_title = f"{counter}. {clean_title}"
        counter += 1
        
        block = f"<h2>{new_title}</h2>\n{s['body']}"
        new_section_blocks.append(block)
        
    final_content = ""
    if pre_content:
        final_content = pre_content + "\n\n"
    final_content += "\n\n".join(new_section_blocks)
    
    return final_content

def run_fix_and_reorganization():
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
        
        # Base content
        pt_content = a["pt"]["content"].strip()
        en_content = a["en"]["content"].strip()
        es_content = a["es"]["content"].strip()

        # Apply all expansion modules
        for exp_dict in all_expansions_list:
            if slug in exp_dict:
                e = exp_dict[slug]
                if "pt" in e and e["pt"]:
                    pt_content = pt_content + "\n" + e["pt"].strip()
                if "en" in e and e["en"]:
                    en_content = en_content + "\n" + e["en"].strip()
                if "es" in e and e["es"]:
                    es_content = es_content + "\n" + e["es"].strip()

        # Reorganize and clean
        pt_content_fixed = reorganize_and_renumber_content(pt_content, 'pt')
        en_content_fixed = reorganize_and_renumber_content(en_content, 'en')
        es_content_fixed = reorganize_and_renumber_content(es_content, 'es')

        pt_w = count_words(pt_content_fixed)
        en_w = count_words(en_content_fixed)
        es_w = count_words(es_content_fixed)

        pt_obj = {
            "id": a["id"],
            "slug": slug,
            "title": a["pt"]["title"],
            "seoTitle": a["pt"]["seoTitle"],
            "metaDescription": a["pt"]["metaDescription"],
            "excerpt": a["pt"]["excerpt"],
            "content": pt_content_fixed,
            "featuredImage": img,
            "category": a["categoryPt"],
            "readTime": a["readTimePt"],
            "publishDate": a["publishDatePt"],
            "faqs": a["pt"]["faqs"],
            "relatedEbookId": ebook_id,
            "relatedPostSlugs": rel_slugs,
            "internalLinks": a["pt"].get("internalLinks", [])
        }
        pt_posts.append(pt_obj)

        en_obj = {
            "id": a["id"],
            "slug": slug,
            "title": a["en"]["title"],
            "seoTitle": a["en"]["seoTitle"],
            "metaDescription": a["en"]["metaDescription"],
            "excerpt": a["en"]["excerpt"],
            "content": en_content_fixed,
            "featuredImage": img,
            "category": a["categoryEn"],
            "readTime": a["readTimeEn"],
            "publishDate": a["publishDateEn"],
            "faqs": a["en"]["faqs"],
            "relatedEbookId": ebook_id,
            "relatedPostSlugs": rel_slugs,
            "internalLinks": a["en"].get("internalLinks", [])
        }
        en_posts.append(en_obj)

        es_obj = {
            "id": a["id"],
            "slug": slug,
            "title": a["es"]["title"],
            "seoTitle": a["es"]["seoTitle"],
            "metaDescription": a["es"]["metaDescription"],
            "excerpt": a["es"]["excerpt"],
            "content": es_content_fixed,
            "featuredImage": img,
            "category": a["categoryEs"],
            "readTime": a["readTimeEs"],
            "publishDate": a["publishDateEs"],
            "faqs": a["es"]["faqs"],
            "relatedEbookId": ebook_id,
            "relatedPostSlugs": rel_slugs,
            "internalLinks": a["es"].get("internalLinks", [])
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

    print("\n" + "="*80)
    print("AUDITORIA FINAL PÓS-REORGANIZAÇÃO EDITORIAL (30 ARTIGOS / 90 VERSÕES)")
    print("="*80)
    print(f"{'#':<3} | {'Slug / Artigo':<55} | {'PT':<5} | {'EN':<5} | {'ES':<5} | {'Status'}")
    print("-" * 85)
    reprovados = 0
    for r in audit_results:
        print(f"{r['num']:<3} | {r['slug']:<55} | {r['pt_words']:<5} | {r['en_words']:<5} | {r['es_words']:<5} | {r['status']}")
        if r['status'] != "APROVADO":
            reprovados += 1
    print("-" * 85)
    print(f"Total de artigos únicos: {len(raw_articles)}")
    print(f"Total de versões: {len(all_word_counts)}")
    print(f"Menor artigo: {min(all_word_counts)} palavras")
    print(f"Maior artigo: {max(all_word_counts)} palavras")
    print(f"Média: {sum(all_word_counts)/len(all_word_counts):.1f} palavras")
    print(f"Artigos reprovados (<1000 palavras): {reprovados}")
    print("="*80)

if __name__ == '__main__':
    run_fix_and_reorganization()
