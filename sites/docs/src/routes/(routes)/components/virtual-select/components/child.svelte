<script lang="ts">

	let { state, children } = $props();
</script>

<div>
	{@render children(state)}
</div>
