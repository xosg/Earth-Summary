import json

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

seen_eng = set()
seen_chi = set()
seen_duration = set()
result = []
for entry in data:
    eng = entry[0].strip()
    chi = entry[1].strip()
    duration = (entry[2], entry[3])
    if eng in seen_eng or chi in seen_chi or duration in seen_duration:
        continue
    seen_eng.add(eng)
    seen_chi.add(chi)
    seen_duration.add(duration)
    result.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=4)
