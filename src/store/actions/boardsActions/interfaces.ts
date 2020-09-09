import ActionTypesEnum from "../ActionTypes.enum";

export interface IAddBoard {
  type: ActionTypesEnum.ADD_BOARD,
  payload: {
    id: string,
    title: string
  }
}

export interface ISetActiveBoard {
  type: ActionTypesEnum.SET_ACTIVE_BOARD,
  payload: {
    id: string
  }
}

