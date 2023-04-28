<div />
<div />

<style lang="scss">
  @import "$root";

  div {
    width: 100%;
    height: 10vh;
    position: absolute;
    left: 0;
    z-index: 100;
  }

  div:nth-child(1) {
    background: linear-gradient(to bottom, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
    top: -75px;
  }

  div:nth-child(2) {
    background: linear-gradient(to top, transparent 10%, darken($mapBackgroundColor, 5%) 100%);
    top: 0px;
  }
</style>