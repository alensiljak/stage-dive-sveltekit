<script lang="ts">
	import abcjs, { type AbcVisualParams } from 'abcjs';
	import { onMount } from 'svelte';
	import { tap, swipe } from 'svelte-gestures';
	import { goto } from '$app/navigation';
	import { toolbarVisible } from '../../storage/store';
	import { notifications } from '../../lib/notifications';
	import Toast from '../../components/Toast.svelte';

	toolbarVisible.set(false);
	let open = false;

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
		goto(`/`, { replaceState: true });
	}

	function onTap(event: Event) {
		console.log('tap');

		// Open dialog
		// add "open" attribute to the dialog
		// open = true

		toolbarVisible.update((value) => !value);
		//notifications.success('yo!', 5000)
	}

	function closeDialog() {
		open = false;
	}

	function onSwipe(event: CustomEvent) {
		console.log('swipe:');

		// notifications.info('swiped', 350)
		toolbarVisible.set(true);
	}
</script>

<div
	id="container"
	use:tap={{ timeframe: 300 }} on:tap={onTap}
	use:swipe={{ touchAction: 'pan-y' }} on:swipe={onSwipe}
>
	<div id="paper" />
</div>

<dialog {open}>
	<article>
		<header>
			<a href="#close" aria-label="Close" class="close" on:click={closeDialog}>&nbsp;</a>
			Modal title
		</header>
		<p>
			Nunc nec ligula a tortor sollicitudin dictum in vel enim. Quisque facilisis turpis vel eros
			dictum aliquam et nec turpis. Sed eleifend a dui nec ullamcorper. Praesent vehicula lacus ac
			justo accumsan ullamcorper.
		</p>
		<footer>
			<a href="#cancel" role="button" class="secondary" on:click={closeDialog}>Cancel</a>
			<a href="#confirm" role="button" on:click={goHome}>Confirm</a>
		</footer>
	</article>
</dialog>

<style lang="scss">
	#container {
		height: 100vh;
		background-color: beige;
	}
	#paper {
		//height: 100%;
		background-color: darkred;
	}
</style>
