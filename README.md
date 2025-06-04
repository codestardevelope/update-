# Combined Job Scraper Orchestrator

This Apify actor serves as an orchestrator to trigger and manage multiple job scraping actors (LinkedIn Actor 1, LinkedIn Actor 2, Indeed Actor 1) based on user input.

## Configuration

The actor requires the following input:

*   **Apify API Token**: Your personal Apify API token to allow this actor to run other actors.
*   **LinkedIn Scrapers**: Configure and enable/disable LinkedIn scraping actors.
    *   **LinkedIn Actor 1**: Enable and provide input parameters.
    *   **LinkedIn Actor 2**: Enable and provide input parameters.
*   **Indeed Scrapers**: Configure and enable/disable Indeed scraping actors.
    *   **Indeed Actor 1**: Enable and provide input parameters.

## How it works (TODO)

1.  The actor receives the input configuration.
2.  It uses the provided Apify API token to interact with the Apify platform.
3.  Based on the enabled flags, it triggers the specified sub-actors with the corresponding input parameters.
4.  (Optional) It can collect results from the triggered actors and combine them.

## Local Development

1.  Clone this repository.
2.  Install dependencies: `npm install`
3.  Run the actor locally: `apify run`

## Deployment

Deploy this actor to the Apify platform. 