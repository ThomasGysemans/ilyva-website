<script lang="ts">
	import { onMount } from "svelte";

  let documentReady = false;
  let isVideoReady = false;

  // So that the page loads faster,
  // and to avoid a white spark from the section's default background color,
  // we make the video a client-only component.
  onMount(() => {
    documentReady = true;
  });
</script>

<section class:ready={isVideoReady}>
  {#if documentReady}
    <video src="/assets/compressed-background-video.mp4" autoplay loop muted preload="none" on:loadeddata={() => isVideoReady = true} />
  {/if}
  <div class="shader">
    <slot />
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #40342d;
    transition: background-color 800ms ease;
  }

  section.ready {
    background-color: transparent;
  }

  video {
		position: absolute;
    top: 0;
    left: 0;
		z-index: -1;
		width: 100%;
    height: 100vh;
    object-fit: cover;
	}

  .shader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, .5);
  }
</style>