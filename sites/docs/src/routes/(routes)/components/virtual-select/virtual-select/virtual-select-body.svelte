<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Popover.Content class="p-0 outline-none" align="start">
	{@render children()}
</Popover.Content>
