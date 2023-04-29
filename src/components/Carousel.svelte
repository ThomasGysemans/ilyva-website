<script lang="ts">
	import { screenshots } from "$lib/screenshots";
	import ManualNavigation from "./ManualNavigation.svelte";
	import Fa from "svelte-fa";

	let carousel: HTMLElement;
	let currentScreenshot: number = 0;

	// Basically, we get the selected screenshot here,
	// and then move our carousel towards the absolute position of the target, on the x-axis.
	// Note that actually the `left` property from the bounding rect is relative to the screen's border,
	// not to the beginning of the parent's horizontal scrolling.
	// Therefore, we calculate the width of the selected element,
	// and multiply it by its position among the others.
	// Which gives us its actual x position relative to the beginning of the parent's scrolling.
	// However, so that we can go back easily, if we select the same element twice,
	// then we just move to the one before that.

	function getWidthOfIndex(index: number) {
		const selectedScreenshot = carousel.querySelector("button[data-index='" + index + "']")!.parentElement as HTMLDivElement;
		const rect = selectedScreenshot.getBoundingClientRect();
		return rect.width;
	}

	function selectScreenshot(index: number) {
		if (index <= currentScreenshot) {
			if (index > 0) {
				currentScreenshot = index - 1;
			}
		} else {
			currentScreenshot = index;
		}
		moveToPosition(currentScreenshot);
	}

	/**
	 * Moves towards the position of the picture whose index is `index`.
	 * @param index The index of the selected picture.
	 */
	function moveToPosition(index: number) {
		console.log("index =", index);
		const width = getWidthOfIndex(index);
		let amount: number;
		amount = width * index;
		carousel.scrollLeft = amount;
	}

	// manual navigation for smaller screens

	function nextScreenshot() {
		if (currentScreenshot + 1 < screenshots.length) {
			moveToPosition(++currentScreenshot);
		}
	}
	
	function previousScreenshot() {
		if (currentScreenshot - 1 >= 0) {
			moveToPosition(--currentScreenshot);
		}
	}
</script>

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
<p class="explanation-horizontal-navigation">Défile les images en appuyant sur elles</p>
<div class="manual-navigation">
	<p>Défile les images avec les flèches ci-dessous :</p>
	<div class="arrows">
		<ManualNavigation
			on:previous={previousScreenshot}
			on:next={nextScreenshot}
		/>
	</div>
</div>

<style lang="scss">
	.carousel {
		overflow: hidden;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		-webkit-overflow-scrolling: touch; // for iOS
		scroll-behavior: smooth;
	}

	.carousel > div {
		width: 65%;
		min-width: 400px;
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
		margin: 30px;
	}

	.carousel > div:nth-of-type(2n) {
		transform: rotate(4deg);
	}

	.carousel > div:nth-of-type(2n + 1) {
		transform: rotate(-4deg);
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

	p {
		color: #fff;
		text-align: center;
	}

	.manual-navigation {
		display: none;
	}

	.arrows {
		width: 100%;
		text-align: center;
	}

	@media screen and (max-width: 550px) {
		.explanation-horizontal-navigation {
			display: none;
		}

		.manual-navigation {
			display: block;
		}

		// We don't want the user to be able to click the buttons anymore,
		// because it would only create confusion on such a tiny screen.
		div[role] > button {
			pointer-events: none;
		}

		.carousel > div {
			transform: rotate(0deg)!important;
		}
	}
</style>
