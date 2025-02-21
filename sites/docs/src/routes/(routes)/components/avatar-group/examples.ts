
import horizontalRaw from './horizontal.svelte?raw'
import Horizontal from './horizontal.svelte'

import verticalRaw from './vertical.svelte?raw'
import Vertical from './vertical.svelte'

const codeExample = `<script>
	import * as AvatarGroup from '$lib/components/tzezars-enhancements/avatar-group';
</script>

<AvatarGroup.Root orientation="vertical">
    <AvatarGroup.Member>
        <AvatarGroup.Image />
        <AvatarGroup.Fallback>
            <img src="" />
        </AvatarGroup.Fallback>
    </AvatarGroup.Member>
<AvatarGroup.More count={1} />
</AvatarGroup.Root>`


const examples = {
    horizontal: {
        code: horizontalRaw,
        component: Horizontal
    },
    vertical: {
        code: verticalRaw,
        component: Vertical
    },
    codeExample: {
        code: codeExample
    }
}

export { examples }