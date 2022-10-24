<script lang="ts">
	import abcjs, { type AbcVisualParams } from 'abcjs';
	import { onMount } from 'svelte';
	import { tap } from 'svelte-gestures';
	import { goto } from '$app/navigation';

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

	function onTap(event: Event) {
		//console.log('tapped!');
		// Open dialog
		// add "open" attribute to the dialog
		//alert('yo!')

		// just go back, for now
		goto(`/`, { replaceState: true }) 
	}
</script>

<div id="paper" use:tap={{ timeframe: 300 }} on:tap={onTap} />

<dialog>
	<article>
	  <header>
		<a href="#close" aria-label="Close" class="close"></a>
		Modal title
	  </header>
	  <p>
		Nunc nec ligula a tortor sollicitudin dictum in vel enim. 
		Quisque facilisis turpis vel eros dictum aliquam et nec turpis. 
		Sed eleifend a dui nec ullamcorper. 
		Praesent vehicula lacus ac justo accumsan ullamcorper.
	  </p>
	  <footer>
		<a href="#cancel" role="button" class="secondary">Cancel</a>
		<a href="#confirm" role="button">Confirm</a>
	  </footer>
	</article>
  </dialog>

<style lang="css">
	#paper {
		height: 100vh;
		background-color: beige;
	}
</style>
