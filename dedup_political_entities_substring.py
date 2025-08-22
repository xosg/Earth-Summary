import json
import re

def normalize(name):
    # Remove content in parentheses and strip whitespace
    return re.sub(r'（.*?）|\(.*?\)', '', name).strip()

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

seen_en = set()
seen_cn = set()
unique = []
for entry in data:
    en = normalize(entry[0])
    cn = normalize(entry[1])
    # Check for substring matches in seen sets
    if not any(en in s or s in en for s in seen_en) and not any(cn in s or s in cn for s in seen_cn):
        seen_en.add(en)
        seen_cn.add(cn)
        unique.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(unique, f, ensure_ascii=False, indent=4)
