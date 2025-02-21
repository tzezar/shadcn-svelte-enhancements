
import horizontalRaw from './horizontal.svelte?raw'
import verticalRaw from './vertical.svelte?raw'
import horizontal from './horizontal.svelte'
import vertical from './vertical.svelte'

const usageCode = `<script lang="ts">
	import * as TransferList from '$lib/components/tzezars-enhancements/transfer-list';
	
	let core = new TransferList.Core<Item>({
		initialSource, initialTarget,
		filterPredicate: (item, search) => {})
	});
</script>

<TransferList.Root direction=''>
	<TransferList.Container>
		<TransferList.Title title="" />
		<TransferList.Toolbar variant="source" {core} />
		<TransferList.Body>
			{#each core.filteredSource as row (row)}
				<TransferList.Item side="source" {row} {core}>

				</TransferList.Item>
			{/each}
		</TransferList.Body>
	</TransferList.Container>
	<TransferList.Container>
		<TransferList.Title title="" />
		<TransferList.Toolbar variant="target" {core} />
		<TransferList.Body>
			{#each core.filteredTarget as row (row)}
				<TransferList.Item side="target" {row} {core}>
					
				</TransferList.Item>
			{/each}
		</TransferList.Body>
	</TransferList.Container>
</TransferList.Root>`


const examples = {
    horizontal: {
        code: horizontalRaw,
        component: horizontal
    },
    vertical: {
        code: verticalRaw,
        component: vertical
    },
    usage: {
        code: usageCode
    }
}

export { examples }