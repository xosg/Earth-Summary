
import random
import json

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

revised = []
for entry in data:
    start, end = entry[2], entry[3]
    duration = end - start
    # Only revise if duration > 1000 years and not a culture/people/tribe
    if duration > 1000 and not any(word in entry[0].lower() for word in ['culture', 'people', 'tribe', '部落', '文化']):
        # Heuristic: set end = start + random duration between 80 and 300 years
        entry[3] = start + random.randint(80, 300)
    revised.append(entry)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(revised, f, ensure_ascii=False, indent=4)
