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
			Un escape game original créé par des étudiants. Échappez-vous du monde parallèle dans lequel
			vous êtes bloqué(s) en vous exerçant à Bash.
		</p>
	</section>
  <section>
    <h1>UN JEU POUR REVISER BASH</h1>
    <div>
      
    </div>
  </section>
  <section id="credits">
    <div>
      <h1>CRÉÉ PAR ...</h1>
      <h2>THOMAS GYSEMANS</h2>
      <p>
        Surnommé le "codeur fou" un petit
        peu maso, j'ai conçu le terminal
        custom qui permet une interprétation
        custom des commandes Bash, dans le
        but d'une meilleur compréhention du
        language.
      </p>
    </div>
    <div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;"><image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" href="/assets/new-pp.webp" preserveAspectRatio="none"></image>
        <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: rgb(238, 205, 163);"></stop>
            <stop offset="100%" style="stop-color: rgb(239, 98, 159);"></stop>
        </linearGradient>
        </defs>
        
    <clipPath id="shape"><path id="blob" fill="url(#gradient)">
            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>
        </path></clipPath></svg>
    </div>
    <div>
      <h2>TECHNOS UTILISÉES</h2>
      <ul>
        <li><img src="/assets/godot.svg" alt=""></li>
        <li><img src="/assets/svelte.png" alt=""></li>
        <li><img src="/assets/figma.png" alt=""></li>
      </ul>
      <h2>RÉSEAUX</h2>
      <a href="https://portfolio.sciencesky.fr/">https://portfolio.sciencesky.fr/</a>
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
	h1,
  h2,
  a {
		color: white;
	}

	#accueil {
		background: none;
		display: flex;
		flex-direction: column;
		height: 700px;
		width: 700px;
		margin:  187px 0 0 215px;
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
    font-weight: lighter;
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

  #credits {
    display: flex;
    flex-direction: row;
    margin: 0 50px 0 215px;
  }
  #credits>div {
    width: 33%;
  }
  #credits>div>h1 {
    font-family: "Hack-Regular";
    font-weight: lighter;
    margin: 0 0 50px 0;
  }
  #credits>div>h2 {
    font-family: "Hack-Bold";
    font-size: xx-large;
    width: 100px;
  }

  #credits>div>p {
    font-family: "Hack-Regular";
  }

  #credits svg {
    margin: 0;
    height: 500px;
    position: relative;
    top: -100px;
  }

  #credits>div:last-of-type>h2 {
    width: max-content;
  }

  #credits>div>ul {
    list-style: none;
    display: flex;
    padding: 0;
  }

  #credits>div>ul>li {
    max-width: 50px;
    max-height: 50px;
    width: auto;
    display: flex;
    justify-content: center;
  }
  #credits ul img {
    width: auto;
    height: 100%;
  }
  #credits a {
    text-decoration: none;
    font-family: "Hack-Regular";
  }
  #credits a:hover {
    text-decoration: underline;
  }
</style>
