import {Reducer} from "react";
import ActionTypesEnum from "../../actions/ActionTypes.enum";

const initialState = {
  'board-0': {
    id: 'board-0',
    lists: ['list-0'],
    title: 'test board'
  }
}

const boardsReducer: Reducer<any, any> = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypesEnum.ADD_LIST: {
      const {boardID, id} = action.payload;
      const board = state[boardID];
      const boardListID = `list-${id}`;
      board.lists = [...board.lists, boardListID];

      return {...state, [boardID]: board}
    }

    case ActionTypesEnum.DELETE_LIST: {
      const {listID, boardID} = action.payload;
      const board = state[boardID];
      board.lists = board.lists.filter((id: any) => id !== listID);

      return {...state, [boardID]: board};
    }

    case ActionTypesEnum.DRAG_HAPPENED: {
      const {droppableIndexStart, droppableIndexEnd, boardID, type} = action.payload;
      const board = state[boardID];
      const lists = board.lists;

      if (type === 'list') {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, pulledOutList);

        return {...state, [boardID]: board}
      }
      return state
    }

    case ActionTypesEnum.ADD_BOARD: {
      const {title, id} = action.payload;
      const newID = `board-${id}`
      const newBoard = {id: newID, title, lists: []};

      return {...state, [newID]: newBoard}
    }

    default:
      return state
  }
}

export default boardsReducer
