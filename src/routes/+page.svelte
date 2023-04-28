<script>
	import { faGamepad } from "@fortawesome/free-solid-svg-icons";
	import Button from "$components/Button.svelte";
	import SectionWithVideo from "$components/SectionWithVideo.svelte";
	import SectionMap from "$components/SectionMap.svelte";
	import Trailer from "$components/Trailer.svelte";
	import Fa from "svelte-fa";

</script>

<SectionWithVideo>
	<div id="accueil">
		<img loading="lazy" src="/assets/illustrations/chains.png" alt="" class="chains" />
		<img src="/assets/logos/ilyva_white.png" alt="Ilyva logo" class="logo" />
		<h1>JULIEM VOUS SURVEILLE</h1>
		<p>Un escape game original créé par des étudiants. Échappez-vous du monde parallèle dans lequel vous êtes bloqué(s) en vous exerçant à Bash.</p>
		<Button>
			<Fa icon={faGamepad} />
			Jouer maintenant
		</Button>
		<div class="container-trailer">
			<Trailer />
		</div>
	</div>
</SectionWithVideo>
<SectionMap />

<style lang="scss">
	h1,
	p {
		color: #fff;
		letter-spacing: 1.2px;
	}

	#accueil {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 20vh 0 0 15vh;
		box-sizing: border-box;

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

	#accueil > :global(.button) {
		width: 250px;
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
		transform: rotateZ(10deg);
	}
</style>
