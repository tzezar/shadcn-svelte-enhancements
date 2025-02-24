<script lang="ts">
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { tick } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Virtualization from '../../../../../lib/components/tzezars-enhancements/virtualization/virtualization.svelte';
	import type { VSItem } from '../virtual-select/types';
	import VirtualMultiSelectItem from '../virtual-multi-select/virtual-multi-select-item.svelte';
	import VirtualMultiSelectRoot from '../virtual-multi-select/virtual-multi-select-root.svelte';
	import VirtualMultiSelectTrigger from '../virtual-multi-select/virtual-multi-select-trigger.svelte';
	import VirtualMultiSelectBody from '../virtual-multi-select/virtual-multi-select-body.svelte';
	import VirtualMultiSelectContentWrapper from '../virtual-multi-select/virtual-multi-select-content-wrapper.svelte';
	import VirtualMultiSelectContent from '../virtual-multi-select/virtual-multi-select-content.svelte';
	import type { SelectedValues } from '../../../../../lib/components/tzezars-enhancements/virtual-select/types';

	type Props = {
		items: VSItem[];
	};

	let { items }: Props = $props();

	let selectedValues: SelectedValues = $state({ current: [] });
</script>

<VirtualMultiSelectRoot {items} bind:selectedValues>
	<VirtualMultiSelectTrigger>
		<Button variant="outline" class="h-full flex max-w-[200px] flex-wrap  ">
			{#if selectedValues.current.length > 0}
				{#each selectedValues.current as item}
					<span>{item.label}</span>
				{/each}
			{:else}
				'Placeholder'
			{/if}
		</Button>
	</VirtualMultiSelectTrigger>

	<VirtualMultiSelectBody>
		<VirtualMultiSelectContentWrapper>
			<VirtualMultiSelectContent>
				{#snippet children(index, item)}
					<VirtualMultiSelectItem {item} {index}>
						{item.label}
					</VirtualMultiSelectItem>
				{/snippet}
			</VirtualMultiSelectContent>
		</VirtualMultiSelectContentWrapper>
	</VirtualMultiSelectBody>
</VirtualMultiSelectRoot>
