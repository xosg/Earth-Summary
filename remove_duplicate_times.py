import json

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

seen = set()
result = []
for entry in data:
    key = (entry[2], entry[3])
    if key not in seen:
        seen.add(key)
        result.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=4)
