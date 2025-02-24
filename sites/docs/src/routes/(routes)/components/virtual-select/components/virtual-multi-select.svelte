<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { VSItem } from '../virtual-select/types';
	import * as VirtualSelect from '../../../../../lib/components/tzezars-enhancements/virtual-select/index.ts';
	import type { VSMSelection } from '$lib/components/tzezars-enhancements/virtual-select/types.ts';

	type Props = {
		items: VSItem[];
	};

	let { items }: Props = $props();

	let selection: VSMSelection = $state({ current: [] });
</script>

<VirtualSelect.Root bind:selection {items} multiple={true}>
	<VirtualSelect.Trigger class="">
		<Button variant="outline" class="flex h-full max-w-[200px] flex-wrap  ">
			{#if selection.current !== null && selection.current.length > 0}
				{#each selection.current as item}
					<span>{item.label}</span>
				{/each}
			{:else}
				<span class="text-muted-foreground">Select</span>
			{/if}
		</Button>
	</VirtualSelect.Trigger>
	<VirtualSelect.Body>
		<VirtualSelect.Wrapper>
			<VirtualSelect.Content>
				{#snippet children(index, item)}
					<VirtualSelect.Item {item} {index}>
						{item.label}
					</VirtualSelect.Item>
				{/snippet}
			</VirtualSelect.Content>
		</VirtualSelect.Wrapper>
	</VirtualSelect.Body>
</VirtualSelect.Root>
