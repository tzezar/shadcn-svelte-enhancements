<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { VirtualSelectContext } from './types';
	import { virtualSelectKey } from '.';
	import { cn } from '$lib/utils';

	type Props = {
		children: Snippet;
		header?: Snippet;
		footer?: Snippet;
		class?: string;
	};

	let { children, header, footer, class: _class }: Props = $props();

	let context = getContext<VirtualSelectContext>(virtualSelectKey);
</script>

<div
	bind:this={context.listContainer}
	tabindex="0"
	role="listbox"
	onkeydown={context.handleKeydown}
	class={cn('', _class)}
>
	{@render header?.()}
	{@render children()}
	{@render footer?.()}
</div>
