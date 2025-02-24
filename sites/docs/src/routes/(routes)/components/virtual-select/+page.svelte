<script lang="ts">
	import VirtualMultiSelect from './components/virtual-multi-select.svelte';
	import VirtualSelect from './components/virtual-select.svelte';
	import type { VSItem } from './virtual-select/types';

	const items: VSItem[] = Array.from({ length: 100000 }, (_, i) => ({
		value: String(i),
		label: `Fruit ${i + 1}`
	}));
</script>

<div class="flex h-full items-center justify-center">
	<VirtualSelect {items} />
</div>
