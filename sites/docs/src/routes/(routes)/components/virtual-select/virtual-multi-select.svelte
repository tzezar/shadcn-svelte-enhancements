<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as VirtualSelect from '$lib/components/tzezars-enhancements/virtual-select/index.ts';
	import type {
		VSItem,
		VSMSelection
	} from '$lib/components/tzezars-enhancements/virtual-select/types.ts';

	const items: VSItem[] = Array.from({ length: 100000 }, (_, i) => ({
		value: String(i),
		label: `Fruit ${i + 1}`
	}));

	let selection: VSMSelection = $state({ current: [] });
</script>

<VirtualSelect.Root bind:selection {items} multiple={true}>
	<VirtualSelect.Trigger>
		<Button variant="outline" class="flex h-full w-[200px] flex-wrap min- text-left">
			{#if selection.current !== null && selection.current.length > 0}
				{#each selection.current as item}
					<spa class='text-left w-full'>{item.label}</spa>
				{/each}
			{:else}
				<span class="text-muted-foreground  w-full text-left">Multi select</span>
			{/if}
		</Button>
	</VirtualSelect.Trigger>
	<VirtualSelect.Body>
		<VirtualSelect.Wrapper>
			<VirtualSelect.Content>
				{#snippet children(index, item)}
					<VirtualSelect.Item {item} {index}>
						{item.label}
					</VirtualSelect.Item>
				{/snippet}
			</VirtualSelect.Content>
		</VirtualSelect.Wrapper>
	</VirtualSelect.Body>
</VirtualSelect.Root>
