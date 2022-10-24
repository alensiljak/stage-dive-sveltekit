<script lang="ts">
	import abcjs from 'abcjs';
	import { onMount } from 'svelte';

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
</script>

<div id="paper" />
