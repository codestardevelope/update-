# Combined Job Scraper

An Apify actor to orchestrate multiple job scraping actors from LinkedIn and Indeed.

## Input Format

```json
{
  "apifyApiToken": "your-apify-token",
  "linkedin": {
    "actor1": {
      "enabled": true,
      "input": {}
    },
    "actor2": {
      "enabled": false,
      "input": {}
    }
  },
  "indeed": {
    "actor1": {
      "enabled": true,
      "input": {}
    }
  }
}
