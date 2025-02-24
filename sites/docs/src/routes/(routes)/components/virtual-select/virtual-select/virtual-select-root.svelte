<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';

	import { setContext, tick, type Snippet } from 'svelte';
	import type { VirtualSelectContext } from './types';
	import { virtualSelectKey } from '.';

	type Props = {
		children: Snippet;
		selectedValue: any;
		items: any[];
	};

	let { children, selectedValue = $bindable(null), items }: Props = $props();

	let listContainer: HTMLElement | null = $state(null);
	let highlightedItemIndex = $state({ current: 0 });
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
				open = false;
				break;
			case 'Escape':
				open = false;
				break;
		}
	}

	function updateHighlightedItemScrollPosition(index: number) {
		// Calculate approximate scroll position based on item height (assuming 40px per item)
		const itemHeight = 40;
		const containerHeight = 160;
		const totalItems = Math.floor(containerHeight / itemHeight);
		const halfItems = Math.floor(totalItems / 2);

		// Center the selected item
		highlightedItemScrollPosition.current = Math.max(0, (index - halfItems) * itemHeight);
	}

	function handleSelect(item: (typeof items)[0], index: number) {
		open = false;
		selectedValue = item;
		highlightedItemIndex.current = index;
		updateHighlightedItemScrollPosition(index);
	}

	setContext<VirtualSelectContext>(virtualSelectKey, {
		items,
		listContainer,
		handleKeydown,
		highlightedItemIndex,
		highlightedItemScrollPosition,
		handleSelect
	});

	async function onOpenChange(isOpen: boolean) {
		if (!isOpen) return;
		await tick();
	}

	let open = $state(false);
</script>

<Popover.Root {onOpenChange} bind:open>
	{@render children()}
</Popover.Root>
