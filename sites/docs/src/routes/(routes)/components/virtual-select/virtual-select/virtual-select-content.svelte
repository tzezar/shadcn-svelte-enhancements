<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import Virtualization from '../virtualization/virtualization.svelte';
	import type { VirtualSelectContext, VSItem } from './types';
	import VirtualSelectItem from './virtual-select-item.svelte';
	import { virtualSelectKey } from '.';

	type Props = {
		children: Snippet<[index: number | string, item: VSItem]>;
	};

	const { children }: Props = $props();

	let context = getContext<VirtualSelectContext>(virtualSelectKey);

</script>

<Virtualization
	style="width: 100%; height: 160px;"
	items={context.items}
	scrollToIndex={context.highlightedItemIndex.current}
>
	{#snippet vl_slot({ index, item })}
		{@render children(index, item)}
	{/snippet}
</Virtualization>
