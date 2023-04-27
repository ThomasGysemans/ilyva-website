<script>
	import { authors } from "$lib/Authors";
  import Carousel from "$components/Carousel.svelte";
	import Author from "$components/Author.svelte";
</script>

<main>
	<video src="/assets/background-video.mp4" autoplay loop muted />
	<section id="accueil">
		<img src="/assets/logos/ilyva_white.png" alt="Ilyva logo" />
		<h1>JULIEM VOUS SURVEILLE</h1>
		<p>
			Un escape game original créé par des étudiants. Échappez-vous du monde parallèle dans lequel vous êtes bloqué(s) en vous exerçant à Bash.
		</p>
	</section>
  <Carousel />
  <h1>CRÉÉ PAR ...</h1>
  {#each authors as author (author.firstname)}
		<Author {author} />
	{/each}
</main>

<style lang="scss">
	main {
		height: inherit;
		width: inherit;
		background: none;
	}

	main > video {
		position: fixed;
    right: 0;
    bottom: 0;
		z-index: -1;
		width: 100%;
	}

	p,
	h1 {
		color: #fff;
	}

	#accueil {
		background: none;
		display: flex;
		flex-direction: column;
		height: fit-content;
		width: 33%;
		margin: 10% 0 0 15%;
	}

	#accueil > img {
		display: block;
		width: 80%;
		margin: 0;
	}

	h1 {
		margin: 10% 0 0 15%;
		height: fit-content;
    font-weight: normal; // lighter is not possible with the "Hack" font
		font-size: 2.2em;
	}

	#accueil > h1 {
		margin-left: 0;
	}

	#accueil > p {
		margin: 10% 0 0 0;
		font-size: 1.4em;
	}
</style>
