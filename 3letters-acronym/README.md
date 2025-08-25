
# 3letters-acronym

This directory contains scripts and data for collecting, processing, and storing 3-letter acronyms and their meanings using Node.js, MongoDB, and optional AI assistance.

## Files

- `acronym.acronym.csv`: CSV file containing a list of 3-letter acronyms and their meanings.
- `download.js`: Node.js script for populating and updating acronym data using web scraping and AI.
- `package.json`: Project metadata and dependencies for Node.js (requires `mongodb` package).
- `README.md`: This documentation file.

## Data Flow & Script Details

### 1. Placeholder Generation
The script can generate all possible 3-letter combinations (A-Z) and insert them as empty placeholders into a MongoDB collection (`acronym`).

### 2. Data Collection
For each acronym with an empty `name` field, the script attempts to fetch its meaning:

- **Primary Source:** Scrapes [abbreviations.com](https://www.abbreviations.com/) for a description.
- **Fallback:** If not found, queries a local AI model (e.g., Qwen3:8b via Ollama) to generate a plausible meaning.

### 3. Database Update
The script updates the MongoDB collection with the found or generated meaning for each acronym.

### 4. Export
The data can be exported to `acronym.acronym.csv` for further use.

## MongoDB Setup

Ensure MongoDB is running locally. The script connects to `mongodb://localhost:27017`, using the `acronym` database and `acronym` collection.

## AI Integration

If a meaning is not found online, the script sends a prompt to a local AI model (Ollama server, Qwen3:8b) to generate a likely expansion for the acronym.

## Usage

1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Ensure MongoDB is running locally.**
3. **(Optional) Start Ollama with Qwen3:8b model for AI fallback.**
4. **Run the script:**
   ```powershell
   node download.js
   ```

## Environment Variables

To use a proxy for HTTP requests, set the following environment variables:

```powershell
NODE_USE_ENV_PROXY=1 HTTP_PROXY=http://127.0.0.1:7890 HTTPS_PROXY=http://127.0.0.1:7890 NO_PROXY=localhost,127.0.0.1 node ./download.js
```

## Example CSV Format

```
_id,name
AAA,Authentication, Authorization, and Accounting
AAB,As Amended By
AAC,Advanced Audio Coding
...etc.
```

## License

See the main repository for license information.
