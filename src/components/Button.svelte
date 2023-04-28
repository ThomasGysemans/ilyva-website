<script lang="ts">
	import { createEventDispatcher } from "svelte";

  export let href: string | null = null;

  const dispatch = createEventDispatcher();
  function onClick(e: Event) {
    dispatch('click', {
      e
    });
  }
</script>

{#if href !== null}
  <a class="button" {href} on:click={onClick}>
    <slot />
  </a>
{:else}
  <button class="button" type="button" on:click={onClick}>
    <slot />
  </button>
{/if}

<style lang="scss">
  @import "$root";

  a {
    text-decoration: none;
    display: inline-block;
  }

  .button {
    cursor: pointer;
    color: #fff;
    border: 1px solid $primaryColor;
    background-color: rgba($primaryColor, .3);
    box-shadow: 4px 4px 4px rgba($primaryColor, .4);
    background-position: center;
    outline-color: transparent;
    transition:
      box-shadow 400ms ease,
      background 800ms ease;

    &:hover,
    &:focus {
      box-shadow: 2px 2px 4px rgba($primaryColor, .5);
      background: rgba($primaryColor, .5) radial-gradient(circle, transparent 1%, rgba($primaryColor, .1) 1%) center/15000%;
    }

    &:active {
      background-color: rgba($primaryColor, .5);
      background-size: 100%;
      transition: background 0s;
    }
  }
</style>