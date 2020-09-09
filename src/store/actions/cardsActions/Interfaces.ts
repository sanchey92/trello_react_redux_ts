import ActionTypesEnum from "../ActionTypes.enum";

export interface IAddCard {
  type: ActionTypesEnum.ADD_CARD,
  payload: {
    id: string,
    listID: string,
    text: string
  }
}

export interface IEditCard {
  type: ActionTypesEnum.EDIT_CARD,
  payload: {
    id: string,
    listID: string,
    newText: string
  }
}

export interface IDeleteCard {
  type: ActionTypesEnum.DELETE_CARD,
  payload: {
    id: string,
    listID: string
  }
}
