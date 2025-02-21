<script lang="ts">
	import { ScrollProgressIndicator } from '$lib/components/tzezars-enhancements/scroll-progress-indicator';
	import { cn } from '$lib/utils';
</script>

<ScrollProgressIndicator
	classes={{
		container: 'border',
		circleTrack: 'stroke-transparent',
		circleSvg: 'stroke-blue-400 stroke-[10]',
		percentage: 'text-blue-400'
	}}
	config={{
		type: 'circle',
		vertical: 'bottom',
		horizontal: 'right',
		showPercentage: true
	}}
>
	{#each Array.from({ length: 10 }) as item, i}
		<div class={cn(`flex h-64 items-center justify-center border-b `)}>
			{i + 1}
		</div>
	{/each}
</ScrollProgressIndicator>
