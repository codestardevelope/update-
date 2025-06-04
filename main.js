// main.js
import { Actor } from 'apify';

await Actor.init();

// Get the input data
const input = await Actor.getInput();
console.log('Actor input:');
console.log(input);

const { apifyApiToken, linkedin, indeed } = input;

// TODO: Implement the logic to trigger the sub-actors based on the input
// You will need the Apify API token to run other actors.
// Check which actors are enabled (linkedin.actor1.enabled, linkedin.actor2.enabled, indeed.actor1.enabled)
// and get their specific inputs (linkedin.actor1.input, etc.).

console.log('Fetching input done.');

await Actor.exit(); 