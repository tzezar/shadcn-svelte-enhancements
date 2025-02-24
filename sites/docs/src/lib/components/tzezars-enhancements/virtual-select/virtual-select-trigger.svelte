<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/utils';

	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	const { children, class: _class }: Props = $props();
</script>

<Popover.Trigger class={cn('', _class)}>
	{@render children()}
</Popover.Trigger>
