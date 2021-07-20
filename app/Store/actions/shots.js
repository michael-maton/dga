export const EDIT_LIST = "EDIT_LIST";
export const EDIT_PATTERN = "EDIT_PATTERN";

export const editList = (newList) => (
    {
        type: EDIT_LIST,
        payload: newList,
    }
)
export const editPattern = (newPattern) => (
    {
        type: EDIT_PATTERN,
        payload: newPattern,
    }
)