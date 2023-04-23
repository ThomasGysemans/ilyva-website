<slot />

<style>
  :global(html) {
    height: 100%;
    width: 100%;
  }
  :global(body) {
    margin: 0;
    height: inherit;
    width: inherit;
  }
  :global(body>div) {
    margin: 0;
    height: inherit;
    width: inherit;
  }
  @font-face {
    font-family: "Hack-Regular";
    src: url("/assets/Hack-Regular.ttf")
  }
  @font-face {
    font-family: "Hack-Bold";
    src: url("/assets/Hack-Bold.ttf")
  }
</style>