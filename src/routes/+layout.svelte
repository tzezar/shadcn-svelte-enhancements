
<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	let { children } = $props();

</script>

<ModeWatcher />

{@render children?.()}
