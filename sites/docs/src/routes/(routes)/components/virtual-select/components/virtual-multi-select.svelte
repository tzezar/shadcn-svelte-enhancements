<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { tick } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Virtualization from '../virtualization/virtualization.svelte';
	import type { VSItem } from '../virtual-select/types';
	import VirtualMultiSelectItem from '../virtual-multi-select/virtual-multi-select-item.svelte';

	type Props = {
		items: VSItem[];
	};

	let { items }: Props = $props();

	let isOpen = $state(false);
	let listContainer: HTMLElement | null = $state(null);

	// let selectedItemPosition = $state(0);

	let selectedValues: VirtualSelectItem[] = $state([]);

	$effect(() => {
		console.log($state.snapshot(selectedValues));
	});

	let highlightedItemIndex = $state(0);
	let highlightedItemScrollPosition = $state(0);

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				highlightedItemIndex = Math.min(highlightedItemIndex + 1, items.length - 1);
				break;
			case 'ArrowUp':
				event.preventDefault();
				highlightedItemIndex = Math.max(highlightedItemIndex - 1, 0);
				break;
			case 'Enter':
				event.preventDefault();
				handleSelect(items[highlightedItemIndex], highlightedItemIndex);
				isOpen = false;
				break;
			case 'Escape':
				isOpen = false;
				break;
		}
	}

	// function scrollToSelectedItemByIndex(index: number) {
	// 	const selectedElement = listContainer?.querySelector(`[data-index="${index}"]`);
	// 	if (selectedElement) {
	// 		selectedElement.scrollIntoView({ block: 'nearest' });
	// 	}
	// }

	function handleSelect(item: (typeof items)[0], index: number) {
		isOpen = true;

		if (selectedValues.some((selectedItem) => selectedItem.value === item.value)) {
			selectedValues = selectedValues.filter((selectedItem) => selectedItem.value !== item.value);
		} else {
			selectedValues = [...selectedValues, item];
		}

		highlightedItemIndex = index;
	}

	async function onOpen(isOpen: boolean) {
		if (!isOpen) return;
		await tick();
		// scrollToScrollIndex();
	}
</script>

<Popover.Root onOpenChange={onOpen} bind:open={isOpen}>
	<Popover.Trigger>
		<Button variant="outline">
			{#if selectedValues.length > 0}
				{selectedValues.map((item) => item.label).join(', ')}
			{:else}
				'Placeholder'
			{/if}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="p-0 outline-none" align="start">
		<div
			bind:this={listContainer}
			tabindex="0"
			role="listbox"
			onkeydown={handleKeydown}
			class="outline-none"
		>
			<Virtualization
				style="width: 100%; height: 160px;"
				{items}
				scrollToIndex={highlightedItemIndex}
			>
				{#snippet vl_slot({ index, item })}
					<VirtualMultiSelectItem
						{item}
						{index}
						{highlightedItemIndex}
						{selectedValues}
						{handleSelect}
					></VirtualMultiSelectItem>
				{/snippet}
			</Virtualization>
		</div>
	</Popover.Content>
</Popover.Root>
