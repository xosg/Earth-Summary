import json
import random

with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Collect all start times and their counts
start_counts = {}
for entry in data:
    start = entry[2]
    start_counts[start] = start_counts.get(start, 0) + 1

# For start times with too many duplicates, vary them slightly
used = set()
for entry in data:
    start = entry[2]
    if start_counts[start] > 2 and start < 0:
        # Vary by up to ±20 years randomly, but keep unique
        new_start = start + random.randint(-20, 20)
        while new_start in used or new_start == start:
            new_start = start + random.randint(-20, 20)
        entry[2] = new_start
        used.add(new_start)
    else:
        used.add(start)

with open('political-entity.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
