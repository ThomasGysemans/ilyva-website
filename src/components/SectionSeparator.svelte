<div />
<div />

<style lang="scss">
  @import "$root";

  $height: 10vh;

  div {
    width: 100%;
    height: $height;
    position: absolute;
    left: 0;
    z-index: 100;
  }

  div:nth-child(1) {
    background: linear-gradient(to bottom, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
    top: -1 * $height;
  }

  div:nth-child(2) {
    background: linear-gradient(to top, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
    top: 0px;
  }
</style>