<script>
	import { faGamepad, faPlay } from "@fortawesome/free-solid-svg-icons";
	import Button from "$components/Button.svelte";
	import SectionMap from "$components/SectionMap.svelte";
	import Trailer from "$components/Trailer.svelte";
	import Fa from "svelte-fa";
	import Section from "$components/Section.svelte";
	import SectionAuthors from "$components/SectionAuthors.svelte";

</script>

<Section>
	<div id="accueil">
		<img loading="lazy" src="/assets/illustrations/chains.png" alt="" class="chains" />
		<img src="/assets/logos/ilyva_white.png" alt="Ilyva logo" class="logo" />
		<h1>JULIEM VOUS SURVEILLE</h1>
		<p>Un escape game original créé par des étudiants. Échappez-vous du monde parallèle dans lequel vous êtes bloqué(s) en vous exerçant à Bash.</p>
		<Button primary>
			<Fa icon={faGamepad} />
			Jouer maintenant
		</Button>
		<div class="watch-trailer-button">
			<Button secondary>
				<Fa icon={faPlay} />
				Regarder la bande annonce
			</Button>
		</div>
		<div class="container-trailer">
			<Trailer />
		</div>
	</div>
</Section>
<SectionMap />
<SectionAuthors />

<style lang="scss">
	h1,
	p {
		color: #fff;
		letter-spacing: 1.2px;
	}

	#accueil {
		// display: contents;
		width: 100%;
		height: 100%;
		padding: 20vh 8vw 0 8vw;
		box-sizing: border-box;

		@media screen and (max-width: 1050px) {
			padding-left: 5vw;
			padding-right: 5vw;
		}

		@media screen and (max-width: 925px) {
			padding-top: 25vh;
		}

		@media screen and (max-width: 650px) {
			padding-left: 3vw;
		}

		.logo {
			width: 25%;
			height: auto;
			min-width: 200px;
		}

		h1 {
			margin: 50px 0;
			font-weight: normal;
			font-size: 2.2em;
		}

		p {
			text-align: justify;
			margin: 0 0 50px 0;
			font-size: 1.3em;
			max-width: 550px;
		}
	}

	.chains {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		z-index: -1;
		opacity: .3;
	}

	#accueil :global(.button) {
		max-width: 250px;
		width: 100%;
		height: 50px;
		font-size: 17px;

		& > :global(.svelte-fa) {
			margin-right: 5px;
		}
	}

	#accueil > .container-trailer {
		position: absolute;
		top: 10%;
		right: 10%;
		transform: rotateZ(5deg);
		max-width: 430px;
		width: 100%;
		height: 260px;

		@media screen and (max-width: 1000px) {
			max-width: 350px;
			top: 50px;
			right: 50px;
			height: 240px;
		}

		@media screen and (max-width: 750px) {
			max-width: 300px;
			height: 200px;
		}
	}

	@media screen and (max-width: 1145px) {
		#accueil h1 {
			font-size: 1.9em;
		}

		#accueil p {
			font-size: 1.1em;
		}
	}

	.watch-trailer-button {
		display: none;
	}

	@media screen and (max-width: 625px) {
		#accueil > .container-trailer {
			display: none;
		}

		.watch-trailer-button {
			margin-top: 30px;
			display: block;
		}

		#accueil :global(.button) {
			font-size: 15px;
			max-width: 280px;
		}

		#accueil {
			padding: 10vh 5vw 0 5vw;
		}
	}

	@media screen and (max-width: 400px) {
		#accueil h1 {
			font-size: 1.7em;
		}

		#accueil p {
			font-size: 1.0em;
		}
	}
</style>
