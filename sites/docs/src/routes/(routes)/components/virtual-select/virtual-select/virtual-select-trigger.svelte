<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';

	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Popover.Trigger>
	{@render children()}
</Popover.Trigger>
