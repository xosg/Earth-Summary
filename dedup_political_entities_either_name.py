import json

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

seen_en = set()
seen_cn = set()
unique = []
for entry in data:
    en = entry[0].strip()
    cn = entry[1].strip()
    if en not in seen_en and cn not in seen_cn:
        seen_en.add(en)
        seen_cn.add(cn)
        unique.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(unique, f, ensure_ascii=False, indent=4)
