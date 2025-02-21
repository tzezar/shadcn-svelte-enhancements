<script lang="ts">
	// @ts-nocheck
    import { ScrollProgressIndicator } from '$lib/components/tzezars-enhancements/scroll-progress-indicator';
	import { cn } from '$lib/utils';

	import * as Select from '$lib/components/ui/select/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';

	const indicatorTypes = [
		{ value: 'circle', label: 'Circle' },
		{ value: 'bar', label: 'Line' }
	];

	const horizontals = [
		{ value: 'left', label: 'Left' },
		{ value: 'right', label: 'Right' }
	];
	const verticals = [
		{ value: 'top', label: 'Top' },
		{ value: 'bottom', label: 'Bottom' }
	];

	let horizontal = $state(horizontals[1]);
	let vertical = $state(verticals[1]);
	let indicatorType = $state(indicatorTypes[0]);
	let outside = $state(false);
</script>

<div class="flex w-full flex-col gap-4">
	<Select.Root
		type="single"
		name="indicatorType"
		onValueChange={(value) => {
			indicatorType = indicatorTypes.find((item) => item.value === value);
		}}
	>
		<Select.Trigger class="w-[180px]">{indicatorType.label}</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each indicatorTypes as item}
					<Select.Item value={item.value} label={item.label}>
						{item.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>
	{#if indicatorType.value === 'circle'}
		<Select.Root
			type="single"
			name="horizontalPosition"
			onValueChange={(value) => {
				horizontal = horizontals.find((item) => item.value === value);
			}}
		>
			<Select.Trigger class="w-[180px]">{horizontal.label}</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{#each horizontals as item}
						<Select.Item value={item.value} label={item.label}>
							{item.label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
	{/if}

	<Select.Root
		type="single"
		name="verticalPosition"
		onValueChange={(value) => {
			vertical = verticals.find((item) => item.value === value);
		}}
	>
		<Select.Trigger class="w-[180px]">{vertical.label}</Select.Trigger>
		<Select.Content>
			<Select.Group>
				{#each verticals as item}
					<Select.Item value={item.value} label={item.label}>
						{item.label}
					</Select.Item>
				{/each}
			</Select.Group>
		</Select.Content>
	</Select.Root>

	{#if indicatorType.value === 'bar' && vertical.value === 'top'}
		<div class="flex items-center space-x-2">
			<Switch id="airplane-mode" bind:checked={outside} />
			<Label for="airplane-mode">Outside</Label>
		</div>
	{/if}

	<ScrollProgressIndicator
		classes={{
			container: 'border'
		}}
		config={{
			type: indicatorType.value,
			vertical: vertical.value,
			horizontal: horizontal.value,
			outside
		}}
	>
		{#each Array.from({ length: 10 }) as item, i}
			<div class={cn(`flex h-64 items-center justify-center border-b `)}>
				{i + 1}
			</div>
		{/each}
	</ScrollProgressIndicator>
</div>
