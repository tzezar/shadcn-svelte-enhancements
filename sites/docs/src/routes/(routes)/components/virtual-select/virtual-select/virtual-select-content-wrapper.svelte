<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { VirtualSelectContext } from './types';
	import { virtualSelectKey } from '.';

	type Props = {
		children: Snippet;
		header?: Snippet;
		footer?: Snippet;
	};

	let { children, header, footer }: Props = $props();

	let context = getContext<VirtualSelectContext>(virtualSelectKey);
</script>

<div
	bind:this={context.listContainer}
	tabindex="0"
	role="listbox"
	onkeydown={context.handleKeydown}
	class="overflow-auto outline-none"
>
	{@render header?.()}
	{@render children()}
	{@render footer?.()}
</div>
