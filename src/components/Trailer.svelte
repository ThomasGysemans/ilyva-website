<script>
	import { faPlay } from "@fortawesome/free-solid-svg-icons";
	import YoutubeTrailer from "./YoutubeTrailer.svelte";
	import Loader from "./Loader.svelte";
	import Fa from "svelte-fa";

  let shown = false;
  let loading = false;

  function show() {
    if (!shown) {
      shown = true;
      loading = true;
    }
  }
</script>

<button class="trailer" on:click={show}>
  {#if shown}
    {#if loading}
      <div class="container-loader">
        <Loader />
      </div>
    {/if}
    <YoutubeTrailer on:loaded={() => loading = false} />
  {:else}
    <div class="overlay layer" />
    <img class="layer" src="/assets/illustrations/trailer-poster.png" alt="Poster de la bande annonce du jeu Ilyva" />
    <div class="content layer">
      <Fa icon={faPlay} />
    </div>
  {/if}
</button>

<style lang="scss">
  @import "$root";

  .trailer {
    cursor: pointer;
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    border: 1px solid $secondaryColor;
    background-color: lighten($secondaryColor, 25%);
    box-shadow: 4px 4px 8px rgba($secondaryColor, .7);
    transition: transform 300ms ease-out;

    &:hover {
      transform: scale(1.05) rotateZ(-5deg);
    }
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .overlay {
    z-index: 5;
    background-color: rgba($secondaryColor, .4);
    transition: background-color 200ms ease;
  }

  .trailer:hover .overlay {
    background-color: rgba($secondaryColor, .45);
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;

    & > :global(.svelte-fa) {
      font-size: 4em;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      filter: drop-shadow(4px 4px 8px #2E2E2E);
      transform: translate(-50%, -50%);
    }
  }

  img {
    user-select: none;
    object-fit: cover;
    z-index: 4;
  }

  .container-loader {
    border: 1px solid red;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>