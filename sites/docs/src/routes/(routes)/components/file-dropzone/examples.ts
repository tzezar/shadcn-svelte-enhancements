import exampleRaw from './example.svelte?raw'
import example from './example.svelte'

const examples = {
    example: {
        code: exampleRaw,
        component: example
    }
}

export { examples }