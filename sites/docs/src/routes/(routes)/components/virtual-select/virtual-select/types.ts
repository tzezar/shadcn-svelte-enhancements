


export type VSItem = {
    [key: string]: string
} & { value: string, label: string }


export type VirtualSelectContext = {
    items: VSItem[],
    listContainer: HTMLElement | null,
    handleKeydown: (event: KeyboardEvent) => void,
    selectedItemIndex: { current: number | null },
    highlightedItemIndex: { current: number },
    highlightedItemScrollPosition: { current: number },
    handleSelect: (item: VSItem, index: number) => void
}