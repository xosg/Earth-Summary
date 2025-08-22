import json

# Load the file
with open('political-entity.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Sort by start time (3rd element)
data.sort(key=lambda x: x[2])

# Save back
data_out = json.dumps(data, ensure_ascii=False, indent=4)
with open('political-entity.json', 'w', encoding='utf-8') as f:
    f.write(data_out)
