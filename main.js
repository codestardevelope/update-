import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput();
console.log('Actor input:', JSON.stringify(input, null, 2));

const { apifyApiToken, linkedin, indeed } = input;

if (linkedin?.actor1?.enabled) {
    console.log('Would trigger LinkedIn Actor 1 with input:', linkedin.actor1.input);
}
if (linkedin?.actor2?.enabled) {
    console.log('Would trigger LinkedIn Actor 2 with input:', linkedin.actor2.input);
}
if (indeed?.actor1?.enabled) {
    console.log('Would trigger Indeed Actor 1 with input:', indeed.actor1.input);
}

await Actor.exit();
