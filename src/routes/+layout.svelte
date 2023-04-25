<slot />

<style>
  :global(body) {
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
  :global(body>div) {
    height: 100vh;
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