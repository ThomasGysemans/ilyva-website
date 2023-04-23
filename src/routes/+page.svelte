<head>
	<title>Ilyva</title>
	<meta charset="utf-8" />
</head>

<main>
	<section class="background_video">
		<video src="/assets/video.mp4" autoplay loop playsinline disablepictureinpicture>
			<track kind="captions" />
		</video>
	</section>
	<section id="accueil">
		<img src="/assets/ilyva_white.png" alt="Ilyva" />
		<h1>JULIEM VOUS SURVEILLE</h1>
		<p>
			Un escape game original créé par des étudiants. Echappez-vous du monde parallèle dans lequel
			vous êtes bloqué(s) en vous exerçant à Bash.
		</p>
	</section>
  <section>
    <h1>UN JEU POUR REVISER BASH</h1>
    <div>
      carousel
    </div>
  </section>
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
	h1 {
		color: white;
	}

	#accueil {
		background: none;
		display: flex;
		flex-direction: column;
		position: relative;
		top: 187px;
		left: 215px;
		height: 700px;
		width: 700px;
		margin: 0;
	}

	#accueil > img {
		display: block;
		position: static;
		margin: 0;
		width: 350px;
	}

	#accueil > h1 {
		display: block;
		position: static;
		top: 200px;
		margin: 50px 0 0 0;
		height: fit-content;
		font-family: 'Hack-Regular';
		font-size: 50px;
	}

	#accueil > p {
		display: block;
		position: static;
		width: 550px;
		height: 50px;
		margin: 50px 0 0 0;
		font-size: x-large;
		font-family: 'Hack-Regular';
	}
</style>
