<script>
	import { faGamepad } from "@fortawesome/free-solid-svg-icons";
	import Button from "./Button.svelte";
  import Section from "./Section.svelte";
	import TextMirror from "./TextMirror.svelte";
	import Fa from "svelte-fa";

</script>

<Section limitless>
  <div class="container-section">
    <img src="/assets/illustrations/poster.jpg" alt="Affiche du jeu Ilyva" />
    <div class="content">
      <TextMirror>
        Qu'attendez-vous ?
      </TextMirror>
      <Button primary>
        <Fa icon={faGamepad} />
        Jouer en ligne
      </Button>
      <div class="title-download">
        <b>Ou bien...</b>
        <h3>installez le jeu</h3>
      </div>
      <Button primary>
        <Fa icon={faGamepad} />
        Télécharger (Windows)
      </Button>
      <p>Pour des raisons de performances, certaines fonctionnalités présentes dans la version téléchargeable ne sont pas dans la version Web. Pour une expérience optimale, nous vous recommandons d’installer le jeu.</p>
    </div>
  </div>
</Section>

<style lang="scss">
  .container-section {
    width: 100%;
    box-sizing: border-box;
    padding: 10vh 8vw 5vh 8vw;
    display: flex;

    @media screen and (max-width: 975px) {
      padding-left: 4vw;
      padding-right: 4vw;
    }
  }

  .container-section > img {
    max-width: 38%;
    width: 100%;
    height: auto;
    object-fit: fit;
    border: 5px solid #fff;
  }

  .content {
    width: 62%;
    padding: 0 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 975px) {
      padding: 0 5%;
    }

    & > :global(button) {
      width: 100%;
      height: 50px;
      font-size: 16px;
    }

    & > :global(button:first-of-type) {
      max-width: 240px;
    }

    & > :global(button:last-of-type) {
      max-width: 280px;
    }
  }

  @media screen and (max-width: 875px) {
    .container-section {
      flex-direction: column;
      align-items: center;
      padding-left: 10vw;
      padding-right: 10vw;
    }

    .container-section > img {
      width: 100%;
      max-width: 400px;
      min-width: 200px;
    } 

    .content {
      margin-top: 50px;
      width: 100%;
    }
  }

  .title-download {
    margin-top: 10%;
    text-align: center;

    b {
      color: #fff;
      opacity: .4;
      font-size: 1.8em;
      font-style: italic;
    }

    h3 {
      font-size: 2.4em;
      color: #fff;
      margin-top: 0;
      margin-bottom: 40px;
    }
  }

  p {
    margin-top: 40px;
    opacity: .6;
    color: #fff;
    text-align: justify;
    font-size: 0.95em;
  }

  @media screen and (max-width: 1135px) {
    .title-download b {
      font-size: 1.5em;
    }

    .title-download h3 {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 900px) {
    .title-download b {
      font-size: 1.2em;
    }

    .title-download h3 {
      font-size: 1.5em;
    }

    p {
      font-size: .85em;
    }

    .content > :global(button) {
      height: 50px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 350px) {
    .title-download b {
      font-size: 1.0em;
    }

    .title-download h3 {
      font-size: 1.3em;
    }

    p {
      font-size: .8em;
    }

    .content > :global(button) {
      height: 50px;
      font-size: 13px;
    }
  }
</style>