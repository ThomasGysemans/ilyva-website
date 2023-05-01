<script>
	import BackgroundVideo from "$components/BackgroundVideo.svelte";
</script>

<BackgroundVideo />
<slot />

<style lang="scss">
  @import "$root";

  :global(body) {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }

  // let's apply the font on all elements
  // so that we don't have to declare it on every single text element.
  :global(*) {
    font-family: "Hack", sans-serif; // 'sans-serif' is the default font family applied while the main one is loading
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  // here, the local() function will go look into the user's files for the desired font family.
  // If it is not found, then our font family is used (the one in `/assets/fonts/`).
  // We also specify a weight so that the right font is applied according to the weight of the given text.
  @font-face {
    font-family: "Hack";
    font-weight: normal;
    src: local("Hack-Regular"), local("Hack Regular"), url("/assets/fonts/Hack-Regular.ttf"); 
  }

  @font-face {
    font-family: "Hack";
    font-weight: bold;
    src: local("Hack-Bold"), local("Hack Bold"), url("/assets/fonts/Hack-Bold.ttf");
  }
</style>