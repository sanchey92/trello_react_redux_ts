import {Action} from "redux";
import {uuid} from 'uuidv4';
import ActionTypesEnum from "../ActionTypes.enum";
import {IEditListTitle} from "./interfaces";
import {ThunkAction} from "redux-thunk";

const addList = (title: string): ThunkAction<void, any, any, Action> => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard.id;
    const id = uuid();
    dispatch({
      type: ActionTypesEnum.ADD_LIST,
      payload: {title, boardID, id}
    })
  }
}

const editListTitle = (listID: string, newTitle: string): IEditListTitle => {
  return {
    type: ActionTypesEnum.EDIT_LIST_TITLE,
    payload: {listID, newTitle}
  }
}

const deleteList = (listID: string): ThunkAction<void, any, any, Action> => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard.id;
    dispatch({
      type: ActionTypesEnum.DELETE_LIST,
      payload: {listID, boardID}
    })
  }
}

const filterDraggable = (
  droppableIdStart: string,
  droppableIdEnd: string,
  droppableIndexStart: number,
  droppableIndexEnd: number,
  draggableId: string,
  type: string
): ThunkAction<void, any, any, Action> => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard.id;
    dispatch({
      type: ActionTypesEnum.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
        boardID
      }
    })
  }
}

export {
  addList,
  editListTitle,
  deleteList,
  filterDraggable
}
