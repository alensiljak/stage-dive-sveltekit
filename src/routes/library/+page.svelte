<script lang="ts">
	import { swipe } from 'svelte-gestures';

    let direction;
  let target;

  function handler(event: CustomEvent) {
    direction = event.detail.direction;
    target = event.detail.target;
  }
</script>

<h1>Library</h1>

<p>All your tunes are here</p>

<div use:swipe={{ timeframe: 300, minSwipeDistance: 60 }} on:swipe={handler} style="width:500px;height:500px;border:1px solid black;">
    direction: {direction}
  </div>