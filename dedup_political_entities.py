import json

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

seen = set()
unique = []
for entry in data:
    key = tuple(entry)
    if key not in seen:
        seen.add(key)
        unique.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(unique, f, ensure_ascii=False, indent=4)
