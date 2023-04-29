<section>
  <slot />
</section>

<style lang="scss">
  section {
    position: relative;
    z-index: 2; // in front of the video's shader
    width: 100%;
    height: 100vh;
		box-sizing: border-box;
  }
</style>