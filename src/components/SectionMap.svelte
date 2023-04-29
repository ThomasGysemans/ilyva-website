<script lang="ts">
	import { onMount } from "svelte";
	import { screenshots } from "$lib/screenshots";
	import ScreenshotComponent from "./Screenshot.svelte";
  import SectionSeparator from "./SectionSeparator.svelte";
	import Carousel from "./Carousel.svelte";
	import Line from "./Line.svelte";

  let selectedPictureId: number = -1;
  let previousPictureId: number = -1;
  let bigScreenshot: HTMLImageElement;
  
  function selectPicture(id: number) {
    selectedPictureId = id;
    if (previousPictureId === -1) {
      previousPictureId = id;
    }
    const selectedImg = document.querySelector(`#screenshot${id} > button > img:last-of-type`) as HTMLImageElement;
    const rect = selectedImg.getBoundingClientRect();
    bigScreenshot.style.top = rect.top + "px";
    bigScreenshot.style.left = rect.left + "px";
  }

  function getScreenshot(currentId: number) {
    if (previousPictureId === -1) {
      return null;
    }
    return currentId === -1 ? screenshots[previousPictureId] : screenshots[currentId];
  }

  function removePicture() {
    (document.querySelector(`#screenshot${selectedPictureId} > button`) as HTMLButtonElement).focus();
    previousPictureId = selectedPictureId;
    selectedPictureId = -1;
  }

  onMount(() => {
    const handleScroll = () => {
      if (selectedPictureId !== -1) {
        removePicture();
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (selectedPictureId !== -1) {
        if (e.key === "Esc" || e.key === "Escape" || e.keyCode === 27) {
          removePicture();
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  });
</script>

<div class="section-with-separator">
  <SectionSeparator />
  <div class="big-screen" class:shown={selectedPictureId !== -1} on:click={removePicture} on:keydown={removePicture}>
    <img bind:this={bigScreenshot} src="/assets/screenshots/{getScreenshot(selectedPictureId)?.name ?? ""}" alt={getScreenshot(selectedPictureId)?.description ?? ""}>
  </div>
  <section>
    <img src="/assets/illustrations/map-background.png" loading="lazy" alt="" />
    <h1>UN JEU POUR RÉVISER <span class="keyword">BASH</span></h1>
    <div class="map">
      {#each screenshots as screenshot, index (screenshot.name)}
        <div class="container-screenshot" id="screenshot{index}">
          <ScreenshotComponent
            screenshot={screenshots[index]}
            pinned={index === 0 || index === 4}
            side={index === 4 ? "right" : "left"}
            on:click={() => selectPicture(index)}
          />
          {#if index !== 0 && index !== 4}
            <Line />
          {/if}
        </div>
      {/each}
    </div>
    <div class="carousel">
      <Carousel />
    </div>
  </section>
</div>

<style lang="scss">
  @import "$mixins";

  .section-with-separator {
    position: relative;
  }

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 30px;
    box-sizing: border-box;
    background-color: rgba($mapBackgroundColor, .6);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    animation: fadeIn 200ms ease 1 forwards;
  }

  h1 {
    color: #fff;
    font-size: 2.2em;
    text-align: center
  }

  h1 span.keyword {
    @include keyword($mapBackgroundColor);
  }

  .container-screenshot {
    z-index: 10;
    
    :global(svg) {
      height: 25px;
      z-index: -1;
      opacity: .7;
      position: absolute;
    }
  }

  #screenshot0 {
    position: absolute;
    bottom: 40px;
    left: 40px;
    transform: rotate(-2deg);
  }

  #screenshot1 {
    position: absolute;
    top: 150px;
    left: 150px;
    transform: rotate(-2deg);

    :global(svg) {
      transform: rotateZ(65deg);
      right: -20px;
      bottom: -80px;
    }
  }

  #screenshot2 {
    position: absolute;
    top: 150px;
    right: 250px;
    transform: scale(0.9) rotate(2deg);

    :global(svg) {
      top: 50%;
      left: -190px;
    }
  }

  #screenshot3 {
    position: absolute;
    bottom: 80px;
    left: 36%;
    transform: scale(0.85) rotate(2deg);

    :global(svg) {
      right: -140px;
      bottom: 20px;
    }
  }

  #screenshot4 {
    position: absolute;
    bottom: 50px;
    right: 40px;
    transform: scale(0.8) rotate(-4deg);
  }

  .big-screen {
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, .8);
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease;

    & > img {
      opacity: 0;
      user-select: none;
      max-width: $screenshotWidth;
      max-height: $screenshotHeight;
      width: auto;
      border: $screenshotBorder;
      object-fit: cover;
      position: absolute;
    }

    &.shown {
      opacity: 1;
      pointer-events: all;
      
      & > img {
        animation: fadeImageIn 800ms ease-out 1 forwards;
      }
    }
  }

  @keyframes fadeImageIn {
    to {
      opacity: 1;
      left: 0;
      top: 0;
      transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(2);
    }
  }

  .carousel {
    display: none;
  }
  
  @media screen and (max-width: 1400px) {
    .carousel {
      display: block;
    }

    .map {
      display: none;
    }
  }
</style>

