<script lang="ts">
	import Blob from "./Blob.svelte";

  export let author: Author;
</script>

<section>
  <div>
    <h2>{author.firstname} {author.lastname}</h2>
    <p>{author.quote}</p>
  </div>
  <div>
    <Blob picture="/assets/avatars/{author.avatar}" />
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: row;
    margin: 2% 50px 0 15%;
    color: #fff;
  }

  section > div {
    width: 33%;
  }

  section > div > h2 {
    font-size: xx-large;
    width: fit-content;
  }

  // section svg {
  //   position: relative;
  //   top: -50px;
  // }

  section > div:last-of-type > h2 {
    width: max-content;
  }

  // section > div > ul {
  //   list-style: none;
  //   display: flex;
  //   padding: 0;
  //   // note that the `ul` also has `margin` as a default property
  // }

  // section > div > ul > li {
  //   max-width: 50px;
  //   max-height: 50px;
  //   width: auto;
  //   display: flex;
  //   justify-content: center;
  // }

  // section ul img {
  //   width: auto;
  //   height: 100%;
  // }
</style>