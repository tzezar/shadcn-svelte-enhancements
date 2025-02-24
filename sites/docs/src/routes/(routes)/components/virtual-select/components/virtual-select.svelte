<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { tick } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Virtualization from '../virtualization/virtualization.svelte';
	import type { VSItem } from '../virtual-select/types';
	import VirtualSelectItem from '../virtual-select/virtual-select-item.svelte';
	import VirtualSelectContent from '../virtual-select/virtual-select-content.svelte';
	import VirtualSelectContentWrapper from '../virtual-select/virtual-select-content-wrapper.svelte';
	import VirtualSelectBody from '../virtual-select/virtual-select-body.svelte';
	import VirtualSelectTrigger from '../virtual-select/virtual-select-trigger.svelte';
	import VirtualSelectRoot from '../virtual-select/virtual-select-root.svelte';
	import Parent from './parent.svelte';
	import Child from './child.svelte';
	import Grandchild from './grandchild.svelte';

	type Props = {
		items: VSItem[];
	};

	let { items }: Props = $props();

	async function onOpenChange(isOpen: boolean) {
		if (!isOpen) return;
		await tick();
		// scrollToScrollIndex();
	}

	let selectedValue: VSItem | null = $state(null);
</script>

<VirtualSelectRoot bind:selectedValue {items}>
	<VirtualSelectTrigger>
		<Button variant="outline">{selectedValue?.label ?? 'Placeholder'}</Button>
	</VirtualSelectTrigger>
	<VirtualSelectBody>
		<VirtualSelectContentWrapper>
			<VirtualSelectContent>
				{#snippet children(index, item)}
					<VirtualSelectItem {item} {index}>
						{item.label}
					</VirtualSelectItem>
				{/snippet}
			</VirtualSelectContent>
		</VirtualSelectContentWrapper>
	</VirtualSelectBody>
</VirtualSelectRoot>
