export const usageCodeSample = `<script lang="ts">
	import * as VirtualSelect from '$lib/components/tzezars-enhancements/virtual-select/index.ts';
</script>

<VirtualSelect.Root {items} multiple={false}>
	<VirtualSelect.Trigger>
		// trigger placeholder
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
</VirtualSelect.Root>`