<script lang="ts">
	import type { VirtualSelectContext, VSItem } from './types';
	import { getContext, type Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import type { ALIGNMENT, SCROLL_BEHAVIOR } from '../virtualization';
	import { virtualSelectKey } from '.';
	import Virtualization from '../virtualization/virtualization.svelte';

	type Props = {
		children: Snippet<[index: number | string, item: VSItem]>;
		scrollToBehaviour?: SCROLL_BEHAVIOR,
		scrollAlignment?: ALIGNMENT
		class?: string;
	};

	const { children, class: _class }: Props = $props();

	let context = getContext<VirtualSelectContext>(virtualSelectKey);
</script>

<Virtualization
	class={cn('h-[500px]', _class)}
	items={context.items}
	scrollToIndex={context.highlightedItemIndex.current}
>
	{#snippet vl_slot({ index, item })}
		{@render children(index, item)}
	{/snippet}
</Virtualization>
