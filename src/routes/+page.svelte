<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const person = data.people[0];

	const primaryColors = ["ACB4FF", "ADFFF5", "C1FFB1", "FFB7E2", "FFDBB0", "E9ACFF" ];
	const secondaryColors = ["3B4ACE", "29C2A6", "22AA27", "AB2977", "A5422C", "742390" ];

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

<header>
	
</header>
<main style="--primary-color: #{primaryColor};--secondary-color: #{secondaryColor}">
	<article>
		<div class="name-and-photo">
			<img id="avatar" src={person.avatar} alt={person.name}>
			<button on:click={updateColors}>
				<img src="/palette.svg" alt="palette">
			</button>
			<div id="right-rectangle">
				<div id="top-float-rectangle"></div>
				<p>{person.bio}</p>
				<div class="socials">
					<a class="logo" href="https://github.com/{person.github_handle}" target="_blank"><img src="/GitHub_Invertocat_Logo.svg" alt="Github"></a>
					<a class="logo" href="{person.website}" target="_blank"><img src="/free-instagram-86-433323.webp" alt="instagram"></a>
					<a class="logo" href="mailto:{person.email}" target="_blank"><img src="/free-gmail-32-761667.png" alt="gmail"></a>
				</div>
				<div id="right-float-rectangle"></div>
			</div>

			<h1>{person.name} {person.prefix} {person.surname}</h1>
		</div>
	</article>
</main>
<footer>

</footer>