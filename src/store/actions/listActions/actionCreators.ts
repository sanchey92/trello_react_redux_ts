import {Dispatch, ActionCreator, Action} from "redux";
import {uuid} from 'uuidv4';
import {ThunkAction} from "redux-thunk";
import ActionTypesEnum from "../ActionTypes.enum";
import {IEditListTitle} from "./interfaces";

const addList = (title: string) => {
  return (dispatch: Dispatch, getState: Function) => {
    const boardId = getState().activeBoard;
    const id = uuid();
    dispatch({
      type: ActionTypesEnum.ADD_LIST,
      payload: {title, boardId, id}
    })
  }
}

const editListTitle = (listId: string, newTitle: string): IEditListTitle => {
  return {
    type: ActionTypesEnum.EDIT_LIST_TITLE,
    payload: {listId, newTitle}
  }
}

export {
  addList,
  editListTitle
}
