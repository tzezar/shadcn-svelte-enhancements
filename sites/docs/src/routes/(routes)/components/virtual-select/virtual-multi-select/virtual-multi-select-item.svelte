<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { VirtualMultiSelectContext } from './types';
	import { virtualSelectKey } from '.';
	import { cn } from '$lib/utils';
	import { data } from '../../avatar-group/data';

	type Props = {
		index: number | string;
		item: any;
		children: Snippet;
		class?: string;
	};

	function isSelected(value: number | string) {
		return context.selectedValues.current.some((item) => item.value === value);
	}

	function isHighlighted(index: number | string) {
		return context.highlightedItemIndex.current === index;
	}

	const { index, item, children, class: _class }: Props = $props();

	let context = getContext<VirtualMultiSelectContext>(virtualSelectKey);
</script>

<div
	role="option"
	aria-selected={context.selectedValues.current.some((selected) => selected.value === item.value)}
	data-selected={context.selectedValues.current.some((selected) => selected.value === item.value)}
	data-highlighted={context.highlightedItemIndex.current === index}
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
