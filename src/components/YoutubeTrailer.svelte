<script lang="ts">
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let loaded = false;

  function setAsLoaded() {
    loaded = true;
    dispatch('loaded');
  }
</script>

<iframe class:loaded on:load={setAsLoaded} src="https://www.youtube.com/embed/CCTnriUSgkc" title="Teaser ILYVA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />

<style lang="scss">
  iframe {
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    &.loaded {
      visibility: visible;
      pointer-events: all;
      opacity: 1;
    }
  }
</style>