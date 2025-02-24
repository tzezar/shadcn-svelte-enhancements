<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { VirtualSelectContext, VSMSelection, VSSelection } from './types';
	import { virtualSelectKey } from '.';
	import { cn } from '$lib/utils';

	let context = getContext<VirtualSelectContext>(virtualSelectKey);

	type Props = {
		index: number | string;
		item: any;
		children: Snippet;
		class?: string;
	};

	function isSelected(index: number | string) {
		if (context.multiple) {
			let selection = context.selection as VSMSelection;
			return (selection?.current || []).some((selected) => selected.value === item.value);
		} else {
			let selection = context.selection as VSSelection;

			if (selection.current === null) return false
			return selection.current.value === item.value;
		}
	}

	function isHighlighted(index: number | string) {
		return context.highlightedItemIndex.current === index;
	}

	const { index, item, children, class: _class }: Props = $props();
</script>

<div
	role="option"
	aria-selected={isSelected(index)}
	data-selected={isSelected(index)}
	data-highlighted={isHighlighted(index)}
	class={cn(
		'w-full cursor-pointer p-2',
		'data-[highlighted="true"]:bg-accent data-[highlighted="true"]:text-accent-foreground',
		'data-[selected="true"]:bg-primary-foreground',
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
