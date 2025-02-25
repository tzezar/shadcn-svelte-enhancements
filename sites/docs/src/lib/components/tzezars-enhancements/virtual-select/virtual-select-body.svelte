<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { Popover as PopoverPrimitive } from "bits-ui";

	type Props = {
		children: Snippet;
		class?: string;
	} & PopoverPrimitive.ContentProps

	const { children, class: _class }: Props = $props();
</script>

<Popover.Content class={cn('p-0 outline-none w-[200px]', _class)} align="start">
	{@render children()}
</Popover.Content>
