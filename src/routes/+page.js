/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

const primaryColors = ["ff0000", "00ff00"];
const secondaryColors = ["00ffff", "ff00ff"];

function pickRandom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function updateColors() {
    
}

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		global: await directus.request(readItems('global')),
	};
}