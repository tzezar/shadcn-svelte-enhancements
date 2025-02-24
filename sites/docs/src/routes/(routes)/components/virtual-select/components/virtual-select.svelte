<script lang="ts">
	import type { VSSelection } from '$lib/components/tzezars-enhancements/virtual-select/types.ts';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as VirtualSelect from '$lib/components/tzezars-enhancements/virtual-select/index.ts';
	import type { VSItem } from '../virtual-select/types';

	type Props = {
		items: VSItem[];
	};

	let { items }: Props = $props();

	let selection: VSSelection = $state({ current: null });
</script>

<VirtualSelect.Root bind:selection {items} multiple={false}>
	<VirtualSelect.Trigger class="">
		{@render Trigger()}
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

{#snippet Trigger()}
	<Button variant="outline" class="min-w-[200px]">
		<span class="w-full text-left">
			{#if selection.current === null}
				<span class="text-muted-foreground">Select</span>
			{:else}
				{selection.current.label}
			{/if}
		</span></Button
	>
{/snippet}
