<script lang="ts">
	import '@picocss/pico/css/pico.css';
	import { Star } from 'lucide-svelte';
	import { toolbarVisible } from '../storage/store';

	let visible = true;

	toolbarVisible.subscribe((value) => {
		visible = value;
	});
</script>

{#if visible}
	<nav class="container-fluid">
		<ul>
			<li><Star color="red" fill="gold" /></li>
			<li><strong>Stage Dive</strong></li>
		</ul>
		<ul>
			<li><a class="secondary" href="/">Home</a></li>
			<li><a class="secondary" href="/library">Library</a></li>
			<li><a class="secondary" href="/viewer">Viewer</a></li>
			<li><a class="secondary" href="/settings">Settings</a></li>
		</ul>
	</nav>
{/if}

<main class="container">
	<slot />
</main>
