import VSMRaw from './virtual-multi-select.svelte?raw'
import VSRaw from './virtual-select.svelte?raw'
import VS from './virtual-select.svelte'
import VSM from './virtual-multi-select.svelte'
import { usageCodeSample } from './code-samples/usage'


const examples = {
	components: {
		vs: VS,
		vsm: VSM
	},
	code: {
		vs: VSRaw,
		vsm: VSMRaw,
		samples: {
			usage: usageCodeSample
		}

	}
}

export { examples }