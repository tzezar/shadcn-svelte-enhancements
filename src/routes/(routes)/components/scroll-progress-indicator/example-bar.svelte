<script lang="ts">
	import { ScrollProgressIndicator } from '$lib/components/tzezars-enhancements/scroll-progress-indicator';
</script>

<ScrollProgressIndicator
	classes={{
		container: 'border',
		barLine: 'bg-blue-400 h-4'
	}}
	config={{
		type: 'bar',
		vertical: 'top',
		outside: false
	}}
>
	{#each Array.from({ length: 10 }) as item, i}
		<div class="flex h-64 items-center justify-center border-b">
			{i + 1}
		</div>
	{/each}
</ScrollProgressIndicator>
