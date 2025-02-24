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

	const { index, item, children, _class }: Props = $props();

	let context = getContext<VirtualSelectContext>(virtualSelectKey);
</script>

<div
	role="option"
	aria-selected={context.highlightedItemIndex.current === index}
	class={cn('w-full cursor-pointer p-2')}
	class:bg-secondary={context.highlightedItemIndex.current === index}
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
