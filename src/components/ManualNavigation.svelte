<script>
	import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
	import { createEventDispatcher } from "svelte";
	import Fa from "svelte-fa";

  const dispatch = createEventDispatcher();
  
  function previous() { dispatch('previous'); }
  function next() { dispatch('next'); }
</script>

<button type="button" on:click={previous}>
  <Fa icon={faAngleLeft} />
</button>
<button type="button" on:click={next}>
  <Fa icon={faAngleRight} />
</button>

<style lang="scss">
  button {
		margin-right: 7px;
		border-radius: 5px;
		cursor: pointer;
		border: 1px solid #fff;
		color: #fff;
		background-color: transparent;
		height: 50px;
		width: 50px;
		transition: background-color 200ms ease;

		&:hover,
		&:focus {
			background-color: rgba(#fff, .1);
		}
	}
</style>