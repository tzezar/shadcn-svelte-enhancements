export type HighlightedItemIndex = {
    current: number;
};

export type SelectedItemsIndex = {
    current: number | string | null;
};

export type VSItem = {
    value: string;
    label: string;
    [key: string]: string;
};

export type VSSelection = {
    current: VSItem | null;
};

export type VSMSelection = {
    current: VSItem[] | null;
};

export type VirtualSelectContext = {
    multiple: boolean;
    items: VSItem[];
    selection: VSSelection | VSMSelection;
    listContainer: HTMLElement | null;
    handleKeydown: (event: KeyboardEvent) => void;
    highlightedItemIndex: HighlightedItemIndex;
    highlightedItemScrollPosition: { current: number };
    handleSelect: (item: VSItem, index: number) => void;
};

// This type is only for internal use - do not use it for component props
export type VirtualSelectSelection = VSSelection | VSMSelection;