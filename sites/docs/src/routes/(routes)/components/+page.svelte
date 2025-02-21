<script lang="ts">
	import { navigationData } from '../_layout/navigation-data';
	let components = navigationData.navMain;
</script>

<div class="markdown !mx-0 pt-2">
	{#each components as item}
		<h3>
			<a href={item.url}>
				{item.title}
			</a>
		</h3>
	{/each}
</div>
