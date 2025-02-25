import VSMRaw from './virtual-multi-select.svelte?raw'
import VSRaw from './virtual-select.svelte?raw'
import VS from './virtual-select.svelte'
import VSM from './virtual-multi-select.svelte'

const examples = {
	components: {
		vs: VS,
		vsm: VSM
	},
	code: {
		vs: VSRaw,
		vsm: VSMRaw
	}
}

export { examples }