<script lang="ts">
	let state = {
		value: 'abc'
	};

	let { children } = $props();
</script>

<div>
	{@render children(state )}
</div>
