<script lang="ts">
	import * as TransferList from '$lib/components/tzezars-enhancements/transfer-list';

	type Item = {
		id: number;
		name: string;
	};

	let items: Item[] = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' },
		{ id: 4, name: 'Item 4' },
		{ id: 5, name: 'Item 5' },
		{ id: 6, name: 'Item 6' },
		{ id: 7, name: 'Item 7' },
		{ id: 8, name: 'Item 8' }
	];

	let core = new TransferList.Core<Item>({
		initialSource: items,
		filterPredicate: (item, search) => item.name.toLowerCase().includes(search.toLowerCase())
	});
</script>

<TransferList.Root direction={'vertical'}>
	<TransferList.Container>
		<TransferList.Title title="Source items" />
		<TransferList.Toolbar variant="source" {core} />
		<TransferList.Body>
			{#each core.filteredSource as row (row)}
				<TransferList.Item side={'source'} {row} {core}>
					{row.name}
				</TransferList.Item>
			{/each}
		</TransferList.Body>
	</TransferList.Container>
	<TransferList.Container>
		<TransferList.Title title="Target items" />
		<TransferList.Toolbar variant="target" {core}></TransferList.Toolbar>
		<TransferList.Body>
			{#each core.filteredTarget as row (row)}
				<TransferList.Item side={'target'} {row} {core}>
					{row.name}
				</TransferList.Item>
			{/each}
		</TransferList.Body>
	</TransferList.Container>
</TransferList.Root>
