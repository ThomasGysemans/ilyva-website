<script lang="ts">
	import { createEventDispatcher } from "svelte";

  export let href: string | null = null;
  export let primary: boolean = false;
  export let secondary: boolean = false;

  const dispatch = createEventDispatcher();
  function onClick(e: Event) {
    dispatch('click', {
      e
    });
  }
</script>

{#if href !== null}
  <a class="button" {href} on:click={onClick} class:primary class:secondary>
    <slot />
  </a>
{:else}
  <button class="button" type="button" on:click={onClick} class:primary class:secondary>
    <slot />
  </button>
{/if}

<style lang="scss">
  @import "$root";

  a,
  button {
    --color: #{$primaryColor};
    --shadow-color: #{rgba($primaryColor, .4)};
    --background-color: #{rgba($primaryColor, .3)};
    --ripple-color: #{rgba($primaryColor, .5)};
    --ripple-end-color: #{rgba($primaryColor, .1)};

    &.secondary {
      --color: #{$secondaryColor};
      --shadow-color: #{rgba($secondaryColor, .4)};
      --background-color: #{rgba($secondaryColor, .3)};
      --ripple-color: #{rgba($secondaryColor, .5)};
      --ripple-end-color: #{rgba($secondaryColor, .1)};
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  .button {
    cursor: pointer;
    color: #fff;
    border: 1px solid var(--color);
    background-color: var(--background-color);
    box-shadow: 4px 4px 4px var(--shadow-color);
    background-position: center;
    outline-color: transparent;
    transition:
      box-shadow 400ms ease,
      background 800ms ease;

    &:hover,
    &:focus {
      box-shadow: 2px 2px 4px var(--ripple-color);
      background: var(--ripple-color) radial-gradient(circle, transparent 1%, var(--ripple-end-color) 1%) center/15000%;
    }

    &:active {
      background-color: var(--ripple-color);
      background-size: 100%;
      transition: background 0s;
    }
  }
</style>