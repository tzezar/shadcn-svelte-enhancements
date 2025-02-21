
import linkExampleRaw from './link-example.svelte?raw'
import linkExample from './link-example.svelte'

import linkUsage from './link-usage.svelte'
import linkUsageRaw from './link-usage.svelte?raw'

const examples = {
    link: {
        code: linkExampleRaw,
        component: linkExample
    },
    linkUsage: {
        code: linkUsageRaw,
        component: linkUsage
    }
}

export { examples }