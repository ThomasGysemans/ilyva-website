<section>
  <video src="/assets/compressed-background-video.mp4" autoplay loop muted preload="none" />
  <div class="shader">
    <slot />
  </div>
</section>

<style lang="scss">
  section {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  video {
		position: absolute;
    top: 0;
    left: 0;
		z-index: -1;
		width: 100%;
    height: 100vh;
    object-fit: cover;
	}

  .shader {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    background-color: rgba(#000, .5);
  }
</style>