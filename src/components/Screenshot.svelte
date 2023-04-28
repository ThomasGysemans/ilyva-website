<script lang="ts">
	import { createEventDispatcher } from "svelte";

  export let screenshot: Screenshot;
  export let pinned = false;
  export let side: "right" | "left" = "left";

  const dispatch = createEventDispatcher();
  function onClick() { dispatch('click'); }
</script>

<button type="button" on:click={onClick} title={screenshot.description} aria-label={screenshot.description}>
  {#if pinned}
    <img class="pin {side}" loading="lazy" src="/assets/icons/pin.png" alt="épingle rouge" />
  {/if}
  <img class="picture" loading="lazy" src="/assets/screenshots/{screenshot.name}" alt={screenshot.description} />
</button>

<style lang="scss">
  @import "$root";

  button {
    display: block;
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: transparent;
    position: relative;
    opacity: 0.8;
    transition: opacity 200ms ease-in;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }

  .pin {
    width: 80px;
    height: auto;
    position: absolute;
    top: -40px;
    user-select: none;

    &.left {
      left: -10px;
    }

    &.right {
      right: -10px;
      transform: scaleX(-1);
    }
  }

  .picture {
    width: $screenshotWidth;
    height: $screenshotHeight;
    object-fit: cover;
    border: $screenshotBorder;
    user-select: none;
    transition: all 400ms ease;
  }
</style>