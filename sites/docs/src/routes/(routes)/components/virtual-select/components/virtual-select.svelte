<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as VirtualSelect from '../virtual-select/index.ts';
	import type { VSItem } from '../virtual-select/types';

	type Props = {
		items: VSItem[];
	};

	let { items }: Props = $props();

	let selectedValue: VSItem | null = $state(null);
</script>

<VirtualSelect.Root bind:selectedValue {items}>
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
		<span class=" w-full text-left">{selectedValue?.label ?? 'Placeholder'}</span>
	</Button>
{/snippet}
