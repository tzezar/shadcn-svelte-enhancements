import exampleRaw from './example.svelte?raw'
import example from './example.svelte'

const usageCode = `<script>
	import { CopyButton } from "$lib/components/tzezars-enhancements/copy-button";
</script>

<CopyButton textToCopy=''/>`


const examples = {
    example: {
        code: exampleRaw,
        component: example
    },
    usage: {
        code: usageCode
    }
}

export { examples }