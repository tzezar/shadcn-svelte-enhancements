


export type VSItem = {
    [key: string]: string
} & { value: string, label: string }


export type VirtualMultiSelectContext = {
    items: VSItem[],
    listContainer: HTMLElement | null,
    handleKeydown: (event: KeyboardEvent) => void,
    selectedValues: SelectedValues,
    highlightedItemIndex: HighlightedItemIndex,
    highlightedItemScrollPosition: { current: number },
    handleSelect: (item: VSItem, index: number) => void
}

export type HighlightedItemIndex = {
    current: number
}
export type SelectedItemsIndex = {
    current: number | string | null
}

export type SelectedValues = {
    current: VSItem[]
}