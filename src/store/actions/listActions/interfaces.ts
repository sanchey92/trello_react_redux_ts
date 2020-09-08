import ActionTypesEnum from "../ActionTypes.enum";

export interface IEditListTitle {
  type: ActionTypesEnum.EDIT_LIST_TITLE,
  payload: {
    listId: string,
    newTitle: string
  }
}
