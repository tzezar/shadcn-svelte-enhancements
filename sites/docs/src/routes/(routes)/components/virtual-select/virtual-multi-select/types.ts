


export type VSItem = {
    [key: string]: string
} & { value: string, label: string }


export type VirtualMultiSelectContext = {
    items: VSItem[],
    listContainer: HTMLElement | null,
    handleKeydown: (event: KeyboardEvent) => void,
    selectedItemsIndex: { current: number | null },
    selectedValues: SelectedValues,
    highlightedItemIndex: HighlightedItemIndex,
    highlightedItemScrollPosition: { current: number },
    handleSelect: (item: VSItem, index: number) => void
}

export type HighlightedItemIndex = {
    current: number
}

export type SelectedValues = {
    current: VSItem[]
}