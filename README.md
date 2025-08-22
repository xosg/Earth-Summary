# generate a long list of countries based on following requirements:

- include all countries in history worldwide.
- regardless of the size and duration of that country, include them all!
- include all kinds of political entity of societies.
- the total count should be > 1000.
- ignore the controversy of any political entities.
- It's ok to keep both if one sub-country is belonging to the other country.
- output a json list(political-entity.json) including following columns:
    - English name
    - Chinese name
    - start time
    - end time
- I choose english and chinese because these 2 are most widely used in the world, so the names are accrute enough and well recognized.
- the starting and ending time should use pure number, and if accrute time is not available, guess one instead of "null".
- outputting ordered by starting time.
- example outputting:

[
    ["ancient Greece", "古希腊", -490, -323],
    ["Aztec Empire", "阿兹特克帝国", 1345, 1521],
    ......
]

- proceed in batch if you cannot do it at once.