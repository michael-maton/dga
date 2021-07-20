export const EDIT_LIST = "EDIT_LIST";

export const editList = (newList) => ({
  type: EDIT_LIST,
  payload: newList,
});
