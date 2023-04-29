<div>
  <b>
    <slot />
  </b>
  <h3>
    <slot />
  </h3>
</div>

<style lang="scss">
  @import "$mixins";

  div {
    position: relative;
  }

  b {
    position: absolute;
    top: 8%;
    right: -2%;
    opacity: .3;
    user-select: none;
    z-index: -1;
    @include keyword(rgba($videoTextColorForKeywords, .5), rgba(#fff, .2));
  }

  b,
  h3 {
    text-align: center;
  }
  
  b {
    font-size: 2.3em;
  }
  
  h3 {
    color: #fff;
    font-size: 2.4em;
    white-space: nowrap;
  }

  @media screen and (max-width: 1135px) {
    b {
      font-size: 1.9em;
    }

    h3 {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 1135px) {
    b {
      font-size: 1.4em;
    }

    h3 {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 350px) {
    b {
      font-size: 1.2em;
      right: 5%;
    }

    h3 {
      font-size: 1.3m;
    }
  }
</style>