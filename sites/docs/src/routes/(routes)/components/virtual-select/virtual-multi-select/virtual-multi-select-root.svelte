<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';

	import { setContext, tick, type Snippet } from 'svelte';
	import type {
		HighlightedItemIndex,
		SelectedValues,
		VirtualMultiSelectContext,
		VSItem
	} from './types';
	import { virtualSelectKey } from '.';
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

	let isOpen = $state(false);
	let listContainer: HTMLElement | null = $state(null);

	let selectedItemsIndex = $state({ current: 0 });

	let highlightedItemIndex: HighlightedItemIndex = $state({ current: 1 });
	let highlightedItemScrollPosition = $state({ current: 0 });

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				highlightedItemIndex.current = Math.min(
					highlightedItemIndex?.current + 1,
					items.length - 1
				);
				break;
			case 'ArrowUp':
				event.preventDefault();
				highlightedItemIndex.current = Math.max(highlightedItemIndex?.current - 1, 0);
				break;
			case 'Enter':
				event.preventDefault();
				handleSelect(items[highlightedItemIndex?.current], highlightedItemIndex?.current);
				isOpen = false;
				break;
			case 'Escape':
				isOpen = false;
				break;
		}
	}

	function handleSelect(item: (typeof items)[0], index: number) {
		isOpen = true;

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

	setContext<VirtualMultiSelectContext>(virtualSelectKey, {
		items,
		listContainer,
		handleKeydown,
		selectedItemsIndex,
		selectedValues,
		highlightedItemIndex,
		highlightedItemScrollPosition,
		handleSelect
	});
</script>

<Popover.Root {onOpenChange} bind:open class={cn('', _class)}>
	{@render children()}
</Popover.Root>
