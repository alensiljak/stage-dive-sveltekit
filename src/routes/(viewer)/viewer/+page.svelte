<script lang="ts">
	import abcjs, { type AbcVisualParams } from 'abcjs';
	import { onMount } from 'svelte';
	import { tap } from 'svelte-gestures';
	import { goto } from '$app/navigation';

	let open = false

	onMount(() => {
		createSheet();
	});

	function createSheet() {
		const abc = `
X: 1
T: My Tune
C: Alen Šiljak
L: 1/4
K: perc
F c F c
`;

		const visualOptions: AbcVisualParams = { responsive: 'resize' };
		abcjs.renderAbc('paper', abc, visualOptions);
	}

	function goHome() {
		// just go back, replace history
		goto(`/`, { replaceState: true })
	}

	function onTap(event: Event) {
		// Open dialog
		// add "open" attribute to the dialog
		open = true

		
	}

	function closeDialog() {
		open = false
	}
</script>

<div id="paper" use:tap={{ timeframe: 300 }} on:tap={onTap} />

<dialog {open}>
	<article>
	  <header>
		<a href="#close" aria-label="Close" class="close" on:click={closeDialog}> </a>
		Modal title
	  </header>
	  <p>
		Nunc nec ligula a tortor sollicitudin dictum in vel enim. 
		Quisque facilisis turpis vel eros dictum aliquam et nec turpis. 
		Sed eleifend a dui nec ullamcorper. 
		Praesent vehicula lacus ac justo accumsan ullamcorper.
	  </p>
	  <footer>
		<a href="#cancel" role="button" class="secondary" on:click={closeDialog}>Cancel</a>
		<a href="#confirm" role="button" on:click={goHome}>Confirm</a>
	  </footer>
	</article>
  </dialog>

<style lang="scss">
	#paper {
		height: 100vh;
		background-color: beige;
	}
</style>
