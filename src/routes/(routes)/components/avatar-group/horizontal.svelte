<script>
	import * as AvatarGroup from '$lib/components/tzezars-enhancements/avatar-group';
	import { data } from './data';
</script>

<AvatarGroup.Root orientation="horizontal">
	{#each data.slice(0, 4) as member}
		<AvatarGroup.Member>
			<AvatarGroup.Image />
			<AvatarGroup.Fallback>
				<img src={member?.image} alt={member.name} class="aspect-square size-10 object-cover" />
			</AvatarGroup.Fallback>
		</AvatarGroup.Member>
	{/each}
	<AvatarGroup.More count={data.length - 4} />
</AvatarGroup.Root>
