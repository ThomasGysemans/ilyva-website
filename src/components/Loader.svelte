<script lang="ts">
  export let global: boolean = false;
</script>

{#if global}
  <div class="loading-container">
    <div class="circle" />
  </div>
{:else}
  <div class="circle"></div>
{/if}

<style lang="scss">
  @import "$root";

  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: all;
  }

  .circle {
    cursor: default;
    pointer-events: none;
    position: relative;
  }

  .circle::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    margin: -1.7em 0 0 -1.7em;
    width: 3em;
    height: 3em;
    animation: segment-spin 0.6s linear infinite;
    border-radius: 100%;
    border-color: #575757 rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1);
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0 0 0 1px transparent;
    visibility: visible;
  }

  @keyframes segment-spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>