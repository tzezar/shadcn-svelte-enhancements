export let virtualSelectKey = Symbol('virtual-multi-select')


import VirtualMultiSelectBody from "./virtual-multi-select-body.svelte"
import VirtualMultiSelectContent from "./virtual-multi-select-content.svelte"
import VirtualMultiSelectContentWrapper from "./virtual-multi-select-content-wrapper.svelte"
import VirtualMultiSelectItem from "./virtual-multi-select-item.svelte"
import VirtualMultiSelectRoot from "./virtual-multi-select-root.svelte"
import VirtualMultiSelectTrigger from "./virtual-multi-select-trigger.svelte"


export {
    VirtualMultiSelectBody as Body,
    VirtualMultiSelectContent as Content,
    VirtualMultiSelectContentWrapper as Wrapper,
    VirtualMultiSelectItem as Item,
    VirtualMultiSelectRoot as Root,
    VirtualMultiSelectTrigger as Trigger
}

