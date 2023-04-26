<svelte:head>
	<title>Ilyva</title>
	<meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<script>
  import Carousel from "./Carousel.svelte";
  import CreditsThomas from "./Credits_Thomas.svelte";
  import CreditsNoe from "./Credits_Noe.svelte";
</script>

<main>
	<section class="background_video">
		<video src="/assets/video.mp4" autoplay loop muted/>
	</section>
	<section id="accueil">
		<img src="/assets/ilyva_white.png" alt="Ilyva" />
		<h1>JULIEM VOUS SURVEILLE</h1>
		<p>
			Un escape game original créé par des étudiants. Échappez-vous du monde parallèle dans lequel
			vous êtes bloqué(s) en vous exerçant à Bash.
		</p>
	</section>
  <Carousel/>
  <h1>CRÉÉ PAR ...</h1>
  <CreditsThomas/>
  <CreditsNoe/>
</main>

<style>
	main {
		height: inherit;
		width: inherit;
		background: none;
	}
	.background_video {
		background: none;
		position: absolute;
		height: inherit;
		width: inherit;
		z-index: -1;
	}

  .background_video > video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
	p,
	h1{
		color: white;
	}

	#accueil {
		background: none;
		display: flex;
		flex-direction: column;
		height: fit-content;
		width: 33%;
		margin:  10% 0 0 15%;
	}

	#accueil > img {
		display: block;
		position: static;
		margin: 0;
		width: 60%;
	}

	h1 {
		display: block;
		margin: 10% 0 0 15%;
		height: fit-content;
		font-family: 'Hack-Regular';
		font-size: 50px;
    font-weight: lighter;
	}
#accueil > h1 {
  margin-left: 0;
}
  

	#accueil > p {
		display: block;
		margin: 10% 0 0 0;
		font-size: x-large;
		font-family: 'Hack-Regular';
	}
</style>
