<script lang="ts">
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { authors } from "$lib/Authors";
	import getRandomInteger from "$lib/getRandomInteger";
	import ManualNavigation from "./ManualNavigation.svelte";
  import Section from "./Section.svelte";
	import Fa from "svelte-fa";

  let selectedAuthorIndex = getRandomInteger(0, authors.length);

  function previousAuthor() {
    if (selectedAuthorIndex - 1 >= 0) {
      --selectedAuthorIndex;
    }
  }

  function nextAuthor() {
    if (selectedAuthorIndex + 1 < authors.length) {
      ++selectedAuthorIndex;
    }
  }

  $: selectedAuthor = authors[selectedAuthorIndex];
</script>

<Section>
  <div class="container-section">
    <div class="content">
      <h1>CRÉÉ PAR...</h1>
      <h2>{selectedAuthor.firstname}<br /><span class="keyword">{selectedAuthor.lastname}</span></h2>
      <blockquote>
        <img src="assets/icons/quote.png" alt="guillemet" />
        <p>{selectedAuthor.quote}</p>
        <img src="assets/icons/quote.png" alt="guillemet" />
      </blockquote>
      {#if selectedAuthor.ad != undefined}
        <p>Pub : <a href={selectedAuthor.ad} target="_blank">{selectedAuthor.ad}</a></p>
      {/if}
      <div class="navigation">
        <ManualNavigation
          on:previous={previousAuthor}
          on:next={nextAuthor}
        />
        <a href="https://github.com/ThomasGysemans/ilyva-website" target="_blank">
          <Fa icon={faGithub} />
        </a>
      </div>
    </div>
    <div class="set">
      <div class="authors">
        <div class="list">
          {#each authors.filter((_, i) => i !== selectedAuthorIndex) as author, index (author.firstname)}
            <button type="button" id="author{index}" on:click={() => selectedAuthorIndex = authors.findIndex(a => a.firstname === author.firstname)}>
              <img loading="lazy" src="{author.avatar}" alt="Photo de profil de {author.firstname + " " + author.lastname}" />
            </button>
          {/each}
        </div>
        <div class="author">
          <img src="/assets/icons/doodle.png" alt="Griboullage" />
          <img src="{selectedAuthor.avatar}" alt="Avatar de {selectedAuthor.firstname + " " + selectedAuthor.lastname}">
        </div>
      </div>
    </div>
  </div>
</Section>

<style lang="scss">
  @import "$mixins";

  $avatarBackgroundColor: #313338;

  :root {
    --avatar-size: 320px;
    --doodle-difference: 30px;
    --small-avatar-size: 110px;

    @media screen and (max-width: 1100px) {
      --avatar-size: 250px;
      --doodle-difference: 20px;
      --small-avatar-size: 80px;
    }
    
    @media screen and (max-width: 850px) {
      --avatar-size: 210px;
      --doodle-difference: 10px;
      --small-avatar-size: 60px;
    }
  }

  .container-section {
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 17vh 8vw 0 8vw;

    @media screen and (max-width: 1145px) {
      padding: 15vh 7vw 0 7vw;
    }
  }

  .content {
    width: 35%;
  }

  @media screen and (max-width: 950px) {
    .container-section {
      padding: 14vh 0 0 3vw;
    }

    .content {
      width: 40%;
    }

    .set {
      width: 60%;
    }
  }

  h1,
  h2,
  p {
    color: #fff;
  }

  h1 {
    font-size: 2.1em;
  }

  h2 {
    font-size: 2.7em;
    margin-bottom: 70px;
  }

  p {
    font-size: 1.05em;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 1.9em;
    }

    h2 {
      font-size: 2.4em;
    }
    
    p {
      font-size: .95em;
    }
  }

  .keyword {
    text-transform: uppercase;
    @include keyword($videoTextColorForKeywords);
  }

  blockquote {
    max-width: 400px;
    margin: 0 0 40px 0;
    position: relative;

    img {
      width: 50px;
      height: auto;
      position: absolute;
      user-select: none;

      &:first-of-type {
        top: -25px;
        left: 0;
      }

      &:last-of-type {
        transform: scaleX(-1);
        bottom: -20px;
        right: -10px;
      }
    }

    & > p {
      margin: 0;
      text-indent: 60px;
    }
  }

  // for the ad
  p > a {
    color: #fff;
    word-wrap: break-word;
  }

  .navigation {
    margin-top: 30px;
    display: flex;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      color: #fff;
      opacity: .8;
      text-decoration: none;
      font-size: 25px;
      transition: opacity 200ms ease;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }

  .set {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
  }

  @media screen and (max-width: 850px) {
    .set {
      align-items: flex-start;
      box-sizing: border-box;
      padding-top: 10%;
      width: 50%;
    }

    .content {
      width: 50%;
    }
  }

  .authors {
    position: relative;
  }

  .author {
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 50%;
    position: relative;
    background-color: $avatarBackgroundColor;

    img:first-of-type {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(var(--avatar-size) + var(--doodle-difference));
      height: calc(var(--avatar-size) + var(--doodle-difference));
      top: calc(-1 * var(--doodle-difference) / 2);
      left: calc(-1 * var(--doodle-difference) / 2);
      user-select: none;
      opacity: .7;
    }

    img:last-of-type {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      user-select: none;
    }
  }

  .list > button {
    z-index: 3;
    position: absolute;
    border: 2px solid rgba(#fff, .1);
    background-color: $avatarBackgroundColor;
    cursor: pointer;
    padding: 0;
    border-radius: 50%;
    width: var(--small-avatar-size);
    height: var(--small-avatar-size);
    box-shadow: 3px 3px 6px rgba(#000, .45);
    opacity: .8;
    transition-property: opacity, transform;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover,
    &:focus {
      opacity: 1;
      transform: scale(1.05);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      user-select: none;
    }
  }

  #author0 {
    top: 10%;
    left: -45%;
  }

  #author1 {
    top: -42%;
    left: -5%;
  }

  #author2 {
    top: -42%;
    left: 66%;
  }

  #author3 {
    top: 10%;
    left: 108%;
  }

  @media screen and (max-width: 835px) {
    .list {
      display: none;
    }
  }

  @media screen and (max-width: 475px) {
    .set {
      display: none;
    }

    .content {
      width: 90%;
    }
  }
</style>