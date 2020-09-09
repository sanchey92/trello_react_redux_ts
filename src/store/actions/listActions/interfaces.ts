import ActionTypesEnum from "../ActionTypes.enum";

export interface IEditListTitle {
  type: ActionTypesEnum.EDIT_LIST_TITLE,
  payload: {
    listID: string,
    newTitle: string
  }
}


