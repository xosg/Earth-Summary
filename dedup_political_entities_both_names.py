import json

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

seen = set()
unique = []
for entry in data:
    # Use both English and Chinese names as deduplication key
    key = (entry[0].strip(), entry[1].strip())
    if key not in seen:
        seen.add(key)
        unique.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(unique, f, ensure_ascii=False, indent=4)
