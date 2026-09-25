# scripts/generate_complete_catalog.py
# Complete generator for all 30 CONEXUS E-BOOKS blog posts with >= 1,050 words per language.

import re
import json
import os

def clean_word_count(text):
    if not text:
        return 0
    # Strip HTML tags
    clean = re.sub(r'<[^>]+>', ' ', text)
    # Strip non-alphanumeric punctuation except letters and spaces
    clean = re.sub(r'[^\w\sáéíóúàèìòùâêîôûãõäëïöüñçÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÑÇ]', ' ', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return len(clean.split()) if clean else 0

print("Module initialized. Preparing article suites...")
