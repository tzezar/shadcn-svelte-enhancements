<script lang="ts">
	import { cn } from '$lib/utils';
	import { getContext, type Snippet } from 'svelte';
	import { virtualSelectKey } from '.';
	import type { VirtualMultiSelectContext } from './types';

	type Props = {
		index: number | string;
		item: any;
		children: Snippet;
		class?: string;
	};

	let context = getContext<VirtualMultiSelectContext>(virtualSelectKey);
	const { index, item, children, class: _class }: Props = $props();

	console.log(context);
</script>

<div
	role="option"
	aria-selected={context.highlightedItemIndex.current === index}
	class={cn('w-full cursor-pointer p-2', {
		'!bg-red-400': context.selectedValues.current.map((item) => item.value).includes(item.value),
		'bg-secondary': context.highlightedItemIndex.current === index
	})}
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
	Row: #{index} Item: {item.label}
</div>
