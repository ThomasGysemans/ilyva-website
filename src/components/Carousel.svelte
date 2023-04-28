<script lang="ts">
	import { screenshots } from "$lib/screenshots";

	let carousel: HTMLElement;

	function selectScreenshot(index: number) {
		// Basically, we get the selected screenshot here,
		// and then move our carousel towards the absolute position of the target, on the x-axis.
		const selectedScreenshot = carousel.querySelector("button[data-index='" + index + "']")!.parentElement as HTMLDivElement;
		carousel.scrollLeft = selectedScreenshot.getBoundingClientRect().left;
	}
</script>

<section>
	<h1>UN JEU POUR RÉVISER BASH</h1>
	<div bind:this={carousel} class="carousel">
		{#each screenshots as screenshot, index (screenshot.name)}
			<div role="tabpanel">
				<button type="button" data-index={index} on:click={() => selectScreenshot(index)}>
					<img loading="lazy" src="/assets/illustrations/duct-tape.png" alt="adhésif" />
					<img loading="lazy" src="/assets/screenshots/{screenshot.name}" alt={screenshot.description} />
				</button>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		margin: 30% 0;
	}

	h1 {
		color: #fff;
		margin: 50px 0 50px 15%;
		font-size: 40px;
		font-weight: normal;
	}

	.carousel {
		overflow: hidden;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		-webkit-overflow-scrolling: touch; // for iOS
		scroll-behavior: smooth;
	}

	.carousel > div {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel > div button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 0;
		display: flex;
		justify-content: center;
		width: 600px;
		margin: 60px;
	}

	.carousel > div:nth-of-type(2n) {
		transform: rotate(5deg);
	}

	.carousel > div:nth-of-type(2n + 1) {
		transform: rotate(-5deg);
	}

	.carousel > div button img {
		user-select: none; // so that we cannot select the image like if it was text
	}

	.carousel > div button > img:first-of-type {
		position: absolute;
		width: 100px;
		opacity: 0.4;
		top: 10px;
		transform: rotate(-45deg);
	}

	.carousel > div button > img:last-of-type {
		width: 100%;
		height: 100%;
		display: block;
		border: 5px solid #fff;
	}
</style>
