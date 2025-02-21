
import exampleRaw from './example.svelte?raw'
import example from './example.svelte'

import exampleBarRaw from './example-bar.svelte?raw'
import exampleBar from './example-bar.svelte'

import interactiveDemoRaw from './interactive-demo.svelte?raw'
import interactiveDemo from './interactive-demo.svelte'



const usageCode = `<script lang="ts">
	import { ScrollProgressIndicator } from '$lib/components/tzezars-enhancements/scroll-progress-indicator';
</script>

<ScrollProgressIndicator
	// classes={{}}
	config={{
		type: 'circle',
		vertical: 'bottom',
		horizontal: 'right',
		showPercentage: true
	}}
>
	// Place your content here
</ScrollProgressIndicator>`



const examples = {
    example: {
        code: exampleRaw,
        component: example
    },
    exampleBar: {
        code: exampleBarRaw,
        component: exampleBar
    },
    interactiveDemo: {
        code: interactiveDemoRaw,
        component: interactiveDemo
    },
    usage: {
        code: usageCode
    }
}

export { examples }