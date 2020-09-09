import {IAddBoard, ISetActiveBoard} from "./interfaces";
import ActionTypesEnum from "../ActionTypes.enum";
import {uuid} from 'uuidv4'

const addBoard = (title: string): IAddBoard => {
  const id = uuid();
  return {
    type: ActionTypesEnum.ADD_BOARD,
    payload: {id, title}
  }
}

const setActiveBoard = (id: string): ISetActiveBoard => {
  return {
    type: ActionTypesEnum.SET_ACTIVE_BOARD,
    payload: {id}
  }
}

export {
  addBoard,
  setActiveBoard
}
