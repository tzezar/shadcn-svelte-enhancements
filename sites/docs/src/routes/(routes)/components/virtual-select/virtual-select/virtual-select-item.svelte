<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { VirtualSelectContext } from './types';
	import { virtualSelectKey } from '.';
	import { cn } from '$lib/utils';

	type Props = {
		index: number | string;
		item: any;
		children: Snippet;
		class?: string;
	};

	function isSelected(index: number | string) {
		return context.selectedItemIndex.current === index;
	}

	function isHighlighted(index: number | string) {
		return context.highlightedItemIndex.current === index;
	}

	const { index, item, children, class: _class }: Props = $props();

	let context = getContext<VirtualSelectContext>(virtualSelectKey);
</script>

<div
	role="option"
	aria-selected={context.selectedItemIndex.current === index}
	data-selected={context.selectedItemIndex.current === index}
	data-highlighted={context.highlightedItemIndex.current === index}
	class={cn(
		'w-full cursor-pointer p-2',
		isSelected(index) && 'bg-secondary',
		isHighlighted(index) && 'bg-primary-foreground',
		_class
	)}
	data-index={index}
	tabindex="0"
	onclick={() => {
		context.handleSelect(item, +index);
	}}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			context.handleSelect(item, +index);
		}
	}}
>
	{@render children()}
</div>
