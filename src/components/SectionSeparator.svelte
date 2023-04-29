<script lang="ts">
  export let place: "top" | "bottom";
</script>

<div class="separator">
  <div class={place} />
  <div class={place} />
</div>

<style lang="scss">
  @import "$root";

  $height: 10vh;

  .separator > div {
    width: 100%;
    height: $height;
    position: absolute;
    z-index: 100;
    left: 0;
  }

  .separator > div.top:first-of-type {
    top: -1 * $height;
    background: linear-gradient(to bottom, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
  }

  .separator > div.bottom:first-of-type {
    bottom: -1 * $height;
    background: linear-gradient(to top, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
  }

  .separator > div.top:last-of-type {
    top: 0;
    background: linear-gradient(to top, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
  }

  .separator > div.bottom:last-of-type {
    bottom: 0;
    background: linear-gradient(to bottom, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
  }
</style>