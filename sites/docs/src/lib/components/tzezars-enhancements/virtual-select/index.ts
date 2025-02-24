export let virtualSelectKey = Symbol('virtual-select')

import VirtualSelectBody from "./virtual-select-body.svelte"
import VirtualSelectContent from "./virtual-select-content.svelte"
import VirtualSelectContentWrapper from "./virtual-select-content-wrapper.svelte"
import VirtualSelectItem from "./virtual-select-item.svelte"
import VirtualSelectRoot from "./virtual-select-root.svelte"
import VirtualSelectTrigger from "./virtual-select-trigger.svelte"

export {
    VirtualSelectBody as Body,
    VirtualSelectContent as Content,
    VirtualSelectContentWrapper as Wrapper,
    VirtualSelectItem as Item,
    VirtualSelectRoot as Root,
    VirtualSelectTrigger as Trigger
}

