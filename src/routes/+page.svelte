<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const person = data.people[0];

	const primaryColors = ["#ff0000", "#00ff00"];
	const secondaryColors = ["#00ffff", "#ff00ff"];

	function pickRandom(array) {
		return array[Math.floor(Math.random()*array.length)];
	}

	let primaryColor = pickRandom(primaryColors)
	let secondaryColor = pickRandom(secondaryColors)

	function updateColors() {
		primaryColor = pickRandom(primaryColors)
		secondaryColor = pickRandom(secondaryColors)
	}

</script>

<style> @import "/styles/main.css"; </style>

<main style="--primary-color: {primaryColor};--secondary-color: {secondaryColor}">
	<h1>{person.name} {person.prefix} {person.surname}</h1>
	<img src={person.avatar} alt={person.name}>
	<a href="https://github.com/{person.github_handle}" target="_blank">Github</a>
	<p>{person.bio}</p>
	<button on:click={updateColors}>New color</button>
</main>