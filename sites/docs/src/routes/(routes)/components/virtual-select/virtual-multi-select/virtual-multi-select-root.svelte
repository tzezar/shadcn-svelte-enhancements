<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';

	import { setContext, tick, type Snippet } from 'svelte';
	import type { HighlightedItemIndex, SelectedValues, VirtualMultiSelectContext } from '../../../../../lib/components/tzezars-enhancements/virtual-select/types';
	import { virtualSelectKey } from '../../../../../lib/components/tzezars-enhancements/virtual-select';
	import { cn } from '$lib/utils';

	type Props = {
		children: Snippet;
		selectedValues: SelectedValues;
		items: any[];
		class?: string;
		open?: boolean;
	};

	let {
		children,
		selectedValues = $bindable({ current: [] }),
		open = $bindable(false),
		items,
		class: _class
	}: Props = $props();

	let listContainer: HTMLElement | null = $state(null);
	let highlightedItemIndex: HighlightedItemIndex = $state({ current: 0 });
	let highlightedItemScrollPosition = $state({ current: 0 });

	function handleKeydown(event: KeyboardEvent) {
		if (!open) return;

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				highlightedItemIndex.current = Math.min(highlightedItemIndex.current + 1, items.length - 1);
				highlightedItemIndex = highlightedItemIndex;
				break;
			case 'ArrowUp':
				event.preventDefault();
				highlightedItemIndex.current = Math.max(highlightedItemIndex.current - 1, 0);
				highlightedItemIndex = highlightedItemIndex;
				break;
			case 'Enter':
				event.preventDefault();
				handleSelect(items[highlightedItemIndex.current], highlightedItemIndex.current);
				open = true;
				break;
			case 'Escape':
				open = false;
				break;
		}
	}

	function handleSelect(item: (typeof items)[0], index: number) {
		open = true;

		if (selectedValues.current.some((selectedItem) => selectedItem.value === item.value)) {
			selectedValues.current = selectedValues.current.filter(
				(selectedItem) => selectedItem.value !== item.value
			);
		} else {
			selectedValues.current = [...selectedValues.current, item];
		}

		highlightedItemIndex.current = index;
	}

	async function onOpenChange(isOpen: boolean) {
		if (!isOpen) return;
		await tick();
	}

	let context = setContext<VirtualMultiSelectContext>(virtualSelectKey, {
		items,
		listContainer,
		handleKeydown,
		selectedValues,
		highlightedItemIndex,
		highlightedItemScrollPosition,
		handleSelect
	});
</script>

<Popover.Root {onOpenChange} bind:open class={cn('', _class)}>
	{@render children()}
</Popover.Root>
