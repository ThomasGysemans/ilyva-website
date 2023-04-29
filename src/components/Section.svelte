<script lang="ts">
  export let limitless = false;
</script>

<section class:limitless>
  <slot />
</section>

<style lang="scss">
  section {
    position: relative;
    z-index: 2; // in front of the video's shader
    width: 100%;
    height: 100vh;
		box-sizing: border-box;

    &.limitless {
      height: 100%;
      min-height: 100vh;
    }
  }
</style>