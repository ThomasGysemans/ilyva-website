<script lang="ts">
	import { onMount } from "svelte";

  let documentReady = false;
  let isVideoReady = false;

  // So that the page loads faster,
  // and to avoid a white spark from the body's default background color,
  // we make the video a client-only component.
  onMount(() => {
    documentReady = true;
  });
</script>

<div class="container" class:ready={isVideoReady}>
  {#if documentReady}
    <video src="/assets/compressed-background-video.mp4" autoplay loop muted preload="none" on:loadeddata={() => isVideoReady = true} />
  {/if}
</div>
<div class="shader" />

<style lang="scss">
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-color: #40342d;
    transition: background-color 800ms ease;

    &.ready {
      background-color: transparent;
    }
  }

  .shader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, .5);
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
</style>