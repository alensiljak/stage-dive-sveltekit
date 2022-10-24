<script lang="ts">
	import abcjs from 'abcjs';
	import { onMount } from 'svelte';
	import { tap } from 'svelte-gestures';

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
		abcjs.renderAbc('paper', abc);
	}

	function onTap(event: Event) {
		console.log('tapped!')
	}
</script>

<div id="paper" use:tap={{ timeframe: 300 }} on:tap={onTap} />

<style lang="css">
	#paper {
		height: 100vh;
		background-color: beige;
	}
</style>