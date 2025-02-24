export type HighlightedItemIndex = {
    current: number;
};

export type SelectedItemsIndex = {
    current: number | string | null;
};

export type VSItem = {
    [key: string]: string;
} & { value: string; label: string };

export type VSSelection = {
    current: VSItem | null;
};

export type VSMSelection = {
    current: VSItem[] | null;
};

export type VirtualSelectContext = {
    multiple: boolean; // Determines if it's single or multiple selection
    items: VSItem[];
    selection: VSSelection | VSMSelection; // Supports both single and multiple selection
    listContainer: HTMLElement | null;
    handleKeydown: (event: KeyboardEvent) => void;
    highlightedItemIndex: HighlightedItemIndex;
    highlightedItemScrollPosition: { current: number };
    handleSelect: (item: VSItem, index: number) => void;
};


export type VirtualSelectSelection = VSSelection | VSMSelection
